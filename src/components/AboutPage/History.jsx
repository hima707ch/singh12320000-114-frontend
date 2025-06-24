import React from 'react';
import images from '../assets/images';

const History = ({ data }) => {
  return (
    <section id="History_1" className="bg-white rounded-lg shadow-lg p-8">
      <h2 id="History_2" className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
      <div id="History_3" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div id="History_4" className="space-y-4">
          <p id="History_5" className="text-gray-600 leading-relaxed">
            Founded in 2010, we've grown from a small startup to an industry leader in real estate solutions. Our journey has been marked by continuous innovation and unwavering commitment to excellence.
          </p>
          <p id="History_6" className="text-gray-600 leading-relaxed">
            Over the years, we've helped thousands of clients find their perfect properties and have expanded our services across multiple cities.
          </p>
        </div>
        <div id="History_7" className="relative h-64 rounded-lg overflow-hidden">
          <img
            id="History_8"
            src={images[0]}
            alt="Company History"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default History;