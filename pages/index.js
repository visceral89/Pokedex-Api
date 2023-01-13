import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import {useState} from "react";
import Pokemon from '../components/Pokemon';
import { Suspense } from 'react';

export default function Home({initPokemon}) {

  const [ pokemon, setPokemon ] = useState(initPokemon)
  const [ offset , setoffset] = useState(0)

  const fetchPokemon = async (url, next) => {
    const response = await fetch(url)
    const nextPokemon = await response.json()

    setoffset(next ? offset + 20 : offset - 20)

    setPokemon(nextPokemon)
  }

  return (

      <Layout title={"PokeApi"}>
        <div className='pokegrid'>
          <Suspense fallback={<div>Loading...</div>}>
          {pokemon.results.map((monster, index) => (
            <Pokemon key={index} pokemon={monster} index={index + offset}/>
          ))}
          </Suspense>
        </div>


            <div className='button-wrapper'>
              <button className="button" onClick={() => fetchPokemon(pokemon.previous, false)}>
                Prev
              </button>
              
              <button className="button" onClick={() => fetchPokemon(pokemon.next, true)}>
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
