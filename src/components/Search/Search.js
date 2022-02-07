import Nav from "../Nav";
import Results from "./Results";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPoke, updateRecentSearch } from "../../redux";
import { Redirect, useHistory } from "react-router";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { noRepeat, validAlignment } from "./ValidPoke";
import "./Search.css";

const Search = () => {
  //history para boton regresar
  const history = useHistory();
  //redux hooks
  const pokeTeam = useSelector((state) => state.poke.pokeTeam);
  const recentSearch = useSelector((state) => state.search.recentSearch);
  const dispatch = useDispatch();

  //mensaje error y carga
  const [validSelection, setValidSelection] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // check if team is already full
  if (pokeTeam && pokeTeam.length === 6) {
    return <Redirect to="/challenge-react" />;
  }

  const searchPoke = async (value) => {
    if (value) {
      dispatch(updateRecentSearch([]));
      setIsLoading(true);
      const results = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${value}`
      );
      // si se encuentran resultados, se muestran
      if (results.data.id) {
        let search = results.data;
        // console.log(search);
        dispatch(updateRecentSearch(search));
        setErrorMessage("paso");
        // si no se encuentran, se muestra error
      } else {
        setIsLoading(false);
        setErrorMessage("No encontrado");
      }
    }
  };
  console.log(errorMessage);
  // funcion para validar pokemon seleccionado
  const validateAddedPoke = (poke) => {
    if (errorMessage) {
      setErrorMessage("");
    }
    // asignacion de valor error message
    validAlignment(pokeTeam, poke) ||
      setErrorMessage(
        "No podés elegir más de tres pokemones de la misma alineación."
      );

    noRepeat(pokeTeam, poke) ||
      setErrorMessage("No podés elegir el mismo pokemon más de una vez.");

    if (noRepeat(pokeTeam, poke) && validAlignment(pokeTeam, poke)) {
      setValidSelection(true);
      dispatch(addPoke(poke));
    } else {
      setValidSelection(false);
    }
  };
  //   console.log(setIsLoading);
  return (
    <div>
      <Nav />
      <button
        className="btn btn-dark backToTeam"
        onClick={() => history.goBack()}
      >
        Volver al equipo
      </button>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(value) => {
          searchPoke(value.search);
        }}
      >
        <Form className="row g-3 align-items-center searchContainer">
          <div className="col-auto">
            <label htmlFor="search" className="form-label addSuperHero">
              Agregar Pokemon
            </label>
          </div>
          <div className="col-auto">
            <Field name="search" type="text" className="form-control" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-dark">
              Buscar
            </button>
          </div>
        </Form>
      </Formik>

      <Results
        recentSearch={recentSearch}
        validateAddedPoke={validateAddedPoke}
        setIsLoading={setIsLoading}
      />
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}

      {errorMessage && (
        <div
          className="alert alert-danger alert-dismissible fade show alertSearch"
          onClick={() => setErrorMessage(false)}
          role="alert"
        >
          {errorMessage}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setErrorMessage("errorazo")}
          ></button>
        </div>
      )}
      {validSelection && (
        <div
          className="alert alert-success alert-dismissible fade show alertSearch"
          onClick={() => setValidSelection(false)}
          role="alert"
        >
          Agregado al equipo.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setValidSelection(false)}
          ></button>
        </div>
      )}
    </div>
  );
};
export default Search;
