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
    <div >
        <div className='contenPaginacion'>
        <div onClick={derechaNext} className='Fle Dere'></div>
        <div className='Bloke'>
            {
                arrayPaginas?.map(num=>(
                    <li key={num} onClick={()=>pagNum(num)}
                    className={num===Pagina?'active':'pagi'}
                    >{num}</li>
                ))
            }
        </div>
        <div onClick={izquierdaNext} className='Fle Izquie'></div>
        </div>
        <div className='PagTotal'>All pagines {contadorPaginas}</div>
    </div>
  )
}

export default Paginas