import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.username === username)) {
      alert('User already exists!');
    } else {
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/login');
    }
  };

  return (
    <div className="background">
      <div className='row d-flex vh-100 align-items-center justify-content-center'>
        <div className='col-4'>
        <div class="container bg-white rounded custom-height">
          <h1 className='d-flex justify-content-center pt-3'>Signup</h1>
          <form onSubmit={handleSignup}>
            <div className='d-flex justify-content-center pt-4 pb-4'>
              <div className='row'>
                <div>
                  {/* <label>UserName:</label> */}
                  <input class="form-control mb-4 bg-light border-3" placeholder="User Name" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <br></br>
                <div>
                  {/* <label>Password :</label> */}
                  <input class="form-control mb-4 bg-light border-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className="btn btn-outline-primary" type="submit">Signup</button>
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
