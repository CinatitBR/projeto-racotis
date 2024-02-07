import * as React from "react"
import { Link, graphql } from 'gatsby'

import Course from "../templates/course"

const Home = ({ children, pageContext, data, location }) => {
  const { chapters, currentChapter } = data
  console.log(pageContext)

  return (
    <Course 
      chapters={chapters.nodes} 
      toc={currentChapter.tableOfContents.items} 
      location={location}
      course={currentChapter.frontmatter.course}
    >
      <h1>{pageContext.frontmatter.title}</h1>
      {pageContext.frontmatter.author}
      {children}
    </Course>
  )
} 

// Query data about the chapters.
/*
  contentFilePath: The folder directory to query for files.
  gatsbyPath: the url path generated for the file on the browser.

  toc: Table of contents
*/
export const query = graphql`
  query ($id: String) {
    chapters: allMdx(filter: {internal: {contentFilePath: {regex: "/calculo-1/"}}}) {
      nodes {
        frontmatter {
          title
        }
        gatsbyPath(filePath: "{mdx.fields__slug}")
        id
      }
    }
    currentChapter: mdx(id: {eq: $id}) {
      frontmatter {
        course
      }
      tableOfContents
    }
  }
`

export default Home
