// src/pages/SignUpPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          setShowNotification(true);
          setTimeout(() => {
            setShowNotification(false);
            navigate('/signin'); // Redirect to Sign In page after 3 seconds
          }, 3000);
        }
      })
      .catch(error => console.error('Error signing up:', error));
  };

  return (
    <div className="container mx-auto p-4">
      {showNotification && (
        <div className="notification">
          Sign-up successful! You can now sign in.
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
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
        <button type="submit" className="btn btn-primary w-full">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
