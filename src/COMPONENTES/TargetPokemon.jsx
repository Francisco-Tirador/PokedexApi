import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { reset } from './store/Slice/urlSlice'

const TargetPokemon = ({ URL, Cl }) => {

    const la = useSelector(state => state.URL)
    const dispach = useDispatch()
    const api = "hola"
    const [Pokemon, setPokemon] = useState()

    const getPokemon = () => {
        axios.get(URL)
            .then(api => setPokemon(api?.data))
    }


    useEffect(() => {
        getPokemon()
    }, [])


    const butt = useNavigate()

    const goTarget = () => {
        butt("/MasInfo/")
        dispach(reset(URL))
    }

    const nameMA = Pokemon?.name?.toUpperCase()

    return (
        <div>
            <div className='Pokebola'>
                <div className={` ${Cl && 'PartRed'}`}>
                    {
                        <p>{Pokemon?.id}</p>
                    }
                    <div className='cerradura'>{
                        <img className='prePokemon' src={Pokemon?.sprites?.front_default ?
                            Pokemon?.sprites?.front_default : 'https://pm1.narvii.com/6210/1e21aac09c41b0481d73a80b2762cb4cd097b4d5_hq.jpg'} alt="" />
                    }</div>
                </div>
                <div className={` ${Cl && 'PartWhait'}`}></div>
                <div className='Information'>

                    <p>{Pokemon?.id}</p>
                    <div className={`CircleColor ${Pokemon?.types[0]?.type.name} `}>
                        <img onClick={goTarget} src={Pokemon?.sprites?.other?.dream_world?.front_default ? Pokemon?.sprites?.other?.dream_world?.front_default : Pokemon?.sprites?.front_default ?
                            Pokemon?.sprites?.front_default : 'https://pm1.narvii.com/6210/1e21aac09c41b0481d73a80b2762cb4cd097b4d5_hq.jpg'} alt="" />
                    </div>
                    <h2>{nameMA}</h2>
              
                </div>
            </div>
        </div>
    )
}

export default TargetPokemon
