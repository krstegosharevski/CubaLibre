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
    <div className="w-full min-h-screen bg-black overflow-hidden">
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
            <p className="text-xl md:text-2xl mb-8 font-light">Where Lake Ohrid's Beauty Meets Culinary Excellence</p>
            <button className="px-8 py-7 mt-3 rounded-md text-white bg-transparent border-2 border-white hover:bg-white hover:text-black transition duration-300">
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

      {/* Image + Text Animated Card Section - UPDATED */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="relative py-32 bg-black"
      >
        <div className="max-w-6xl mx-auto px-4 overflow-hidden">
          <div className="relative">
            {/* Image Container - Updated size and positioning */}
            <div className="relative h-[500px] w-[700px] md-right[100%] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1920&q=80"
                alt="Special ambience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>

            {/* Text Container - Updated positioning */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="absolute md:right-[10%] top-[10%] md:top-[15%] left-[10%] md:left-auto transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2"
            >
              <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl max-w-md">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Why Visit Cuba Libre Drim Restaurant?</h2>
                <p className="text-lg font-serif">
                  It is the perfect spot to enjoy a meal while being close to some of the most beautiful and culturally significant sites in the area.
                </p>
                <p className="text-lg font-serif">- Visit the Monastery of Saint Naum</p>
                <p className="text-lg font-serif">- Explore the Springs of the River Crn Drim</p>
                <button className="mt-6 px-8 py-3 bg-black text-white hover:bg-gray-800 transition duration-300 rounded-md">
                  Reserve
                </button>
              </div>
            </motion.div>
          </div>
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

      <div className="w-full bg-black py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Opening Hours */}
            <div className="p-10 bg-black shadow-lg rounded-lg">
              <div className="flex items-center mb-8">
                <Clock className="w-8 h-8 mr-3 text-white" />
                <h2 className="text-3xl font-serif text-white shadow-lg">Opening Hours</h2>
              </div>
              <div className="space-y-4 text-white mt-3">
                {[
                  { day: "Monday", hours: "09:00 - 01:00" },
                  { day: "Tuesday", hours: "09:00 - 01:00" },
                  { day: "Wednesday", hours: "09:00 - 01:00" },
                  { day: "Thursday", hours: "09:00 - 01:00" },
                  { day: "Friday", hours: "09:00 - 02:00" },
                  { day: "Saturday", hours: "09:00 - 02:00" },
                  { day: "Sunday", hours: "09:00 - 01:00" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-gray-700 pb-3">
                    <span className="font-medium italic">{item.day}</span>
                    <span className="italic">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map with Skew Effect */}
            <motion.div
              className="bg-black shadow-lg rounded-lg p-10 relative"
              initial={{ skewX: -6 }}
              whileInView={{ skewX: 0 }}
              viewport={{ once: false }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <div className="h-full w-full rounded-lg overflow-hidden relative" style={{ minHeight: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.756643179906!2d20.7976297!3d41.1126301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350ddb4a185b5df%3A0xf49ec62cb6aed35c!2sThe%20HarbouR%20Club!5e0!3m2!1sen!2smk!4v1712419564639!5m2!1sen!2smk"
                  width="100%"
                  height="100%"
                  style={{ minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  className="bg-white"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>



      {/* Other Restaurants Section */}
      <RestaurantsListing
        title="Explore Our Other Venues"
        excludeCurrent
      />
    </div>
  );
};

export default CubaDrim;