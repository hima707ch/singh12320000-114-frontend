import React from 'react';
import images from '../assets/images';

const PortfolioDetail = ({ item, onClose }) => {
  return (
    <div id="PortfolioDetail_1" className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div id="PortfolioDetail_2" className="bg-white rounded-lg max-w-4xl w-full mx-4 overflow-hidden">
        <div id="PortfolioDetail_3" className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={images[0]}
            alt={item.title}
            className="w-full h-96 object-cover"
          />
        </div>
        <div id="PortfolioDetail_4" className="p-6">
          <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
          <p className="text-gray-600 mb-4">{item.category}</p>
          <p className="mb-6">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;