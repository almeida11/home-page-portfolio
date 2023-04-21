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
              <a className="link"href="#inicio">Port<a className="link-a" href="#inicio">fólio</a></a>
            </div>
            <div class={`menu ${isOpen && "open"}`}>
              <a href="#inicio">Inicio</a>
              <a href="#about">Sobre</a>
              <a href="#projects">Projetos</a>
              <a href="">Contato</a>
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
