import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import TargetPokemon from './TargetPokemon'
import { useSelector } from 'react-redux'
import Form from "./Form"

const Pokedex = () => {
  const nameCouch=useSelector(date=>date.nameCouch)
   
    const [Poketion, setPoke] = useState()
    const [SearchPokemon, setSearchPokemon] = useState()
    const [FilterPokemon, setFilterPokemon] = useState()
    const [TypeList, setTypeList] = useState()
    const [FilterType, setFilterType] = useState("All Pokemon")
    /////////////////////////
    

    useEffect(() => {
      
      if(FilterType==="All Pokemon"){
        

        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10`)
        .then(api=>
            setPoke(api?.data?.results)
            )
        .catch(err=>console.log(err))
    
      }else{
        axios.get(`https://pokeapi.co/api/v2/type/${FilterType}/`)
        .then(api=>{
           const array= setPoke(api?.data?.pokemon?.map(hal=>hal.pokemon))
          console.log(array)
          })
        .catch(err=>console.log(err))
      }
      
          }, [FilterType])
          

/////////////////////////
// const arrayPoke=Poketion?


useEffect(() => {
  if(SearchPokemon){
  setFilterPokemon(Poketion?.filter(e=>e.name.includes(SearchPokemon.toLowerCase())))
  }
}, [SearchPokemon])




useEffect(() => {
  
  axios.get(`https://pokeapi.co/api/v2/type/`)
  .then(api=>
      setTypeList(api?.data?.results)
      )
  .catch(err=>console.log(err))

}, [])

//////////////

const [ModoObscuro, setModoObscuro] = useState(true)

const cambio=()=>{
  if(ModoObscuro===true){
    setModoObscuro(false)
  }else{
    setModoObscuro(true)
  }
}



  return (
    <div className={ModoObscuro?"Soleado":"Obscuro"}>
       
      <h2>Welcome {nameCouch}</h2>
<div>

 <img onClick={cambio}src="https://cdn-icons-png.flaticon.com/512/361/361998.png" alt="" className='buttMode'/>
 <p>Modo {ModoObscuro?"Obscuro":"Soleado"} ♥</p>
</div>
       <Form   Estado={setSearchPokemon}
        TypeList={TypeList}
        FilterType={setFilterType}
       />
       {

        FilterPokemon ? 
       FilterPokemon?.map(Pokelol=>(
          <TargetPokemon
          TypeList={TypeList}
          FilterType={setFilterType}
          URL={Pokelol.url}
          key={Pokelol.name}
          />
      )
  )
        :


        Poketion?.map(Pokelol=>(
                <TargetPokemon
                TypeList={TypeList}
                FilterType={setFilterType}
                URL={Pokelol.url}
                key={Pokelol.name}
                />
            )
        )
 
        }
    </div>

  )
}

export default Pokedex