import React from 'react';
import Hero from './Hero';
import About from './Aboutus';
import CTA from './CTA';
import Footer from './Footer';

const Body = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Body;