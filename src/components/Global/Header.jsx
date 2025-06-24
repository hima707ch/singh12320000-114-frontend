import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-2xl font-bold hover:text-gray-200 transition duration-300" id="Header_2">
            MyWebsite
          </Link>

          <div className="hidden md:flex space-x-8" id="Header_3">
            <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
            <Link to="/aboutpage" className="text-white hover:text-gray-200 transition duration-300">About</Link>
            <Link to="/portfoliopage" className="text-white hover:text-gray-200 transition duration-300">Portfolio</Link>
            <Link to="/contactpage" className="text-white hover:text-gray-200 transition duration-300">Contact</Link>
          </div>

          <div className="hidden md:flex space-x-4" id="Header_4">
            <Link to="/loginpage" className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">Login</Link>
            <Link to="/registerpage" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">Register</Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            id="Header_5"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4" id="Header_6">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
              <Link to="/aboutpage" className="text-white hover:text-gray-200 transition duration-300">About</Link>
              <Link to="/portfoliopage" className="text-white hover:text-gray-200 transition duration-300">Portfolio</Link>
              <Link to="/contactpage" className="text-white hover:text-gray-200 transition duration-300">Contact</Link>
              <Link to="/loginpage" className="text-white hover:text-gray-200 transition duration-300">Login</Link>
              <Link to="/registerpage" className="text-white hover:text-gray-200 transition duration-300">Register</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;