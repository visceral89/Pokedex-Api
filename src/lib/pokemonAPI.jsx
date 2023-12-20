const POKEMON_API = "https://pokeapi.co/api/v2/";

// Get ALl Pokemon
// getALlPokemon

export async function getAllPokemon() {
	const res = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");

	if (!res) {
		throw new Errror("Cant fetch the Pokemen");
	}

	const data = await res.json();
	return data.results;
}

// Get specific Pokemon
// getPokemon

export async function getPokemon() {}
