const path = require('path')

const courseTemplate = path.resolve("src/templates/course-template/index.js")
const blogTemplate = path.resolve("src/templates/blog-template/index.js")


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query course mdx files.
  let result = await graphql(`
    query {
      allMdx(filter: {internal: {contentFilePath: {regex: "/courses/"}}}) {
        nodes {
          frontmatter {
            slug
            course
            title
          }
          internal {
            contentFilePath
          }
          id
          tableOfContents
        }
      }
    }
  `)

  const modules = result.data.allMdx.nodes
  modules.forEach(module => {
    const { slug, course, title } = module.frontmatter
    const { contentFilePath } = module.internal
    const pathParts = slug.split("/")
    const courseSlug = `/${pathParts[1]}/${pathParts[2]}/`

    createPage({
      path: slug,
      component: `${courseTemplate}?__contentFilePath=${contentFilePath}`,
      context: {
        course,
        courseSlug,
        id: module.id,
        title,
        toc: module.tableOfContents.items,
      }
    })
  })

  result = await graphql(`
    query {
      allMdx(filter: {internal: {contentFilePath: {regex: "/blog/"}}}) {
        nodes {
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
          id
        }
      }
    }
  `)

  const blogNodes = result.data.allMdx.nodes
  blogNodes.forEach(post => {
    createPage({
      path: post.frontmatter.slug,
      component: `${blogTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: { id: post.id }
    })
  })
}
