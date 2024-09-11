import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('volunteer'); // Default to 'volunteer'
  const [organization, setOrganization] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
  
    const registrationData = {
      name,
      email,
      password,
      role,
      ...(role === 'organizer' && { organization })
    };
  
    try {
      const response = await axios.post('http://localhost:8000/api/auth/register', registrationData);
      console.log(response); // Check if the response is successful
      if (response.status === 201) {
        alert('Successfully registered');
        console.log(`Role: ${role}`); // Check if role is correct
        // Redirect based on role
        if (role === 'volunteer') {
          console.log('Navigating to /events'); // Add a log to confirm this line runs
          navigate('/events'); // Redirect to events for volunteers
        } else if (role === 'organizer') {
          console.log('Navigating to /create-event'); // Add a log to confirm this line runs
          navigate('/create-event'); // Redirect to create event for organizers
        }
      }
    } catch (error) {
      console.error('Registration error', error);
      const errorMessage = error.response?.data?.message || 'Registration failed';
      alert(`Registration failed: ${errorMessage}`);
    }
  };
  

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className="form-group">
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="volunteer">Volunteer</option>
            <option value="organizer">Organizer</option>
          </select>
        </div>
        {role === 'organizer' && (
          <div className="form-group">
            <label>Organization</label>
            <input
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
