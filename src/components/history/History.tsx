import './History.css'
import {Link} from "react-router-dom";

interface Text {
    title:string,
    subtitle:string[],
}

type Props = {
    img:string,
    texts:Text,
    name:string
}


const History =({img,name,texts}:Props) =>{
    return (
        <div className={name}>
            <div className={`${name}__text-wrapper`}>
                   <div className={`${name}__text`}>
                       <h3 className={`${name}__title`}>{texts.title}</h3>
                       <p className={`${name}__description`}>{texts.subtitle[0]}</p>
                       <p className={`${name}__description`}>{texts.subtitle[1]}</p>
                   </div>
                <Link to="/Products" className={`${name}__link`}>Get in touch</Link>
            </div>
            <div className={`${name}__img-wrapper`}>
                <img className={`${name}__img`} src={img} alt={img}/>
            </div>
        </div>
    )

}

export default History