import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div class="navbar">
          <div class="max-width">
            <div class="logo">
              <Link class="link" to={"/"}>Port</Link>
              <Link class="link-a" to={"/"}>fólio</Link>
            </div>
            <ul class="menu">
              <Link class="link" to={"/"}>Inicio</Link>
              <Link class="link" to={"/"}>Sobre</Link>
              <Link class="link" to={"/"}>Contato</Link>
              {/*
              <Link class="link" to={"/letter"}>Projetos</Link>
              <Link class="link" to={"/"}>Letter</Link>
              */}
            </ul>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
