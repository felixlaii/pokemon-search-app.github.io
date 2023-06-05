import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonData from "../../components/PokemonData/PokemonData";

export default function HomePage() {
  return (
    <div>
      <SearchBar />
      <PokemonData />
    </div>
  );
}
