import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/view-water-intake'); //url of target page after log in
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className='background'>
      <div className='row d-flex vh-100 align-items-center justify-content-center'>
        <div className='col-4'>
          <div className="container bg-white rounded custom-height">
            <h1 className='d-flex justify-content-center pt-3'>Login</h1>
            <form onSubmit={handleLogin}>
              <div className='d-flex justify-content-center pt-4 pb-4'>
                <div className='row'>
                  <div>
                    <input class="form-control mb-4 bg-light border-3" placeholder="User Name" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                  </div>
                  <div>
                    <input class="form-control mb-4 bg-light border-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <button className="btn btn-outline-primary" type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
