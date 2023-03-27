import { useState } from "react";
import { getColor, getGradient } from "../script/scripts";
import Modal from "./Modal";

const Pokemon = ({ pokemon }) => {
  const [isMyPokemon, setIsMyPokemon] = useState(pokemon.isMyPokemon);
  const [modal, setModal] = useState(false);

  return (
    <>
      <div
        className="pokemon-container"
        onClick={() => setModal(!modal)}
        style={getGradient(pokemon, "card")}
      >
        <img src={pokemon.image} alt={pokemon.name.english} />
        <h1>{pokemon.name.english}</h1>
      </div>

      <Modal
        pokemon={pokemon}
        modalState={modal}
        setModalState={setModal}
        getColor={getColor}
        isMyPokemon={isMyPokemon}
        setIsMyPokemon={setIsMyPokemon}
      />
    </>
  );
};

export default Pokemon;
