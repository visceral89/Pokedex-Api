import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const query = gql`
	query genOnePokemon {
		gen1_species: pokemon_v2_pokemonspecies(
			where: { pokemon_v2_generation: { name: { _eq: "generation-i" } } }
			order_by: { id: asc }
		) {
			id
			name
		}
	}
`;

export default async function getAllPokemon() {
	const { data } = await getClient().query({ query });
	const pokemons = data.gen1_species;

	return await pokemons.json();
}
