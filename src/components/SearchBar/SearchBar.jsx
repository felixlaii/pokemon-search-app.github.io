import React, { useState } from "react";
import axios from "axios";
import { pokeAPI } from "../../utils/getPokemon";
import PokemonData from "../PokemonData/PokemonData";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getPokemon = async (search) => {
    if (!search) {
      setLoading(true);
      axios
        .get(`${pokeAPI}/pokemon/${search}`)
        .then((response) => {
        //   console.log(response.data.results);
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
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="search-bar__button"
          onClick={(e) => getPokemon(search)}
        >
          search
        </button>
      </div>
      {/* {pokemon.length ? (
        pokemon.map((pokemons) => {
          return (
            <div className="search-bar__results">
              <div className="search-bar__wrapper">
                <div className="search-bar__card">
                  <div className="search-bar__image">
                    <img
                      className="search-bar__poster"
                      src={pokemons.sprites.front_default}
                      alt="poster"
                    />
                  </div>
                  <div className="search-bar__details">
                    <p className="search-bar__title">{pokemons.name}</p>
                    <p className="search-bar__abilities">{pokemons.abilities}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="searc-bar__loading">
          <div className="search-bar__error">
            <p className="search-bar__message">find your favourite movie!</p>
          </div>
        </div>
      )} */}
      {pokemon.map((pokemons) => {
            <PokemonData
            key={pokemons.id}
            name={pokemons.name}
            // sprite={pokemons.sprites.front_default}
            abilities={pokemons.abilities}
            stats={pokemons.stats}
            types={pokemons.types} />

        })}
    </div>
  );
}
