// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from API
    fetch('http://localhost:5000/api/events')/*not sure if this link is correct*/
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
