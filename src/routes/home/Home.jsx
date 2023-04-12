import './Home.css';
import React from "react";

const Home = () => {
  return (
    <div className="Home">
      <div class="navbar">
        <div class="sticky">
          <div class="max-width">
            <div class="logo"><a href="a">Port</a><span>fólio</span></div>
            <ul class="menu">
              <li><a href="a">Inicio</a></li>
              <li><a href="a">Sobre</a></li>
              <li><a href="a">Projetos</a></li>
              <li><a href="a">Contato</a></li>
            </ul>
            <div class="menu-btn">
              <ion-icon name="menu-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
      <section class="home" id="home">
        <div class="home-content">
          <div class="text-1">Olá, meu nome é</div>
          <div class="text-2">Mateus Almeida</div>
          <div class="text-3">eu sou <span>Desenvolvedor Web</span></div>
        </div>
      </section>
    </div>
  );
};

export default Home


