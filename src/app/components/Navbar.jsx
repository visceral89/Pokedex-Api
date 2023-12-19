import styles from "../styles/components/navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.logoContainer}>
				<Image
					src={"/pokemon.png"}
					height={300}
					width={300}
					alt='pokemon logo'
				/>
				Pokedex
			</div>
			<div className={styles.searchContainer}></div>
		</nav>
	);
}
