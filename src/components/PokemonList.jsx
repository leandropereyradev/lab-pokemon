import React from "react";
import Pokemon from "./Pokemon";

function PokemonList({ pokemons, firstIndex, lastIndex }) {
  return (
    <div className="pokemons-container">
      {pokemons
        .map((pokemon) => <Pokemon pokemon={pokemon} key={pokemon.id} />)
        .slice(firstIndex, lastIndex)}
    </div>
  );
}

export default PokemonList;
