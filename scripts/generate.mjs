#!/usr/bin/env node
// Generates Rust (reqwest), Elixir (Tesla) and C# (RestSharp) clients from the Diia API spec.
//
// Modes:
//   node scripts/generate.mjs           regenerate clients/ in place
//   node scripts/generate.mjs --check   fail if clients/ differs from fresh generation
//   node scripts/generate.mjs --watch   regenerate on changes in openapi/ or package.json
//
// The OpenAPI Generator version is pinned in package.json: config.openapiGeneratorVersion.
// The generated clients' version is taken from package.json: version.

import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  watch,
  writeFileSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const packageJsonPath = path.join(root, 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
const clientVersion = packageJson.version;
const generatorVersion = packageJson.config?.openapiGeneratorVersion;
const specSource = path.join(root, 'openapi', 'diia-api.yaml');
const clientsDir = path.join(root, 'clients');
const workDir = path.join(root, 'dist', '.openapi-generator');
const generationSpec = path.join(workDir, 'diia-api.json');
const env = { ...process.env, OPENAPI_GENERATOR_VERSION: generatorVersion };

if (!generatorVersion) {
  throw new Error('config.openapiGeneratorVersion is missing in package.json');
}

const flags = new Set(process.argv.slice(2));
const mode = flags.has('--check') ? 'check' : flags.has('--watch') ? 'watch' : 'generate';

/** Absolute path of a locally installed CLI binary. */
function bin(name) {
  const executable = process.platform === 'win32' ? `${name}.cmd` : name;
  return path.join(root, 'node_modules', '.bin', executable);
}

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    env,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`${path.basename(command)} exited with code ${result.status}`);
  }
}

const targets = [
  {
    name: 'rust',
    description: 'Rust (reqwest)',
    properties: [
      'library=reqwest',
      'packageName=diia_client',
      `packageVersion=${clientVersion}`,
      'hideGenerationTimestamp=true',
    ],
  },
  {
    name: 'elixir',
    description: 'Elixir (Tesla)',
    properties: [
      'library=tesla',
      'packageName=diia_client',
      'invokerPackage=DiiaClient',
      'hideGenerationTimestamp=true',
    ],
  },
  {
    name: 'typescript',
    description: 'TypeScript (fetch)',
    properties: [
      'npmName=@unisched/diiaclientsdk',
      `npmVersion=${clientVersion}`,
      'supportsES6=true',
    ],
  },
  {
    name: 'csharp',
    description: 'C# (RestSharp)',
    properties: [
      'library=restsharp',
      'packageName=Diia.Client',
      `packageVersion=${clientVersion}`,
      'netCoreProjectFile=true',
      'targetFramework=net10.0',
      'hideGenerationTimestamp=true',
    ],
  },
];

/** Bundles the modular spec and stamps it with the package.json version. */
function prepareGenerationSpec() {
  mkdirSync(workDir, { recursive: true });
  syncWrapperConfig();
  run(bin('redocly'), ['bundle', specSource, '-o', generationSpec]);

  const spec = JSON.parse(readFileSync(generationSpec, 'utf8'));
  spec.info.version = clientVersion;
  writeFileSync(generationSpec, `${JSON.stringify(spec, null, 2)}\n`);
}

/** Keeps the generator CLI wrapper config in sync with package.json. */
function syncWrapperConfig() {
  writeFileSync(
    path.join(root, 'openapitools.json'),
    `${JSON.stringify(
      {
        $schema: './node_modules/@openapitools/openapi-generator-cli/config.schema.json',
        spaces: 2,
        'generator-cli': { version: generatorVersion },
      },
      null,
      2,
    )}\n`,
  );
}

