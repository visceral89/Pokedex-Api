"use client";

import styles from "../styles/components/picker.module.scss";
import Card from "./Card";

export default function Picker({ allPokemon }) {
	console.log(allPokemon);
	return (
		<div className={styles.picker}>
			<div className={styles.gridContainer}>
				{allPokemon.map((pokemon) => {
					<Card name={pokemon.name} key={pokemon.name + "key"} />;
				})}
				<Card />
			</div>
		</div>
	);
}
