import path from "path";
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  pathPrefix: "/about", // Add your path prefix here
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "rHkBiZ4yBV5pRsd8sZ9ea5",
        token: "pzp1KQ4FylkIP9hWEnG5bBfyBZapkod9xML84N2LZShgosCcqHRyMEVjcrydI9Oqd2c1jFpi8hfLxCKgYWM0w",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: path.resolve("./src/templates/defaultPlasmicPage.tsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}

export default config
