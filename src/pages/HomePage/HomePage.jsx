import React, { useState } from 'react'

export default function HomePage() {
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    

  return (
    <div>HomePage</div>
  )
}
