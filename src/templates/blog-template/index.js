import * as React from "react" 

import MarkdownTemplate from "../markdown-template"

import NavItem from "../../components/navitem"

import "./style.css"


const BlogTemplate = ({ pageContext, children }) => {
  return (
    <div className="blog-wrapper">
      <header>
        <span className="logo">Projeto Racotis</span>

        <nav>
          <NavItem to="/">Cursos gratuitos</NavItem>
          <NavItem to="/blog">Blog</NavItem>
        </nav>
      </header>

      <MarkdownTemplate title={pageContext.frontmatter.title}>
        {children}
      </MarkdownTemplate>
    </div>
  )
}

export default BlogTemplate
