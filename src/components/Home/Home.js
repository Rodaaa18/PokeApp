import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateRecentSearch } from "../../redux";
import Nav from "../Nav";
import Stats from "../Stats/Stats";
import Team from "../Team/Team";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
  const pokeTeam = useSelector((state) => state.poke.heroTeam);
  const dispatch = useDispatch();

  //delete recent search after loading home
  useEffect(() => {
    dispatch(updateRecentSearch([]));
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <div data-testid="home" id="home">
        <div id="header">
          <div id="titleContainer">
            <h1 id="teamTitle">Tu equipo :</h1>
            {pokeTeam && pokeTeam.length > 0 ? <Stats /> : null}
          </div>
          {pokeTeam === null || (pokeTeam && pokeTeam.length !== 6) ? (
            <Link to="/search">
              <button className="addHero">Agregar Pokemons</button>
            </Link>
          ) : null}
        </div>
        <Team />
      </div>
    </div>
  );
};
export default Home;
