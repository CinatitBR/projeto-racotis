import * as React from "react" 
import { Link } from "gatsby"

import MarkdownTemplate from "../markdown-template"
import NavItem from "../../components/navitem"

import "./style.css"


const BlogTemplate = ({ pageContext, children }) => {
  return (
    <div className="blog-wrapper">
      <header>
        <Link to="/" className="logo">
          Projeto Racotis
        </Link>

        <nav>
          <NavItem to="/courses">Cursos gratuitos</NavItem>
          <NavItem to="/blog/">Blog</NavItem>
        </nav>
      </header>

      <MarkdownTemplate title={pageContext.frontmatter.title}>
        {children}
      </MarkdownTemplate>
    </div>
  )
}

export default BlogTemplate
