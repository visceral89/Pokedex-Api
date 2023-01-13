import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image';
import styles from '../pokemon/pokemon.module.css'

const Pokemon = ({pokemon}) => {

    const pokeIndex = ('000' + (pokemon.id)).slice(-3)
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    console.log(pokemon)

    const renderTypes = () => (
      pokemon.types.map(type =>(
        <li key={type.slot} className={styles.type}>
          {type.type.name}
        </li>
      ))
    )

    const renderStats = () => (
      pokemon.stats.map((stat, index) =>(
        <div key={index} /*className={styles.stats-wrapper}*/>
          <div style={{width: `${stat.base_stat}%`}}>
            {stat.stat.name}: {stat.base_stat}
          </div>
        </div>
      ))
    )

  return (

    <Layout title={pokeName}>
      <div>
        <Image src={pokemon.sprites.front_default} 
        width={250}
        height={250}/>
      </div>

      <div>
        <ul className={styles.list}>
          {renderTypes()}
        </ul>

        <div>
          {renderStats()}
        </div>

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