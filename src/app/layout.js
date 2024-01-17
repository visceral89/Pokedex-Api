import "./styles/globals.scss";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";

const pokeFont = localFont({ src: "pokemon-font.ttf" });

export const metadata = {
	title: "Pokedex App | Rasmus Bremholm",
	description: "A simple and easy to use Pokedex app with Nextjs 14 & PokeAPI",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={pokeFont.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
