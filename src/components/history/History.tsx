import './History.css'
import historyImg from './img/history.png'
import {Link} from "react-router-dom";

const History =() =>{




    return (
        <div className="history">
            <div className="history__text-wrapper">
                   <div className="history__text">
                       <h3 className="history__title">From a studio in London to a global brand with
                           over 400 outlets</h3>
                       <p className="history_description">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                       <p className="history_description">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                   </div>
                <Link className="history__link">Get in touch</Link>
            </div>
            <div className="history__img-wrapper">
                <img className="history__im" src={historyImg} alt={historyImg}/>
            </div>
        </div>
    )

}

export default History