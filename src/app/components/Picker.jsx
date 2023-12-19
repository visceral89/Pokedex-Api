import styles from "../styles/components/picker.module.scss";
import Card from "./Card";
import getAllPokemon from "@/lib/getAllPokemon";

export default async function Picker() {
	console.log(getAllPokemon);

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
