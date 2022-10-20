import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { useEffect, useState } from 'react'


const MasInfoPokemon = () => {
  const [info, setinfo] = useState()
  const [Pokemon, setPokemon] = useState()

  const api = useSelector(state => state.URL)

  const Link = Pokemon?.species?.url


  const getInfo = () => {
    axios.get(`${Link}`)
      .then(infoPoke => setinfo(infoPoke?.data))

  }



  useEffect(() => {
    axios.get(api)
      .then(res => setPokemon(res.data))
  }, [])
  useEffect(() => {
    if (Pokemon) {
      getInfo()
    }
  }, [Pokemon])



  const nameMA = Pokemon?.name?.toUpperCase()

  const back = useNavigate()

  const regreso = () => back("/POKEDEX/")


  const color = {
    backgroundColor: info?.color?.name
  }


  return (
    <div className='MasInfoTarget'>
      <button onClick={regreso}><img className='botonX' src="https://cdn-icons-png.flaticon.com/512/4885/4885344.png" title='Return to Pokedex' /></button>
      <div className='Infoimagen'>
        <img src={Pokemon?.sprites?.other?.dream_world?.front_default ? Pokemon?.sprites?.other?.dream_world?.front_default : Pokemon?.sprites?.front_default ?
          Pokemon?.sprites?.front_default : 'https://pm1.narvii.com/6210/1e21aac09c41b0481d73a80b2762cb4cd097b4d5_hq.jpg'} />
      </div>
      <div className={`Info ${Pokemon?.types[0]?.type.name}`}>
        <h2 >{nameMA}</h2>
        <p className={Pokemon?.types[0]?.type.name === "dark" && 'blackContra'}>{info?.flavor_text_entries[11]?.flavor_text}</p>
        <div className='gat'>
          <p className={Pokemon?.types[0]?.type.name === "dark" && 'blackContra'}><span>HABITAT  : </span>{info?.habitat?.name}</p>
          <p className={Pokemon?.types[0]?.type.name === "dark" && 'blackContra'}><span>AREA  : </span>{info?.pal_park_encounters[0]?.area?.name}</p>
          <p className={Pokemon?.types[0]?.type.name === "dark" && 'blackContra'}><span>BASE SCORE  : </span>{info?.pal_park_encounters[0]?.base_score}</p>
          <p className={Pokemon?.types[0]?.type.name === "dark" && 'blackContra'}><span>RATE  : </span>{info?.pal_park_encounters[0]?.rate}</p>
          <p className={Pokemon?.types[0]?.type.name === "dark" && 'blackContra'}><span>BASE HAPPINESS  : </span>{info?.base_happiness}</p>
          <p className={Pokemon?.types[0]?.type.name === "dark" && 'blackContra'}><span>CAPTURE RATE  : </span>{info?.capture_rate}</p>
          <p className={Pokemon?.types[0]?.type.name === "dark" && 'blackContra'}>TYPE</p> <div className={`tipo ${Pokemon?.types[0]?.type.name === "dark" && 'blackContra'}`} style={color}>{Pokemon?.types[0]?.type.name}</div>
        </div>
        <div className='sprites'>
          <img className='Infimag' src={Pokemon?.sprites?.front_default} />
          <img className='Infimag' src={Pokemon?.sprites?.back_default} />

        </div>

      </div>
    </div>
  )
}

export default MasInfoPokemon