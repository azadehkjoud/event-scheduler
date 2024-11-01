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
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {posts?.map((post) => (
          <div
            key={post.id}
            className="bg-pink-300 rounded-full shadow-md p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col items-center justify-center text-center w-60 h-60 mx-auto"
          >
            {/* <h2 className="text-lg font-semibold mb-2 truncate">{post.title}</h2> */}
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