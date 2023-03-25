import React from "react";
import Pokemon from "./Pokemon";

function PokemonList({ pokemons }) {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}

export default PokemonList;
