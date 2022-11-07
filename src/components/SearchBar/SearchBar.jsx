import React, { useState } from 'react'
import axios from 'axios';
import { pokeAPI } from '../../utils/getPokemon';

export default function SearchBar() {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const getPokemon = async (query) => {
        if(!query) {
            setErrorMsg('You must enter a Pokemon');
            setError(true);
            return;
        }
        axios.get(`${pokeAPI}/pokemon`)
        .then((response) => { console.log(response)
            if(response) {
                setPokemon(response.data.results);
                setLoading(false);
            }
        })
        .catch((error) => console.log('Pokemon not found'))
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
        <button className="search-bar__button" onClick={(e) => getPokemon(search)}>search</button>
      </div>

      
    </div>
  )
}
