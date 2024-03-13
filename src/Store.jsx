
import { configureStore } from "@reduxjs/toolkit";
import {todoslice} from "./Slice"

const store = configureStore({
    reducer:{
        
        todo:todoslice
        
    }
})

export default store;