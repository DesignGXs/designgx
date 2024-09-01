import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
           
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#Service" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-2">Empowering Your Business</h1>
        <p className="text-xl text-gray-600">with I nnovative IT Solutions</p>
      </main>
      
      <footer className="bg-gray-100 h-16"></footer>
    </div>
  );
};

export default LandingPage;