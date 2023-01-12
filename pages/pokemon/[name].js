import React from 'react'
import Layout from '../../components/Layout'

const Pokemon = ({pokemon}) => {

    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

  return (

    <Layout title={pokeName}>
        
    </Layout>

  )
}

export default Pokemon


export async function getServerSideProps(context) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`)
    const pokemon = await response.json()


    return {
        props: {}
    }
}