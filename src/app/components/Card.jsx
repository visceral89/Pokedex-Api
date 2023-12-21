"use client";

import styles from "../styles/components/picker.module.scss";
import Image from "next/image";
import { usePokemonContext } from "../context/Pokemoncontext";
import { useEffect } from "react";

/*  <img src="https://img.pokemondb.net/sprites/ruby-sapphire/normal/bulbasaur.png" alt="Bulbasaur"> */

export default function Card({ name }) {
	const { selectedPokemon, setSelectedPokemon } = usePokemonContext();

	const isSelected = name === selectedPokemon;
	const cardClass = isSelected ? styles.cardSelected : styles.card;

	const handleSelect = () => {
		setSelectedPokemon(name);
	};

	

	const spriteUrl = `https://img.pokemondb.net/sprites/ruby-sapphire/normal/${name}.png`;

	return (
		<div className={cardClass} onClick={handleSelect}>
			<Image
				src={spriteUrl}
				width={113}
				height={124}
				alt={name + "thumbnail"}
			/>
		</div>
	);
}
