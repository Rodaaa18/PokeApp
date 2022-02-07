import { Link } from "react-router-dom";

const Results = ({ recentSearch, validateAddedPoke, setIsLoading }) => {
  console.log(recentSearch);

  const length = (obj) => {
    let leOfO = Object.keys(obj).length;
    console.log(leOfO);
  };

  return (
    <div className="searchResults">
      {recentSearch && recentSearch >= length(recentSearch)
        ? recentSearch.map((poke) => {
            console.log(poke);
            return (
              <div key={poke.id} className="teamMember">
                <div className="heroNameContainer">
                  <h1 className="pokeName">{poke.name}</h1>
                </div>
                <img
                  src={poke.sprites.front_default}
                  alt={poke.name}
                  draggable={false}
                  onLoad={() => setIsLoading(false)}
                  className="teamMemberImg"
                />
                <div className="buttons">
                  <Link to={`/search/${poke.id}`}>
                    <button className="btn btn-dark btnTeam">Detalles</button>
                  </Link>
                  <button
                    className="btn btn-dark btnTeam"
                    onClick={() => validateAddedPoke(poke)}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            );
          })
        : console.log("puto")}
    </div>
  );
};
export default Results;
