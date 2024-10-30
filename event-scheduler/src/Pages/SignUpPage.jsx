import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa'; 

function SignUpPage() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
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
          navigate('/signin');
        } else {
          console.error('Sign up failed.');
        }
      })
      .catch(error => console.error('Error signing up:', error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {/* Left Side: Form */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-6">
            <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
            <img 
              src="https://example.com/logo.png" // Replace with your logo URL
              alt="Logo"
              className="w-20 h-20 mx-auto mb-4"
            />
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="input input-bordered w-full mb-4"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input input-bordered w-full mb-4"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="input input-bordered w-full mb-4"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="input input-bordered w-full mb-4"
              required
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" className="checkbox checkbox-primary mr-2" required />
              <span>I agree to the <a href="#" className="link link-primary">Terms and Conditions</a></span>
            </div>
            <button type="submit" className="btn btn-primary w-full">Sign Up</button>
          </form>
          <div className="text-center mt-4 text-gray-500 italic">
            Already have an account? <a href="/signin" className="link link-primary">Sign in</a>
          </div>
          <div className="divider">OR</div>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-outline btn-info flex items-center">
              <FaGoogle className="mr-2" /> Sign in with Google
            </button>
            <button className="btn btn-outline btn-primary flex items-center">
              <FaFacebook className="mr-2" /> Sign in with Facebook
            </button>
            <button className="btn btn-outline btn-secondary flex items-center">
              <FaApple className="mr-2" /> Sign in with Apple
            </button>
          </div>
        </div>

        {/* Right Side: Background Image */}
        <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" 
             style={{ backgroundImage: 'url(/assets/img/venue.jpg)' }} 
        ></div>
      </div>
    </div>
  );
}

export default SignUpPage;
