import React from 'react';
import CreateEventForm from './CreateEventForm';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin! Here you can manage events, volunteers, and more.</p>
      <CreateEventForm />
    </div>
  );
};

export default AdminDashboard;
