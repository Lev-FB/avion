import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";
const store = configureStore({
    reducer:{
        cart:CartSlice,
    }
})



export default store