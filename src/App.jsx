import { useEffect, useState } from "react";
import { getPokemonImage, getPokemons } from "./services/PokemonService";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import TypeSelect from "./components/TypeSelect";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsToShow, setPokemonsToShow] = useState([]);

  const [typePkm, setTypePkm] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [pkmsPerPage] = useState(100);

  const lastIndex = currentPage * pkmsPerPage;
  const firstIndex = lastIndex - pkmsPerPage;

  useEffect(() => {
    getPokemons().then((pkms) => {
      let types = [];

      pkms.forEach((pokemon) => {
        pokemon.image = getPokemonImage(pokemon.id);
        pokemon.type.forEach((t) => types.push(t));
      });

      setPokemons(pkms);
      setPokemonsToShow(pkms);
      setTypePkm(Array.from(new Set(types)));
    });
  }, []);

  const handleSearch = (value) => {
    setSearch(value);

    setPokemonsToShow(
      pokemons.filter((pokemon) =>
        pokemon.name.english.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const onSeeMyPkms = () => {
    setPokemonsToShow(pokemons.filter((pokemon) => pokemon.isMyPokemon));

    setCurrentPage(1);
    setSearch("");
  };

  const onSeeAllPkms = () => {
    setPokemonsToShow(pokemons);

    setCurrentPage(1);
    setSearch("");
  };

  const onTypeSelected = (type) => {
    if (type === "all") setPokemonsToShow(pokemons);
    else
      setPokemonsToShow(
        pokemons.filter((pokemon) => pokemon.type.includes(type))
      );

    setSearch("");
  };

  return (
    <div className="container">
      <div className="filters">
        <SearchBar search={search} onSearch={handleSearch} />

        <div className="btn-filter">
          <button onClick={onSeeMyPkms}>See My Pokemons</button>
          <button onClick={onSeeAllPkms}>See All Pokemons</button>
        </div>

        <TypeSelect
          pokemonType={typePkm}
          onTypeSelected={onTypeSelected}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <PokemonList
        pokemons={pokemonsToShow}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
      />

      <Pagination
        pkmsPerPage={pkmsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPkms={pokemonsToShow.length}
      />
    </div>
  );
}

export default App;
