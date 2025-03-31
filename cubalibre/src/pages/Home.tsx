import React from 'react';
import Hero from '../components/home/Hero';
import RestaurantCard from '../components/home/ResturantCard';
import About from '../components/home/About';

const Home = () => {
  const restaurants = [
    {
      name: "Cuba Libre",
      description: "Authentic local cuisine in a modern setting",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
      path: "/tradition"
    },
    {
      name: "Mediterranean",
      description: "Flavors from the Mediterranean coast",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
      path: "/mediterranean"
    },
    {
      name: "Fusion",
      description: "Where global cuisines meet",
      image: "https://images.unsplash.com/photo-1535850836387-0f9dfce30846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
      path: "/fusion"
    }
  ];

  return (
    <div className="w-full bg-black">
      <Hero />
      <div className="w-full px-4 lg:px-0 py-24">
        <h2 className="text-4xl font-serif text-center text-white mb-16">Our Restaurants</h2>
        <div className='mx-4 px-4'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          

        
          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              name={restaurant.name}
              description={restaurant.description}
              image={restaurant.image}
              path={restaurant.path}
            />
          ))}
        
        </div>
        </div>
        
      </div>
      <About />
    </div>
  );
};

export default Home;