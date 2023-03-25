import { useEffect, useState } from "react";
import { getPokemons } from "./services/PokemonService";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPokemons().then((pokemons) => setPokemons(pokemons));
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="App">
      <SearchBar search={search} onSearch={handleSearch} />

      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
