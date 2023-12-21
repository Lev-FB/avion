

import './Hero.css'
import './Hero-media.css'
import heroImg from './img/Chair-hero.png'
import {Link} from "react-router-dom";
import { Transition } from 'react-transition-group';
import BtnViewCollection from "../ui/buttons/BtnViewCollection";
import {useEffect, useState} from "react";
const Hero = () =>{
    const [load,setLoad] = useState<boolean>(false)
    useEffect(()=>{
        setLoad(true)
        },[])

    return (
                            <div className="hero">
                            <div className="hero__wrapper">
                                <div className="hero__description">
                                    <div className="hero__title-wrapper">
                                        <h2 className="hero__title">
                                            The furniture brand for the future, with timeless designs
                                        </h2>
                                        <Link to='/Products' className="hero__view-collection">
                                            <BtnViewCollection/>
                                        </Link>
                                    </div>

                                    <div className="hero__subtitle-wrapper">
                                        <p className="hero__subtitle">
                                            A new era in eco friendly furniture with Avelon, the French luxury retail brand
                                            with nice fonts, tasteful colors and a beautiful way to display things digitally
                                            using modern web technologies.
                                        </p>
                                    </div>
                                </div>
                                <img className="hero__img" src={heroImg} alt="Chair"/>
                            </div>
                            </div>




    )

}

export default Hero