import * as React from 'react'
import { Link } from "gatsby"
import './style.css'

const Sidebar = ({ show, onToggle, chapters, course }) => {

  /*
    This function will be called by the Link component, to tell
    if a link is active.
    Read "Reach Router" documentation.
  */
  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "selected" } : {}
  }

  return <React.Fragment>
    {/* This checkbos toggles the sidebar through the style :checked */}
    <input 
      type="checkbox" 
      id="sidebar-toggle"
      value={show}
    />

    {/* This label is the sidebar overlay. */}
    <label 
      className="collapse-sidebar"
      htmlFor="sidebar-toggle"
      aria-label="Collapse sidebar"
      onClick={() => onToggle()}>
      <span></span>
    </label>

    <aside className="sidebar">
      <div className="course-contents">
        <h2 className="title">{course}</h2>

        <nav className="topics">
          <ol>
            {
              chapters.map(chapter =>
                <li key={chapter.id}>
                  <Link to={`/${chapter.frontmatter.slug}`} getProps={isActive}>
                    {chapter.frontmatter.title}
                  </Link>
                </li>
              )
            }
          </ol>
        </nav>
      </div>
    </aside>
  </React.Fragment>
}

export default Sidebar

