import chair from './images/chair.png';
import grayChair from './images/gray_chair.png'
import lamp from './images/lamp.png'
import silkiVase from './images/silki_vase.png'
import sofa from './images/sofa.png'
import vase from './images/vase.png'
import littleLamp from './images/littleLamp.png'
import goldLamp from './images/goldLamp.png'
import popularChair from './images/popularChair.png'

interface ObjectData {
    img: string,
    title: string,
    price: number,
    path:string,
    id:number,
    quantity:number,
}

interface Data {
    newProducts:ObjectData[],
    popularProducts:ObjectData[],
    all:ObjectData[]
}
const data:Data = {
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

export default data
