import styles from "../styles/components/navbar.module.scss";
import Image from "next/image";
import searchIcon from "@/lib/search-icon";

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.logoContainer}>
				<Image src={"/pokemon.png"} height={67} width={68} alt='pokemon logo' />
				Pokedex
			</div>
			<div className={styles.searchContainer}>
				<div className={styles.searchBar}>
					<searchIcon />
					SEARCH
				</div>
			</div>
		</nav>
	);
}
