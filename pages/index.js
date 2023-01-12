import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import {useState} from "react";
import Pokemon from '../components/Pokemon';

export default function Home({initPokemon}) {

  console.log(initPokemon);

  const [ pokemon, setPokemon ] = useState(initPokemon)

  return (

      <Layout title={"PokeApi"}>
        <div className='pokegrid'>
          {pokemon.results.map((monster, index) => (
            <Pokemon key={index} pokemon={monster} index={index}/>
          ))}
        </div>
      </Layout>
  )
}

export async function getStaticProps(context) {

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  const initPokemon = await response.json()

  return {
    props: {
      initPokemon
    }
  }
}
