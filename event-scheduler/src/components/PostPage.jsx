import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {post && (
        <>
          <p> id: {post.id}</p>
          <p> title: {post.title}</p>
          <p> body: {post.body}</p>
          <button onClick={() => navigate(-1)}>Back</button>
        </>
      )}
    </>
  );
}

export default PostPage;





// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function PostPage() {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//       .then((response) => {
//         setPost(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [postId]);

//   if (!post) return <p>Loading...</p>;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
//         <p className="text-gray-700 text-lg">{post.body}</p>        
//       </div>
//     </div>
//   );
// }

// export default PostPage;