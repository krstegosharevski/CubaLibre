import React from 'react';
import Navbar from '../components/layout/Navbar';
import { ChevronDown, MapPin, Clock, Phone } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import RestaurantsListing from '../components/shared/RestaurantsListing';
import Footer from '../components/layout/Footer';

const Harbour = () => {
    const { scrollY } = useScroll();

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
        <div className="w-full min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
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
                        <h1 className="text-5xl md:text-7xl font-serif mb-6">The HarbouR Club</h1>
                        <button className="px-8 py-7 mt-3 text-white bg-transparent border-2 border-white hover:bg-white hover:text-black transition duration-300">
                            Make a Reservation
                        </button>
                    </div>
                </motion.div>
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                    <ChevronDown size={32} />
                </div>
            </div>

            {/* Introduction Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="w-full py-24 px-4"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif mb-6 text-gray-900">Welcome to The HarbouR</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            In the heart of Ohrid, The HarbouR Club stands as a testament to refined taste and exceptional hospitality.
                            We invite you to experience a perfect blend of sophisticated dining, masterful mixology, and unforgettable entertainment —
                            all accompanied by a breathtaking view of Lake Ohrid.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="aspect-square relative overflow-hidden group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                                alt="Interior"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="aspect-square relative overflow-hidden group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                                alt="Food"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="aspect-square relative overflow-hidden group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
                                alt="Drinks"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
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
                className="bg-gray-50 py-24 px-4"
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif mb-6 text-gray-900">Our Menu</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover our carefully curated menu featuring the finest ingredients and
                            expert preparation. From signature cocktails to exquisite dishes, every
                            item is crafted to perfection.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-serif mb-8 text-gray-900">Signature Cocktails</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        name: "Mediterranean Sunset",
                                        description: "Premium vodka, fresh citrus, Mediterranean herbs",
                                        price: "€12"
                                    },
                                    {
                                        name: "Harbour Mule",
                                        description: "House-spiced rum, ginger beer, lime",
                                        price: "€14"
                                    },
                                    {
                                        name: "Coastal Spritz",
                                        description: "Prosecco, select aperitivo, soda",
                                        price: "€11"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        custom={index}
                                        variants={menuItemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false }}
                                        className="flex justify-between items-baseline border-b border-gray-200 pb-4"
                                    >
                                        <div>
                                            <h4 className="text-xl font-serif text-gray-900">{item.name}</h4>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                        <span className="text-gray-900 font-serif">{item.price}</span>
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
                            <h3 className="text-2xl font-serif mb-8 text-gray-900">Small Plates</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        name: "Truffle Arancini",
                                        description: "Black truffle, wild mushrooms, parmesan",
                                        price: "€16"
                                    },
                                    {
                                        name: "Tuna Tartare",
                                        description: "Yellowfin tuna, avocado, wasabi mayo",
                                        price: "€18"
                                    },
                                    {
                                        name: "Wagyu Sliders",
                                        description: "Japanese wagyu, caramelized onions, truffle aioli",
                                        price: "€22"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        custom={index}
                                        variants={menuItemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false }}
                                        className="flex justify-between items-baseline border-b border-gray-200 pb-4"
                                    >
                                        <div>
                                            <h4 className="text-xl font-serif text-gray-900">{item.name}</h4>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                        <span className="text-gray-900 font-serif">{item.price}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-16"
                    >
                        <button className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition duration-300">
                            View Full Menu
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Contact & Info Section */}
            <div className="w-full py-24 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-serif mb-8 text-gray-900">Visit Us</h2>
                            <div className="space-y-6 text-gray-600">
                                <div className="flex items-center space-x-4">
                                    <MapPin className="w-6 h-6" />
                                    <span>Kej Makedonija, Ohrid 6000</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Clock className="w-6 h-6" />
                                    <span>Mon-Sun: 18:00 - 02:00</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone className="w-6 h-6" />
                                    <span>+389 75 357 545</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-serif mb-8 text-gray-900">Reservations</h2>
                            <p className="text-gray-600 mb-8">
                                For group bookings and special events, please contact us directly.
                                We recommend making reservations in advance to ensure availability.
                            </p>
                            <button className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition duration-300">
                                Book a Table
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Restaurants Section */}
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

export default Harbour;