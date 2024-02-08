const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // Check if node is of type mdx.
  if ( node.internal.type === "Mdx" ) {
    // Get the path of markdown files inside the `/content` directory.
    const filePath = createFilePath({ node, getNode, basePath: 'content' })

    // Create slug field on the node.
    createNodeField({
      node,
      name: "slug",
      value: filePath
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve("src/templates/test.js")

  const result = await graphql(`
    query {
      allMdx(filter: {internal: {contentFilePath: {regex: "/courses/"}}}) {
        nodes {
          fields {
            slug
          }
          id
        }
      }
    }
  `)

  const modules = result.data.allMdx.nodes

  modules.forEach(module => {
    const pathParts = module.fields.slug.split("/")
    const courseSlug = `/${pathParts[1]}/${pathParts[2]}/`

    createPage({
      path: module.fields.slug,
      component: template,
      context: {
        id: module.id,
        courseSlug
      }
    })
  })
}