import React from 'react'

const Paginas = ({Pagina,arrayPaginas,setPagina,contadorPaginas}) => {

   const derechaNext=()=>{
    if(Pagina-1===0){
        setPagina(contadorPaginas)
    }else{
        setPagina(Pagina-1)
    }
    
   } 
   const izquierdaNext=()=>{
    if(Pagina +1>contadorPaginas){
        setPagina(1)
    }else{
        setPagina(Pagina+1)
    }
    
   } 
   const pagNum=(num)=>{
    setPagina(num)
   }
  
  return (
    <div>
        <div onClick={derechaNext}>derecha</div>
        <div>
            {
                arrayPaginas?.map(num=>(
                    <li key={num} onClick={()=>pagNum(num)}
                    className={num===Pagina?'active':''}
                    >{num}</li>
                ))
            }
        </div>
        <div onClick={izquierdaNext}>izquierda</div>
        <div>total de paginas {contadorPaginas}</div>
    </div>
  )
}

export default Paginas