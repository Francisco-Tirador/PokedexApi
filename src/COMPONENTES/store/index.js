import { configureStore } from "@reduxjs/toolkit";
import URL from "./Slice/urlSlice"


export default configureStore(
    {
        reducer:{
            URL
        }
    }
)