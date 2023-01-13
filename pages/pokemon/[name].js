import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image';

const Pokemon = ({pokemon}) => {

    const pokeIndex = ('000' + (pokemon.id)).slice(-3)
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    console.log(pokemon)

  return (

    <Layout title={pokeName}>
      <div>
        <Image src={pokemon.sprites.front_default} 
        width={250}
        height={250}/>
      </div>
    </Layout>

  );
};

export default Pokemon;


export async function getServerSideProps(context) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`)
    const pokemon = await response.json()


    return {
        props: { pokemon }
    }
}