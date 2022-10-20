import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import TargetPokemon from './TargetPokemon'
import { useSelector } from 'react-redux'
import Form from "./Form"
import Paginas from './Paginas'
import { Bloke, PaginaLimitacion } from '../utils/paginacion'
import { useNavigate } from 'react-router-dom'

const Pokedex = ({setMode,Mode}) => {
  const nameCouch = useSelector(date => date.nameCouch)

  const [Poketion, setPoke] = useState()//*Aqui se almacena los poquemones por tipo
  const [SearchPokemon, setSearchPokemon] = useState()//*Aqui se almacena las palabras escritas en el imput
  const [FilterPokemon, setFilterPokemon] = useState()//*Aqui se almacenan los pokemones Filtrados con el SearchPokemon
  const [TypeList, setTypeList] = useState()//*aqui se le pasa por propiedad todos los tipos de pokemon a Form para desplegar las Opciones
  const [FilterType, setFilterType] = useState("All Pokemon")//*se almacena la respuesta del input para mandar a llmar a los pokemones por tipo
  /////////////////////////


const [Pagina, setPagina] = useState(1)
  //?Peticion condicionada 
  const getPokemones = () => {
    if (FilterType === "All Pokemon") {


      axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=300`)
        .then(api =>
          setPoke(api?.data?.results)
        )
        .catch(err => console.log(err))

    } else {
      axios.get(`https://pokeapi.co/api/v2/type/${FilterType}/?offset=0&limit=10`)
        .then(api => {
          const array = setPoke(api?.data?.pokemon?.map(hal => hal.pokemon))
          console.log(array)
        })
        .catch(err => console.log(err))
    }

  }
  //?Primer renderizado y cambio de Filter

  useEffect(() => {
    getPokemones()
    setPagina(1)
  }, [FilterType])

  //?Renderizamos con el metodo include Para buscar pokemon en especifico
  useEffect(() => {
    if (SearchPokemon?.length >= 1) {
      console.log("Hola yo renderice")
      setPagina(1)
      setFilterPokemon(Poketion?.filter(e => e.name.includes(SearchPokemon.toLowerCase())))
    }
  }, [SearchPokemon])



  //?Mandamos a traer todos los tipos de pokemon
  useEffect(() => {

    axios.get(`https://pokeapi.co/api/v2/type/`)
      .then(api =>
        setTypeList(api?.data?.results)
      )
      .catch(err => console.log(err))

  }, [])

 

  //?AQUI empieza la paginacion
  const PokemonSearchLimit = PaginaLimitacion(FilterPokemon, Pagina) //!esto es un hook que Yo cree
  const PokemonTypeLimit = PaginaLimitacion(Poketion, Pagina)


  const PaginacionBlokeFilter= Bloke(FilterPokemon, Pagina, 5)//!este Hook nos sirve para Crear los bloques de paginacion y yo lo cree
  const PaginacionBlokeType = Bloke(Poketion, Pagina, 5)

  //?Boton para mostrar todas las pokebolas

  const [Clase, setClase] = useState(true)

  const activClass = () => {
    if (Clase) { setClase(false) }
    else { setClase(true) }
  }
  //?Boton Modo obscuro op claro

  const ModeVew=()=>{
    if(Mode==="ligthMode"){
      localStorage.setItem('Modevew',"darkMode"),
      setMode("darkMode")
    
    }else if(Mode==='darkMode'){(localStorage.setItem('Modevew',"ligthMode")),
    setMode("ligthMode")
  }
  }
//?Pokemon Ramdom
const [PokeRandom, setPokeRandom] = useState()

useEffect(() => {
 const ran=Math.ceil(Math.random()*300)//TODO- random nos da unnumero aleatorio del 0 al 1 pero nunca 1
 
 if(Poketion){
 const URL=Poketion[ran]?.url
 console.log(ran)
 console.log(URL)
  axios.get(URL )
  .then(res=>setPokeRandom(res?.data))
 }
}, [FilterType])

console.log(PokeRandom)


  return (
    <div >
      <div className='Head'>
      <h2>Welcome  {nameCouch}</h2>
      <div className='PokemonRandom'>
          
              <img src={ PokeRandom?.sprites?.other?.dream_world?.front_default?PokeRandom?.sprites?.other?.dream_world?.front_default:PokeRandom?.sprites?.front_default} alt="" />
          
      </div>
      <button onClick={activClass} className='PokedexButton'><img src="https://cdn-icons-png.flaticon.com/512/1752/1752776.png" className='botonX' /> Open all pokeballs</button>
      <button onClick={ModeVew} className='PokedexButton'>
        <img src="https://cdn-icons-png.flaticon.com/512/1752/1752776.png" className='botonX' />{Mode==="ligthMode"?'CHANGE DARK MODE':'CHANGE LIGTH MODE'}</button>
      <div>
      </div>
      <Form Estado={setSearchPokemon}
        TypeList={TypeList}
        FilterType={setFilterType}
      />

      {
        FilterPokemon?.length >= 1 && SearchPokemon?.length >= 1 ?
          <Paginas
            setPagina={setPagina}
            Pagina={Pagina}
            Cl={Clase}
            arrayPaginas={PaginacionBlokeFilter?.arrayPaginas}
            contadorPaginas={PaginacionBlokeFilter?.contadorPaginas}
          /> :
          <Paginas
            setPagina={setPagina}
            Pagina={Pagina}
            Cl={Clase}
            arrayPaginas={PaginacionBlokeType?.arrayPaginas}
            contadorPaginas={PaginacionBlokeType?.contadorPaginas}
          />

      }
      </div>
      <div className='Pokedex'>

        {

          FilterPokemon?.length === 0 ?

            <div>No existe este Pokemon</div>

            : FilterPokemon?.length >= 1 && SearchPokemon?.length >= 1 ?
              PokemonSearchLimit[0]?.map(Pokelol => (
                <TargetPokemon
                  TypeList={TypeList}
                  FilterType={setFilterType}
                  URL={Pokelol.url}
                  Cl={Clase}
                  key={Pokelol.name}
                />
              )
              )
              :
              PokemonTypeLimit[0]?.map(Pokelol => (
                <TargetPokemon
                  TypeList={TypeList}
                  FilterType={setFilterType}
                  URL={Pokelol.url}
                  Cl={Clase}
                  key={Pokelol.name}
                />
              )
              )

        }
      </div>

    </div>

  )
}

export default Pokedex