import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header id="Header_1" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div id="Header_2" className="flex items-center space-x-2">
                    <img src={images[0]} alt="Logo" className="h-12 w-12 rounded-full hover:scale-110 transition-transform duration-300" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">YourBrand</span>
                </div>

                <button id="Header_3" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>

                <nav id="Header_4" className={`${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent mt-2 lg:mt-0`}>
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
                        <li><NavLink to="/" className={({ isActive }) => 
                            `hover:text-blue-400 transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-white'}`
                        }>Home</NavLink></li>
                        <li><NavLink to="/aboutpage" className={({ isActive }) => 
                            `hover:text-blue-400 transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-white'}`
                        }>About</NavLink></li>
                        <li><NavLink to="/portfoliopage" className={({ isActive }) => 
                            `hover:text-blue-400 transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-white'}`
                        }>Portfolio</NavLink></li>
                        <li><NavLink to="/contactpage" className={({ isActive }) => 
                            `hover:text-blue-400 transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-white'}`
                        }>Contact</NavLink></li>
                        <li><NavLink to="/loginpage" className={({ isActive }) => 
                            `hover:text-blue-400 transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-white'}`
                        }>Login</NavLink></li>
                        <li><NavLink to="/registerpage" className={({ isActive }) => 
                            `bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors duration-300 ${isActive ? 'bg-blue-600' : ''}`
                        }>Register</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;