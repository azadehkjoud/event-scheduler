import React from 'react';
import PostList from '../components/PostList';
import localVideo from '../assets/img/video.mp4'; // Import your local video

function Home() {
  return (
    <div className="homepage">
      <section className="relative h-[60vh] max-w-7xl mx-auto my-10 rounded-lg shadow-lg overflow-hidden">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={localVideo} // Use your local video here
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="video-overlay hero-overlay bg-opacity-60"></div>
        <div className="video-content text-neutral-content text-center p-8 z-10">
          <div className="max-w-md mx-auto backdrop-blur-md p-8 rounded-lg shadow-lg space-y-4">
            <h1 className="text-4xl font-light daisy-font-bold text-white">Full Hero Video</h1>
            <h3 className="text-2xl font-light text-white">With TailwindCSS & DaisyUI</h3>
            <button className="btn btn-primary btn-wide daisy-btn rounded-full">Learn More</button>
          </div>
        </div>
      </section>
      <PostList /> {/* Renders PostList on the main page */}
    </div>
  );
}

export default Home;
