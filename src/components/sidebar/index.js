import * as React from 'react'
import './style.css'

const Sidebar = ({ children, show, onToggle, title }) => {

  return <React.Fragment>
    {/* This checkbox toggles the sidebar through the style :checked */}
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
      <h2 className="title">{title}</h2>
      <nav>
        {children}
      </nav>
    </aside>
  </React.Fragment>
}

export default Sidebar

