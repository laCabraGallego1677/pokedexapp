import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from 'react'


const PokeCard = ({ pokeInfo }) => {
  
  const [pokemon, getPokemon] = useFetch(pokeInfo.url)
  
  useEffect(() => {
    getPokemon()
  }, [])

  const navigate= useNavigate()

  const handlePokeDetail = () => {
    navigate(`/pokedex/${pokeInfo.name}`)
  }

  return (
    <article onClick={handlePokeDetail}>
      <header>
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section>
        <h3>{pokemon?.name}</h3>
        <ul>
          {pokemon?.types.map((typeInfo) => (
            <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
          ))}
        </ul>
      </section>
      <hr />
      <section>
        <ul>
          {pokemon?.stats.map((statInfo) => (
            <li key={statInfo.stat.url}>
              <span>{statInfo.stat.name}</span>
              <span>{statInfo.base_stat}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokeCard