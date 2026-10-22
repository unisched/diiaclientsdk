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
| C# | RestSharp | `clients/csharp` — namespace `Diia.Client`, .NET 10 |

```sh
npm run generate         # regenerate all clients in place
npm run generate:check   # fail if the committed clients are stale (CI)
npm run generate:watch   # regenerate on changes in openapi/ or package.json
```

The OpenAPI Generator version is pinned in `package.json`
(`config.openapiGeneratorVersion`, synced to `openapitools.json` by the script); the generated
clients' version is taken from `package.json` (`version`).

Sources: [`diia_docs/`](./diia_docs) (`diia_sharing.md`, `diia_sign.md`, `diia_metadata.md`).

