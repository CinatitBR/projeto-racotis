import * as React from "react"
import { Link } from "gatsby"

import "./style.css"

/*
  This function will be called by the Link component, to tell
  if a link is active.
  Read "Reach Router" documentation.
*/
const isActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "selected" } : {}
}

const NavItem = ({ children, to }) => {
  return (
    <li className="nav-item">
      <Link to={to} getProps={isActive}>
        {children}
      </Link>
    </li>
  )
}

export default NavItem
