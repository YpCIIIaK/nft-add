import React from 'react';
import { motion } from 'framer-motion';

function Roadmap() {
    const roadmapSteps = [
        { quarter: 'Q1', title: 'Concept Development', description: 'Brainstorming and creating the initial concept for our NFT collection.' },
        { quarter: 'Q2', title: 'Collection Launch', description: 'Official launch of our first NFT collection to the public.' },
        { quarter: 'Q3', title: 'Community Building', description: 'Focusing on growing and nurturing our community of NFT enthusiasts.' },
        { quarter: 'Q4', title: 'Expansion', description: 'Exploring partnerships and expanding our NFT ecosystem.' },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-[#2D3748] to-[#1A202C] text-textLight">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Our Roadmap to Success
                </motion.h2>
                <div className="relative">
                    {/* Линия для таймлайна */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-secondary transform -translate-x-1/2"></div>

                    {roadmapSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex flex-col md:flex-row items-center ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            } mb-16`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* Круг с кварталом */}
                            <div className="relative z-10 bg-secondary text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-xl shadow-lg">
                                {step.quarter}
                            </div>

                            {/* Линии соединения между шагами */}
                            {index !== roadmapSteps.length - 1 && (
                                <div
                                    className={`absolute left-1/2 w-1 bg-secondary ${
                                        index % 2 === 0 ? 'top-20 bottom-0' : 'top-0 bottom-20'
                                    } transform -translate-x-1/2`}
                                ></div>
                            )}

                            {/* Контент шага */}
                            <div
                                className={`bg-cardBg text-white rounded-lg p-8 shadow-lg max-w-md ${
                                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                                }`}
                            >
                                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Roadmap;
