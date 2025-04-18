import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import { ChevronDown, MapPin, Clock, Phone, Music } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import RestaurantsListing from '../components/shared/RestaurantsListing';

const CubaMain = () => {
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // You can use this to debug scroll position if needed
      // console.log('Page scroll: ', latest);
    });
  }, [scrollY]);

  return (
    <div className="w-full min-h-screen overflow-hidden bg-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex items-center justify-center text-center px-4"
        >
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Cuba Libre Beach & Bar</h1>
            <button className="px-8 py-7 mt-3 rounded-md text-white bg-transparent border-2 border-white hover:bg-white hover:text-black transition duration-300">
              Make a Reservation
            </button>
          </div>
        </motion.div>
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="w-full py-20 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="text-white">
              <h2 className="text-4xl font-serif mb-8">About Cuba Libre</h2>
              <p className="text-lg leading-relaxed opacity-90 mb-8">
                Tradition Restaurant celebrates the rich culinary heritage of our region while
                embracing modern cooking techniques. Our menu features carefully selected local
                ingredients prepared with respect for traditional recipes and innovative twists.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <span>Kej Makedonija, Ohrid 6000</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6" />
                  <span>Mon-Thu & Sun: 09:00 - 01:00</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6" />
                  <span>Fri-Sat: 09:00 - 02:00</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <span>+395 75 357 545</span>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[400px] md:h-full relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Music Events Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white py-24 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Music className="w-12 h-12 mx-auto mb-6 text-gold-300" />
            <h2 className="text-4xl font-serif mb-4">Famous Live Music & Events</h2>
            <p className="text-lg text-gray-600">Experience the perfect blend of culinary excellence and musical artistry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-serif mb-3">Cuban Nights</h3>
              <p className="text-gray-600 mb-4">Every Wednesday | 9 PM - 11 PM</p>
              <p className="text-gray-500">Enjoy authentic Latin music, exotic cocktails, and performances by Cuban dancers that will ignite the atmosphere.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-serif mb-3">Music Night</h3>
              <p className="text-gray-600 mb-4">Friday & Saturday | 9 PM - 1 AM</p>
              <p className="text-gray-500">Enjoy live music every Friday and Saturday! 🎶 Relax with good company, atmosphere and unforgettable sounds!.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-serif mb-3">Sunday Acoustic</h3>
              <p className="text-gray-600 mb-4">Sundays | 2 PM - 5 PM</p>
              <p className="text-gray-500">Enjoy a relaxing Sunday brunch accompanied by acoustic performances.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Menu Preview */}
      <div className="relative w-full min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-4xl mx-auto px-4 py-24"
        >
          <div className="bg-black bg-opacity-50 backdrop-blur-sm p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-serif mb-4">WHAT'S YOUR FLAVOUR?</h2>
            <h3 className="text-4xl md:text-6xl font-serif mb-8">MENU</h3>
            <p className="text-lg md:text-xl mb-12 leading-relaxed">
              Fancy the best meat from the grill, fresh fish, lobster, oysters and delicious sushi?
              Then Cuba Libre Restaurant is the place for you. Combine the most delicious dishes with our
              beautiful wines and homemade cocktails.
            </p>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h4 className="text-2xl font-serif mb-2">GRILLED TUNA</h4>
                <p className="text-gray-300">Zucchini | Tay Soi Vinaigrette</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h4 className="text-2xl font-serif mb-2">JAPANESE WAGYU ENTRECÔTE A5</h4>
                <p className="text-gray-300">Japanese Wagyu Entrecôte per 100 Gr.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <h4 className="text-2xl font-serif mb-2">SMASHED AVOCADO DIP</h4>
                <p className="text-gray-300">Pico De Gallo | Avocado | Flatbread</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h4 className="text-2xl font-serif mb-2">SALMON TORCH MAKI</h4>
                <p className="text-gray-300">Salmon | Avocado | Teriyaki</p>
              </motion.div>
            </div>

            <button className="mt-12 px-8 py-4 text-white bg-transparent border-2 border-white hover:bg-white hover:text-black transition duration-300">
              VIEW THE MENU
            </button>
          </div>
        </motion.div>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.359046069581!2d20.8032905!3d41.1009742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350dcaa42cfea41%3A0x3769611e40472486!2sCuba%20Libre%20Beach%20%26%20Bar!5e0!3m2!1sen!2smk!4v1710000000000!5m2!1sen!2smk"
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


      <div className="bg-black py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <RestaurantsListing
            title="Explore Our Other Locations"
            excludeCurrent
          />
        </div>
      </div>
    </div>
  );
};

export default CubaMain;