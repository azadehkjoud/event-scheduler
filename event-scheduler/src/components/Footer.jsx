// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content py-2 px-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Logo and Tagline */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-primary mb-2">100% Events</h2>
                 </div>

        {/* Center: Quick Links */}
        <div className="flex flex-col text-center md:text-left md:flex-row gap-6">
          <Link to="/about" className="link link-hover text-neutral-content">About Us</Link>
          <Link to="/events" className="link link-hover text-neutral-content">Events</Link>
          <Link to="/contact" className="link link-hover text-neutral-content">Contact</Link>
          <Link to="/faq" className="link link-hover text-neutral-content">FAQ</Link>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://facebook.com" className="text-primary-content hover:text-primary" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} />
          </a>
          <a href="https://twitter.com" className="text-primary-content hover:text-primary" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" className="text-primary-content hover:text-primary" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" className="text-primary-content hover:text-primary" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-4 text-xs">
        &copy; {new Date().getFullYear()} 100% Events. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
