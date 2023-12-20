import styles from "../styles/components/picker.module.scss";
import Card from "./Card";

export default function Picker() {
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
