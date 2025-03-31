import React from 'react';
import Navbar from '../layout/Navbar';

const Hero = () => {
  const scrollToRestaurants = () => {
    const element = document.getElementById('restaurants-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <Navbar />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="text-white">
          <h1 className="text-6xl md:text-8xl font-serif mb-6">Welcome to Cuba Libre</h1>
          <p className="text-xl md:text-2xl uppercase tracking-[0.2em]"></p>
          <button 
           onClick={scrollToRestaurants}
            className="mt-9 px-12 py-6 text-white bg-transparent border-2 border-white hover:bg-white hover:text-black transition duration-300 transform hover:scale-105 focus:outline-none"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;