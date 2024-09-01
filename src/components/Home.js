import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
  
const LandingPage = () => {
  const mainRef = useRef(null);

  useEffect(() => {
   
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      
<<<<<<< HEAD
      <main
        ref={mainRef}
        className="flex-grow text-center py-20 bg-gray-100 flex flex-col justify-center items-center"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold mb-4">
          Empowering Your Business with
        </h1>
        <h2 className="text-3xl text-grey-600 font-semibold">
          <Typewriter
            words={['Innovative IT Solutions','Business Management','Mobile Application development','SEO development','Web Development','IT Solutions and Consluting']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
=======
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
>>>>>>> ba9b7accd4bd239217035c38bf345fd64f0535d9
        </h2>
      </main>
    </div>
  );
};

export default LandingPage;
