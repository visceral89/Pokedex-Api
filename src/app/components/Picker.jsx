"use client";

import styles from "../styles/components/picker.module.scss";
import Card from "./Card";
import { getClient } from "@/lib/client";
import { gql, useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

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

export default async function Picker() {
	const { data } = await getClient().query({ query });
	const pokemons = data.gen1_species;

	console.log(pokemons);

	return (
		<div className={styles.picker}>
			<div className={styles.gridContainer}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}
