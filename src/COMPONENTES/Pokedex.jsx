import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import TargetPokemon from './TargetPokemon'
import { useSelector } from 'react-redux'
import Form from "./Form"
import Paginas from './Paginas'
import { PaginaLimitacion } from '../utils/paginacion'

const Pokedex = () => {
  const nameCouch = useSelector(date => date.nameCouch)

  const [Poketion, setPoke] = useState()
  const [SearchPokemon, setSearchPokemon] = useState()
  const [FilterPokemon, setFilterPokemon] = useState()
  const [TypeList, setTypeList] = useState()
  const [FilterType, setFilterType] = useState("All Pokemon")
  /////////////////////////



  const getPokemones=()=>{
    if (FilterType === "All Pokemon") {


      axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200`)
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

  useEffect(() => {
    getPokemones()
    
  }, [FilterType])
// console.log(Poketion)

  /////////////////////////
  // const arrayPoke=Poketion?


  useEffect(() => {
    if (SearchPokemon?.length==0){
      // setFilterType()
     console.log("Hola yo renderice")
      getPokemones()}
    else if(SearchPokemon?.length>=1){
      setFilterPokemon(Poketion?.filter(e => e.name.includes(SearchPokemon.toLowerCase())))
    }
  }, [SearchPokemon])

console.log(SearchPokemon?.length)


  useEffect(() => {

    axios.get(`https://pokeapi.co/api/v2/type/`)
      .then(api =>
        setTypeList(api?.data?.results)
      )
      .catch(err => console.log(err))

  }, [])

  //? aqui em pieza la paginacion para la busqueda por tipo de Pokemon
  const [Pagina, setPagina] = useState(1) //? aqui es el numero de la pagina y por pagina seran 9 pokemones

  const arrayPokemons=[]      //?aqui se van a guardar los pokemones
  const totalPokemonsXpagina=9 //?indicamos la cantidad total de los pokemones
 
  if(FilterPokemon?.length<totalPokemonsXpagina){
    arrayPokemons.push(...FilterPokemon)
  }else{
    const lastPokemon=Pagina*totalPokemonsXpagina //?sacaremos la cantidad de pokeones conmultiplicacion de la pagina 
    arrayPokemons.push(FilterPokemon?.slice(lastPokemon-totalPokemonsXpagina,lastPokemon))//?con un slice cortamos y pusheamos
  }

  console.log(arrayPokemons)
  //*aqui se crea el controlador de la paginacion
  let arrayPaginas=[]
  //*aqui sacamos la cantidad de paginas que habria dividiendo tdos los pokemones entre el
  //* numereo de pokemon  x pagina
  const contadorPaginas=Math.ceil(Poketion?.length/totalPokemonsXpagina)//todo
  const totalPaginasBlock=6//Todo
  //! Math nos redondea la cantitad de pendiendo del metodo siguinte, por decir el metodo ceil redondea para aariba
  let AllPaginas=Math.ceil(Pagina/totalPaginasBlock)// todo *aqui dividimos la pagina

  if(AllPaginas*totalPaginasBlock>=contadorPaginas){
    for(let i=AllPaginas*totalPaginasBlock-totalPaginasBlock+1;i<=contadorPaginas;i++){
        arrayPaginas.push(i)
    }
  }else{
    for(let i=AllPaginas*totalPaginasBlock -totalPaginasBlock+1;i<=AllPaginas*totalPaginasBlock;i++){
      arrayPaginas.push(i)
    }
  }
// console.log(contadorPaginas)
// console.log(arrayPaginas)
// console.log(Pagina)
console.log(FilterPokemon)
// console.log(Poketion)

let PokemonSearchLimit= PaginaLimitacion(FilterPokemon,Pagina)
let PokemonTypeLimit=PaginaLimitacion(Poketion,Pagina)

console.log(PokemonSearchLimit)
  return (
    <div >

      <h2>Welcome {nameCouch}</h2>
      <div>
      </div>
              <Form Estado={setSearchPokemon}
                TypeList={TypeList}
                FilterType={setFilterType}
              />
              <Paginas
              setPagina={setPagina}
              Pagina={Pagina}
              arrayPaginas={arrayPaginas}
              contadorPaginas={contadorPaginas}
              />
      <div className='Pokedex'>

        {

          FilterPokemon?.length>=1&&SearchPokemon?.length>=1?
          PokemonSearchLimit[0]?.map(Pokelol => (
              <TargetPokemon
                TypeList={TypeList}
                FilterType={setFilterType}
                URL={Pokelol.url}
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