import * as React from "react"

import "./style.css"


const MarkdownTemplate = ({ children, title }) => {
  return (
    <main className="markdown">
      {title && <h1 className="title">{title}</h1>}
      {children}
    </main>
  )
}

export default MarkdownTemplate
