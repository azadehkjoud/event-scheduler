import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

function SignInPage() {
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          navigate('/dashboard');
        } else {
          console.error('Sign in failed.');
        }
      })
      .catch((error) => console.error('Error signing in:', error));
  };

  const handleGoogleSignIn = () => {
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID';
  };
  const handleFacebookSignIn = () => {
    window.location.href = 'https://www.facebook.com/v10.0/dialog/oauth?client_id=YOUR_FACEBOOK_CLIENT_ID';
  };
  const handleAppleSignIn = () => {
    window.location.href = 'https://appleid.apple.com/auth/authorize?client_id=YOUR_APPLE_CLIENT_ID';
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row items-center justify-center bg-base-200 -mt-20">
         <div className="w-full lg:w-1/2 p-6">
        <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl p-6 mx-auto max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-primary text-center">Sign In</h1>
          
          <input
            type="text"
            placeholder="Username or Email"
            value={formData.identifier}
            onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
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
          <div className="flex items-center mb-4">
            <button type="submit" className="btn btn-primary text-white w-full">Sign In</button>
          </div>
          
          {/* Message for Sign Up */}
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary font-semibold">
              Click here
            </Link>{' '}
            to create one.
          </p>
          <p className="text-center text-sm mt-1 text-gray-500">It's easy and free!</p>
        </form>
        
        <div className="divider">OR</div>
        
        <div className="flex gap-4 justify-center">
          <button className="btn btn-outline btn-info flex items-center" onClick={handleGoogleSignIn}>
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>
          <button className="btn btn-outline btn-primary flex items-center" onClick={handleFacebookSignIn}>
            <FaFacebook className="mr-2" /> Sign in with Facebook
          </button>
          <button className="btn btn-outline btn-neutral flex items-center" onClick={handleAppleSignIn}>
            <FaApple className="mr-2" /> Sign in with Apple
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
