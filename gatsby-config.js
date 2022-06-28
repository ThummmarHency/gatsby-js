module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    // `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-layout`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/src/pages/`,
    //   },
    // },

    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
        ignore: ["demo.js"],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
        // ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
};
