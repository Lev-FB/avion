import chair from './images/chair.png';
import grayChair from './images/gray_chair.png'
import lamp from './images/lamp.png'
import silkiVase from './images/silki_vase.png'
import sofa from './images/sofa.png'
import vase from './images/vase.png'

interface ObjectData {
    img: string,
    title: string,
    price: number
}

interface Data {
    newProducts:ObjectData[],
    popularProducts:ObjectData[]
}

const data:Data = {
    newProducts:[
        { img: chair, title: 'The Dandy chair', price: 250 },
        { img: vase, title: 'Rustic Vase Set', price: 250 },
        { img: silkiVase, title: 'The Silky Vase', price: 250 },
       { img: lamp, title: 'The Lucy Lamp', price: 250 },
    ],
    popularProducts:[
        { img:sofa, title: 'The Poplar suede sofa', price: 250 },
        { img: chair, title: 'The Dandy chair', price: 250 },
        { img: grayChair, title: 'The Dandy gray chair', price: 250 },
    ]

}

export default data