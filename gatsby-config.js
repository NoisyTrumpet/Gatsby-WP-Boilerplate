module.exports = {
  siteMetadata: {
    title: `Noisy Trumpet GatsbyJS Wordpress Headless Starter`,
    description: `Headless WordPress boilerplate for Noisy Trumpet Web Dev Team`,
    author: `@NoisyTrumpet`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "myrealtynetwork.noisytrumpet.com",
        protocol: "http",
        hostingWPCOM: false,
        useACF: true,
        // It can help you debug specific API Endpoints problems.
        verboseOutput: true,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: "http://myrealtynetwork.noisytrumpet.com",
          replacementUrl: "https://myrealtynetwork.com",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
