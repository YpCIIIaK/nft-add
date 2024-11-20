import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ModalConnectWallet({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        className="bg-cardBg p-8 rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
                        <div className="space-y-4">
                            <button className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-80 transition duration-300">
                                MetaMask
                            </button>
                            <button className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-80 transition duration-300">
                                WalletConnect
                            </button>
                            <button className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-80 transition duration-300">
                                Coinbase Wallet
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ModalConnectWallet;