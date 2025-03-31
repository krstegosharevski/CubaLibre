

import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-black/0 ">
      <div className="w-full px-4 lg:px-12">
        <div className="flex items-center justify-between py-4">
          <Link 
            to="/" 
            className="text-white font-serif text-3xl tracking-wider hover:text-gold-300 transition-colors duration-300"
            onClick={handleLogoClick}
          >
            Cuba Libre
          </Link>
          <div className="hidden md:flex space-x-12">
            <a href="#restaurants" className="text-white hover:text-gold-300 transition uppercase tracking-widest text-sm">Restaurants</a>
            <a href="#menu" className="text-white hover:text-gold-300 transition uppercase tracking-widest text-sm">Menu</a>
            <a href="#jobs" className="text-white hover:text-gold-300 transition uppercase tracking-widest text-sm">Careers</a>
            <a href="#collections" className="text-white hover:text-gold-300 transition uppercase tracking-widest text-sm">Collections</a>
          </div>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;