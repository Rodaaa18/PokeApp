import Nav from "../Nav";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Details.css";
import "bootstrap/dist/css/bootstrap.css";

const Details = ({ match }) => {
  const history = useHistory();
  const [pokeDetails, setPokeDetails] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const fetchedData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
    );

    setPokeDetails(fetchedData.data);
  };

  const stats = () => {
    const status = pokeDetails.stats.map((stat) => {
      return stat.stat.name + " " + stat.base_stat + ", ";
    });
    return status;
  };
  console.log(pokeDetails);
  return (
    <div>
      <Nav />
      {pokeDetails.id >= 0 ? (
        <div key={`details${pokeDetails.id}`} id="detailsCard">
          <img
            src={pokeDetails.sprites.front_default}
            alt={pokeDetails.name}
            id="detailsImg"
            draggable={false}
          />
          <div id="details">
            <h1 id="heroTitle">{pokeDetails.name}</h1>
            <hr />
            <p className="info">
              <strong>Peso:</strong> {pokeDetails.weight} gr
            </p>
            <p className="info">
              <strong>Altura:</strong> {pokeDetails.height} pulgadas
            </p>
            <p className="info">
              <strong>Nombre completo:</strong> {pokeDetails.name}
            </p>
            <p className="info">
              <strong>Tipo:</strong> {pokeDetails.types[0].type.name}
            </p>
            <p className="info">
              <strong>Stats:</strong> {stats()}
            </p>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      <button className="btn btn-dark back" onClick={() => history.goBack()}>
        Regresar
      </button>
    </div>
  );
};

export default Details;
