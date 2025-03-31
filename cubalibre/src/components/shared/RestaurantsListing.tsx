import React from 'react';
import RestaurantCard from '../home/ResturantCard';

interface Restaurant {
  name: string;
  description: string;
  image: string;
  path: string;
}

interface RestaurantsListingProps {
  title?: string;
  subtitle?:string,
  excludeCurrent?: boolean;
  currentPath?: string;
  id?: string;
}

const restaurants: Restaurant[] = [
  {
    name: "Cuba Libre",
    description: "Authentic local cuisine in a modern setting. Beach & Bar.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    path: "/cubamain"
  },
  {
    name: "The HrabouR Club",
    description: "The HrabouR Club is a place for all lovers of culture, good music and quality entertainment. In the heart of Ohrid",
    image: "https://images.unsplash.com/photo-1535850836387-0f9dfce30846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    path: "/harbour"
  },
  {
    name: "Cuba Libre Drim",
    description: "Perched where Lake Ohrid's timeless beauty unfolds. Cuba Libre Resturant Drim",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
    path: "/cubadrim"
  }
];

const RestaurantsListing: React.FC<RestaurantsListingProps> = ({ 
  title = "Where are you going?", 
  subtitle = "ALL LOCATIONS",
  excludeCurrent = true,
  currentPath ,
  id
}) => {
  const filteredRestaurants = excludeCurrent 
    ? restaurants.filter(restaurant => restaurant.path !== currentPath)
    : restaurants;

  return (
    <div id={id} className="w-full px-4 lg:px-0 py-24">
      <h4 className="text-2xl font-serif text-center text-white mb-5 shadow-lg">{title}</h4>
      <h1 className="text-5xl font-serif text-center text-white mb-16 shadow-lg">{subtitle}</h1>
      <div className='mx-4 px-4'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {filteredRestaurants.map((restaurant, index) => (
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
  );
};

export default RestaurantsListing;