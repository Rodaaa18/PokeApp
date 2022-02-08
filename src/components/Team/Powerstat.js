import "./Powerstat.css";
import "bootstrap/dist/css/bootstrap.css";

const Powerstat = (hero) => {
  // si la api no trae data, devuelve no disponible
  const validStat = (powerStat) => {
    if (powerStat !== "null") {
      return powerStat;
    }
    return "No Disponible";
  };

  return (
    <ul className="dropdown-menu powerStatDropdown">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${hero.hero.stats[1].base_stat}%` }}
        aria-valuenow={hero.hero.stats[1].base_stat}
        aria-valuemin="0"
        aria-valuemax="200"
      >
        <li className="powerstat">
          <strong>Ataque: </strong>
          {validStat(hero.hero.stats[1].base_stat)}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${hero.hero.stats[2].base_stat}%` }}
        aria-valuenow={hero.hero.stats[2].base_stat}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Defensa: </strong>
          {validStat(hero.hero.stats[2].base_stat)}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${hero.hero.stats[3].base_stat}%` }}
        aria-valuenow={hero.hero.stats[3].base_stat}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Ataque Especial: </strong>
          {validStat(hero.hero.stats[3].base_stat)}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${hero.hero.stats[0].base_stat}%` }}
        aria-valuenow={hero.hero.stats[0].base_stat}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Vida: </strong>
          {validStat(hero.hero.stats[0].base_stat)}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${hero.hero.stats[5].base_stat}%` }}
        aria-valuenow={hero.hero.stats[5].base_stat}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Velocidad: </strong>
          {validStat(hero.hero.stats[5].base_stat)}
        </li>
      </div>
    </ul>
  );
};
export default Powerstat;
