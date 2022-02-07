import { Link } from "react-router-dom";
import logo from "../assets/pokelogo.png";

const Nav = () => {
  return (
    <nav>
      <div />
      <Link to="/challenge-react">
        <img className="logo" src={logo} alt="pokemon" />
      </Link>
      <div></div>
      <div>❤</div>
    </nav>
  );
};

export default Nav;
