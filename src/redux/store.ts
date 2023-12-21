import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";
import dataSlice from "./dataSlice";
const store = configureStore({
    reducer:{
        cart:CartSlice,
        data:dataSlice
    }
})



export default store