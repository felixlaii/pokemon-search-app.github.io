const pokeAPI = `https://pokeapi.co/api/v2`;
const query = {
  pokemon: "pokemon",
};

export async function fetchPokemon(pokemon) {
  console.log(`${pokeAPI}/${query.pokemon}/${pokemon}`);
  return fetch(`${pokeAPI}/${query.pokemon}/${pokemon}`);
}
