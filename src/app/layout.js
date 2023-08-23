import "@/app/styles/globals.scss";
import localFont from "next/font/local";
import { Navbar } from "./components/navbar";

const pokeFont = localFont({ src: "pokemon-font.ttf" });

export const metadata = {
	title: "Pokedex | Rasmus Bremholm",
	description: "A Pokedex app made in NextJS13",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={pokeFont.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
