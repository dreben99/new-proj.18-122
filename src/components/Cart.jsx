// CartPage.js
import React from 'react';
import { cart } from './Details';
import CartList from './CartList';
import { Link } from 'react-router-dom';

cart.shift()

const CartPage = () => {
 

  return (
     
    <>
   <h1 style={{color:'orange'}}>CART</h1>

   {cart.length === 0 ? (
    <div className='asdasd' style={{textAlign:'center', fontSize:'16px', color:'DarkSlateGrey', }}>

       <h1 className="no-articles" style={{color:'orange'}}>IS EMPTY</h1>
       <div className='empty'>
       <Link to='/tacos'>visit menu list..</Link>
        </div> 
    </div>
       )  :  (<div className="make-order-container">
       <Link to={'/tacos/order'} className="make-order-button">Make Order</Link>
     </div>)}
      
     {cart.map(x =>  (
       <CartList key={x._id} {...x} /> 
     ))}
       </>

  );
}

export default CartPage;
