import React from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data';
function Home() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {events.map(event => (
        <Link to={`/events/${event.id}`} key={event.id} className="card">
          <h2>{event.name}</h2>
          <p>{event.date}</p>
        </Link>
      ))}
    </div>
  );
}
export default Home;