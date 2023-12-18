import {useParams} from 'react-router-dom'
import './SelectProduct.css'
import data from "../../data/data";
import {useDispatch,useSelector} from "react-redux";
import {addThing} from "../../redux/cartSlice";

const SelectProduct = () => {
    const {name} = useParams()
    const selectedElement= data.all.filter(el=> el.id===+name)
    const {img,price,title} =selectedElement[0]
    const dispatch = useDispatch()
    console.log(useSelector(e=>e.cart.things))
    return (

        <div className="selected-product">
            <div className="selected-product__wrapper">
                <div className="selected-product__img-wrapper">
                    <img className="selected-product__img" src={img} alt={img}/>
                </div>
                <div className="selected-product__main-wrapper">
                    <div className="selected-product__info-wrapper">
                        <div className="selected-product__main-info-wrapper">
                            <h2 className="selected-product__title">{title} </h2>
                            <p className="selected-product__price">{price} £</p>
                        </div>
                        <div className="selected-product__description-wrapper">
                            <h3 className="selected-product__desc-title">Product description</h3>
                            <p className="selected-product__description">
                                A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
                            </p>
                        </div>
                        <div className="selected-product__button-wrapper">
                            <button onClick={(e)=>{
                                e.preventDefault()
                                dispatch(addThing(selectedElement[0]))
                            }} className="selected-product__button">Add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}


export default SelectProduct