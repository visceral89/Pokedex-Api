import styles from "./icons.module.scss";
import Image from "next/image";

export default function searchIcon() {
	return <Image src={"/search.svg"} width={20} height={20} alt='search icon' />;
}
