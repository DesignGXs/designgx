import React from 'react';

const Service = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100" id="Service">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Managed IT Services</h3>
            <p className="text-gray-600">
              Outsource your IT management to us and focus on your core business
              while we handle your IT operations with precision.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Engaging and Tailored Content That Resonates</h3>
            <p className="text-gray-600">
              We create high-quality, original content tailored to your brand's
              voice and audience.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6">Our Partner</h3>
          <div className="inline-block border-2 border-gray-300 rounded-full p-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">DBX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
