"use client";

import { createContext, useState, useEffect, useContext } from "react";

const pokemonContext = createContext();

export const usePokemonContext = () => useContext(pokemonContext);

export const PokemonProvider = ({ children }) => {
	const [selectedPokemon, setSelectedPokemon] = useState(null);

	return (
		<pokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
			{children}
		</pokemonContext.Provider>
	);
};
