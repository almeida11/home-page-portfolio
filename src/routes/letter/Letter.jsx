import './Letter.css';
import React from "react";

const Letter = () => {
  return (
    <div className="container">
      <div className='title'>
        <h1>Nosso Resumo</h1>
      </div>
      <div className='text'>
        <p>Já escrevi outras cartas de amor, infelizmente em alguns momentos vi elas sendo queimadas, ou outras sendo amassadas, por isso, deixei de escrever, ficou "cafona", ou virou "coisa do passado" de acordo com algumas pessoas. Modernizando um pouco esse tipo de coisa, cá está uma "carta moderna", assim eu tenho a prevenção de que ela não vá ser perdida, e sempre vai ficar salva pra quando quiser ler novamente.</p>
      </div>
      <div className="item01">
        <h1>11/03/2023</h1>
        <p>Cinema</p>
        <p>Filme: Pânico VI</p>
        <p>Primeira vez que saímos</p>
      </div>
      <div className="item01">
        <h1>18/03/2023</h1>
        <p>Casa do Açai</p>
        <p>Evento: Comer Açai</p>
        <p>Primeira vez que nos beijamos</p>
      </div>

    </div>
  );
};

export default Letter

