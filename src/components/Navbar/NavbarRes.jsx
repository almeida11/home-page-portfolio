import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarRes = () => {
  const [isOpen, setISOpen] = useState(false);
  return (
    <nav>
      <div class="navbarres">
          <div class="max-width">
            <div class="logo">
              <Link class="link" to="/">Port<Link className="link-a"  to="/">fólio</Link></Link>
            </div>
            <div class={`menu ${isOpen && "open"}`}>
              <Link to="/">Inicio</Link>
              <Link to="/about">Sobre</Link>
              <Link to="/projects">Projetos</Link>
              <Link to="/contato">Contato</Link>
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

export default NavbarRes;
