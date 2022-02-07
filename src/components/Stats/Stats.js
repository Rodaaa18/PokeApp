import { useSelector } from "react-redux";
import "./Stats.css";

const Stats = () => {
  const pokeTeam = useSelector((state) => state.hero.heroTeam);
  let [
    totalPeso,
    totalAltura,
    totalAtaque,
    totalDefensa,
    totalVida,
    totalAtaqueEspecial,
    totalVelocidad,
  ] = Array(8).fill(0);

  //si la api no trae data, no la suma
  const validStat = (powerStat) => {
    if (isNaN(powerStat)) {
      return 0;
    }
    return powerStat;
  };

  //sumatoria de statss
  pokeTeam.forEach((hero) => {
    totalPeso += validStat(parseInt(hero.weight));
    totalAltura += validStat(parseInt(hero.height));
    totalAtaque += validStat(parseInt(hero.stats["attack"]));
    totalDefensa += validStat(parseInt(hero.stats["defense"]));
    totalAtaqueEspecial += validStat(parseInt(hero.stats["special-attack"]));
    totalVida += validStat(parseInt(hero.stats["hp"]));
    totalVelocidad += validStat(parseInt(hero.stats["speed"]));
  });

  const highestStat = Math.max(
    totalAtaque,
    totalDefensa,
    totalAtaqueEspecial,
    totalVida,
    totalVelocidad
  );

  let teamType;
  // switch para elegir teamType
  switch (highestStat) {
    case totalAtaque:
      teamType = "Ataque";
      break;
    case totalDefensa:
      teamType = "Defensa";
      break;
    case totalAtaqueEspecial:
      teamType = "Ataque Especial";
      break;
    case totalVida:
      teamType = "Vida";
      break;
    case totalVelocidad:
      teamType = "Velocidad";
      break;
    default:
      teamType = "Desconocido";
  }

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-dark dropdown-toggle statsBtn"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Estadisticas
      </button>
      <div className="dropdown-menu statsDropdown">
        <div className="clearfix">
          <p className="col teamType">
            <strong>Tipo de Equipo: </strong>
            {teamType}
          </p>
        </div>
        <div className="row">
          <p className="col">
            <strong>Peso promedio: </strong>
            {`${Math.round(totalPeso / pokeTeam.length)} kg`}
          </p>
          <p className="col">
            <strong>Altura promedio: </strong>
            {`${Math.round(totalAltura / pokeTeam.length)} cm`}
          </p>
        </div>
        <div className="row">
          <p className="col">
            <strong>Combate: </strong>
            {totalAtaque}
          </p>
          <p className="col">
            <strong>Durabilidad: </strong>
            {totalDefensa}
          </p>
        </div>
        <div className="row">
          <p className="col">
            <strong>Inteligencia: </strong>
            {totalAtaqueEspecial}
          </p>
          <p className="col">
            <strong>Poder: </strong>
            {totalVida}
          </p>
        </div>
        <div className="row">
          <p className="col">
            <strong>Velocidad: </strong>
            {totalVelocidad}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Stats;
