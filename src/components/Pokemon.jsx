import { useState } from "react";

const Pokemon = ({ pokemon }) => {
  const [isMyPokemon, setIsMyPokemon] = useState(pokemon.isMyPokemon);

  return (
    <div>
      <h1>{pokemon.name.english}</h1>
      <p>Type: {pokemon.type.join(" - ")}</p>
    </div>
  );
};

export default Pokemon;
