import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M42.7,-73.2C55.9,-67.3,67.7,-56.7,75.6,-43.5C83.5,-30.2,87.6,-15.1,86.6,-0.6C85.5,14,79.3,27.9,71.2,41C63.1,54.1,53.1,66.3,40.1,73.3C27.1,80.3,13.6,82.1,-0.7,83.2C-14.9,84.4,-29.8,85,-42.7,78.9C-55.6,72.8,-66.5,60,-74.2,45.6C-81.9,31.2,-86.4,15.6,-86.2,0.1C-86,-15.4,-81,-30.8,-73.1,-44.2C-65.2,-57.6,-54.3,-69,-41.3,-74.7C-28.3,-80.3,-14.2,-80.2,0.8,-81.5C15.7,-82.8,31.4,-85.5,42.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">Discover Your Dream
                <span className="animate-bounce inline-block ml-2">Home</span>
              </span>
            </h1>
            <p id="Hero_3" className="text-blue-100 text-xl mb-8">Find the perfect property that matches your lifestyle and dreams.</p>
            <button id="Hero_4" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 transform hover:scale-105">Get Started</button>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <img src={images[0] || 'https://via.placeholder.com/600x400'} alt="Modern Home" className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500 animate-float" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;