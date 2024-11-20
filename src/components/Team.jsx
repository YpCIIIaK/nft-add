import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/team';

function Team() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#2D3748] to-[#1A202C] text-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Meet the Team
                </motion.h2>
                <div className="grid md:grid-cols-4 gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-cardBg rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            {/* Member Image */}
                            <div className="relative">
                                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-300 mb-4">{member.role}</p>
                                <div className="flex space-x-6">
                                    {member.socials.map((social, socialIndex) => (
                                        <a
                                            key={socialIndex}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-secondary hover:text-white transition duration-300"
                                        >
                                            <i className={`fab fa-${social.platform} text-2xl`}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
