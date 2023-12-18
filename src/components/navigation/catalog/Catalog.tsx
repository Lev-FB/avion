import BtnViewCollection from "../../ui/buttons/BtnViewCollection"
import './Catalog.css'
import {Link} from "react-router-dom";

interface ObjectData {
    img: any,
    title: string,
    price: number,
    path:string

}

type Data = {
    data:Array<ObjectData>,
    name:string,
    title:string
}



const Catalog = ({data,name,title}:Data ) =>{
   return( <div className={name}>
        <div className={`${name}__info-wrapper`}>
            <h3 className={`${name}__title`}>{title}</h3>
            <div className={`${name}__catalog`}>
                {data.map(el=>{
                    return (

                        <div className={`${name}__catalog-item`}>
                            <Link to={el.path} className={`${name}__catalog-wrapper-link`}>
                                <img className={`${name}__catalog-img`} src={el.img} alt={el.title} />
                            </Link>
                            <h4 className={`${name}__catalog-title`}>{el.title}</h4>
                            <p className={`${name}__catalog-price`}> £{el.price}</p>
                        </div>
                    )
                })}
            </div>
            <Link to="/Products">
                <BtnViewCollection nameForClass={name}/>
            </Link>

        </div>
    </div>
   )
}


export default Catalog