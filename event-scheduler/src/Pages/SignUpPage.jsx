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

  // Google, Facebook, and Apple sign-up buttons
  const handleGoogleSignUp = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID';
  };

  const handleFacebookSignUp = () => {
    window.location.href = 'https://www.facebook.com/v10.0/dialog/oauth?client_id=YOUR_FACEBOOK_CLIENT_ID';
  };

  const handleAppleSignUp = () => {
    window.location.href = 'https://appleid.apple.com/auth/authorize?client_id=YOUR_APPLE_CLIENT_ID';
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-base-200 -mt-20">
      <div className="w-full lg:w-1/2 p-6">
        <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-6 mx-auto max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-primary text-center">Sign Up</h1>
          
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
          <button type="submit" className="btn btn-primary text-white w-full">Sign Up</button>
        </form>
        <div className="text-center mt-4 text-gray-500 italic">
          Already have an account? <a href="/signin" className="link link-primary">Sign in</a>
        </div>
        <div className="divider">OR</div>
        <div className="flex gap-4 justify-center">
          <button className="btn btn-outline btn-info flex items-center" onClick={handleGoogleSignUp}>
            <FaGoogle className="mr-2" /> Sign up with Google
          </button>
          <button className="btn btn-outline btn-primary flex items-center" onClick={handleFacebookSignUp}>
            <FaFacebook className="mr-2" /> Sign up with Facebook
          </button>
          <button className="btn btn-outline btn-neutral flex items-center" onClick={handleAppleSignUp}>
            <FaApple className="mr-2" /> Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
