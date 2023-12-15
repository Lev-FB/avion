import BtnViewCollection from "./Ui/BtnViewCollection"
import './Catalog.css'
interface ObjectData {
    img: any,
    title: string,
    price: number
}

type Data = {
    data:Array<ObjectData>,
    name:string,
    title:string
}



const Catalog = ({data,name,title}:Data ): JSX.Element =>{
   return( <div className={name}>
        <div className={`${name}__info-wrapper`}>
            <h3 className={`${name}__title`}>{title}</h3>
            <div className={`${name}__catalog`}>
                {data.map(el=>{
                    return (
                        <div className={`${name}__catalog-item`}>
                            <img className={`${name}__catalog-img`} src={el.img} alt={el.title} />
                            <h4 className={`${name}__catalog-title`}>{el.title}</h4>
                            <p className={`${name}__catalog-price`}> £{el.price}</p>
                        </div>
                    )
                })}
            </div>
        <BtnViewCollection nameForClass={name}/>

        </div>
    </div>
   )
}


export default Catalog