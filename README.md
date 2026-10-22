# diiaclientsdk
Diia client SDKS

## OpenAPI specifications

Modular OpenAPI 3.0.3 descriptions of the Diia REST API live in [`openapi/`](./openapi):

| Spec | Purpose |
| --- | --- |
| `openapi/diia-api.yaml` | Diia server API — session auth, branches, offers, offline (barcode) and online (deeplink) sharing, Diia.Sign, request statuses |
| `openapi/diia-partner-receiver.yaml` | Partner-side callback endpoints — where the Diia app delivers shared documents and Diia.Sign results (includes typed metadata schemas for all 21 document types) |

Bundle (self-contained files suitable for client codegen) and lint:

```sh
npm install
npm run bundle   # writes dist/diia-api.bundled.yaml and dist/diia-partner-receiver.bundled.yaml
npm run lint     # validates both specs
```

If your environment sets `NODE_ENV=production`, install dev dependencies with `npm install --include=dev`.

Preview the docs locally: `npm run preview`.

## Generated client SDKs

Client SDKs are generated with [OpenAPI Generator](https://openapi-generator.tech/) from the
bundled `diia-api` spec:

| Client | HTTP library | Location |
| --- | --- | --- |
| Rust | reqwest | `clients/rust` — crate `diia_client` |
| Elixir | Tesla | `clients/elixir` — app `diia_client`, module prefix `DiiaClient` |
| TypeScript | fetch | `clients/typescript` — package `@unisched/diiaclientsdk` |
| C# | RestSharp | `clients/csharp` — namespace `Diia.Client`, .NET 10 |

```sh
npm run generate         # regenerate all clients in place
npm run generate:check   # fail if the committed clients are stale (CI)
npm run generate:watch   # regenerate on changes in openapi/ or package.json
```

The OpenAPI Generator version is pinned in `package.json`
(`config.openapiGeneratorVersion`, synced to `openapitools.json` by the script); the generated
clients' version is taken from `package.json` (`version`).

### Publishing the TypeScript client

The generated npm package is published to GitHub Packages by
[`.github/workflows/publish-typescript.yml`](./.github/workflows/publish-typescript.yml):

- runs on pushes to `main` (and on manual dispatch);
- verifies the committed clients are up to date (`npm run generate:check`) and that the
  TypeScript client version matches `package.json`;
- publishes only when that version is not yet present in GitHub Packages, so re-runs and
  unrelated main pushes are no-ops.

Install it with:

```sh
npm install @unisched/diiaclientsdk --registry=https://npm.pkg.github.com
```

GitHub Packages requires authentication even for public packages — configure an `.npmrc` with
a token that has `read:packages`.

### Publishing the C# client

The generated NuGet package (`Diia.Client`) is published to GitHub Packages by
[`.github/workflows/publish-csharp.yml`](./.github/workflows/publish-csharp.yml), using the
same pattern: verify generated clients, match the csproj version to `package.json`, and push
only when that version is absent from the feed (`--skip-duplicate` as a safety net).

Add the feed to your `NuGet.config`:

```xml
<configuration>
  <packageSources>
    <add key="github" value="https://nuget.pkg.github.com/unisched/index.json" />
  </packageSources>
  <packageSourceCredentials>
    <github>
      <add key="Username" value="USERNAME" />
      <add key="ClearTextPassword" value="TOKEN" />
    </github>
  </packageSourceCredentials>
</configuration>
```

Then install the package:

```sh
dotnet add package Diia.Client
```

Sources: [`diia_docs/`](./diia_docs) (`diia_sharing.md`, `diia_sign.md`, `diia_metadata.md`).

