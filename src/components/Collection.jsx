import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { collection } from '../data/collection';

function Collection() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#1A202C] to-[#2D3748] text-textLight">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Featured Collection
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {collection.slice(0, 6).map((item, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-cardBg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="overflow-hidden h-52">
                                <motion.img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    {item.name}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {item.price} ETH
                                </p>
                                <Link
                                    to={`/nft/${item.id}`}
                                    className="inline-block bg-secondary text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300"
                                >
                                    View Details
                                </Link>
                            </div>
                            {/* Рамка для выделения карточки */}
                            <motion.div
                                className="absolute inset-0 border-4 border-transparent rounded-xl"
                                whileHover={{ borderColor: '#FF8C42' }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link
                        to="/collection"
                        className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-80 transition duration-300"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Collection;
