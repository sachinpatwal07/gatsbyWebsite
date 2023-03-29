/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        // Path to the directory
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Sachin Patwal",
    description: "web dev portfolio",
    copyright: "This website is copyright 2021  web warrior",
    contact: "sachin@webmobsoft.com",
  },
};
