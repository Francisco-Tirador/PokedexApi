import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({Estado,TypeList,FilterType}) => {


const rald=e=>{
  Estado(e.target.value)
}


const falc=e=>{
  FilterType(e.target.value)
}


console.log(TypeList)
  return (
    <div>
        <form >
       
        <input type="text" placeholder='Search your favorite Pokemon'
        onChange={rald}
        />

      <select onChange={falc}>
        <option value="All Pokemon">All Pokemon</option>
        {
          TypeList?.map(
            type=>(
              <option key={type?.name} value={type?.name}>{type?.name}</option>
            )
          )
        }
        
        </select>  
        </form>
    </div>
  )
}

export default Form