import openball from "../assets/openedball.png";
import closedball from "../assets/closedball.png";
import { getGradient } from "../script/scripts";

const Modal = ({
  pokemon,
  modalState,
  setModalState,
  getColor,
  isMyPokemon,
  setIsMyPokemon,
}) => {
  const handleFav = () => {
    pokemon.isMyPokemon = !isMyPokemon;
    setIsMyPokemon(!isMyPokemon);
  };

  return (
    <>
      {modalState && (
        <>
          <div
            className="modal-container"
            onClick={() => setModalState(!modalState)}
            style={getGradient(pokemon, "modal")}
          />
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            style={getGradient(pokemon, "modal")}
          >
            <button
              className="btn-close"
              onClick={() => setModalState(!modalState)}
              style={{ backgroundColor: `${getColor(pokemon.type[0])}` }}
            >
              X
            </button>
            <img
              src={pokemon.isMyPokemon ? closedball : openball}
              alt="pokeball"
              width={60}
              onClick={handleFav}
              className="pokeball"
            />
            <div className="img-title">
              <img
                src={pokemon.image}
                alt={pokemon.name.english}
                className="imgPokemon"
              />
              <h1>{pokemon.name.english}</h1>
            </div>

            <div className="type">
              {pokemon.type.map((type) => (
                <button
                  key={type}
                  style={{ backgroundColor: `${getColor(type)}` }}
                >
                  {type}
                </button>
              ))}
            </div>
            <div className="stats">
              {Object.keys(pokemon.base).map((key, i) => (
                <div className="stat-container" key={i}>
                  <div className="stat-key">
                    <p>{key}:</p>
                  </div>
                  <div className="stat-bar">
                    <div
                      className="stat"
                      style={{
                        width: `${pokemon.base[key] / 2.5}%`,
                        backgroundColor: `${getColor(pokemon.type[0])}`,
                      }}
                    >
                      <p>{pokemon.base[key]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
