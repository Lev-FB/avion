
import './Product.css'
// import data from "../../redux/data";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
const Product = ()=>{
    const data = useSelector(state => state.data)
    return (
        <div className="product">
            <div className="product__title-wrapper">
                <h2 className="product__title">Popular products</h2>
            </div>
            <div className="product__catalog-wrapper">
                <div className="product__catalog">
                    {data.all.map((el,index)=>{
                        if(el.id !==5) {
                            return(
                                <Link key={index} className="product__catalog-link" to={el.path}>
                                    <div className="product__catalog-img-wrapper">
                                        <img className="product__catalog-img" src={el.img} alt=""/>
                                    </div>
                                    <h4 className="product__catalog-title">{el.title}</h4>
                                </Link>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export  default Product