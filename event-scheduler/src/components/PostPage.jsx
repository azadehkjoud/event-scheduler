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
