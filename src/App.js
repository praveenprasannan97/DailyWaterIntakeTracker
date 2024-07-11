import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

function App() {

  const navigate = useNavigate();

  function goToSignup(){
    navigate('/signup')
  }

  function goToLogin(){
    navigate('/login')
  }

  return (
    <div className="background">
      <div className='row d-flex vh-100 align-items-center justify-content-center'>
        <div className='col-4'>
          <div className='container bg-white rounded custom-height' >
            <h1 className="d-flex justify-content-center pt-5">Water Intake Tracker</h1>
            <div className='d-flex justify-content-center pt-5 pb-5'>
              <div className='row'>
                <button className="btn btn-outline-primary" onClick={goToSignup}>Signup</button>
                <button className="btn btn-outline-primary" onClick={goToLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
