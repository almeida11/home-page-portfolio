import './Letter.css';
import React from "react";
import foto from "./assets/foto.png";
import alianca from "./assets/alianca.png";
import foto1 from "./assets/foto1.jpeg";
import foto2 from "./assets/foto2.jpeg";
import foto3 from "./assets/foto3.jpeg";
import foto4 from "./assets/foto4.jpeg";
import foto5 from "./assets/foto5.jpeg";
import foto6 from "./assets/foto6.jpeg";

import foto10 from "./assets/foto10.jpg";
import foto11 from "./assets/foto11.jpg";
import foto12 from "./assets/foto12.jpg";
import foto13 from "./assets/foto13.jpg";
import foto14 from "./assets/foto14.jpg";
import foto15 from "./assets/foto15.jpg";
import foto16 from "./assets/foto16.jpg";
import foto17 from "./assets/foto17.jpg";
const Letter = () => {
  return (
    <div className="container">
      <div className='resume'>
        <h1>Nosso Resumo</h1>
      </div>
      <div className="notes">
        <div className='text'>
          <p>Já escrevi outras cartas de amor, infelizmente em alguns momentos vi elas sendo queimadas, ou outras sendo amassadas, por isso, deixei de escrever, ficou "cafona", ou virou "coisa do passado" de acordo com algumas pessoas. Modernizando um pouco esse tipo de coisa, cá está uma "carta moderna", assim eu tenho a prevenção de que ela não vá ser perdida, e sempre vai ficar salva pra quando quiser ler novamente.</p>
        </div>
        <div className='text-2'>
          <p>Diante da vastidão do tempo e da imensidão do universo, é um imenso prazer para mim dividir um planeta e uma época com você!</p>
          <p>- Carl Sagan</p>
        </div>
        <div className="text-3">
          <p>Eu não te amo com minha cabeça e com meu coração, eu te amo com minha alma, no caso da minha cabeça esquecer e do meu coração parar.</p>
          <p>- Rumi</p>
        </div>
        <div className="text-3">
          <p>Eu te amo porque todo o universo conspirou para que eu chegasse até você.</p>
          <p>- Paulo Coelho</p>
        </div>
      </div>
      <div className="events">
        <div className="item01">
          <h1>11/03/2023</h1>
          <p className='opn'>Primeiro Encontro</p>
          <p>Primeira vez que saímos, Vitória não gosta de filmes de terror e aceitou ir ao cinema assistir logo Pânico VI</p>
          <p>Por que não te beijei esse dia?</p>
        </div>
        <div className="item01">
          <h1>18/03/2023</h1>
          <p className='opn'>Primeiro Beijo</p>
          <p>Nosso primeiro beijo, foi após uma voltinha pra tomar um açai, a comida favorita da Vitória, toda vez rende um sorriso maravilhoso</p>
        </div>
        <div className="item01">
          <h1>10/04/2023</h1>
          <p className='opn'>Nossa Primeira Vez</p>
          <p>Nosso primeiro momento, somente nosso, mais do que apenas um toque</p>
        </div>
        <div className="item02">
          <h1>14/04/2023</h1>
          <p className='opn'>Quer namorar comigo?</p>
          <p>Mesmo bastante nervoso, comecei a citar os 10 requisitos para sucessão deste namoro</p>
          <ul>
            <li><p className='opn'>Os cinco primeiros se resumem no item 1, trancar o curso</p></li>
            <li><p className='pontuacao'>1° - Trancar o Curso</p></li>
            <li><p className='pontuacao'>2° - Nada de biquinho quando ficar brava</p></li>
            <li><p className='pontuacao'>3° - Falar sempre que algo incomodar</p></li>
            <li><p className='opn'>Os demais não lembro, foram mais brincadeira até chegar no pedido</p></li>
            <div className="align-heart">
              <li><div className='heart'></div></li>
              <li><div className='heart'></div></li>
              <li><div className='heart'></div></li>
            </div>
          </ul>
        </div>
      </div>
      <div className="photo">        
        <div className="card">
          <img className="foto" src={alianca} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto2} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto1} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto5} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto3} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto6} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto4} alt="" />
        </div>


        <div className="card">
          <img className="foto" src={foto10} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto11} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto12} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto13} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto14} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto15} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto16} alt="" />
        </div>
        <div className="card">
          <img className="foto" src={foto17} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Letter

