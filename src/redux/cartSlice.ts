import {createSlice} from "@reduxjs/toolkit";


const cartSlice =createSlice({
    name:"cart",
    initialState:{
        things:[]
    },
    reducers:{
        addThing(state,action){
            let checker = 0
            for (let i = 0 ;i<state.things.length;i++) {
                if(state.things[i].id === action.payload.id) {
                    state.things[i].quantity+=1
                    state.things[i].price+=action.payload.price
                    checker+=1
                }
            }
            if(!checker) {
                state.things.push(action.payload)
            }
        },
        removeThing(state,action){
            state.things = state.things.filter(el=>{
                return el.id!==action.payload.id
            })
        },

    }
})


export const {addThing,removeThing} =cartSlice.actions
export default cartSlice.reducer