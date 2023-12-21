import {useParams} from 'react-router-dom'
import './SelectProduct.css'
import './SelectProduct-media.css'
import {useEffect, useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {addThing} from "../../redux/cartSlice";
import {increaseQuantity,reduceQuantity} from "../../redux/dataSlice";
import {useNavigate} from 'react-router-dom'
const SelectProduct = () => {
    const navigate = useNavigate()
    interface Data {
        img: string,
            title: string,
            price: number,
            path:string,
            id:number,
            quantity:number,
    }
    const [quant,setQuant]=useState<number>(1)
    const {name} = useParams()
    const data = useSelector(state =>state.data.all)
    const selected:Array<Data> = data.filter(el=>el.id===+name)
    useEffect(()=>{
        if(selected[0]) {
            setQuant(selected[0].quantity)
        }
    },[])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {img,title,price} =selected[0]
    const dispatch = useDispatch<any>()
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
                        <div className="selected-product__quantity-wrapper">
                            <h3 className="selected-product__quantity">Quantity</h3>
                            <div className="selected-product__logic-wrapper">
                                <button onClick={(e)=>{
                                    if(selected[0].quantity>1)  {
                                        dispatch(reduceQuantity(...selected))
                                        setQuant(selected[0].quantity)
                                    }
                                }} className="selected-product__btn-remove">–</button>
                                <p className="selected-product__quantity">{quant}</p>
                                <button onClick={(e) => {

                                    if(selected[0].quantity<20) {
                                        dispatch(increaseQuantity(...selected))
                                        setQuant(selected[0].quantity)
                                    }

                                }
                                }
                                 className="selected-product__btn-add">+</button>
                            </div>
                        </div>
                        <div className="selected-product__button-wrapper">
                            <button onClick={(e)=>{
                                if(selected[0].quantity>0&&selected[0].quantity>=1&&selected[0].quantity<=20) {
                                    dispatch(addThing(...selected))
                                    setQuant(1)
                                    navigate('/Cart')
                                }
                            }} className="selected-product__button">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SelectProduct