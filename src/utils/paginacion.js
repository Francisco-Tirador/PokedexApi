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
    console.log(Contenido,'Hook')
    return ContenidoLimitado
 }

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

