import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const MasInfoPokemon = () => {
const api=useSelector(state=>state.URL)
    console.log(api)

    const nameMA = api.name.toUpperCase()

const back=useNavigate()

const regreso=()=>back("/POKEDEX/")

  return (
    <div>
        <p onClick={regreso}>Regresar a la POKEDEX</p>
     <h2>{nameMA}</h2>
     <p>{api.flavor_text_entries[11].flavor_text}</p>
     <p><span>HABITAT  : </span>{api.habitat.name}</p>
     <p><span>AREA  : </span>{api.pal_park_encounters[0].area.name}</p>
     <p><span>BASE SCORE  : </span>{api.pal_park_encounters[0].base_score}</p>
     <p><span>RATE  : </span>{api.pal_park_encounters[0].rate}</p>
     <p><span>BASE HAPPINESS  : </span>{api.base_happiness}</p>
     <p><span>CAPTURE RATE  : </span>{api.capture_rate}</p>

    </div>
  )
}

export default MasInfoPokemon