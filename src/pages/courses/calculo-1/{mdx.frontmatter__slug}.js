import * as React from "react"
import { Link, graphql } from 'gatsby'

import Course from "../../../templates/course"

const Home = ({ children, pageContext, data }) => {
  return (
    <Course chapters={data.allMdx.nodes} >
      <h1>{pageContext.frontmatter.title}</h1>
      {pageContext.frontmatter.author}
      {children}
    </Course>
  )
} 

// Query data about the chapters.
export const query = graphql`
  query {
    allMdx(filter: {internal: {contentFilePath: {regex: "/courses/calculo-1/"}}}) {
      nodes {
        frontmatter {
          title
        }
        gatsbyPath(filePath: "/courses/calculo-1/{mdx.frontmatter__slug}")
        id
      }
    }
  }
`

export default Home
