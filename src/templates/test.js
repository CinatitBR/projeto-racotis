import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const Test = ({ pageContext, data }) => {
  console.log(pageContext)

  const courseModules = data.allMdx.nodes
  // console.log(courseModules)

  const chaptersData = {}
  
  courseModules.forEach(module => {
    const moduleChapter = module.frontmatter.chapter
    const moduleTitle = module.frontmatter.title
    const slug = module.fields.slug

    if (!chaptersData[moduleChapter]) {
      chaptersData[moduleChapter] = []
    }

    chaptersData[moduleChapter].push({ 
      title: moduleTitle,
      slug 
    })

  })

  console.log("Aqui: ", chaptersData)

  return (
    <div>
      Olá amigo novamente.

      {
        Object.keys(chaptersData).map(chapter => 
          <ol key={chapter}>
            <h3>{chapter}</h3>

            {
              chaptersData[chapter].map(module => 
                <li key={module.title}><Link to={module.slug}>{module.title}</Link></li>
              )
            }
          </ol>
        )
      }
    </div>
  )
}

export default Test

/*
  Pega todos os arquivos do curso atual, na ordem do file system.
*/
export const query = graphql`
  query ($courseSlug: String) {
    allMdx(
      filter: {internal: {contentFilePath: {regex: $courseSlug}}}
      sort: {internal: {contentFilePath: ASC}}
    ) {
      nodes {
        frontmatter {
          title
          chapter
        }
        fields {
          slug
        }
      }
    }
  }
`

// import * as React from "react"
// import { Link, graphql } from 'gatsby'

// import Course from "../templates/course"

// const Home = ({ children, pageContext, data, location }) => {
//   const { chapters, currentChapter } = data
//   console.log(pageContext)

//   return (
//     <Course 
//       chapters={chapters.nodes} 
//       toc={currentChapter.tableOfContents.items} 
//       location={location}
//       course={currentChapter.frontmatter.course}
//     >
//       <h1>{pageContext.frontmatter.title}</h1>
//       {pageContext.frontmatter.author}
//       {children}
//     </Course>
//   )
// } 

// // Query data about the chapters.
// /*
//   contentFilePath: The folder directory to query for files.
//   gatsbyPath: the url path generated for the file on the browser.

//   toc: Table of contents
// */
// export const query = graphql`
//   query ($id: String) {
//     chapters: allMdx(filter: {internal: {contentFilePath: {regex: "/calculo-1/"}}}) {
//       nodes {
//         frontmatter {
//           title
//         }
//         gatsbyPath(filePath: "{mdx.fields__slug}")
//         id
//       }
//     }
//     currentChapter: mdx(id: {eq: $id}) {
//       frontmatter {
//         course
//       }
//       tableOfContents
//     }
//   }
// `

// export default Home
