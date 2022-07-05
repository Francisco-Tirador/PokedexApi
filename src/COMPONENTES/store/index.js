import { configureStore } from "@reduxjs/toolkit";
import URL from "./Slice/urlSlice"
import nameCouch from "./Slice/couchSlice"

export default configureStore(
    {
        reducer:{
            URL,
            nameCouch
             },
            
           
    }
)