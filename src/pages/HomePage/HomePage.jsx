import axios from 'axios';
import React, { useState } from 'react'
import { pokeAPI } from '../../utils/getPokemon';
import SearchBar from '../../components/SearchBar/SearchBar';
import PokemonData from '../../components/PokemonData/PokemonData';

export default function HomePage() {



  return (
    <div>
        <SearchBar />
        <PokemonData />

    </div>
  )
}
