import { createSlice } from "@reduxjs/toolkit";

export const conterSlice= createSlice(
    {
        name:"URL",
        initialState:1700,
        reducers:{
        reset:(set,accion)=>accion.payload
        }
    }
)
export const {reset}= conterSlice.actions
export default conterSlice.reducer