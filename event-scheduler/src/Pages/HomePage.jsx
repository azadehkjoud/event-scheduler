import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events from the API
        fetch('API_ENDPOINT_HERE')
            .then(response => response.json())
            .then(data => setEvents(data.events))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {events.map(event => (
                    <Link 
                        to={`/events/${event.id}`} 
                        key={event.id} 
                        className="card bg-base-200 p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow"
                    >
                        <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
                        <p className="text-gray-600">{event.date}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
