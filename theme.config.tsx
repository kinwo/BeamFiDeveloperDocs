import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"
import { BeamLogo } from "./ui/icon"

const config: DocsThemeConfig = {
  logo: BeamLogo,
  project: {
    link: "https://github.com/BeamFi/BeamFiProtocol"
  },
  chat: {
    link: "https://twitter.com/BeamFiApp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 248 204">
        <path
          fill="currentColor"
          d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"
        />
      </svg>
    )
  },
  docsRepositoryBase: "https://github.com/kinwo/BeamFiDeveloperDocs",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
        key="apple-touch-icon"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
        key="icon16"
      />
      <meta name="twitter:card" content="Beam" key="twittercard" />
      <meta name="twitter:site" content="@BeamFiApp" key="twittersite" />
      <meta name="twitter:creator" content="@BeamFiApp" key="twittercreator" />
      <meta
        property="og:url"
        content="http://developer.beamfi.app"
        key="ogurl"
      />
      <meta property="og:title" content="BeamFi Protocol Developer Docs" />
      <meta property="og:description" content="Micro Payment Solution" />
      <meta
        name="description"
        content="Micro Payment Solution with money streaming."
        key="desc"
      />
      <meta
        property="og:image"
        content="https://contentfly.app/assets/images/beamlogo-og.png"
        key="ogimage"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </>
  ),
  footer: {
    text: "BeamFi Payment Protocol -  Micro Payment Solution"
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – BeamFi"
    }
  }
}

export default config
