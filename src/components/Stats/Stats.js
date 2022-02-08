import { useSelector } from "react-redux";
import "./Stats.css";
import "bootstrap/dist/css/bootstrap.css";

const Stats = () => {
  const pokeTeam = useSelector((state) => state.poke.pokeTeam);
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
  pokeTeam.forEach((poke) => {
    totalPeso += validStat(parseInt(poke.weight));
    totalAltura += validStat(parseInt(poke.height));
    totalAtaque += validStat(parseInt(poke.stats[1].base_stat));
    totalDefensa += validStat(parseInt(poke.stats[2].base_stat));
    totalAtaqueEspecial += validStat(parseInt(poke.stats[3].base_stat));
    totalVida += validStat(parseInt(poke.stats[0].base_stat));
    totalVelocidad += validStat(parseInt(poke.stats[5].base_stat));
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
        className=" dropdown-toggle btnStats"
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
            <strong>Vida: </strong>
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
