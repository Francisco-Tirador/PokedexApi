import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { reset } from './store/Slice/couchSlice'
import axios from 'axios'

const House = () => {




  const ar=()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
  .then(api=>console.log(api.data)
      )
  .catch(err=>console.log(err))
}


ar()

  const nameCo=useSelector(nam=>nam.nameCouch)

  const {handleSubmit,register}=useForm()   

    const butt=useNavigate()

   

const dispach=useDispatch()

    const submit=data=>{
       
        dispach(reset(data?.NombreEntrenador))
        butt("/POKEDEX/")
    }

    
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">Name</label>
            <input placeholder="Enter your name" type="text" id='name' {...register("NombreEntrenador")}/>
            <button onClick={submit}>GO</button>
        </form>
        <h1>{nameCo}</h1>
    </div>
  )
}

export default House