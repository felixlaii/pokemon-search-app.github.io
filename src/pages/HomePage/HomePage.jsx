import axios from 'axios';
import React, { useState } from 'react'
import { pokeAPI } from '../../utils/getPokemon';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function HomePage() {



  return (
    <div>
        <SearchBar />
    </div>
  )
}
