import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from './DeleteModal';
import EditModal from './EditModal';
import Navbar from './Navbar';

const ViewWaterIntake = () => {
  const [waterIntakes, setWaterIntakes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [difference, setDifference] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editInitialValue, setEditInitialValue] = useState('');
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else {
      const allIntakes = JSON.parse(localStorage.getItem('waterIntakes')) || [];
      const userIntakes = allIntakes.filter(entry => entry.username === currentUser.username);
      setWaterIntakes(userIntakes);
    }
  }, [currentUser, navigate]);

  const handleDelete = (index) => {
    const globalIndex = index + (currentPage - 1) * itemsPerPage;
    setDeleteIndex(globalIndex);
    setShowConfirmModal(true);
  };

  const confirmDelete = () => {
    const updatedIntakes = [...waterIntakes];
    const deletedEntry = updatedIntakes.splice(deleteIndex, 1)[0];

    const allIntakes = JSON.parse(localStorage.getItem('waterIntakes')) || [];
    const newAllIntakes = allIntakes.filter(
      entry => !(entry.username === currentUser.username && entry.date === deletedEntry.date && entry.time === deletedEntry.time)
    );
    localStorage.setItem('waterIntakes', JSON.stringify(newAllIntakes));

    setWaterIntakes(updatedIntakes);
    setShowConfirmModal(false);
  };


  const handleEdit = (index) => {
    const globalIndex = index + (currentPage - 1) * itemsPerPage;
    setEditIndex(globalIndex);
    setEditInitialValue(waterIntakes[globalIndex].quantity);
    setShowEditModal(true);
  };

  const saveEdit = (newQuantity) => {
    const updatedIntakes = [...waterIntakes];
    updatedIntakes[editIndex].quantity = newQuantity;

    const allIntakes = JSON.parse(localStorage.getItem('waterIntakes')) || [];
    const newAllIntakes = allIntakes.map(entry => {
      if (entry.username === currentUser.username && entry.date === updatedIntakes[editIndex].date && entry.time === updatedIntakes[editIndex].time) {
        return updatedIntakes[editIndex];
      }
      return entry;
    });

    localStorage.setItem('waterIntakes', JSON.stringify(newAllIntakes));
    setWaterIntakes(updatedIntakes);
    setShowEditModal(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = waterIntakes.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(waterIntakes.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const calculateDifference = () => {
    const intake1 = waterIntakes.find(entry => entry.date === new Date(date1).toLocaleDateString());
    const intake2 = waterIntakes.find(entry => entry.date === new Date(date2).toLocaleDateString());

    if (intake1 && intake2) {
      const diff = Math.abs(intake1.quantity - intake2.quantity);
      setDifference(diff);
    } else {
      alert('Please make sure both dates have entries.');
    }
  };

  return (
    <div className='vh-100 background'>
      <div><Navbar/></div>
      <div className='container'>
        <h1 className='d-flex justify-content-center mt-5 mb-5'>Water Intake List</h1>
        <table className='table table-hover table-bordered'>
          <thead className='table-dark'>
            <tr>
              <th>Date</th>
              <th>Water Intake</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.quantity} ml</td>
                <td>{entry.time}</td>
                <td><button className='btn btn-sm btn-outline-primary' onClick={() => handleEdit(index)}>Edit</button>
                <button className='btn btn-sm btn-outline-danger' onClick={() => handleDelete(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='d-flex justify-content-center'>
          {pageNumbers.map(number => (
            <button className='btn btn-sm btn-outline-dark' key={number} onClick={() => setCurrentPage(number)}>{number}</button>
          ))}
        </div>
        <br></br>
        <div className='container bg-white rounded'>
          <h3 className='d-flex justify-content-center pt-3'>Calculate Difference Between Dates</h3>
          <div className='d-flex justify-content-center pb-3'>
            <label>Date 1:<input type="date" value={date1} onChange={(e) => setDate1(e.target.value)} /></label>
            <label>Date 2:<input type="date" value={date2} onChange={(e) => setDate2(e.target.value)} /></label>
            <button className='btn btn-sm btn-outline-primary' onClick={calculateDifference}>Calculate</button>
            {difference !== null && <p>Difference: {difference} ml</p>}
          </div>
        </div>
      </div>
      <ConfirmModal
        show={showConfirmModal}
        handleClose={() => setShowConfirmModal(false)}
        handleConfirm={confirmDelete}
      />
      <EditModal
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        handleSave={saveEdit}
        initialValue={editInitialValue}
      />
    </div>
  );
};

export default ViewWaterIntake;