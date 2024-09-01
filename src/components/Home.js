import React, { useEffect, useRef } from 'react';
import logo from '../Assets/logo.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter'; // Import Typewriter

const LandingPage = () => {
  const headerRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
   
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header ref={headerRef} className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} className='h-16 w-16' alt="Logo" />
          <h2>DesignGX</h2>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#Service" className="text-gray-600 hover:text-gray-900">Services</a></li>
            <li><a href="#Contact" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      
      <main ref={mainRef} className="flex-grow flex flex-col items-center justify-center text-center px-4" data-aos="fade-up">
        <h1 className="text-4xl font-bold mb-2">Empowering Your Business</h1>
        <p className="text-xl text-gray-600">with Innovative IT Solutions</p>
      
        <h2 className="inline-block min-w-[300px] md:min-w-[500px] text-center md:text-left">
          Our services are  <span></span>
          <span className="relative">
            <Typewriter
              words={['Mobile App Development', 'Website Development', 'Cloud Storage','Business Management']}
              loop={true}
              cursor
              cursorStyle="!"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
              className="inline-block  text-lg"
            />
          </span>
        </h2>
      </main>
      
      <footer className="bg-gray-100 h-16"></footer>
    </div>
  );
};

export default LandingPage;
