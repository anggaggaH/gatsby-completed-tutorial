/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@anggaggaH",
    person: { name: "Angga", age: 26 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "john", age: 32 },
      { name: "susan", age: 21 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `eonufvhzvo0o`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //     url: "http://api.bzpublish.com/articles/",
    //     headers: {
    //       'Authorization': `Token 4a9023f1f352ff4d3eef0673951f29a06ee0e495`,
    //       'Content-Type': 'application/json'
    //     },
    //     rootKey: "articles",
    //     schemas: {
    //       articles: `
    //           id: Int
    //           name: String
    //       `,
    //     },
    //   }
    // },
    // {
    //   resolve: "gatsby-source-apiserver",
    //   options: {
    //     typePrefix: "bzpublish",

    //     url: `http://api.bzpublish.com/articles/`,

    //     method: "get",

    //     headers: {
    //       'Authorization': "Token 4a9023f1f352ff4d3eef0673951f29a06ee0e495",
    //       "Content-Type": "application/json"
    //     },

    //     data: {},

    //     name: `articles`,

    //     schemaType: {
    //       articles: `
    //           id: Int
    //           name: String
    //       `,
    //     },

    //     params: {
    //       per_page: 1
    //     },

    //     auth: {
    //       username: "newadmin",
    //       password: "anotherpassword"
    //     },

    //     allowCache: false,

    //     maxCacheDurationSeconds: 60 * 60 * 24,

    //     payloadKey: `body`,
    //     verboseOutput: true,
    //     enableDevRefresh: true
    //   }
    // }
  ],
}
