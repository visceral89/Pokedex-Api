import styles from "@/app/styles/Navbar.module.scss";
import Image from "next/image";

export const Navbar = () => {
	return (
		<nav className={styles.Navbar}>
			<div className={styles.Logo}>
				<Image
					src="/pokemon-icon.png"
					alt="pokemon icon"
					width={67}
					height={68}
				/>
				<h1>Pokemon</h1>
			</div>
			<div className={styles.searchBarContainer}>
				<div className={styles.searchBar}>
					<input
						type="text"
						placeholder="Search"
						pattern="^[a-zA-Z\s]+$"
						title="Search"
					/>
				</div>
			</div>
		</nav>
	);
};
