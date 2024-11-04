import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const imageMapping = {
  1: 'https://japanrailtimes.japanrailcafe.com.sg/web/filebox/6.Summer%20Festival%20-.jpeg?_t=1690815970', 
  2: 'https://cdn.prod.website-files.com/643d2eea03135260bdaca209/664b831580aa201c96d600cd_Quantum%20conference.webp',
  3: 'https://www.rosenheim24.de/assets/images/35/680/35680568-oktoberfest-2024-die-schoensten-fotos-vom-wiesn-auftakt-in-muenchen-Eec.jpg',
  4: 'https://marathontours.com/wp-content/uploads/sites/2/2023/04/Berlin-Marathon-Image.jpg',
  5: 'https://assets.glamour.de/photos/637c9fb6a38e5363f2379732/16:9/w_2560%2Cc_limit/weihnachts-markt-gettyimages-457996383.jpg',
 
};

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/events')
      .then((response) => {
        setPosts(response.data.results);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="bg-accent rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col items-center justify-center text-center w-60 mx-auto"
          >
            {/* Use the image from the mapping */}
            {imageMapping[post.id] && (
              <img
                src={imageMapping[post.id]} // Get the image URL from the mapping
                alt={post.title} // You may want to change this to an appropriate alt text
                className="w-full h-32 object-cover rounded-lg mb-4" // Style the image as needed
              />
            )}
            <h2 className="text-lg font-semibold mb-2 truncate">{post.title}</h2>
            <p className="text-gray-100 truncate text-white">{post.description.slice(0, 15)}...</p>
            <Link
              to={`/posts/${post.id}`}
              className="text-blue-500 hover:underline mt-4"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
