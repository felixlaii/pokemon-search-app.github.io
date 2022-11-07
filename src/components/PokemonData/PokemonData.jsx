import React from 'react'

export default function PokemonData({ name, sprite, abilities, stats, types }) {
  return (
    <div className="pokemon-data">
        <h1>{name}</h1>
    </div>
  )
}
