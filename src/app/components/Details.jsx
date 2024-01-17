"use client";

import styles from "../styles/components/details.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePokemonContext } from "../context/Pokemoncontext";
import { getAllPokemon } from "@/lib/pokemonAPI";

// https://pokeapi.co/api/v2/pokemon/{name}

export default function Details() {
	const [pokemon, setPokemon] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const { selectedPokemon } = usePokemonContext();

	useEffect(() => {
		if (!selectedPokemon) return;
		fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
			.then((res) => res.json())
			.then((pokemon) => {
				setPokemon(pokemon);
				setIsLoading(false);
			});

		console.log(pokemon);
	}, [selectedPokemon]);

	//const pokemonHP = pokemon.types[0].type.name;
	//const pokemonName = pokemon.name;
	//const pokemonId = pokemon.id;

	return isLoading ? (
		<div className={styles.detailsSection}>
			<div className={styles.infoContainer}>
				<div className={styles.info}></div>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src={"/placeholder_large.png"}
					width={513}
					height={403}
					alt='a thumbnail'
				/>
			</div>
		</div>
	) : pokemon ? (
		<div className={styles.detailsSection}>
			<div className={styles.infoContainer}>
				<div className={styles.info}>
					<h1>{pokemon.name}</h1>
					<p>#{pokemon.id}</p>
					<div className={styles.infoType}></div>
					<div className={styles.infoStats}>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
					</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src={"/placeholder_large.png"}
					width={513}
					height={403}
					alt='a thumbnail'
				/>
			</div>
		</div>
	) : (
		<div className={styles.detailsSection}>
			<div className={styles.infoContainer}>
				<div className={styles.info}>
					<h1>No Pokemon Selected</h1>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src={"/placeholder_large.png"}
					width={513}
					height={403}
					alt='a thumbnail'
				/>
			</div>
		</div>
	);

	/*
		<div className={styles.detailsSection}>
			<div className={styles.infoContainer}>
				<div className={styles.info}>
					<h1>{selectedPokemon}</h1>
					<p>006</p>
					<div className={styles.infoType}></div>
					<div className={styles.infoStats}>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
					</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Image
					src={"/placeholder_large.png"}
					width={513}
					height={403}
					alt='a thumbnail'
				/>
			</div>
		</div>
	*/
}
