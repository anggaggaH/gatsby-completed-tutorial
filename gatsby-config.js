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
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "http://api.bzpublish.com/articles/",
        headers: {
          'Authorization': `Token 4a9023f1f352ff4d3eef0673951f29a06ee0e495`,
          'Content-Type': 'application/json'
        },
        rootKey: "articles",
        schemas: {
          articles: `
              id: Int
              name: String
          `,
        },
      }
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "bzpublish",

        // The url, this should be the endpoint you are attempting to pull data from
        url: `http://api.bzpublish.com/articles/`,

        method: "get",

        headers: {
          'Authorization': "Token 4a9023f1f352ff4d3eef0673951f29a06ee0e495",
          "Content-Type": "application/json"
        },

        // Request body
        data: {},

        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `articles`,

        // Nested level of entities in response object, example: `data.posts`
        // entityLevel: `data.articles`,

        // Define schemaType to normalize blank values
        // example:
        // const postType = {
        //   id: 1,
        //   name: 'String',
        //   published: true,
        //   object: {a: 1, b: '2', c: false},
        //   array: [{a: 1, b: '2', c: false}]
        // },

        schemaType: {
          articles: `
              id: Int
              name: String
          `,
          // published: true,
          // object: {a: 1, b: '2', c: false},
          // array: [{a: 1, b: '2', c: false}]
        },

        // Request parameters
        // Only available from version 2.1.0
        params: {
          per_page: 1
        },

        // Simple authentication, optional
        auth: {
          username: "newadmin",
          password: "anotherpassword"
        },
        // enable disk caching
        allowCache: false,
        // if allowCache is true, then the cache will be purged after the
        // specified amount of time
        maxCacheDurationSeconds: 60 * 60 * 24,

        // Optional payload key name if your api returns your payload in a different key
        // Default will use the full response from the http request of the url
        payloadKey: `body`,
        verboseOutput: true,
        enableDevRefresh: true
      }
    }
  ],
}
