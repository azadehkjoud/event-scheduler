


import React from 'react';
import PostList from '../components/PostList';

function Home() {
  return (
<div className="homepage">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to the Event Manager</h1>
      {/* Other homepage content */}
      <PostList /> {/* Renders PostList on the main page */}
    </div>
  );
}

export default Home;