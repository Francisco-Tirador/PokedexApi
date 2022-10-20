// import { useState } from "react"





//  const [Pagina, setPagina] = useState(1) 
    
 const contenidoXpagina=9 

 export  const PaginaLimitacion=(Contenido,Pagina)=>{
    let ContenidoLimitado=[]  
    if(Contenido?.length<contenidoXpagina){
        ContenidoLimitado.push(Contenido)
      }else{
        const lastPagina=Pagina*contenidoXpagina 
        ContenidoLimitado.push(Contenido?.slice(lastPagina-contenidoXpagina,lastPagina))
    }
    return ContenidoLimitado
 }


//*aqui se crea el controlador de la paginacion

//*aqui sacamos la cantidad de paginas que habria dividiendo tdos los pokemones entre el
//* numereo de pokemon  x pagina


export const Bloke=(Contenido,Pagina,TotalPaginas)=>{
    let arrayPaginas=[]
    
    const contadorPaginas=Math.ceil(Contenido?.length/contenidoXpagina)
    
    const totalPaginasBlock=TotalPaginas
    let AllPaginas=Math.ceil(Pagina/totalPaginasBlock)

        if(AllPaginas*totalPaginasBlock>=contadorPaginas){
        for(let i=AllPaginas*totalPaginasBlock-totalPaginasBlock+1;i<=contadorPaginas;i++){
            arrayPaginas.push(i)
        }
        }else{
        for(let i=AllPaginas*totalPaginasBlock -totalPaginasBlock+1;i<=AllPaginas*totalPaginasBlock;i++){
            arrayPaginas.push(i)
        }
        }
        return {arrayPaginas,contadorPaginas}
}



// const contadorPaginas=Math.ceil(Poketion?.length/totalPokemonsXpagina)//todo
// const totalPaginasBlock=6//Todo
// //! Math nos redondea la cantitad de pendiendo del metodo siguinte, por decir el metodo ceil redondea para aariba
// let AllPaginas=Math.ceil(Pagina/totalPaginasBlock)// todo *aqui dividimos la pagina

// if(AllPaginas*totalPaginasBlock>=contadorPaginas){
//   for(let i=AllPaginas*totalPaginasBlock-totalPaginasBlock+1;i<=contadorPaginas;i++){
//       arrayPaginas.push(i)
//   }
// }else{
//   for(let i=AllPaginas*totalPaginasBlock -totalPaginasBlock+1;i<=AllPaginas*totalPaginasBlock;i++){
//     arrayPaginas.push(i)
//   }
// }



//  console.log(arrayPokemons)
//  //*aqui se crea el controlador de la paginacion
//  let arrayPaginas=[]
//  //*aqui sacamos la cantidad de paginas que habria dividiendo tdos los pokemones entre el
//  //* numereo de pokemon  x pagina
//  const contadorPaginas=Math.ceil(Poketion?.length/totalPokemonsXpagina)//todo
//  const totalPaginasBlock=6//Todo
//  //! Math nos redondea la cantitad de pendiendo del metodo siguinte, por decir el metodo ceil redondea para aariba
//  let AllPaginas=Math.ceil(Pagina/totalPaginasBlock)// todo *aqui dividimos la pagina

//  if(AllPaginas*totalPaginasBlock>=contadorPaginas){
//    for(let i=AllPaginas*totalPaginasBlock-totalPaginasBlock+1;i<=contadorPaginas;i++){
//        arrayPaginas.push(i)
//    }
//  }else{
//    for(let i=AllPaginas*totalPaginasBlock -totalPaginasBlock+1;i<=AllPaginas*totalPaginasBlock;i++){
//      arrayPaginas.push(i)
//    }
//  }




// export const Paginacion=(contador,TotalXbloque)=>{

//     const arrayPaginas=[]

//     if(AllPaginas*totalPaginasBlock>=contadorPaginas){
//         for(let i=AllPaginas*totalPaginasBlock-totalPaginasBlock+1;i<=contadorPaginas;i++){
//             arrayPaginas.push(i)
//         }
//       }else{
//         for(let i=AllPaginas*totalPaginasBlock -totalPaginasBlock+1;i<=AllPaginas*totalPaginasBlock;i++){
//           arrayPaginas.push(i)
//         }
//       }
//     }
// console.log(arrayPokemons)
//   //*aqui se crea el controlador de la paginacion
//   let arrayPaginas=[]
//   //*aqui sacamos la cantidad de paginas que habria dividiendo tdos los pokemones entre el
//   //* numereo de pokemon  x pagina
//   const contadorPaginas=Math.ceil(Poketion?.length/totalPokemonsXpagina)//todo
//   const totalPaginasBlock=6//Todo
//   //! Math nos redondea la cantitad de pendiendo del metodo siguinte, por decir el metodo ceil redondea para aariba
//   let AllPaginas=Math.ceil(Pagina/totalPaginasBlock)// todo *aqui dividimos la pagina

//   if(AllPaginas*totalPaginasBlock>=contadorPaginas){
//     for(let i=AllPaginas*totalPaginasBlock-totalPaginasBlock+1;i<=contadorPaginas;i++){
//         arrayPaginas.push(i)
//     }
//   }else{
//     for(let i=AllPaginas*totalPaginasBlock -totalPaginasBlock+1;i<=AllPaginas*totalPaginasBlock;i++){
//       arrayPaginas.push(i)
//     }
//   }
