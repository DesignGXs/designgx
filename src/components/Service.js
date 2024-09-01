<<<<<<< HEAD
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

=======
import React from 'react';
import csbImage from '../Assets/csb.jpeg'
import sm from '../Assets/sm.png'
import dm from '../Assets/dm.jpg'
>>>>>>> ba9b7accd4bd239217035c38bf345fd64f0535d9
const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100" id="Service">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">Services</h2>
        
<<<<<<< HEAD
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4" data-aos="fade-right">
=======
        <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={csbImage} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Managed IT Services</div>
    <p class="text-gray-700 text-base">
    Outsource your IT management to us and focus on your core business
    while we handle your IT operations with precision.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># Cloud</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># It Solutions</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># Security</span>
  </div>
</div>
 <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={sm} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Engaging and Tailored Content That Resonates</div>
    <p class="text-gray-700 text-base">
    We create high-quality, original content tailored to your brand's
    voice and audience.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># Video Editing</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># Content Creation</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># Social Account Management</span>
  </div>
</div>
 <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={dm} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Digital Marketig</div>
    <p class="text-gray-700 text-base">
    Designed to help businesses connect with their audience through various online channels.digital marketing helps businesses build their brand and achieve their goals in the digital space.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># SEO</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># Affliate</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># Brand Boostin</span>
  </div>
</div>
          {/* <div className="space-y-4">
>>>>>>> ba9b7accd4bd239217035c38bf345fd64f0535d9
            <h3 className="text-2xl font-semibold">Managed IT Services</h3>
            <p className="text-gray-600">
              Outsource your IT management to us and focus on your core business
              while we handle your IT operations with precision.
            </p>
          </div> */}
          
<<<<<<< HEAD
          <div className="space-y-4" data-aos="fade-left">
=======
          {/* <div className="space-y-4">
>>>>>>> ba9b7accd4bd239217035c38bf345fd64f0535d9
            <h3 className="text-2xl font-semibold">Engaging and Tailored Content That Resonates</h3>
            <p className="text-gray-600">
              We create high-quality, original content tailored to your brand's
              voice and audience.
            </p>
<<<<<<< HEAD
          </div>
          
          <div className="space-y-4" data-aos="fade-right">
            <h3 className="text-2xl font-semibold">IT Consulting</h3>
            <p className="text-gray-600">
              Leverage our expertise to optimize your IT infrastructure, enhance
              system performance, and implement cutting-edge technology solutions.
            </p>
          </div>
          
          <div className="space-y-4" data-aos="fade-left">
            <h3 className="text-2xl font-semibold">Business Development</h3>
            <p className="text-gray-600">
              Partner with us to identify new business opportunities, streamline
              processes, and achieve sustainable growth through innovative strategies.
            </p>
          </div>
=======
          </div> */}
>>>>>>> ba9b7accd4bd239217035c38bf345fd64f0535d9
        </div>
        
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6" data-aos="fade-up">Our Partner</h3>
          <div className="inline-block border-2 border-gray-300 rounded-full p-4" data-aos="zoom-in">
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
