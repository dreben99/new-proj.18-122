import '../css/Cart.css'
import React, { useState } from 'react';
import { cart } from './Details';
import { useNavigate } from 'react-router-dom';

export default function CartList({
    _id,
    img,
    title,
    description,
    price,
    meats,
    desc,
    
}) 
{
    const navigate = useNavigate()
console.log(cart);



let newPrice 
if (desc) {
    newPrice = 8.49
}else{
    newPrice = 7.49
}


const handleRemove = () => {
    const indexToRemove = cart.findIndex((item) => item._id === _id);
    if (indexToRemove !== -1) {
      cart.splice(indexToRemove, 1);
      console.log('Item removed:', _id);
      navigate('/tacos')
      setTimeout(() => {
        // Second navigation
        navigate('/cart')
      }, 10);
    }

  };

const getImageSrc = (meats) => {
    switch (meats) {
        case 'beef':
            return 'https://thebakermama.com/wp-content/uploads/2022/03/IMG_0389-scaled.jpg';
        case 'chicken':
            return 'https://bellyfull.net/wp-content/uploads/2023/08/Slow-Cooker-Shredded-Chicken-Tacos-blog-3.jpg';
            case 'pork':
                return 'https://www.atablefullofjoy.com/wp-content/uploads/2018/09/Carnitas-Tacos-Recipe-featured-9.jpg';
                case 'fish':
            return 'https://i0.wp.com/chefsavvy.com/wp-content/uploads/easy-seared-ahi-tuna-tacos.jpg?w=665&ssl=1';
        default:
          
    }
};

return (
    <>
    <div className="card" style={{ background: 'yellowgreen', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <div className='title-container'>
                <h2>{title || 'Custom Taco'}</h2>
            </div>
            <div className='description-container'>
                <img src={img || getImageSrc(meats)} alt={title} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                <h3>{price || `${newPrice}$`}</h3>
            </div>
            <div className="make-order-containers" style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                <div className="button-containers" style={{ color: 'red', cursor: 'pointer', border:'2px solid tomato', borderRadius: '5px', padding: '8px 15px', }} onClick={handleRemove}>
                    Remove
                </div>
            </div>
        </div>
    </>
)
}