import React from "react";
import { NavLink } from "react-router-dom";
import tacos from '../images/tacos.png'
import '../css/HomeAbout.css'

export default function About() {


    return (

        <>
         <div className="mainSection">
            <div className="contentBox">
                <h1>KNOW MORE ABOUT US</h1>
                <p>Mexican taco shop with a modern twist. This is the place to go to give in to your taco cravings. Lively music is played every day to get you into an upbeat mood as you sit and get you fired up for drinks later on, or simply to spark fun conversations.
                </p>
                <p>
                A taco is a traditional Mexican dish consisting of a corn or wheat tortilla that is folded or rolled around a filling, which typically includes meat, cheese, lettuce, and tomato.
                </p>
                <div className="btnBox">
                    <div className="btn">
                    <NavLink to="/about" className='readMore' >Read More</NavLink>
                    </div>
                </div>
            </div>
        <div className="imgContainer">
        </div>
        
        </div>
        </>
    )
}