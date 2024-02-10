import * as React from "react"
import { graphql } from "gatsby"

import Sidebar from "../../components/sidebar"
import Breadcrumbs from "../../components/breadcrumbs"
import MarkdownTemplate from "../markdown-template"
import TableContents from "../../components/table-contents"
import NavItem from "../../components/navitem"

import "./style.css"


const CourseTemplate = ({ children, pageContext, data }) => {
  const [showSidebar, setShowSidebar] = React.useState(false)
  const modules = data.allMdx.nodes
  
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
                    <NavItem key={module.id} to={module.slug}>
                      {module.title}
                    </NavItem>
                  )
                }
              </ol>
            )
          }
        </Sidebar>

        {/* Main text */}
        <MarkdownTemplate title={pageContext.title}>
          <div className="in-main-wrapper">
            <TableContents toc={pageContext.toc} />
          </div>
          {children}
        </MarkdownTemplate>

        <aside className="sidebar-right">
          <TableContents toc={pageContext.toc} />
        </aside>
      </div>
    </div>
  )
}

export default CourseTemplate

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
