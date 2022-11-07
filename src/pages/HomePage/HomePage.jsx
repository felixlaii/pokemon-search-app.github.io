import axios from 'axios';
import React, { useState } from 'react'
import { pokeAPI } from '../../utils/getPokemon';

export default function HomePage() {
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
                setPokemon(response);
                setLoading(false);
            }
        })
        .catch((error) => console.log('Pokemon not found'))
    };


  return (
    <div>
        
    </div>
  )
}
