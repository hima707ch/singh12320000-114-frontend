import React from 'react';

const CTA = () => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
      <div className="container mx-auto px-6 text-center">
        <h2 id="CTA_2" className="text-4xl font-bold text-white mb-8">Ready to Find Your Dream Home?</h2>
        <p id="CTA_3" className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Take the first step towards your perfect property. Let us help you make your dream a reality.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button id="CTA_4" className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Browse Properties
          </button>
          <button id="CTA_5" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;