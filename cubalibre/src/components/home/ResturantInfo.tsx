// components/ResturantInfo.tsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ResturantInfo = () => {

  const scrollToRestaurants = () => {
    const element = document.getElementById('restaurants-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Animation */}
      <motion.div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Champagne glasses"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>

      {/* Text Content */}
      <div className="relative h-full w-full px-4 flex justify-start items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-2xl max-w-[500px] ml-[10%] md:ml-[15%] lg:ml-[20%]"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How to reserve?<br />IN CUBA LIBRE
          </h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            First, select the restaurant you want to visit. On the page where you have selected the restaurant, click the RESERVE button and follow the next steps.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            You can choose a restaurant from the menu above, or in the 'Where are you going?' section.
          </p>
          <button 
            onClick={scrollToRestaurants}
            className="group inline-flex items-center text-base font-semibold"
          >
            <span className="mr-2 transform group-hover:translate-x-2 transition-transform duration-300">&gt;</span>
            <span className="transform group-hover:translate-x-2 transition-transform duration-300">
              Select your restaurant
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResturantInfo;
