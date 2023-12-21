
import cardImg from './icons/Card.svg'
import checkmarkImg from './icons/Checkmark.svg'
import sprout from './icons/Sprout.svg'
import delivery from './icons/Delivery.svg'
import './Advantages.css'
import './Advantages-media.css'

interface Card {
    img:any,
    title:string,
    description:string
}


const Advantages = () =>{

    const cardInfo:Array<Card> = [
        {img:cardImg,title:'Next day as standard',description:'Order before 3pm and get your order the next day as standard'},
        {img: checkmarkImg,title:'Made by true artisans',description:'Handmade crafted goods made with real passion and craftmanship'},
        {img:sprout,title:'Unbeatable prices',description:'For our materials and quality you won’t find better prices anywhere'},
        {img:delivery,title:'Recycled packaging',description:'We use 100% recycled packaging to ensure our footprint is manageable'}
    ]

    return (
        <>
            <div className="advantages">
                <div className="advantages__wrapper">
                    <h2 className="advantages__title">What makes our brand different</h2>
                    <div className="advantages__list-wrapper">
                        <ul className="advantages__list">
                            {cardInfo.map(el=>{
                                return (
                                    <li key={el.title} className="advantages__list-item">
                                        <img src={el.img} alt="Advantages__img" className="advantages__icon"/>
                                        <h3 className="advantages__card-title">{el.title}</h3>
                                        <p className="advantages__subtitle">{el.description}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Advantages