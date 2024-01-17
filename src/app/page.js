import styles from "./styles/page.module.scss";
import Details from "./components/Details";
import Picker from "./components/Picker";
import { getAllPokemon } from "../lib/pokemonAPI";
import { PokemonProvider } from "./context/Pokemoncontext";

export default async function Home() {
	const allPokemon = await getAllPokemon();

	return (
		<main className={styles.main}>
			<PokemonProvider>
				<Details />
				<Picker allPokemon={allPokemon} />
			</PokemonProvider>
		</main>
	);
}
