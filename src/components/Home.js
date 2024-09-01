import React, { useEffect, useRef } from 'react';
import logo from '../Assets/logo.jpg';
import AOS from 'aos';
// import { gsap } from 'gsap';
import 'aos/dist/aos.css';

const LandingPage = () => {
  const headerRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
    });

 
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header ref={headerRef} className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} className='h-16 w-16' alt="Logo" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#Service" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      
      <main ref={mainRef} className="flex-grow flex flex-col items-center justify-center text-center px-4" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-2">Empowering Your Business</h1>
        <p className="text-xl text-gray-600">with Innovative IT Solutions</p>
      </main>
      
      <footer className="bg-gray-100 h-16"></footer>
    </div>
  );
};

export default LandingPage;