/** Regenerates all clients under targetDir (one subdirectory per language). */
function generateInto(targetDir) {
  prepareGenerationSpec();
  for (const target of targets) {
    const output = path.join(targetDir, target.name);
    rmSync(output, { recursive: true, force: true });
    console.log(`\n▶ Generating ${target.description} → ${path.relative(root, output)}`);
    run(bin('openapi-generator-cli'), [
      'generate',
      '-i',
      generationSpec,
      '-o',
      output,
      '-g',
      target.name,
      '--additional-properties',
      target.properties.join(','),
    ]);
  }
  finalizeElixirVersion(targetDir);
  finalizeTypeScriptPackage(targetDir);
  finalizeCSharpProject(targetDir);
  finalizeCSharpSolution(targetDir);
}

/** Adds the GitHub Packages publish target to the generated TypeScript package. */
function finalizeTypeScriptPackage(targetDir) {
  const packageFile = path.join(targetDir, 'typescript', 'package.json');
  const packageJson = JSON.parse(readFileSync(packageFile, 'utf8'));
  packageJson.repository = {
    type: 'git',
    url: 'https://github.com/unisched/diiaclientsdk.git',
  };
  packageJson.publishConfig = {
    registry: 'https://npm.pkg.github.com',
    access: 'public',
  };
  // The generated basic-auth code uses Buffer, which needs Node typings to compile.
  packageJson.devDependencies = {
    ...packageJson.devDependencies,
    '@types/node': '^24.0.0',
  };
  writeFileSync(packageFile, `${JSON.stringify(packageJson, null, 2)}\n`);
}

/** Aligns NuGet package metadata with the repository and product. */
function finalizeCSharpProject(targetDir) {
  const projectFile = path.join(targetDir, 'csharp', 'src', 'Diia.Client', 'Diia.Client.csproj');
  let content = readFileSync(projectFile, 'utf8');
  const replacements = [
    [/<RepositoryUrl>[^<]*<\/RepositoryUrl>/, '<RepositoryUrl>https://github.com/unisched/diiaclientsdk</RepositoryUrl>'],
    [/<Authors>[^<]*<\/Authors>/, '<Authors>unisched</Authors>'],
    [/<Company>[^<]*<\/Company>/, '<Company>unisched</Company>'],
    [/<Description>[^<]*<\/Description>/, '<Description>C# client for the Diia REST API (sharing and Diia.Sign).</Description>'],
    [/\n\s*<PackageReleaseNotes>[^<]*<\/PackageReleaseNotes>/, ''],
  ];
  for (const [pattern, replacement] of replacements) {
    if (!pattern.test(content)) {
      throw new Error(`Could not update ${path.relative(root, projectFile)}: ${pattern} not found`);
    }
    content = content.replace(pattern, replacement);
  }
  writeFileSync(projectFile, content);
}

/**
 * The C# generator puts random GUIDs into the .sln file, which breaks reproducibility and
 * makes generation always look dirty. Replace them with GUIDs derived from project names.
 */
function finalizeCSharpSolution(targetDir) {
  const solutionFile = path.join(targetDir, 'csharp', 'Diia.Client.sln');
  let content = readFileSync(solutionFile, 'utf8');
  const projectPattern = /Project\("\{[^}]+\}"\) = "([^"]+)", "[^"]+", "\{([0-9A-Fa-f-]+)\}"/g;
  const replacements = new Map();

  for (const match of content.matchAll(projectPattern)) {
    const [, projectName, guid] = match;
    const stableGuid = deterministicGuid(projectName);
    if (guid.toUpperCase() !== stableGuid) {
      replacements.set(guid, stableGuid);
    }
  }

  for (const [oldGuid, newGuid] of replacements) {
    content = content.split(oldGuid).join(newGuid);
  }
  writeFileSync(solutionFile, content);
}

/** Stable UUID-formatted identifier derived from a project name. */
function deterministicGuid(name) {
  const hex = createHash('sha1').update(`diiaclientsdk:${name}`).digest('hex').slice(0, 32).toUpperCase();
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

/**
 * The Elixir generator has no packageVersion option (mix.exs is hard-coded to 1.0.0),
 * so the package.json version is stamped in after generation.
 */
function finalizeElixirVersion(targetDir) {
  const mixFile = path.join(targetDir, 'elixir', 'mix.exs');
  const source = readFileSync(mixFile, 'utf8');
  const versionPattern = /^(\s*version:\s*)"[^"]*"/m;
  if (!versionPattern.test(source)) {
    throw new Error('Could not find the project version in clients/elixir/mix.exs');
  }
  writeFileSync(mixFile, source.replace(versionPattern, `$1"${clientVersion}"`));
}

