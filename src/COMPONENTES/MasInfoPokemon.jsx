import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { useEffect,useState } from 'react'


const MasInfoPokemon = () => {
 const api=useSelector(state=>state.URL)
  // console.log(api)

const [info, setinfo] = useState()

const rel=api?.species?.url

const getInfo=()=>{

axios.get(`${rel}`)
.then(infoPoke=>setinfo(infoPoke?.data))

}

useEffect(() => {
 getInfo()
}, [])

console.log(info)

 
  const nameMA =api?.name?.toUpperCase()

const back=useNavigate()

const regreso=()=>back("/POKEDEX/")


const color = {
  backgroundColor: info?.color?.name
}


return (
  <div>
      <p onClick={regreso}>Regresar a la POKEDEX</p>
   <h2>{nameMA}</h2>
   <img src={api?.sprites?.front_default} alt="" />

     <p>{info?.flavor_text_entries[11]?.flavor_text}</p>
     <p><span>HABITAT  : </span>{info?.habitat?.name}</p>
     <p><span>AREA  : </span>{info?.pal_park_encounters[0]?.area?.name}</p>
     <p><span>BASE SCORE  : </span>{info?.pal_park_encounters[0]?.base_score}</p>
     <p><span>RATE  : </span>{info?.pal_park_encounters[0]?.rate}</p>
     <p><span>BASE HAPPINESS  : </span>{info?.base_happiness}</p>
     <p><span>CAPTURE RATE  : </span>{info?.capture_rate}</p>
     <div className='tipo' style={color}></div>
    </div>
  )
}

export default MasInfoPokemon