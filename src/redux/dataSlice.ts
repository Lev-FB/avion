import {createSlice} from "@reduxjs/toolkit";

import chair from '../assets/img/images/chair.png';
import grayChair from '../assets/img/images/gray_chair.png'
import lamp from '../assets/img/images/lamp.png'
import silkiVase from '../assets/img/images/silki_vase.png'
import sofa from '../assets/img/images/sofa.png'
import vase from '../assets/img/images/vase.png'
import littleLamp from '../assets/img/images/littleLamp.png'
import goldLamp from '../assets/img/images/goldLamp.png'
import popularChair from '../assets/img/images/popularChair.png'

interface ProductItem {
    img: string,
    title: string,
    price: number,
    path:string,
    id:number,
    quantity:number,
}


interface Action {
    type:string,
    payload:ProductItem
}

interface Data {
    newProducts:ProductItem[],
    popularProducts:ProductItem[],
    all:ProductItem[]
}
const products:Data = {
    newProducts:[
        { img: chair, title: 'The Dandy chair', price: 250,path:'/Product/1' ,id:1,quantity:1},
        { img: vase, title: 'Rustic Vase Set', price: 129 ,path:'/Product/2',id:2,quantity:1},
        { img: silkiVase, title: 'The Silky Vase', price: 159 ,path:'/Product/3',id:3,quantity:1},
        { img: lamp, title: 'The Lucy Lamp', price: 200,path:'/Product/4' ,id:4,quantity:1},
    ],
    popularProducts:[
        { img:sofa, title: 'The Poplar suede sofa', price: 329,path:'/Product/5',id:5,quantity:1},
        { img: chair, title: 'The Dandy chair', price: 250,path:'/Product/1',id:1 ,quantity:1},
        { img: grayChair, title: 'The Dandy gray chair', price: 199,path:'/Product/6',id:6,quantity:1},
    ],
    all: [
        { img:sofa, title: 'The Poplar suede sofa', price: 329,path:'/Product/5',id:5,quantity:1},
        { img: chair, title: 'The Dandy chair', price: 250,path:'/Product/1' ,id:1,quantity:1},
        { img: vase, title: 'Rustic Vase Set', price: 129 ,path:'/Product/2',id:2,quantity:1},
        { img: silkiVase, title: 'The Silky Vase', price: 159 ,path:'/Product/3',id:3,quantity:1},
        { img: grayChair, title: 'The Dandy gray chair', price: 199,path:'/Product/6',id:6,quantity:1},
        { img: lamp, title: 'The Lucy Lamp', price: 200,path:'/Product/4' ,id:4,quantity:1},
        { img:littleLamp, title: 'Little Vase Set', price: 299,path:'/Product/7',id:7,quantity:1},
        { img:goldLamp, title: 'Gold lamp', price: 599,path:'/Product/8',id:8,quantity:1},
        { img:popularChair, title: 'Smile chair', price: 199,path:'/Product/9',id:9,quantity:1},
    ]
}


const data = createSlice({
    name:'data',
    initialState:products,
    reducers: {
        increaseQuantity(state,action:Action) {
            const element = action
            state = state.all.map(el=>{
                if(el.id===element.payload.id) {
                    return el.quantity+=1
                }
                return el
            })
        },
        reduceQuantity (state,action:Action)  {
            const element = action.payload
            state.all.map(el=>{
                if(el.id===element.id){
                    return el.quantity-=1
                }
                return el
            })
        }

    }
})


export default data.reducer
export const {increaseQuantity, reduceQuantity} = data.actions
