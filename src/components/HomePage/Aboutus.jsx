import React from 'react';

const About = () => {
  return (
    <section id="About_1" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="About_2" className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div id="About_3" className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
            <p className="text-gray-600">Our team of experienced professionals will guide you through every step of your property journey.</p>
          </div>
          
          <div id="About_4" className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold mb-3">Quality Properties</h3>
            <p className="text-gray-600">We carefully curate our listings to ensure only the highest quality properties for our clients.</p>
          </div>
          
          <div id="About_5" className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3">Trusted Partner</h3>
            <p className="text-gray-600">With years of experience and countless satisfied clients, we're your trusted partner in real estate.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;