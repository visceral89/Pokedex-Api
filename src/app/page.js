import Image from "next/image";
import styles from "@/app/styles/page.module.scss";
import Details from "./components/Details";

export default function Home() {
	return (
		<main className={styles.main}>
			<Details />
		</main>
	);
}
