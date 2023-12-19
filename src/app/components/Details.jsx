import styles from "../styles/components/details.module.scss";
import Image from "next/image";

export default function Details({ pokemon }) {
	return (
		<div className={styles.detailsSection}>
			<div className={styles.infoContainer}>
				<div className={styles.info}>
					<h1>NAME</h1>
					<p>006</p>
					<div className={styles.infoType}></div>
					<div className={styles.infoStats}>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
						<div className={styles.stats}>STATS: 100</div>
					</div>
				</div>
			</div>
			<div className={styles.imageContainer}>{/* Image goes here */}</div>
		</div>
	);
}
