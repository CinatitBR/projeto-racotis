import * as React from "react"

import 'katex/dist/katex.min.css' // Needed to render latex properly.
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
