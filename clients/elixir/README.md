# DiiaClient

OpenAPI specification of the Diia (ДП «Дія») REST API covering:  * **Sharing** — branches, offers, offline (barcode) and online (deeplink) document sharing,   request statuses; * **Diia.Sign** — signing of file hashes (&#x60;hashedFilesSigning&#x60;) and authorization (&#x60;auth&#x60;),   initiated via deeplinks.  The encrypted package that the Diia mobile app delivers to the partner is described in a separate specification — &#x60;diia-partner-receiver.yaml&#x60; (including the decrypted metadata structure of every document type).  Environments (all individual acquirer/branch data differs between them):  * &#x60;https://api2.diia.gov.ua&#x60; — production (real Diia app and documents); * &#x60;https://api2s.diia.gov.ua&#x60; — sandbox (test Diia app with the mock user «Дія Надія»).  Authorization is not OAuth 2.0: the partner exchanges its static &#x60;acquirer_token&#x60; for a session token (&#x60;getSessionToken&#x60;) and passes it as a bearer token in every other call.  Source documents: &#x60;diia_docs/diia_sharing.md&#x60; (updated 05.08.26) and &#x60;diia_docs/diia_sign.md&#x60; (updated 03.09.26).

## Building

To install the required dependencies and to build the elixir project, run:

```console
mix local.hex --force
mix do deps.get, compile
```

## Installation

If [available in Hex][], the package can be installed by adding `diia_client` to
your list of dependencies in `mix.exs`:

```elixir
def deps do
  [{:diia_client, "~> 1.0.0"}]
end
```

Documentation can be generated with [ExDoc][] and published on [HexDocs][]. Once published, the docs can be found at
[https://hexdocs.pm/diia_client][docs].

## Configuration

You can override the URL of your server (e.g. if you have a separate development and production server in your
configuration files).

```elixir
config :diia_client, base_url: "https://api2.diia.gov.ua"
```

Multiple clients for the same API with different URLs can be created passing different `base_url`s when calling
`DiiaClient.Connection.new/1`:

```elixir
client = DiiaClient.Connection.new(base_url: "https://api2.diia.gov.ua")
```

[exdoc]: https://github.com/elixir-lang/ex_doc
[hexdocs]: https://hexdocs.pm
[available in hex]: https://hex.pm/docs/publish
[docs]: https://hexdocs.pm/diia_client
