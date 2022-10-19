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
const [Color, setColor] = useState('No')
    const [Pokemon, setPokemon] = useState(false)
   
    const getPokemon = () => {
        axios.get(URL)
            .then(api => setPokemon(api?.data))
    }

    // console.log(Pokemon)

    useEffect(() => {
        getPokemon()
    }, [])

// Pokemon?.name&&
// 
useEffect(() => {
         if(Pokemon)
         { const URL=Pokemon?.species?.url
            axios.get(URL)
            .then(res=>setColor(res?.data))
        // console.log('soy un solo renderizado')
        }
     }, [Pokemon])

    const butt=useNavigate()

    const irATarge=()=>{
        butt("/MasInfo/")
        dispach(reset(Pokemon))
    }
    
    
    const color = {
    backgroundColor:Color?.color?.name
  }
    const nameMA = Pokemon?.name?.toUpperCase()

    return (
            <div>
                <div className='Pokebola'>
                    <div className='PartRed'><div className='cerradura'><p>{Pokemon?.id}</p></div></div>
                    <div className='PartWhait'></div>
                    <div className='Information'>
      
                        <p>{Pokemon?.id}</p>
                        <div className={`CircleColor `} 
                        // style={color}
                        >
                            <img src={Pokemon?.sprites?.other?.dream_world?.front_default} alt="" />
                        </div>
                        <h2>{nameMA}</h2>
                        {/* <p>{Pokemon?.types[0]?.type?.name}</p> */}
                    </div>
                </div>
            </div>
    )
}

export default TargetPokemon


{/* <div className="targetPokemon"> */}

{/* <div>
    <p>{Pokemon?.id}</p>
    <h2>{nameMA}</h2>
    <img src={Pokemon?.sprites?.front_default} alt="" />


</div>


<p onClick={irATarge}>Mas sobre mi</p>
</div>  */}