import React from "react";
import logo from '../images/logo.png'
import {NavLink} from 'react-router-dom'
import '../css/ListStyle.css'
import AuthContext from "../context/authContext";
import { useContext } from "react";
import { cart } from "./Details";

export default function List() {

  let asd = cart.length

  const {
    isAuth,
    username,

} = useContext(AuthContext)



    return (

        <>
        <header>
            <div className="container container-flex">
          <div className="logoContainer">
            <img  src={logo} alt="logo" className="logo"/>
          </div>
          <nav>
            <div className="list" >
                <NavLink to="/" className='listItem' activeclassname='activeItem'>Home</NavLink>
              <NavLink to="/about" className='listItem' activeclassname='activeItem'>About</NavLink>
              <NavLink to="/tacos" className='listItem' activeclassname='activeItem'>Tacos</NavLink>
              <NavLink to="/contact" className='listItem' activeclassname='activeItem'>Contact</NavLink>
              <NavLink to="/policy" className='listItem' activeclassname='activeItem'>Policy</NavLink>

                {isAuth && (
                  <div>

                  </div>
                )}

                {isAuth && (
                  <div id="user" style={{float:'right', position:'relative',left:'560px', bottom:'23px',}}>
<NavLink to='/tacos/create' className='listItem' activeclassname='activeItem'>Create Your Own</NavLink>
                   <NavLink to="/Logout" className='listItem' activeclassname='activeItem'>Logout</NavLink>
                   <NavLink to="/cart"  activeclassname='activeItem'>
                   <img src='https://cdn-icons-png.flaticon.com/128/3514/3514491.png' 
                    style={{ width: '27px', height: '20px', marginLeft:'11px'}} />
                   </NavLink>
                   {asd > 0 && (
                <span className="circle" style={{ color: 'indigo' }}>{asd}</span>
              )}
                   <span> {username}</span>

                  </div>
                )}



                 {!isAuth && (
                   <div id="guest" style={{float:'right', marginLeft:'444px', position:'relative' ,bottom:'23px',}}>
                    <NavLink to="/Login" className='listItem' activeclassname='activeItem'>Login</NavLink>
                    <NavLink to="/register" className='listItem' activeclassname='activeItem'>Register</NavLink>
                  </div>
                 )}
            </div>
          </nav>
            </div>
        </header>
        </>
    )
}