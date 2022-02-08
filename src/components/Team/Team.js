import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removePoke } from "../../redux";
import Powerstat from "./Powerstat";
import "./Team.css";
import "bootstrap/dist/css/bootstrap.css";
const Team = () => {
  const pokeTeam = useSelector((state) => state.poke.heroTeam);
  const dispatch = useDispatch();

  return (
    <div id="team">
      {pokeTeam && pokeTeam.length ? (
        pokeTeam.map((poke) => {
          return (
            <div key={`team${poke.id}`} className="teamMember">
              <div className="heroNameContainer">
                <h1 className="heroName">{poke.name}</h1>
              </div>
              <img
                src={poke.sprites.front_default}
                alt={poke.name}
                draggable={false}
                className="teamMemberImg"
              />
              <div className="buttons btn-group dropdown dropup">
                <button
                  type="button"
                  className="btn btn-dark dropdown-toggle btnTeam"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Powerstats
                </button>
                <Powerstat hero={poke} />
                <Link to={`/${poke.id}`}>
                  <button className="btn btn-dark btnTeam">Detalles</button>
                </Link>
                <button
                  className=" btnTeam"
                  onClick={() => dispatch(removePoke(poke))}
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h1 id="noTeam">Agrega Pokemons a tu equipo!</h1>
      )}
    </div>
  );
};
export default Team;
