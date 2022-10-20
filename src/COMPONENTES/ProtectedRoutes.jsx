import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
//* Navigate se ejecuta sin nesecidad de apretar un boton o en una funcion
//* Outletnos dice donde tenemos que rotarlas rutas
const ProtectedRoutes = ({Name}) => {
  if(Name!=='hola'){return <Outlet/>} 
  else{return <Navigate to='/'/>}
}

export default ProtectedRoutes