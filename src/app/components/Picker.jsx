"use client";

import styles from "../styles/components/picker.module.scss";
import Card from "./Card";
import { useState } from "react";

const ITEMS_PER_PAGE = 14;

export default function Picker({ allPokemon }) {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(allPokemon.length / ITEMS_PER_PAGE);

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const selectedPokemon = allPokemon.slice(
		startIndex,
		startIndex + ITEMS_PER_PAGE
	);

	return (
		<div className={styles.picker}>
			<div className={styles.gridContainer}>
				{selectedPokemon.map((pokemon) => (
					<Card
						name={pokemon.name}
						key={pokemon.name + "key"}
						image={pokemon.image}
					/>
				))}
			</div>
			<div className={styles.pagenation}>
				<button
					className={styles.buttonNext}
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
				>
					BACK
				</button>
				<div className={styles.pagesContainer}></div>
				<button
					className={styles.buttonNext}
					onClick={() => setCurrentPage(currentPage + 1)}
					disabled={
						currentPage === Math.ceil(allPokemon.length / ITEMS_PER_PAGE)
					}
				>
					NEXT
				</button>
			</div>
		</div>
	);
}
