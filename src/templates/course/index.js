import * as React from "react"
import { Link } from "gatsby"
import "./style.css"

// import TableContents from "../components/table-contents"
import TableContents from "../../components/table-contents"

/**
 * @param {Object} props
 * @param {markdown} props.chapters The content in markdown
 */
const Course = ({ children, chapters }) => {

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
      <header className="top-header">
        <label 
          className="expand-sidebar" 
          htmlFor="sidebar-toggle" 
          aria-label="Expand sidebar">
          <span></span>
        </label>
        <nav className="breadcrumbs">
          <ol>
            <li><a href="#">Início</a></li>
            <li><a href="#">Calculo I</a></li>
            <li><a href="#">Limites</a></li>
          </ol>
        </nav>
      </header>

      <div className="main-wrapper">
        {/* Left sidebar */}
        <input type="checkbox" id="sidebar-toggle" />
        <label 
          className="collapse-sidebar"
          htmlFor="sidebar-toggle"
          aria-label="Collapse sidebar">
          <span></span>
        </label>
        <aside className="sidebar">
          <div className="course-contents">
            <h2 className="title">Calculo I</h2>

            <nav className="topics">
              <ol>
                {
                  chapters.map(chapter => <li key={chapter.id}>
                      <Link to={chapter.gatsbyPath} getProps={isActive}>
                        {chapter.frontmatter.title}
                      </Link>
                    </li>
                  )
                }
              </ol>
            </nav>
          </div>
        </aside>

        {/* Main text */}
        <main className="markdown">
          <div className="in-main-wrapper">
            <TableContents />
          </div>
          {children}
        </main>

        <aside className="sidebar-right">
          <TableContents />
        </aside>
      </div>
    </div>
  );
}

export default Course
