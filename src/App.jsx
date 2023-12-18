import React from "react";
import { Routes, Route} from 'react-router-dom'
import { AuthProvider } from "./context/authContext";

import Home from './components/Home'
import About from "./components/About";
import Contact from "./components/Contact";
import Tacos from "./components/Tacos";
import Policy from "./components/Policy";
import Error from './components/Error'
import List from "./components/List";
import Footer from './components/Footer'
import Details from './components/Details'
import Register from './components/Register'
import Logout from './components/Logout.jsx'
import Login from "./components/Login.jsx";
import TacoCreate from "./components/TacoCreate.jsx";
import Edit from "./components/Edit.jsx";
import Cart from './components/Cart.jsx'
import Order from "./components/Order.jsx";
import Thanks from './components/Thanks.jsx'

export default function App(){



  return (

    <>
    <AuthProvider>

     <List/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/tacos" element={<Tacos/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/policy" element={<Policy/>} />
    <Route path='*' element={<Error/>} />
    <Route path="/tacos/:tacoId" element={<Details/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/logout" element={<Logout/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/tacos/create" element={<TacoCreate/>} />
    <Route path="/tacos/:tacoId/edit" element={<Edit/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/tacos/order' element={<Order/>} />
    <Route path='/thanks'  element={<Thanks/> } />


    </Routes>

    </AuthProvider>
    </>
  )
}