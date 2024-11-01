// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function PostList() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         setPosts(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       {posts.map((post) => {
//         return (
//           <div key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//             <Link to={`/posts/${post.id}`}>Read more</Link>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default PostList;


//  change design number 2 vvvvvvvvvvvvvvvvvvvvvvvvv




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/**
 * PostList component
 *
 * This component fetches a list of events from the API and renders them as a
 * grid of cards. Each card displays the event title, a truncated version of the
 * event description, and a "Read more" link to the event details page.
 *
 * The component handles loading state with a "Loading..." message.
 *
 * @returns {React.ReactElement} A React element representing the PostList component.
 */
function PostList() {
  const [events, setEvents] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state to handle asynchronous data fetching

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/events/upcoming")
      .then((response) => {
        console.log("API response:", response.data); 
        const data = Array.isArray(response.data) ? response.data : response.data.events || [];
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link
            to={`/events/${event.id}`}
            key={event.id}
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600">{event.description.slice(0, 50)}...</p>
              <div className="card-actions justify-end mt-4">
                <span className="text-blue-500 hover:underline">Read more</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PostList;
