import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
      
      // Redirect based on role (add logic to handle redirect)
      // Assuming response.data.role is available from backend
      const { role } = response.data;
      if (role === 'organizer') {
        window.location.href = '/admin-dashboard';
      } else if (role === 'volunteer') {
        window.location.href = '/events'; // Modify this route to display events
      }
    } catch (error) {
      console.error('Login error', error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
