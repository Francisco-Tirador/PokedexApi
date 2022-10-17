import { useState } from 'react'
import './App.css'
import { Routes,Route,Link } from 'react-router-dom'
import House from './COMPONENTES/House'
import Pokedex from './COMPONENTES/Pokedex'
import MasInfoPokemon from './COMPONENTES/MasInfoPokemon'


function App() {
 

  return (
    <div className="App">

      
<img className='ho' src="https://www.pngplay.com/wp-content/uploads/11/Ho-Oh-Pokemon-Transparent-PNG.png" alt="" />
    
     <Routes>
      
      <Route path='/' element={<House/>}/>
      <Route  path="/POKEDEX/" element={<Pokedex/>}/>
      <Route path='/MasInfo/' element={<MasInfoPokemon/>}/>
     </Routes>
    </div>
  )
}

export default App
