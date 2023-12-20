import Image from "next/image";
import styles from "@/app/styles/page.module.scss";
import Details from "./components/Details";
import Picker from "./components/Picker";
import { getAllPokemon } from "@/lib/pokemonAPI";

export default async function Home() {
	const allPokemon = await getAllPokemon();

	return (
		<main className={styles.main}>
			<Details />
			<Picker allPokemon={allPokemon} />
		</main>
	);
}
