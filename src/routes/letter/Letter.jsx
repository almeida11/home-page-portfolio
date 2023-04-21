import './Letter.css';
import React from "react";

const Letter = () => {
  return (
    <div className="container">
      <div className='resume'>
        <h1>Nosso Resumo</h1>
      </div>
      <div className="notes">
        <div className='text'>
          <p>Já escrevi outras cartas de amor, infelizmente em alguns momentos vi elas sendo queimadas, ou outras sendo amassadas, por isso, deixei de escrever, ficou "cafona", ou virou "coisa do passado" de acordo com algumas pessoas. Modernizando um pouco esse tipo de coisa, cá está uma "carta moderna", assim eu tenho a prevenção de que ela não vá ser perdida, e sempre vai ficar salva pra quando quiser ler novamente.</p>
          <p>Diante da vastidão do tempo e da imensidão do universo, é um imenso prazer para mim dividir um planeta e uma época com você!</p>
        </div>
        <div className='text-2'>
          <p>Diante da vastidão do tempo e da imensidão do universo, é um imenso prazer para mim dividir um planeta e uma época com você!</p>
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
    </div>
  );
};

export default Letter

