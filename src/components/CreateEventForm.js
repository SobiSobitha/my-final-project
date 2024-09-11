import React, { useState } from 'react';
import axios from 'axios';
import './CreateEventForm.css';

const CreateEventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [venue, setVenue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      name: eventName,
      date: eventDate,
      time: eventTime,
      venue,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/events', newEvent);
      if (response.status === 201) {
        alert('Event created successfully!');
        setEventName('');
        setEventDate('');
        setEventTime('');
        setVenue('');
      }
    } catch (error) {
      console.error('Error creating event:', error.response ? error.response.data : error.message);
      alert(`Failed to create event: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Venue</label>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventForm;
