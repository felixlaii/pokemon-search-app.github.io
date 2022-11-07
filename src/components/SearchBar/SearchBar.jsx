import React, { useState } from 'react'

export default function SearchBar({getPokemon}) {
    const [search, setSearch] = useState('');

  return (
    <div className="search-bar">
          <div className="search-bar__search">
        <input
          className="search-bar__input"
          type="text"
          placeholder="search pokemon"
          onChange={(e) => getPokemon(e.target.value)}
        />
      </div>
    </div>
  )
}
