import * as React from "react"
import { graphql, Link } from "gatsby"

import Sidebar from "../components/sidebar"
import Breadcrumbs from "../components/breadcrumbs"
import TableContents from "../components/table-contents"



const Test = ({ children, pageContext, data }) => {
  const [showSidebar, setShowSidebar] = React.useState(false)
  const modules = data.allMdx.nodes
  console.log(pageContext)
  
  // Fill chapters object with data.
  const chapters = {}
  modules.forEach(module => {
    const moduleChapter = module.frontmatter.chapter
    const moduleTitle = module.frontmatter.title
    const slug = module.fields.slug

    if (!chapters[moduleChapter]) {
      chapters[moduleChapter] = []
    }

    chapters[moduleChapter].push({ 
      id: module.id,
      title: moduleTitle,
      slug
    })
  })

  const toggleSidebar = () => setShowSidebar(!showSidebar)
  
  /*
    This function will be called by the Link component, to tell
    if a link is active.
    Read "Reach Router" documentation.
  */
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "selected" } : {}
  }

  return (
    <div className="post">
      {/* Olá amigo novamente. */}
      <header className="top-header">
        <label 
          className="expand-sidebar" 
          htmlFor="sidebar-toggle" 
          aria-label="Expand sidebar">
          <span></span>
        </label>
        <Breadcrumbs />
      </header>

      <div className="main-wrapper">
        {/* Left sidebar */}
        <Sidebar
        show={showSidebar}
        onToggle={toggleSidebar}
        title={pageContext.course}
        >
          {
            Object.keys(chapters).map(chapterTitle => 
              <ol key={chapterTitle}>
                <h3>{chapterTitle}</h3>

                {
                  chapters[chapterTitle].map(module =>
                    <li key={module.id}>
                      <Link to={module.slug} getProps={isActive}>{module.title}</Link>
                    </li>
                  )
                }
              </ol>
            )
          }
        </Sidebar>

        {/* Main text */}
        <main className="markdown">
          <div className="in-main-wrapper">
            <TableContents toc={pageContext.toc} />
          </div>
          {/* {children} */}
        </main>

        <aside className="sidebar-right">
          <TableContents toc={pageContext.toc} />
        </aside>
      </div>
    </div>
  )

  // return (
  //   <div className="post">
  //     <header className="top-header">
  //       <label 
  //         className="expand-sidebar" 
  //         htmlFor="sidebar-toggle" 
  //         aria-label="Expand sidebar">
  //         <span></span>
  //       </label>
  //       <Breadcrumbs />
  //     </header>

  //     <div className="main-wrapper">
  //       {/* Left sidebar */}
  //       <Sidebar 
  //         show={showSidebar}
  //         onToggle={toggleSidebar}
  //         chapters={chapters} 
  //         course={course}
  //       />

  //       {/* Main text */}
  //       <main className="markdown">
  //         <div className="in-main-wrapper">
  //           <TableContents toc={toc} />
  //         </div>
  //         {children}
  //       </main>

  //       <aside className="sidebar-right">
  //         <TableContents toc={toc} />
  //       </aside>
  //     </div>
  //   </div>
  // )
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
        id
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
