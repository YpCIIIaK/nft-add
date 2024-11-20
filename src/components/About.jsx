import React from 'react';
import { motion } from 'framer-motion';

function About() {
    const features = [
        {
            title: 'Unique Arts',
            description: 'Each piece is one-of-a-kind, created by top digital artists.',
            icon: '/icons/unique-art.svg'
        },
        {
            title: 'Blockchain Transparency',
            description: 'Every transaction is recorded on the blockchain for full transparency.',
            icon: '/icons/blockchain.svg'
        },
        {
            title: 'Open Market',
            description: 'Trade your NFTs on various marketplaces with ease.',
            icon: '/icons/market.svg'
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-r from-[#1A202C] to-[#2D3748] text-textLight">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Why Choose Our NFTs?
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-cardBg p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <img
                                    src={feature.icon}
                                    alt={`${feature.title} icon`}
                                    className="w-12 h-12"
                                />
                                <h3 className="text-2xl font-semibold text-white">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-gray-300">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
