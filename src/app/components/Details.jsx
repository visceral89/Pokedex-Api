"use client";

import styles from "../styles/components/details.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePokemonContext } from "../context/Pokemoncontext";

export default function Details() {
	const { selectedPokemon } = usePokemonContext();

	useEffect(() => {
		console.log("Details component selectedPokemon: ", selectedPokemon);
	}, [selectedPokemon]);

	return (
		<div className={styles.detailsSection}>
			<div className={styles.infoContainer}>
				<div className={styles.info}>
					<h1>NAME</h1>
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
	);
}
