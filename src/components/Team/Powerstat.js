import "./Powerstat.css";

const Powerstat = ({ poke }) => {
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
        style={{ width: `${poke.stats["attack"]}%` }}
        aria-valuenow={poke.stats["attack"]}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Ataque: </strong>
          {validStat(poke.stats["attack"])}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${poke.stats["defense"]}%` }}
        aria-valuenow={poke.stats["defense"]}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Defensa: </strong>
          {validStat(poke.stats["defense"])}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${poke.stats["special-attack"]}%` }}
        aria-valuenow={poke.stats["special-attack"]}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Ataque Especial: </strong>
          {validStat(poke.stats["special-attack"])}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${poke.stats["hp"]}%` }}
        aria-valuenow={poke.stats["hp"]}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Vida: </strong>
          {validStat(poke.stats["hp"])}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${poke.stats["speed"]}%` }}
        aria-valuenow={poke.stats["speed"]}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Velocidad: </strong>
          {validStat(poke.stats["speed"])}
        </li>
      </div>
    </ul>
  );
};
export default Powerstat;
