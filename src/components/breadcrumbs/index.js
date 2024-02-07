/*
  This breadcrumbs generates the url path dynamically from the window.location object. 
*/

import * as React from 'react'
import { Link } from 'gatsby'
import './style.css'


const baseUrl = '/'
const Breadcrumbs = () => {
  /* 
    "window" doesn't exist at building time. 
    We must check if it's undefined.
  */
  const url = typeof window !== 'undefined' ? window.location.pathname : ''
  const splitUrl = url.split('/')
  let lastUrl = baseUrl

  return (
    <nav className="breadcrumbs">
      <ol>
        <li><a href={baseUrl}>Início</a></li>
        {
          splitUrl.map(str => {
            if (str !== '') {
              lastUrl += `${str}/`
              return <li key={str}><Link to={lastUrl}>{str}</Link></li>
            }
          })
        }
      </ol>
    </nav>
  )
}

export default Breadcrumbs
