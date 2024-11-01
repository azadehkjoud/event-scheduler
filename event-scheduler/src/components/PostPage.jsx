import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/events/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-light-pink"> {/* Light pink background */}
      <div className="bg-pink-300 rounded-full p-8 shadow-lg w-1/2 h-1/2 flex flex-col items-center justify-center"> {/* Bigger circle box */}
        {post ? (
          <>
            <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
            <p className="text-gray-700 mb-2 text-center">ID: {post.id}</p>
            <p className="text-gray-600 text-center">{post.description}</p>
            <button 
              onClick={() => navigate(-1)} 
              className="mt-4 p-2 bg-blue-500 text-white rounded" // Centered button
            >
              Back
            </button>
          </>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default PostPage;





