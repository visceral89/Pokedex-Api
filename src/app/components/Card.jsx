"use client";

import styles from "../styles/components/picker.module.scss";
import Image from "next/image";
import { usePokemonContext } from "../context/Pokemoncontext";

/*  <img src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/bulbasaur.png" alt="Bulbasaur"> */

export default function Card({ name }) {
	const { setSelectedPokemon } = usePokemonContext();

	const handleSelect = () => {
		setSelectedPokemon(name);
	};

	const spriteUrl = `https://img.pokemondb.net/sprites/ruby-sapphire/normal/${name}.png`;

	return (
		<div className={styles.card} onClick={handleSelect}>
			<Image
				src={spriteUrl}
				width={113}
				height={124}
				alt={name + "thumbnail"}
			/>
		</div>
	);
}
