import './About.css';
import React from "react";

const About = () => {
  return (
    <div className="about-body" id='about'>
      <div className='about'>
        <p>Olá, me chamo Mateus de Almeida e tenho 20 anos, atualmente estou cursando
          <strong> Engenharia de Software</strong> no Centro Universitário Internacional - Uninter 
          e também estou cursando <strong>Tecnólogo em Segurança da Informação</strong> na Faculdade de Imperatriz - Facimp.</p>
      </div>
      <div className="photo">
        <img src="photo.png" alt="" />
      </div>      
    </div>
  );
};

export default About;
