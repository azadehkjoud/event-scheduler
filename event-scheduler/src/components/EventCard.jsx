import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p>{event.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/events/${event.id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
}

// Define prop types for the EventCard component
EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired, // or PropTypes.string, depending on your API
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;