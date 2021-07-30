module.exports = {
  siteMetadata: {
    siteUrl: 'https://finkels-alterations.com',
    title: "Finkel's Alterations",
    description:
      "Finkel's Alterations provides detailed tailoring and alteration services in Jackson Heights, New York.",
    socialImage: '/open-graph.png',
    twitterUsername: '@1realmohsin',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}
