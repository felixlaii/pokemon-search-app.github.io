import React, { useState } from "react";
import axios from "axios";
import { pokeAPI } from "../../utils/getPokemon";
import PokemonData from "../PokemonData/PokemonData";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getPokemon = async (search) => {
    if (search.length > 1) {
      setLoading(true);
      axios
        .get(`${pokeAPI}/pokemon`)
        .then((response) => {
          console.log(response);
          if (response) {
            setPokemon(response.data.results);
            setLoading(false);
          }
        })
        .catch((error) => console.log("Pokemon not found"));
    }
  };

  return (
    <div className="search-bar">
      <div className="search-bar__search">
        <input
          className="search-bar__input"
          type="text"
          placeholder="search pokemon"
          onChange={(e) => getPokemon(e.target.value)}
        />
        <button
          className="search-bar__button"
          onClick={(e) => getPokemon(search)}
        >
          search
        </button>
      </div>
        {/* {pokemon.map((pokemons) => {
            <PokemonData
            key={pokemons.id}
            name={pokemons.name}
            sprite={pokemons.sprites.front_default}
            abilities={pokemons.abilities}
            stats={pokemons.stats}
            types={pokemons.types} />

        })} */}
    </div>
  );
}
