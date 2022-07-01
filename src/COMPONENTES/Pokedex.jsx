import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import TargetPokemon from './TargetPokemon'



const Pokedex = () => {
   
    const [Poketion, setPoke] = useState()
   
    /////////////////////////
    const getPokemones=()=>{

        axios.get(`https://pokeapi.co/api/v2/generation/1/`)
        .then(api=>
            setPoke(api.data)
            )
        .catch(err=>console.log(err))
    }
/////////////////////////
const arrayPoke=Poketion?.pokemon_species



useEffect(() => {
  
getPokemones()

}, [])


  return (
    <div>
       {
        arrayPoke?.map(Pokelol=>(
                <TargetPokemon
                URL={Pokelol.url}
                key={Pokelol.name}
                />
            )
        )
       }
    </div>

  )
}

export default Pokedex