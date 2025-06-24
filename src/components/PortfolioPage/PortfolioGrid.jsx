import React from 'react';
import images from '../assets/images';

const PortfolioGrid = ({ items, onItemClick }) => {
  return (
    <div id="PortfolioGrid_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          id={`PortfolioGrid_${index + 2}`}
          className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => onItemClick(item)}
        >
          <img
            src={images[index % images.length]}
            alt={item.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="text-center p-4">
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white">{item.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;