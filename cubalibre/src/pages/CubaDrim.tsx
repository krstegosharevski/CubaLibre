import React from 'react';
import Navbar from '../components/layout/Navbar';
import { ChevronDown, MapPin, Clock, Phone, Wine, Utensils } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import RestaurantsListing from '../components/shared/RestaurantsListing';
import Footer from '../components/layout/Footer';

const CubaDrim = () => {
  const { scrollY } = useScroll();

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="w-full min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center justify-center text-center px-4"
        >
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Cuba Libre Drim</h1>
            <button className="px-8 py-7 mt-3 text-white bg-transparent border-2 border-white hover:bg-white hover:text-black transition duration-300">
              Make a Reservation
            </button>
          </div>
        </motion.div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>

      {/* Introduction Section with Parallax */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: false }}
        variants={staggerContainer}
        className="relative py-24 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif mb-6 text-white">Welcome to Cuba Libre Drim</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nestled on the shores of Lake Ohrid, Cuba Libre Drim offers an unparalleled 
              dining experience combining breathtaking views with exquisite cuisine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <Wine className="w-12 h-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-serif mb-4 text-white">Fine Wines</h3>
              <p className="text-gray-300">
                Curated selection of local and international wines to complement your dining experience.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <Utensils className="w-12 h-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-serif mb-4 text-white">Lakeside Dining</h3>
              <p className="text-gray-300">
                Experience fine dining with panoramic views of Lake Ohrid's crystal waters.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <Clock className="w-12 h-12 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-serif mb-4 text-white">Perfect Timing</h3>
              <p className="text-gray-300">
                Join us for sunset dinners and watch the sky paint beautiful colors over the lake.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Menu Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="bg-black py-24 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif mb-6 text-white">Our Specialties</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Indulge in our carefully crafted menu featuring fresh local ingredients
              and innovative culinary techniques.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif mb-8 text-white">Lake's Finest</h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Ohrid Trout",
                    description: "Locally caught, herb-crusted with lemon butter",
                    price: "€24"
                  },
                  {
                    name: "Lake View Risotto",
                    description: "Seafood medley, saffron, white wine",
                    price: "€22"
                  },
                  {
                    name: "Drim Special",
                    description: "Chef's daily creation using local catch",
                    price: "€26"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="flex justify-between items-baseline border-b border-gray-700 pb-4"
                  >
                    <div>
                      <h4 className="text-xl font-serif text-white">{item.name}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                    <span className="text-white font-serif">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif mb-8 text-white">Chef's Selection</h3>
              <div className="space-y-6">
                {[
                  {
                    name: "Macedonian Lamb",
                    description: "Slow-cooked with herbs and local spices",
                    price: "€28"
                  },
                  {
                    name: "Lakeside Pasta",
                    description: "Fresh pasta with truffle and wild mushrooms",
                    price: "€20"
                  },
                  {
                    name: "Sunset Grill",
                    description: "Premium cut with herb butter and grilled vegetables",
                    price: "€32"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="flex justify-between items-baseline border-b border-gray-700 pb-4"
                  >
                    <div>
                      <h4 className="text-xl font-serif text-white">{item.name}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                    <span className="text-white font-serif">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <button className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition duration-300">
              View Full Menu
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Gallery Section */}
      <div className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="aspect-square relative overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                alt="Dining experience"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-square relative overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                alt="Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="aspect-square relative overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                alt="Food presentation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            <div>
              <h2 className="text-3xl font-serif mb-8 text-white">Location & Hours</h2>
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <span>Gradishte, Ohrid 6000</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6" />
                  <span>Daily: 12:00 - 23:00</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <span>+389 75 357 545</span>
                </div>
              </div>
              <button className="mt-8 px-8 py-4 bg-white text-black hover:bg-gray-200 transition duration-300">
                Get Directions
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="h-[400px] relative rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.359046069581!2d20.8032905!3d41.1009742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350dcaa42cfea41%3A0x3769611e40472486!2sCuba%20Libre%20Beach%20%26%20Bar!5e0!3m2!1sen!2smk!4v1710000000000!5m2!1sen!2smk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Other Restaurants Section */}
      <RestaurantsListing
        title="Explore Our Other Locations"
        excludeCurrent
      />

    </div>
  );
};

export default CubaDrim;