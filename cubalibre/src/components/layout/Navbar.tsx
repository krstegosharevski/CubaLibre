import { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-black/0 pl-6 pr-6">
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
            {/* Restaurants Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-white hover:text-gold-300 transition uppercase tracking-widest text-sm"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Restaurants
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-[#0f0f0f] backdrop-blur-sm transform transition-all duration-200 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {/* White top border */}
                <div className="border-t border-white/20 mx-3"></div>
                
                <div className="py-1 pl-3 pr-1">
                  <Link 
                    to="/cubamain"
                    className="block px-3 py-2.5 text-sm text-white hover:bg-white/10 transition-colors duration-200 font-light"
                  >
                    Cuba Libre Bar & Restaurant
                  </Link>
                  <Link 
                    to="/harbour"
                    className="block px-3 py-2.5 text-sm text-white hover:bg-white/10 transition-colors duration-200 font-light"
                  >
                    The HarbouR Club
                  </Link>
                  <Link 
                    to="/cubadrim"
                    className="block px-3 py-2.5 text-sm text-white hover:bg-white/10 transition-colors duration-200 font-light"
                  >
                    Cuba Libre Drim
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/menu" className="text-white hover:text-gold-300 transition uppercase tracking-widest text-sm">Menu</Link>
            <a href="#jobs" className="text-white hover:text-gold-300 transition uppercase tracking-widest text-sm">Gallery</a>
            {/* <a href="#collections" className="text-white hover:text-gold-300 transition uppercase tracking-widest text-sm">Jobs</a> */}
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