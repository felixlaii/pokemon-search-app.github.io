import React, { useState } from "react";
import axios from "axios";
import { fetchPokemon } from "../../utils/getPokemon";
import PokemonData from "../PokemonData/PokemonData";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemon = async (search) => {
    if (!search) {
      setLoading(true);
      axios
        .get(fetchPokemon(search))
        .then((response) => {
          console.log(response.data.results);
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
          onChange={(e) => getPokemon(search)}
        />
      </div>
      {loading ? (
        <div className="search-bar__loading">
          <p> loading ...</p>
        </div>
      ) : null}
      {!loading && pokemon ? (
        <PokemonData
          name={pokemon.name}
          abilities={pokemon.abilities}
          stats={pokemon.stats}
          types={pokemon.types}
        />
      ) : null}
    </div>
  );
}
