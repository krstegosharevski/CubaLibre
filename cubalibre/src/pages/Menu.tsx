import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const restaurants = [
    {
        name: "Cuba Libre",
        description: "Authentic local cuisine in a modern setting. Beach & Bar Cuba Libre.",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
        menuUrl: "/menus/cuba-libre-menu.pdf"
    },
    {
        name: "The HarbouR Club",
        description: "The HrabouR Club is a place for all lovers of culture, good music and quality entertainment. In the heart of Ohrid",
        image: "https://images.unsplash.com/photo-1535850836387-0f9dfce30846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
        menuUrl: "/menus/harbour-menu.pdf"
    },
    {
        name: "Cuba Libre Drim",
        description: "Perched where Lake Ohrid's timeless beauty unfolds. Cuba Libre Resturant Drim",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80",
        menuUrl: "/menus/cuba-drim-menu.pdf"
    }
];

const Menu = () => {
    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <Navbar/>
            <div className="relative h-[100vh] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url("https://theharbourclub.com/wp-content/uploads/2021/01/The-Harbour-Club-Menu3.jpg")'
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                <div className="relative z-10 text-center">
                    <div className="max-w-7xl mx-auto px-4 py-24">
                        <h2 className="text-5xl font-serif text-white text-center font-bold mb-12 font-serif">
                            Select menu from the restaurant
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {restaurants.map((restaurant, index) => (
                                <motion.div
                                    key={restaurant.name}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm"
                                >
                                    <div
                                        className="h-48 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${restaurant.image})` }}
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-serif text-white mb-2">{restaurant.name}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{restaurant.description}</p>
                                        <a
                                            href={restaurant.menuUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors duration-300 rounded text-sm"
                                        >
                                            See menu
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image + Text Animated Card Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative py-32 bg-black"
            >
                <div className="max-w-6xl mx-auto px-4 overflow-hidden">
                    <div className="relative">
                        <div className="relative h-[500px] w-[700px] md-right[100%] rounded-2xl overflow-hidden">
                            <img
                                src="../images/some_pic.png"
                                alt="Special ambience"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="absolute md:right-[10%] top-[10%] md:top-[15%] left-[10%] md:left-auto transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2"
                        >
                            <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl max-w-md">
                                <h2 className="text-3xl md:text-4xl font-serif mb-4 font-bold">About our food</h2>
                                <p className="text-lg font-serif">
                                    With years of tradition and a passion for cooking, our master chefs craft dishes that have delighted generations. 
                                    Using only the finest ingredients, their experience and love for food come together in a rich menu full of variety — 
                                    from timeless classics to unique creations you'll never forget. Welcome to a place where every meal tells a story.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Featured Dishes Section */}
            <div className="bg-white/5 py-24">
                <div className="max-w-7xl mx-auto px-4 font-serif">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-4xl font-serif text-white text-center mb-16"
                    >
                        Be best with the best food!
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Grilled Octopus",
                                description: "Mediterranean style with olive oil and herbs",
                                price: "€24",
                                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                            },
                            {
                                name: "Wagyu Steak",
                                description: "Premium cut with truffle butter",
                                price: "€45",
                                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                            },
                            {
                                name: "Seafood Platter",
                                description: "Fresh daily selection from the Adriatic",
                                price: "€65",
                                image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                            }
                        ].map((dish, index) => (
                            <motion.div
                                key={dish.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative overflow-hidden rounded-lg"
                            >
                                <div
                                    className="h-72 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${dish.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Menu;