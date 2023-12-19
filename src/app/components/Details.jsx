import styles from "../styles/details.module.scss";
import Image from "next/image";

export default function Details() {
	return (
		<div className={styles.detailsSection}>
			<div className={styles.infoContainer}>
				<div className={styles.info}>
					<h1>NAME</h1>
					<div className={styles.infoType}></div>
					<div className={styles.infoStats}></div>
				</div>
			</div>
			<div className={styles.imageContainer}>{/* Image goes here */}</div>
		</div>
	);
}
