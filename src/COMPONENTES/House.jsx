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
      localStorage.setItem('Modevew','ligthMode')
        dispach(reset(data?.NombreEntrenador))
        butt("/POKEDEX/")
    }

    
  return (
    <div className='val'>
    <div className='welcom'>
        <div className='contenLogo'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="logo pokemon" />
        </div>
     <div className='inputWelcome'>
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">Name</label>
            <input  placeholder="Enter your name" type="text" id='name' required {...register("NombreEntrenador")}/>
            <button onClick={submit}><img className='botonX' src="https://cdn-icons-png.flaticon.com/512/1536/1536958.png"/></button>
        </form>
        </div>
        <div className='pokemonWelcome'>
        <h1>Hello coach, sorry I forgot your name, could you repeat it </h1>
        <img src="https://www.megaidea.net/wp-content/uploads/2021/08/Pokemon27.png" alt="" />
      <div></div>
        </div>
        </div>
   </div>
  )
}

export default House