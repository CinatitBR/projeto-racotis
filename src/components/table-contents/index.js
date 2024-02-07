import * as React from 'react'

const TableContents = ({ toc }) => {

  // Return null if toc is undefined.
  if (!toc) 
    return null
  
	return (
		<section className="contents">
			<header>Sumário</header>
			<nav>
				<ul>
          {
            toc.map(content =>
              <li key={content.url}><a href={content.url}>{content.title}</a></li>  
            )
          }
				</ul>
			</nav>
		</section>
	);
}

export default TableContents