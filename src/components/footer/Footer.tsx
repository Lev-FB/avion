import './Footer.css'







import {Link} from "react-router-dom";

const Footer = () =>{
    const a:Array<Array<string>> =[
        ['Menu','New arrivals','Best sellers','Recently viewed','Popular this week','All products'],
        ['Categories','Crockery','Furniture','Homeware','Plant pots','Chairs'],
        ['Our company','About us','Vacancies','Contact us','Privacy','Returns policy']
    ]


    return (
        <footer>
            <div className="footer__wrapper">
                <div className="footer__list-wrapper">
                    {a.map((arr,index)=>{
                        return (
                            <ul key={index}  className="footer__list">{
                                arr.map((el,index)=>{
                                    if(index!==0) {
                                        return <li key={index} className="footer__list-item-text"><Link to="/Products">{el}</Link></li>
                                    }
                                    else{
                                        return <li key={index} className="footer__list-item-title"><h3>{el}</h3></li>
                                    }
                                    })
                                }
                            </ul>)
                    })
                    }

                </div>
                <div className="footer__contacts-wrapper">
                    <h3 className="footer__copyright">
                        Copyright 2022 Avion LTD
                    </h3>
                </div>
            </div>

        </footer>
    )


}

export default Footer