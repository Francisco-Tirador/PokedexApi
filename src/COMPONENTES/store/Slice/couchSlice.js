import { createSlice } from "@reduxjs/toolkit";


export const couchSlice=createSlice(
    {
        name:"nameCouch",
        initialState:"hola",
        reducers:{
        reset:(set,accion)=>accion.payload
        }
    }
)


export const {reset}=couchSlice.actions
export default couchSlice.reducer