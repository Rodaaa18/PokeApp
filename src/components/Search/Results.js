import { Link } from "react-router-dom";

const Results = ({ recentSearch, validateAddedPoke, setIsLoading }) => {
  return (
    <>
      <div>
        {recentSearch.id > 0 ? (
          <div className="searchResults">
            <div key={recentSearch.id} className="teamMember">
              <div className="heroNameContainer">
                <h1 className="pokeName">{recentSearch.name}</h1>
              </div>
              <img
                src={recentSearch.sprites.front_default}
                alt={recentSearch.name}
                draggable={false}
                onLoad={() => setIsLoading(false)}
                className="teamMemberImg"
              />
              <div className="buttons">
                <Link to={`/search/${recentSearch.id}`}>
                  <button className="btnTeam">Detalles</button>
                </Link>
                <button
                  className="btnTeam"
                  onClick={() => validateAddedPoke(recentSearch)}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Results;
