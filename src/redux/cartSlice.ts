import {createSlice} from "@reduxjs/toolkit";


interface Action {
    type:string,
    payload: object
}

const cartSlice =createSlice({
    name:"cart",
    initialState:{
        things:[]
    },
    reducers:{
        addThing(state,action:Action){
            let checker = true
            state.things.map(el=>{
                if(el.id===action.payload.id ) {
                    el.quantity+=action.payload.quantity
                    checker = false
                    return el
                }
                return el
            })
            if(checker){
                state.things.push(action.payload)
            }
        },
        removeThing(state,action:Action){
            state.things = state.things.filter(el=>el.id!==action.payload.id)
        },
    }
})


export const {addThing,removeThing} =cartSlice.actions
export default cartSlice.reducer