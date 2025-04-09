import Navbar from '../components/layout/Navbar';
import { ChevronDown, Clock } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import RestaurantsListing from '../components/shared/RestaurantsListing';

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
                        <button className="px-8 py-7 mt-3 rounded-md text-white bg-transparent border-2 border-white hover:bg-white hover:text-black transition duration-300">
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

            {/* Black Divider */}
            <hr></hr>

            {/* Opening Hours & Location Section */}
            <div className="w-full bg-white py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Opening Hours */}
                        <div className="p-10 bg-white shadow-lg rounded-lg">
                            <div className="flex items-center mb-8">
                                <Clock className="w-6 h-6 mr-3" />
                                <h2 className="text-3xl font-serif text-black">Opening Hours</h2>
                            </div>
                            <div className="space-y-4 text-black mt-3">
                                {[
                                    { day: "Monday", hours: "09:00 - 01:00" },
                                    { day: "Tuesday", hours: "09:00 - 01:00" },
                                    { day: "Wednesday", hours: "09:00 - 01:00" },
                                    { day: "Thursday", hours: "09:00 - 01:00" },
                                    { day: "Friday", hours: "09:00 - 02:00" },
                                    { day: "Saturday", hours: "09:00 - 02:00" },
                                    { day: "Sunday", hours: "09:00 - 01:00" }
                                ].map((item, index) => (
                                    <div key={index} className="flex justify-between border-b border-gray-200 pb-3">
                                        <span className="font-medium italic">{item.day}</span>
                                        <span className="italic">{item.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Google Map with Skew Effect */}
                        <motion.div
                            className="bg-white shadow-lg rounded-lg p-10 relative"
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