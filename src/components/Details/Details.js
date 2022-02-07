import Nav from "../Nav";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Details.css";

const Details = ({ match }) => {
  const history = useHistory();
  const [heroDetails, setHeroDetails] = useState([]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const fetchedData = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
    );

    setHeroDetails(fetchedData.data);
  };
  console.log(heroDetails);
  return (
    <div>
      <Nav />
      {heroDetails.id >= 0 ? (
        <div key={`details${heroDetails.id}`} id="detailsCard">
          <img
            src={heroDetails.sprites.front_default}
            alt={heroDetails.name}
            id="detailsImg"
            draggable={false}
          />
          <div id="details">
            <h1 id="heroTitle">{heroDetails.name}</h1>
            <hr />
            <p className="info">
              <strong>Peso:</strong> {heroDetails.weight} gr
            </p>
            <p className="info">
              <strong>Altura:</strong> {heroDetails.height} pulgadas
            </p>
            <p className="info">
              <strong>Nombre completo:</strong> {heroDetails.name}
            </p>
            <p className="info">
              <strong>Tipo:</strong> {heroDetails.types["name"]}
            </p>
            <p className="info">
              <strong>Stats:</strong> {heroDetails.stats["name"]}
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
