import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { DarkModeContext } from '../App';
import DarkModeToggle from './DarkModeToggle';
import logoImg from '../assets/images/logo-1.svg.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Team', path: '/team' },
  { name: 'Our Events', path: '/events' },
  { name: 'Rampage 2.6', path: '/rampage' },
  //{ name: 'Gallery', path: '/gallery' },
  { name: 'Contact Us', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? isDark 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700' 
          : 'bg-white/90 backdrop-blur-md shadow-lg border-b border-blue-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo (replace src/assets/images/logo.svg.png to change) */}
          <div className="flex items-center">
            <img src={logoImg} alt="Site logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl font-medium transition-all duration-300 relative group ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg' 
                      : isDark 
                        ? 'text-gray-300 hover:bg-gray-700' 
                        : 'text-blue-700 hover:bg-blue-50'
                  }`
                }
                end={item.path === '/'}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-3/4`}></span>
              </NavLink>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <DarkModeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className={`md:hidden mt-4 ${isDark ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-md rounded-2xl shadow-xl border ${isDark ? 'border-gray-700' : 'border-blue-100'} overflow-hidden`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-6 py-4 font-medium transition-colors duration-200 border-b ${isDark ? 'border-gray-700' : 'border-blue-50'} last:border-b-0 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                      : isDark 
                        ? 'text-gray-300 hover:bg-gray-700' 
                        : 'text-blue-700 hover:bg-blue-50'
                  }`
                }
                end={item.path === '/'}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 