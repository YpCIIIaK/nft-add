import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-cardBg py-10 text-textLight">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    {/* Логотип и слоган */}
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="text-3xl font-bold text-primary">
                            NFT Project
                        </Link>
                        <p className="mt-2 text-sm text-gray-400">
                            Unlock the future of digital art.
                        </p>
                    </div>

                    {/* Навигация */}
                    <div className="flex flex-wrap justify-center md:justify-start space-x-6">
                        <Link to="/about" className="hover:text-primary transition duration-300">
                            About
                        </Link>
                        <Link to="/collection" className="hover:text-primary transition duration-300">
                            Collection
                        </Link>
                        <Link to="/roadmap" className="hover:text-primary transition duration-300">
                            Roadmap
                        </Link>
                        <Link to="/faq" className="hover:text-primary transition duration-300">
                            FAQ
                        </Link>
                    </div>

                    {/* Социальные сети */}
                    <div className="flex space-x-4 mt-6 md:mt-0">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-primary transition duration-300"
                        >
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-primary transition duration-300"
                        >
                            <i className="fab fa-discord text-xl"></i>
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary hover:text-primary transition duration-300"
                        >
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>

                {/* Политика и копирайт */}
                <div className="mt-10 border-t border-gray-600 pt-4 text-center md:text-left">
                    <p className="text-sm text-gray-400">
                        &copy; 2023 NFT Project. All rights reserved.
                    </p>
                    <Link
                        to="/privacy"
                        className="text-secondary hover:text-primary transition duration-300 text-sm"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
