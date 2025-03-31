import React from 'react';
import Hero from '../components/home/Hero';
import RestaurantCard from '../components/home/ResturantCard';
import About from '../components/home/About';
import RestaurantsListing from '../components/shared/RestaurantsListing';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="w-full bg-black">
      <Hero />
      <RestaurantsListing id="restaurants-section" />
      <About />
      <Footer/>
    </div>
  );
};

export default Home;