import { Link } from "react-router-dom";

const Navbar = () =>{
  return (
    <nav>
      <Link to={"/"}>Home Page</Link>
      <Link to={"/letter"}>Letter</Link>
    </nav>
  );
};

export default Navbar;
