const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if ( node.internal.type === "Mdx" ) {
    // Get the relative path of markdown files inside the `content` directory.
    const filePath = createFilePath({ node, getNode, basePath: 'content' })

    // Add field "slug" to the node.
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
          frontmatter {
            course
          }
          fields {
            slug
          }
          id
          tableOfContents
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
        course: module.frontmatter.course,
        courseSlug,
        id: module.id,
        toc: module.tableOfContents.items,
      }
    })
  })
}