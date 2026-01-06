import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Shield, Brain, Cpu, Code2, Utensils, Coffee, Award, Gift, FileText, Star, Trophy, Users, Calendar, Clock, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import backgroundImage from '../assets/images/background.webp';
import { Link } from 'react-router-dom';
import ieeeLogo from '../assets/images/logo.svg.png';
import algorandLogo from '../assets/images/algorand.png';
import gfgLogo from '../assets/images/gfg.png.png';
import klhLogo from '../assets/images/klh.png.png';
import ImageCarousel from '../components/ImageCarousel';
// Import all RP images
const p1 = require('../assets/images/RP-1.png');
const p2 = require('../assets/images/RP-2.png');
const p3 = require('../assets/images/RP-3.png');
const p4 = require('../assets/images/RP-4.png');
const p5 = require('../assets/images/RP-5.png');
const p6 = require('../assets/images/RP-6.png');
const p7 = require('../assets/images/RP-7.png');
// Floating Lines Background Component
const FloatingLinesBackground = () => {
  const controls = useAnimation();
  const lines = Array(15).fill(0).map((_, i) => ({
    id: i,
    x1: Math.random() * 100,
    y1: Math.random() * 100,
    x2: Math.random() * 100,
    y2: Math.random() * 100,
    color: `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`,
    width: Math.random() * 2 + 0.5,
    animationDuration: Math.random() * 40 + 20,
    animationDelay: Math.random() * 10
  }));

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <svg 
        className="w-full h-full" 
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 100"
      >
        {lines.map((line) => (
          <motion.line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke={line.color}
            strokeWidth={line.width}
            strokeLinecap="round"
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              pathLength: [0, 1, 0],
              x1: [`${line.x1}%`, `${line.x1 + (Math.random() - 0.5) * 20}%`, `${line.x1}%`],
              y1: [`${line.y1}%`, `${line.y1 + (Math.random() - 0.5) * 20}%`, `${line.y1}%`],
              x2: [`${line.x2}%`, `${line.x2 + (Math.random() - 0.5) * 20}%`, `${line.x2}%`],
              y2: [`${line.y2}%`, `${line.y2 + (Math.random() - 0.5) * 20}%`, `${line.y2}%`],
            }}
            transition={{
              duration: line.animationDuration,
              repeat: Infinity,
              ease: "linear",
              delay: line.animationDelay,
            }}
          />
        ))}
      </svg>
    </div>
  );
};



// Other logo URLs
//const ieeeLogo = 'https://www.ieee.org/ucm/groups/public/@ieee/@web/@org/documents/images/ieee_logo_mb_tagline_white.png';

