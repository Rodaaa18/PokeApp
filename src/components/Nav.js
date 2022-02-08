import { Link } from "react-router-dom";
import logo from "../assets/pokelogo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div />
      <Link to="/challenge-react">
        <img className="logo" src={logo} alt="pokemon" />
      </Link>
      <div className="logo">❤</div>
    </nav>
  );
};

export default Nav;
