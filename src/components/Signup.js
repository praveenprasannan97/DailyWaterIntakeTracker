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
    <div className='row d-flex vh-100 align-items-center justify-content-center'>
      <div class="container">
        <h1 className='d-flex justify-content-center'>Signup</h1>
        <form onSubmit={handleSignup}>
          <div className='d-flex justify-content-center pt-5'>
            <div>
              <label>UserName:</label>
              <input
                type="text"
                value={username}
                placeholder='UserName'
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password :</label>
              <input
                type="password"
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-sm btn-outline-primary" type="submit">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
