import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


const AddWaterIntake = () => {
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);
  const handleAddWaterIntake = (e) => {
    e.preventDefault();

    const waterIntakes = JSON.parse(localStorage.getItem('waterIntakes')) || [];
    const today = new Date().toLocaleDateString();

    if (waterIntakes.find(entry => entry.username === currentUser.username && entry.date === today)) {
      alert('Quantity already added for today, You can edit the value from the list');
      return;
    }

    const newIntake = {
      username: currentUser.username,
      quantity,
      date: today,
      time: new Date().toLocaleTimeString()
    };

    waterIntakes.push(newIntake);
    localStorage.setItem('waterIntakes', JSON.stringify(waterIntakes));
    navigate('/view-water-intake');
  };

  return (
    <div>
      <div><Navbar/></div>
      <div>
        <h1 className='d-flex justify-content-center pt-5'>Add Water Intake</h1>
        <form onSubmit={handleAddWaterIntake}>
          <div className='d-flex justify-content-center pt-5'>
            <label>Quantity (ml):</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
            <button className='btn btn-sm btn-outline-primary' type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default AddWaterIntake;