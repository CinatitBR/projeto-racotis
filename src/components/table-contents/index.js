import * as React from 'react'

const TableContents = () => {
  // const listItems = links.map(link => <li><a href="#">{link.text}</a></li>);

	return (
		<section className="contents">
			<header>Sumário</header>
			<nav>
				<ul>
          {/* {listItems} */}
					<li><a href="#">O Teste da Integral</a></li>
					<li><a href="#">Sequências</a></li>
					<li><a href="#">Limites Infinitos</a></li>
				</ul>
			</nav>
		</section>
	);
}

export default TableContents