/** Directories that are local build/dependency artifacts, not generated sources. */
const ignoredDirectories = new Set([
  '.git',
  '.elixir_ls',
  '_build',
  'bin',
  'deps',
  'dist',
  'node_modules',
  'obj',
  'target',
]);

/** Files produced by local dependency resolution or the OS, not by the generator. */
const ignoredFiles = new Set([
  '.DS_Store',
  'Cargo.lock',
  'erl_crash.dump',
  'mix.lock',
  'package-lock.json',
  'packages.lock.json',
]);

function listFiles(dir, base = dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        listFiles(full, base, acc);
      }
    } else if (entry.isFile() && !ignoredFiles.has(entry.name)) {
      acc.push(path.relative(base, full));
    }
  }
  return acc;
}

function readIfFile(file) {
  return statSync(file).isFile() ? readFileSync(file) : null;
}

/** Compares committed (expected) and freshly generated (actual) client trees. */
function diffDirectories(expectedDir, actualDir) {
  const expectedFiles = new Set(listFiles(expectedDir));
  const actualFiles = new Set(listFiles(actualDir));
  const missing = [...expectedFiles].filter((file) => !actualFiles.has(file));
  const extra = [...actualFiles].filter((file) => !expectedFiles.has(file));
  const changed = [...expectedFiles].filter((file) => {
    if (!actualFiles.has(file)) return false;
    const expected = readIfFile(path.join(expectedDir, file));
    const actual = readIfFile(path.join(actualDir, file));
    return !expected.equals(actual);
  });
  return { missing, extra, changed };
}

function check() {
  const tempDir = path.join(root, 'dist', '.generate-check');
  rmSync(tempDir, { recursive: true, force: true });

  try {
    generateInto(tempDir);

    let stale = false;
    for (const target of targets) {
      const committed = path.join(clientsDir, target.name);
      const generated = path.join(tempDir, target.name);

      if (!existsSync(committed)) {
        console.error(`✗ clients/${target.name} is missing — run "npm run generate"`);
        stale = true;
        continue;
      }

      const { missing, extra, changed } = diffDirectories(committed, generated);
      if (missing.length === 0 && extra.length === 0 && changed.length === 0) {
        console.log(`✓ clients/${target.name} is up to date`);
        continue;
      }

      stale = true;
      console.error(`✗ clients/${target.name} is out of date:`);
      for (const file of changed) console.error(`    modified: ${file}`);
      for (const file of missing) console.error(`    missing:  ${file}`);
      for (const file of extra) console.error(`    extra:    ${file}`);
    }

    if (stale) {
      console.error('\nGenerated clients are stale. Run "npm run generate" and commit the result.');
      process.exitCode = 1;
    } else {
      console.log('\nAll generated clients are up to date.');
    }
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
}

function watchMode() {
  generateInto(clientsDir);
  console.log('\nWatching openapi/ and package.json — press Ctrl+C to stop.');

  let timer;
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      try {
        generateInto(clientsDir);
        console.log('\n✓ Clients regenerated. Watching for changes…');
      } catch (error) {
        console.error(`\n✗ Generation failed: ${error.message}`);
      }
    }, 400);
  };

  watch(path.join(root, 'openapi'), { recursive: true }, schedule);
  watch(packageJsonPath, schedule);
  process.on('SIGINT', () => process.exit(0));
}

try {
  if (mode === 'check') {
    check();
  } else if (mode === 'watch') {
    watchMode();
  } else {
    generateInto(clientsDir);
    console.log('\n✓ Clients generated in clients/.');
  }
} catch (error) {
  console.error(`\n✗ ${error.message}`);
  process.exit(1);
}
