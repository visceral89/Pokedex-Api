import React from 'react'
import Image from 'next/image'
import styles from './Pokemon.module.css'

const Pokemon = ({pokemon,index}) => {

    const pokeIndex = ('000' + (index + 1)).slice(-3)

  return (

    <div className={styles.card}>
        <Image
           src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`} 
           width={150}
           height={150}
           alt={pokemon.name}
           placeholder='blur'
           blurDataURL='/public/blur.jpg'
        />
        <span>#{pokeIndex}</span>
        {pokemon.name}
    </div>

  )
}

export default Pokemon