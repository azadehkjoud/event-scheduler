import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/login', {  // Replace with your login API endpoint
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          navigate('/events'); // Redirect to the main page after successful sign-in
        } else {
          setError("Invalid username or password. Please try again.");
        }
      })
      .catch(error => {
        console.error('Error signing in:', error);
        setError("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="container mx-auto p-4">
      {error && <div className="notification text-red-500">{error}</div>}
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          placeholder="Username"
          className="input input-bordered mb-4 w-full"
        />
        <input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          placeholder="Password"
          className="input input-bordered mb-4 w-full"
        />
        <button type="submit" className="btn btn-primary w-full">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
