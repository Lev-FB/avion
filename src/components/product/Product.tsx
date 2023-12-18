
import './Product.css'
import data from "../../data/data";
const Product = ()=>{
    return (
        <div className="product">

            <div className="product__title-wrapper">
                <h2 className="product__title">All products</h2>
            </div>
            <div className="product__catalog-wrapper">
                <div className="product__catalog">
                    {data.all.map(el=>{
                        return(
                            <img src={el.img} alt=""/>
                        )
                    })}
                </div>

            </div>
        </div>
    )


}

export  default Product