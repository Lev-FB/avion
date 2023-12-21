
import './Product.css'
import './Product-media.css'
import {Transition} from 'react-transition-group'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";
const Product = ()=>{
    const data = useSelector(state => state.data)
    const [load,setLoad] = useState<boolean>(false)
    return (
        <div className="product">
            <div className="product__title-wrapper">
                <h2 className="product__title">Popular products</h2>
            </div>
            <Transition
                in={load}
                timeout={0}
            >
                {state=>{
                    return (
                        <div className={`product__catalog-wrapper ${state}`}>
                            <div className="product__catalog">
                                {data.all.map((el,index)=>{
                                    return(
                                        <Link key={index} className="product__catalog-link" to={el.path}>
                                            <div className="product__catalog-img-wrapper">
                                                <img className="product__catalog-img" src={el.img} alt=""/>
                                            </div>
                                            <h4 className="product__catalog-title">{el.title}</h4>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }}

            </Transition>
        </div>
    )
}

export  default Product