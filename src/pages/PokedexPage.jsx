import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ListPokemons from "../components/PokedexPage/ListPokemons";
import { useRef } from "react";
import { useState } from "react";
import SelectType from "../components/PokedexPage/SelectType";

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState("");

  const [typeSelected, setTypeSelected] = useState("allPokemons");

  const inputSearch = useRef();

  const trainer = useSelector((states) => states.trainer);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  const [pokemons, getPokemons, getPokedByType] = useFetch(url);

  useEffect(() => {
    if (typeSelected === "allPokemons") {
      getPokemons();
    } else {
      getPokedByType(typeSelected);
    }
  }, [typeSelected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim().toLowerCase());
  };

  const pokemonsFiltered = pokemons?.results.filter((poke) => {
    return poke.name.includes(pokeSearch);
  });

  return (
    <div>
      <p>
        Welcome <span>{trainer}</span>, here you can find your favorite Pokemon
      </p>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search</button>
      </form>
      <SelectType setTypeSelected={setTypeSelected} />
      <ListPokemons pokemons={pokemonsFiltered} />
    </div>
  );
};

export default PokedexPage;
