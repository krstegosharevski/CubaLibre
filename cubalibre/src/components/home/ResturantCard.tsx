import React from 'react';

interface RestaurantCardProps {
  name: string;
  description: string;
  image: string;
}

const RestaurantCard = ({ name, description, image }: RestaurantCardProps) => {
  return (
    <div className="group relative overflow-hidden">
      <div 
        className="h-[600px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-700 group-hover:bg-opacity-20"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <h3 className="text-3xl font-serif mb-3">{name}</h3>
        <p className="text-lg mb-6 opacity-90">{description}</p>
        <button className="w-fit border-2 border-white px-8 py-3 uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;