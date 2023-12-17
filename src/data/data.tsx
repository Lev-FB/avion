import chair from './images/chair.png';
import grayChair from './images/gray_chair.png'
import lamp from './images/lamp.png'
import silkiVase from './images/silki_vase.png'
import sofa from './images/sofa.png'
import vase from './images/vase.png'

interface ObjectData {
    img: string,
    title: string,
    price: number,
    path:string
}

interface Data {
    newProducts:ObjectData[],
    popularProducts:ObjectData[]
}

const data:Data = {
    newProducts:[
        { img: chair, title: 'The Dandy chair', price: 250,path:'/Product/chair' },
        { img: vase, title: 'Rustic Vase Set', price: 250 ,path:'/Product/vase'},
        { img: silkiVase, title: 'The Silky Vase', price: 250 ,path:'/Product/silkiVase'},
       { img: lamp, title: 'The Lucy Lamp', price: 250,path:'/Product/lamp' },
    ],
    popularProducts:[
        { img:sofa, title: 'The Poplar suede sofa', price: 250,path:'/Product/sofa'},
        { img: chair, title: 'The Dandy chair', price: 250,path:'/Product/chair' },
        { img: grayChair, title: 'The Dandy gray chair', price: 250,path:'/Product/grayChair' },
    ]

}

export default data