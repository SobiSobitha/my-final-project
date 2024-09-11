import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import AdminDashboard from './components/AdminDashboard';
import EventList from './components/EventList';
import CreateEventForm from './components/CreateEventForm';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/events" element={<EventList />} /> 
        <Route path="/create-event" element={<CreateEventForm />} />


      </Routes>

    </Router>
  );
};

export default App;
