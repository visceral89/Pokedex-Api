import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import {useState} from "react";
import Pokemon from '../components/Pokemon';

export default function Home({initPokemon}) {

  console.log(initPokemon);

  const [ pokemon, setPokemon ] = useState(initPokemon)

  const fetchPokemon = async (url) => {
    const response = await fetch(url)
    const nextPokemon = await response.json()
    setPokemon(nextPokemon)
  }

  return (

      <Layout title={"PokeApi"}>
        <div className='pokegrid'>
          {pokemon.results.map((monster, index) => (
            <Pokemon key={index} pokemon={monster} index={index}/>
          ))}
        </div>


            <div>
              <button className="button" onClick={() => fetchPokemon(pokemon.previous)}>
                Prev
              </button>
              
              <button className="button" onClick={() => fetchPokemon(pokemon.next)}>
                Next
              </button>
            </div>

      </Layout>
  )
}

export async function getStaticProps(context) {

  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const initPokemon = await response.json()

  return {
    props: {
      initPokemon
    }
  }
}
