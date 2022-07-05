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

    


    return (

        <div className="targetPokemon">

            <div>
                <p>{Pokemon?.id}</p>
                <h2>{nameMA}</h2>
                <img src={Pokemon?.sprites?.front_default} alt="" />


            </div>

            
            <p onClick={irATarge}>Mas sobre mi</p>
        </div> 
    )
}

export default TargetPokemon