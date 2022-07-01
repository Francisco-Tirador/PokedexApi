import React from 'react'
import { useNavigate } from 'react-router-dom'

const House = () => {

    const butt=useNavigate()

    const inicio=()=>butt("/POKEDEX/")

  return (
    <div>
        <form action="">

            <input type="text" />
            <button onClick={inicio}>GO</button>
        </form>
    </div>
  )
}

export default House