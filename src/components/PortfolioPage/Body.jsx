import React from 'react';
import PortfolioGrid from './PortfolioGrid';
import PortfolioDetail from './PortfolioDetail';
import usePortfolio from './usePortfolio';

const Body = () => {
  const { selectedItem, setSelectedItem, portfolioItems } = usePortfolio();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-4xl font-bold text-center mb-8">My Portfolio</h1>
      {selectedItem ? (
        <PortfolioDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
      ) : (
        <PortfolioGrid items={portfolioItems} onItemClick={setSelectedItem} />
      )}
    </div>
  );
};

export default Body;