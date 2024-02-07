const { createFilePath } = require(`gatsby-source-filesystem`)
const coursesOrdering = require("./content/courses/ordering")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // Check if node is of type mdx.
  if ( node.internal.type === "Mdx" ) {
    // Get the path of markdown files inside the `/content` directory.
    const filePath = createFilePath({ node, getNode, basePath: 'content' })
    console.log(filePath)
    console.log(coursesOrdering)

    // Create slug field on the node.
    createNodeField({
      node,
      name: "slug",
      value: filePath
    })
  }

}