import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ModalConnectWallet from './ModalConnectWallet';

function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#1A202C] via-[#2D3748] to-[#1A202C]">
            {/* Анимированный фон */}
            <motion.div
                className="absolute inset-0 z-0"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url("/path-to-your-background-image.jpg")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Основной контент */}
            <div className="relative z-10 text-center max-w-4xl px-4">
                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold text-white mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Unlock the Future of <span className="text-primary">Digital Art</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Explore unique NFTs crafted by top artists worldwide. Own a piece of the future.
                </motion.p>

                {/* Кнопки */}
                <motion.div
                    className="space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <button className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300">
                        Explore Collection
                    </button>
                    <button
                        className="bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Connect Wallet
                    </button>
                </motion.div>
            </div>

            {/* Декоративные элементы */}
            <motion.div
                className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-primary rounded-full blur-2xl opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-secondary to-blue-500 rounded-full blur-3xl opacity-40"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Модальное окно */}
            <ModalConnectWallet isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}

export default Hero;