const Rampage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Previous year event images using RP images (showing only RP-1 to RP-6)
  const eventImages = [
    { src: p1, alt: 'Rampage highlight 1' },
    { src: p2, alt: 'Rampage highlight 2' },
    { src: p3, alt: 'Rampage highlight 3' },
    { src: p4, alt: 'Rampage highlight 4' },
    { src: p5, alt: 'Rampage highlight 5' },
    { src: p6, alt: 'Rampage highlight 6' }
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center" style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(233, 30, 30, 1), rgba(10, 0, 75, 0.8), rgba(59, 160, 16, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Floating Lines Background */}
        <FloatingLinesBackground />
        
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32 text-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            {/* Title Section */}
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">RAMPAGE </span>
                <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">v2.6</span>
              </h1>
              <motion.h2 
                className="text-2xl md:text-3xl font-medium text-blue-200 mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                A 24-hour coding marathon where ideas come to life
              </motion.h2>
            </motion.div>

            {/* Logos Section */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 md:gap-8 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                { 
                  logo: klhLogo, 
                  alt: "KLH IEEE Student Branch",
                  delay: 0.1,
                  width: "180px"
                },
                {   
                  logo: ieeeLogo, 
                  alt: "IEEE",
                  delay: 0.2,
                  width: "120px"
                },
                { 
                  logo: algorandLogo, 
                  alt: "Algorand Blockchain Club",
                  delay: 0.3,
                  width: "150px"
                },
                { 
                  logo: gfgLogo, 
                  alt: "Geeks for Geeks",
                  delay: 0.4,
                  width: "150px"
                }
              ].map((item, index, array) => {
                // Calculate dynamic delay based on position
                const baseDelay = 0.1;
                const staggerDelay = 0.1;
                const dynamicDelay = baseDelay + (index * staggerDelay);
                
                // Alternating animation directions for visual interest
                const initialY = index % 2 === 0 ? 30 : -30;
                const initialX = index % 3 === 0 ? 30 : (index % 3 === 1 ? -30 : 0);
                
                return (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: initialY, x: initialX, scale: 0.9, rotate: index % 2 === 0 ? -5 : 5 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      x: 0, 
                      scale: 1,
                      rotate: 0,
                      transition: {
                        delay: dynamicDelay,
                        duration: 0.8,
                        ease: [0.34, 1.56, 0.64, 1],
                        type: 'spring',
                        stiffness: 100,
                        damping: 15
                      }
                    }}
                    whileHover={{ 
                      y: -15,
                      scale: 1.05,
                      rotate: index % 2 === 0 ? 2 : -2,
                      transition: { 
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                        y: {
                          type: 'spring',
                          stiffness: 400,
                          damping: 10
                        }
                      }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      rotate: 0,
                      transition: { 
                        duration: 0.2 
                      } 
                    }}
                  >
                    <motion.div 
                      className="relative bg-white p-4 md:p-6 rounded-2xl shadow-2xl transition-all duration-300 transform hover:shadow-2xl"
                      whileHover={{
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        scale: 1.02
                      }}
                      style={{
                        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div 
                        className="flex items-center justify-center" 
                        style={{ 
                          width: item.width, 
                          height: '100px',
                          perspective: '1000px'
                        }}
                      >
                        <motion.img 
                          src={item.logo} 
                          alt={item.alt}
                          className="max-h-full max-w-full object-contain"
                          style={{ 
                            filter: 'none',
                            transformStyle: 'preserve-3d',
                            willChange: 'transform'
                          }}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.3 }
                          }}
                          initial={{ opacity: 0.9 }}
                          whileInView={{ 
                            opacity: 1,
                            transition: { 
                              delay: dynamicDelay + 0.1,
                              duration: 0.5 
                            }
                          }}
                        />
                      </div>
                      <motion.div 
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          zIndex: -1,
                          transform: 'translateZ(-1px)'
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="pt-8 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-100">Hurry! Registration is now open</span>
                </div>
                <div className="text-blue-200 text-sm font-medium">
                  Only a few spots left - Don't miss out!
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register" className="group relative px-8 py-4 font-medium text-lg rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="absolute inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2 text-blue-900 font-bold">
                    <span>Register Now</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>

                <motion.a
                  href="#details"
                  className="group relative px-8 py-4 font-medium text-lg rounded-full overflow-hidden border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.03,
                    backgroundColor: 'rgba(182, 55, 55, 0.05)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative text-white">Learn More</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -10]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ 
                y: [0, 20, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Project Domains */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              What's Your Passion?
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Pick a domain that excites you and let's build something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
                title: "Cybersecurity & Blockchain",
                description: "Build secure systems and decentralized applications"
              },
              {
                icon: <Brain className="w-12 h-12 text-purple-600 dark:text-purple-400" />,
                title: "AI / ML",
                description: "Create intelligent solutions with machine learning"
              },
              {
                icon: <Cpu className="w-12 h-12 text-green-600 dark:text-green-400" />,
                title: "IoT, VLSI & Robotics",
                description: "Innovate with hardware and embedded systems"
              },
              {
                icon: <Code2 className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />,
                title: "Web Development",
                description: "Build responsive and dynamic web applications"
              }
            ].map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{domain.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{domain.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Facilities */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              We've Got You Covered
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Everything you need for an awesome hackathon experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Utensils className="w-8 h-8 text-green-600" />, text: "Lunch, dinner & supper included" },
              { icon: <Award className="w-8 h-8 text-yellow-600" />, text: "Entertainment and fun activities" },
              { icon: <FileText className="w-8 h-8 text-purple-600" />, text: "Engaging breaks & relaxation sessions" },
              { icon: <Star className="w-8 h-8 text-red-600" />, text: "24-hour support during the hackathon" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  {item.icon}
                </div>
                <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rampage 2.5 Highlights */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Rampage 2.5 - The Legacy Continues
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Reliving the success of our previous edition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Rampage 2.5 Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">KLH University, Bowrampet</p>
                    <p className="text-gray-600 dark:text-gray-300">Bowrampet Village, Bachupally Mandal</p>
                    <p className="text-gray-600 dark:text-gray-300">Hyderabad, Telangana 500043</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar className="w-5 h-5 mt-1 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Event Date & Time</h4>
                    <p className="text-gray-600 dark:text-gray-300">From 9 am on March 20, 2025, to 9 am on March 21, 2025</p>
                    
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 mt-1 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Participants</h4>
                    <p className="text-gray-600 dark:text-gray-300">300+ developers and designers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Code2 className="w-5 h-5 mt-1 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Projects</h4>
                    <p className="text-gray-600 dark:text-gray-300">45+ innovative projects built</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 mt-1 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Winning Projects</h4>
                    <p className="text-gray-600 dark:text-gray-300">3 outstanding projects awarded</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">Rampage 2.5 Winners</h3>
              <div className="space-y-4">
                {[
                  { team: 'HASH ECLIPSE', domain: 'VLSI', place: '1st Place', emoji: '🥇' },
                  { team: 'HIERARCHIAL', domain: 'AIML', place: '1st Place', emoji: '🥇' },
                  { team: 'DEV DYNASTY', domain: 'Web Development', place: '1st Place', emoji: '🥇' },
                  { team: 'NOHUNPUNS', domain: 'IoT', place: '1st Place', emoji: '🥇' }
                ].map((winner, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-600 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold mr-3">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{winner.team} {winner.emoji}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{winner.domain}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="register" className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Registrations Open Now!
            </div>
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Ready to Join Rampage v2.6?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Don't miss out on this exciting 24-hour hackathon. Build something amazing with us!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300"
            >
              Register Now
            </Link>
            <a
              href="#schedule"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-300"
            >
              View Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              <span className="block">Event Schedule</span>
              <span className="block text-blue-600 dark:text-blue-400 text-2xl mt-2">24 Hours of Non-Stop Innovation</span>
            </h2>
            <div className="mt-4 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Round 1 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl h-full border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">01</span>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">Ideation Sprint</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">9:30 – 10:00 AM</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Problem & Rapid Ideation</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">10:00 – 11:00 AM</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">One Page Idea PPT</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">11:00 AM – 12:00 PM</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Idea Defence (Documentation)</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">12:30 – 1:30 PM</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Lunch Break</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-400">
                    <h4 className="text-sm font-medium text-red-800 dark:text-red-200 mb-2">Key Focus Areas:</h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Verification</li>
                      <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Implementation</li>
                      <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span> Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Round 2 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl h-full border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 text-xl font-bold">02</span>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">Build & Innovate</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">1:30 – 2:30 PM</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Architecture / Flow Design</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">2:30 – 5:30 PM</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Mid-build Progress Check</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">5:30 – 6:30 PM</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Innovation Booster</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-400">
                    <h4 className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-2">Build Windows:</h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> 6:30 PM – 12:00 AM: Build Window</li>
                      <li className="flex items-center"><span className="text-purple-500 mr-2">•</span> 7:30 – 11:30 PM: Primary Build</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Round 3 */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl h-full border-l-4 border-indigo-500">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl font-bold">03</span>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">Polish & Prove</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Ongoing</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Usability & Accessibility Check</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Ongoing</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Testing & Failure Handling</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border-l-4 border-pink-400">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">5:00 – 6:00 PM</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Evening Refreshment + Fun Activity</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">6:00 – 7:00 PM</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Build Continues</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-400">
                    <h4 className="text-sm font-medium text-indigo-800 dark:text-indigo-200 mb-2">Final Phase:</h4>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-center"><span className="text-indigo-500 mr-2">•</span> Demos + Documentation</li>
                      <li className="flex items-center"><span className="text-indigo-500 mr-2">•</span> 7:00 – 8:00 AM: Demo Prep</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Year Highlights Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              <span className="block">Previous Year Highlights</span>
              <span className="block text-blue-600 dark:text-blue-400">Relive the Rampage Moments</span>
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
              Take a look at the amazing moments from our previous Rampage events
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-lg font-semibold">Rampage {new Date().getFullYear() - 1}</h3>
                    <p className="text-sm opacity-90">Click to view full size</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Highlight"
              className="w-full h-auto max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            {/* Download Button */}
            <a 
              href={selectedImage} 
              download={`rampage-highlight-${new Date().getTime()}.jpg`}
              className="absolute -top-12 right-12 text-white hover:text-blue-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label="Download image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </a>
          </div>
          
          {/* Image Info */}
          <div className="mt-4 text-white text-center">
            <p className="text-sm text-gray-300">Click outside the image or press ESC to close</p>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Rampage;