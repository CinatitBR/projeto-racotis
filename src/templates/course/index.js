import * as React from "react"
import "./style.css"

import TableContents from "../../components/table-contents"
import Breadcrumbs from "../../components/breadcrumbs"
import Sidebar from "../../components/sidebar"

/**
 * @param {Object} props
 * @param {markdown} props.chapters The content in markdown
 */
const Course = ({ children, chapters, toc, course }) => {
  const [showSidebar, setShowSidebar] = React.useState(true)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
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
        <Breadcrumbs />
      </header>

      <div className="main-wrapper">
        {/* Left sidebar */}
        <Sidebar 
          show={showSidebar}
          onToggle={toggleSidebar}
          chapters={chapters} 
          course={course}
        />

        {/* Main text */}
        <main className="markdown">
          <div className="in-main-wrapper">
            <TableContents toc={toc} />
          </div>
          {children}
        </main>

        <aside className="sidebar-right">
          <TableContents toc={toc} />
        </aside>
      </div>
    </div>
  );
}

export default Course
