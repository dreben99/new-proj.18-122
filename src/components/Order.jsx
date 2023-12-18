import React, { useState } from 'react';
import '../css/Order.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





export default function Order() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/thanks')
  };

  return (
    <div className='order' style={{backgroundColor:'pink'}}>
      <h1>Your Order</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
        </label>
        <div className="buttons">
                       <button type='submit' className="buttonEdit" style={{marginLeft:'95px', width:'80px',}}>Order</button>
                       </div>
      </form>
    </div>
  );
}
