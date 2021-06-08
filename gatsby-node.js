const path = require("path")
const slugify = require("slugify")
const axios = require('axios');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })

  const get = () => axios.get('http://api.bzpublish.com/sites/', {
    params: '',
    headers: {
      "Authorization": "Token 4a9023f1f352ff4d3eef0673951f29a06ee0e495",
      "Content-Type": "application/json"
    }
  });

  const allSites = await get()
  let sites = allSites.data.results

  createPage({
    path: `/sites`,
    component: path.resolve("src/pages/sites.js"),
    context: { sites },
  })

  // Create a page for each Site.
  sites.forEach(site => {
    const nameSlug = slugify(site.name, { lower: true })
    createPage({
      path: `/sites/${nameSlug}/`,
      component: require.resolve("./src/templates/site.js"),
      context: { site },
    })
  })
}