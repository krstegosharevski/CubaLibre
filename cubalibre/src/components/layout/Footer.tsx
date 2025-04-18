import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    const scrollToRestaurants = () => {
        const element = document.getElementById('restaurants-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <footer className="w-full bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Главна содржина - Flex на desktop, колона на mobile */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 mb-10">
          
          {/* Dress Code - Лево на desktop, центрирано на mobile */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-4">Dress Code</h3>
            <p className="italic text-gray-300 mb-3">Smart elegant attire preferred</p>
            <ul className="space-y-2 text-gray-300 italic">
              <li>Collared shirts recommended</li>
              <li>Elegant dresses/smart casual</li>
            </ul>
          </div>

          {/* Social & Button - Десно на desktop, центрирано на mobile */}
          <div className="text-center">
            <h3 className="text-2xl font-serif mb-5">Connect With Us</h3>
            <div className="flex justify-center  space-x-6 mb-6">
              <a href="https://www.instagram.com/cubalibrebeach/?hl=en" className="hover:text-amber-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <button 
            onClick={scrollToRestaurants}
            className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-colors text-sm tracking-wider">
              MAKE RESERVATION
            </button>
          </div>
        </div>

        {/* Copyright - Секогаш центрирано */}
        <div className="pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Cuba Libre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;