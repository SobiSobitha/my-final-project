import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/events');
        setEvents(response.data); // Assuming response.data contains an array of events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      {events.length > 0 ? (
        events.map(event => (
          <div key={event._id} className="event-item">
            <h3>{event.name}</h3>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Time: {event.time}</p>
            <p>Venue: {event.venue}</p>
          </div>
        ))
      ) : (
        <p>No events available at the moment.</p>
      )}
    </div>
  );
};

export default EventList;
