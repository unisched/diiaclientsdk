defmodule DiiaClient.Mixfile do
  use Mix.Project

  def project do
    [
      app: :diia_client,
      version: "0.1.0",
      elixir: "~> 1.18",
      build_embedded: Mix.env() == :prod,
      start_permanent: Mix.env() == :prod,
      package: package(),
      description: """
      OpenAPI specification of the Diia (ДП «Дія») REST API covering:  * **Sharing** — branches, offers, offline (barcode) and online (deeplink) document sharing,   request statuses; * **Diia.Sign** — signing of file hashes (&#x60;hashedFilesSigning&#x60;) and authorization (&#x60;auth&#x60;),   initiated via deeplinks.  The encrypted package that the Diia mobile app delivers to the partner is described in a separate specification — &#x60;diia-partner-receiver.yaml&#x60; (including the decrypted metadata structure of every document type).  Environments (all individual acquirer/branch data differs between them):  * &#x60;https://api2.diia.gov.ua&#x60; — production (real Diia app and documents); * &#x60;https://api2s.diia.gov.ua&#x60; — sandbox (test Diia app with the mock user «Дія Надія»).  Authorization is not OAuth 2.0: the partner exchanges its static &#x60;acquirer_token&#x60; for a session token (&#x60;getSessionToken&#x60;) and passes it as a bearer token in every other call.  Source documents: &#x60;diia_docs/diia_sharing.md&#x60; (updated 05.08.26) and &#x60;diia_docs/diia_sign.md&#x60; (updated 03.09.26).
      """,
      deps: deps()
    ]
  end

  # Configuration for the OTP application
  #
  # Type "mix help compile.app" for more information
  def application do
    # Specify extra applications you'll use from Erlang/Elixir
    [extra_applications: [:logger]]
  end

  # Dependencies can be Hex packages:
  #
  #   {:my_dep, "~> 0.3.0"}
  #
  # Or git/path repositories:
  #
  #   {:my_dep, git: "https://github.com/elixir-lang/my_dep.git", tag: "0.3.0"}
  #
  # Type "mix help deps" for more examples and options
  defp deps do
    [
      {:tesla, "~> 1.14"},
      {:ex_doc, "~> 0.37.3", only: :dev, runtime: false},
      {:dialyxir, "~> 1.4", only: [:dev, :test], runtime: false}
    ]
  end

   defp package do
      [
        name: "diia_client",
        files: ~w(.formatter.exs config lib mix.exs README* LICENSE*),
      ]
  end
end
