import React from 'react';
import { useNavigate } from "react-router-dom";


function App() {

  const navigate = useNavigate();

  function goToSignup(){
    navigate('/signup')
  }

  function goToLogin(){
    navigate('/login')
  }

  return (

    <div className='row d-flex vh-100 align-items-center justify-content-center'>
      <div className='col-10'>
        <div className='container' >
          <h1 className="d-flex justify-content-center">Water Intake Tracker</h1>
          <div className='d-flex justify-content-center pt-5'>
            <button className="btn btn-outline-primary" onClick={goToSignup}>Signup</button>
            <p class="text-white">.....</p>
            <button className="btn btn-outline-primary" onClick={goToLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
