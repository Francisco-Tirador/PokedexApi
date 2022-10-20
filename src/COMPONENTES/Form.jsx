import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({Estado,TypeList,FilterType}) => {


const rald=e=>{
  if(e.target.value?.length===0){
  Estado()
  }else{Estado(e.target.value)}
}


const falc=e=>{
  FilterType(e.target.value)
}


// console.log(TypeList)
  return (
    <div>
        <form className='Form'>
       
        <input type="text" placeholder='Search your favorite Pokemon'
        onChange={rald}
        />

      <select className='Selection' onChange={falc}>
        <option value="All Pokemon" >All Pokemon</option>
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