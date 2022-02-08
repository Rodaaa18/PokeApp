import { Link } from "react-router-dom";
import logo from "../assets/pokelogo.png";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.css";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img className="logo" src={logo} alt="pokemon" />
      </Link>
    </nav>
  );
};

export default Nav;
