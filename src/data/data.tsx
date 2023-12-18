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
        { img: chair, title: 'The Dandy chair', price: 250,path:'/Product/chair' ,id:1,quantity:0},
        { img: vase, title: 'Rustic Vase Set', price: 129 ,path:'/Product/vase',id:2,quantity:0},
        { img: silkiVase, title: 'The Silky Vase', price: 159 ,path:'/Product/silkiVase',id:3,quantity:0},
       { img: lamp, title: 'The Lucy Lamp', price: 200,path:'/Product/lamp' ,id:4,quantity:0},
    ],
    popularProducts:[
        { img:sofa, title: 'The Poplar suede sofa', price: 329,path:'/Product/sofa',id:5,quantity:0},
        { img: chair, title: 'The Dandy chair', price: 250,path:'/Product/chair',id:1 ,quantity:0},
        { img: grayChair, title: 'The Dandy gray chair', price: 199,path:'/Product/grayChair',id:6,quantity:0},
    ],
    all:[   { img: chair, title: 'The Dandy chair', price: 250,path:'/Product/chair' ,id:1,quantity:0},
        { img: vase, title: 'Rustic Vase Set', price: 129 ,path:'/Product/vase',id:2,quantity:0},
        { img: silkiVase, title: 'The Silky Vase', price: 159 ,path:'/Product/silkiVase',id:3,quantity:0},
        { img: grayChair, title: 'The Dandy gray chair', price: 199,path:'/Product/grayChair',id:6,quantity:0},
        { img: lamp, title: 'The Lucy Lamp', price: 200,path:'/Product/lamp' ,id:4,quantity:0},
        { img:littleLamp, title: 'Little Vase Set', price: 299,path:'/Product/littleLamp',id:7,quantity:0},
        { img:goldLamp, title: 'Gold lamp', price: 599,path:'/Product/goldLamp',id:8,quantity:0},
        { img:popularChair, title: 'Smile chair', price: 199,path:'/Product/smileChair',id:9,quantity:0},

    ]


}

export default data
