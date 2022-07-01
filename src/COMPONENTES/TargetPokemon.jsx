import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { reset } from './store/Slice/urlSlice'

const TargetPokemon = ({ URL }) => {

const la=useSelector(state=>state.URL)

const dispach=useDispatch()
const api="hola"
// const rabioli=()=>

   
    const [Pokemon, setPokemon] = useState()
    const getPokemon = () => {
        axios.get(URL)
            .then(api => setPokemon(api?.data))
    }
    // console.log(Pokemon)

    useEffect(() => {
        getPokemon()

    }, [])

    const butt=useNavigate()
    const irATarge=()=>{butt("/MasInfo/")
        dispach(reset(Pokemon))

}
   


    const nameMA = Pokemon?.name?.toUpperCase()

    const color = {
        backgroundColor: Pokemon?.color?.name
    }



    return (

        <div className="targetPokemon">

            <div>
                <h2>{nameMA}</h2>
                <p><span>BASE SCORE  : </span> {Pokemon?.pal_park_encounters?.[0]?.base_score}</p>
                <p><span> RATE  : </span> {Pokemon?.pal_park_encounters?.[0]?.rate}</p>
                <p><span>CAPTURE RATE  : </span> {Pokemon?.capture_rate}</p>
            </div>

            <div className='tipo' style={color}></div>
            <p onClick={irATarge}>Mas sobre mi</p>
        </div>
    )
}

export default TargetPokemon