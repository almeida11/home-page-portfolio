import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setISOpen] = useState(false);
  return (
    <nav>
      <div class="navbar">
          <div class="max-width">
            <div class="logo">
              <span>
                <a className="link-a" href="#inicio">&lt;</a>
                <a className="link" href="#inicio">Almeida</a>
                <a className="link-a" href="#inicio">/&gt;</a>
              </span>
            </div>
            <div class={`menu ${isOpen && "open"}`}>
              <a className="link" href="#inicio">Inicio</a>
              <a className="link" href="#about">Sobre</a>
              <a className="link" href="#projects">Projetos</a>
              <a className="link" href="">Contato</a>
              {/*/letter*/}
            </div>
            <div className={`menu-btn ${isOpen && "open"}`} onClick={() => setISOpen(!isOpen)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
