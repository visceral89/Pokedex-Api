"use client";

import styles from "../styles/components/details.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePokemonContext } from "../context/Pokemoncontext";
import Type from "./Type";

// https://pokeapi.co/api/v2/pokemon/{name}

export default function Details() {
	const [pokemon, setPokemon] = useState(null);
	const [sprite, setSprite] = useState("/placeholder_large.png");
	const [statHP, setStatHP] = useState("???");
	const [statAttack, setStatAttack] = useState("???");
	const [statDefense, setStatDefense] = useState("???");
	const [statSpAttack, setStatSpAttack] = useState("???");
	const [statSpDefense, setStatSpDefense] = useState("???");
	const [statSpeed, setStatSpeed] = useState("???");
	const [type, setType] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { selectedPokemon } = usePokemonContext();

	useEffect(() => {
		if (!selectedPokemon) {
			setPokemon(null);
			return;
		}
		setIsLoading(true);
		fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
			.then((res) => res.json())
			.then((data) => {
				setPokemon(data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching Selected Pokemon: ", error);
				setIsLoading(false);
			});
	}, [selectedPokemon]);

	useEffect(() => {
		if (pokemon) {
			console.log(pokemon);
			const hpStat = pokemon.stats.find((stat) => stat.stat.name === "hp");
			setStatHP(hpStat ? hpStat.base_stat : "???");

			const atkStat = pokemon.stats.find((stat) => stat.stat.name === "attack");
			setStatAttack(atkStat ? atkStat.base_stat : "???");

			const defStat = pokemon.stats.find(
				(stat) => stat.stat.name === "defense"
			);
			setStatDefense(defStat ? defStat.base_stat : "???");

			const spdStat = pokemon.stats.find((stat) => stat.stat.name === "speed");
			setStatSpeed(spdStat ? spdStat.base_stat : "???");

			const spAtkStat = pokemon.stats.find(
				(stat) => stat.stat.name === "special-attack"
			);
			setStatSpAttack(spAtkStat ? spAtkStat.base_stat : "???");
			const spDefStat = pokemon.stats.find(
				(stat) => stat.stat.name === "special-defense"
			);
			setStatSpDefense(spDefStat ? spDefStat.base_stat : "???");
			const typesStat = pokemon.types;
			setType(typesStat);
			const sprite = pokemon.sprites.other["official-artwork"].front_default;
			setSprite(sprite);
		}
	}, [pokemon]);

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
		// Everything Loaded
		<div className={styles.detailsSection}>
			<div className={styles.infoContainer}>
				<div className={styles.info}>
					<h1>{pokemon.name}</h1>
					<p>#{pokemon.id}</p>
					<Type types={type} />
					<div className={styles.infoType}></div>
					<div className={styles.infoStats}>
						<div className={styles.stats}>HEALTH: {statHP}</div>
						<div className={styles.stats}>ATTACK: {statAttack}</div>
						<div className={styles.stats}>DEFENCE: {statDefense}</div>
						<div className={styles.stats}>SPEED: {statSpeed}</div>
						<div className={styles.stats}>SP ATK: {statSpAttack}</div>
						<div className={styles.stats}>SP DEF: {statSpDefense}</div>
					</div>
				</div>
			</div>
			<div className={styles.imageContainer}>
				<Image src={sprite} width={513} height={403} alt='a thumbnail' />
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
