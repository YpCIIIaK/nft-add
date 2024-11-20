import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faq } from '../data/faq';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gradient-to-b from-[#1A202C] to-[#2D3748] text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Frequently Asked Questions
                </motion.h2>
                <div className="space-y-6">
                    {faq.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-cardBg rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                className="w-full text-left p-6 focus:outline-none"
                                onClick={() => toggleQuestion(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-semibold">{item.question}</span>
                                    <span className="text-2xl text-secondary">{activeIndex === index ? '-' : '+'}</span>
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6 text-gray-300"
                                    >
                                        <p>{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
