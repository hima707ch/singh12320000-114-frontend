import React from 'react';
import ContactForm from './ContactForm';
import Map from './Map';
import { useContact } from './useContact';

const Body = () => {
  const { handleSubmit, isLoading, error, success } = useContact();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-7xl mx-auto" id="Body_2">
        <div className="text-center mb-12" id="Body_3">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" id="Body_4">Contact Us</h1>
          <p className="text-lg text-gray-600" id="Body_5">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="Body_6">
          <ContactForm onSubmit={handleSubmit} isLoading={isLoading} error={error} success={success} />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Body;