import React from 'react';
import { useNavigate } from 'react-router-dom';

interface RestaurantCardProps {
  name: string;
  description: string;
  image: string;
  path: string;
}

const RestaurantCard = ({ name, description, image, path }: RestaurantCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div 
      className="group relative overflow-hidden cursor-pointer rounded-lg shadow-lg"
      onClick={handleClick}
    >
      <div 
        className="h-[400px] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-700 group-hover:bg-opacity-20"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-serif mb-2">{name}</h3>
        <p className="text-sm mb-4 opacity-90 line-clamp-2">{description}</p>
        <button className="w-fit border-2 border-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;