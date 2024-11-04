import React from 'react';
import PostList from '../components/PostList';
import localVideo from '../assets/img/video.mp4';

function Home() {
  return (
    <div className="homepage">
      <section className="relative h-[60vh] max-w-7xl mx-auto my-10 rounded-lg shadow-lg overflow-hidden">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={localVideo}
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
         </section>
      <PostList /> {/* Renders PostList on the main page */}
    </div>
  );
}

export default Home;

