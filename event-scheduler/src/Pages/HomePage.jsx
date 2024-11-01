import React from 'react';
import PostList from '../components/PostList';
import dateScrabble from '../assets/img/agenda.jpg';

function Home() {
  return (
    <div className="homepage">
      <div
        className="hero min-h-[60vh] max-w-7xl mx-auto my-10 rounded-lg shadow-lg overflow-hidden" 
        style={{
          backgroundImage: `url(${dateScrabble})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-neutral-content text-center p-8">
          <div className="max-w-md">
        
          </div> 
        </div>
      </div>
      <PostList /> {/* Renders PostList on the main page */}
    </div>
  );
}

export default Home;


