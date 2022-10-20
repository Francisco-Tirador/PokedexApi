import { useEffect, useState } from 'react'
import './App.css'
import { Routes,Route,Link } from 'react-router-dom'
import House from './COMPONENTES/House'
import Pokedex from './COMPONENTES/Pokedex'
import MasInfoPokemon from './COMPONENTES/MasInfoPokemon'
import Footer from './COMPONENTES/Footer'
import ProtectedRoutes from './COMPONENTES/ProtectedRoutes'
import { useSelector } from 'react-redux'

function App() {

const [Mode, setMode] = useState() 
const name=useSelector(res=>res.nameCouch)
 

useEffect(() => {
  const getLocalMode=localStorage.getItem("Modevew")
  if(getLocalMode){
  setMode( localStorage.getItem("Modevew"))
  console.log(localStorage.getItem("Modevew"))
  }
  else{setMode('ligthMode')}
}, [])
 useEffect(() => {
  
 }, [Mode])
 


  return (
    <div className={`App ${Mode}`}>





     <Routes>
      
      <Route path='/' element={<House/>}/>
      <Route element={<ProtectedRoutes Name={name}/>}>
      <Route  path="/POKEDEX/" element={<Pokedex  setMode={setMode} Mode={Mode} />}/>
      <Route path='/MasInfo/' element={<MasInfoPokemon/>}/>
      </Route>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
