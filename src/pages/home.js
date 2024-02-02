import * as React from "react"
import "./style.css"

import TableContents from "../components/TableContents";

const HomePage = () => {
  return (
    <div className="page">
      <header className="top-header">
        {/* <button className="sidebar-toggle">abrir manolo</button> */}
        {/* <input type="checkbox" id="sidebar-toggle" /> */}
        <label htmlFor="sidebar-toggle" aria-label="Expand sidebar">teste</label>
        <nav className="breadcrumbs">
          <ol>
            <li><a href="#">Home</a></li>
            <li><a href="#">Calculo I</a></li>
            <li><a href="#">Limites</a></li>
          </ol>
        </nav>
      </header>
      <div className="main-wrapper">
        {/* Left sidebar */}
        <input type="checkbox" id="sidebar-toggle" />
        <label 
          className="collapse-sidebar" 
          htmlFor="sidebar-toggle" 
          aria-label="Collapse sidebar"
        >
          <span></span>
        </label>
        <aside className="sidebar">
          <div className="course-contents">
            <h2 className="title">Calculo I</h2>

            <nav className="topics">
              <ol>
                <li><a href="#">Limites</a></li>
                <li><a href="#">Derivadas</a></li>
                <li><a href="#">Integrais</a></li>
              </ol>
            </nav>
          </div>
        </aside>

        {/* Main text */}
        <main className="markdown">
          {/* <nav className="breadcrumbs">
            <ol>
              <li><a href="#">Home</a></li>
              <li><a href="#">Calculo I</a></li>
              <li><a href="#">Limites</a></li>
            </ol>
          </nav> */}

          <h1 className="title">Limites</h1>
          {/* Table of Contents is gonna be inserted here */}
          <div className="in-main-wrapper">
            <TableContents />
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non velit in neque mattis molestie eget dictum erat. Donec dui dolor, volutpat quis leo sit amet, porta euismod urna. Proin nunc risus, tincidunt non auctor sed, laoreet ac eros. Aliquam metus libero, dapibus vel ultricies a, scelerisque nec lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut dapibus sodales pulvinar. Duis ex orci, vestibulum congue augue quis, commodo sollicitudin lacus. Donec imperdiet vehicula massa id congue.
          </p>

          <h2>O Teste da Integral</h2>
          <p>
            Aliquam metus libero, dapibus vel ultricies a, scelerisque nec lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut dapibus sodales pulvinar. Duis ex orci, vestibulum congue augue quis, commodo sollicitudin lacus. Donec imperdiet vehicula massa id congue.
          </p>
          <p>
            Sequências e séries infinitas foram introduzidas rapidamente em Uma Apresentação do Cálculo em conexão com os paradoxos de Zenon e a representação decimal de números. Sua importância em cálculo surge da ideia de Newton da representação de funções como somas de séries infinitas. Por exemplo, para encontrar áreas, ele frequentemente integrava uma função expressando-a primeiro como uma série e então integrando cada termo da série.
          </p>
        </main>

        {/* Table of contents */}
        {/* <aside className="contents-wrapper">
          <nav className="contents">
            <header>Sumário</header>
            <ul>
              <li><a href="#">O Teste da Integral</a></li>
              <li><a href="#">Sequências</a></li>
              <li><a href="#">Limites Infinitos</a></li>
            </ul>
          </nav>
        </aside> */}
        <aside className="sidebar-right">
          <TableContents />
        </aside>
      </div>
    </div>
  );
}

export default HomePage
