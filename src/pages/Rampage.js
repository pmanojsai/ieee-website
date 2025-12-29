import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Shield, Brain, Cpu, Code2, Utensils, Coffee, Award, Gift, FileText, Star, Trophy, Users, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ieeeLogo from '../assets/images/logo.svg.png';
import algorandLogo from '../assets/images/algorand.png';
import gfgLogo from '../assets/images/gfg.png.png';
import klhLogo from '../assets/images/klh.png.png'
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
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white min-h-screen flex items-center">
        {/* Floating Lines Background */}
        <FloatingLinesBackground />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute top-1/3 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>
        
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
                <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">2.6</span>
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
                <motion.a
                  href="#register"
                  className="group relative px-8 py-4 font-medium text-lg rounded-full overflow-hidden"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="absolute inset-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2 text-blue-900 font-bold">
                    <span>Register Now</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </motion.a>

                <motion.a
                  href="#details"
                  className="group relative px-8 py-4 font-medium text-lg rounded-full overflow-hidden border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.03,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
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
              { icon: <Coffee className="w-8 h-8 text-blue-600" />, text: "Refreshments provided throughout Event" },
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

      {/* Previous Edition - Rampage 2.5 */}
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
                  <Calendar className="w-5 h-5 mt-1 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Event Date</h4>
                    <p className="text-gray-600 dark:text-gray-300">December 15-16, 2024</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 mt-1 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Participants</h4>
                    <p className="text-gray-600 dark:text-gray-300">150+ developers and designers</p>
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
              <h3 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">Winners of Rampage 2.5</h3>
              <div className="space-y-6">
                {[
                  { place: '1st Place', team: 'Team Innovators', project: 'AI-Powered Healthcare Assistant' },
                  { place: '2nd Place', team: 'Code Wizards', project: 'Blockchain Voting System' },
                  { place: '3rd Place', team: 'Tech Titans', project: 'Smart City IoT Solution' }
                ].map((winner, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-600 rounded-lg">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{winner.team}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{winner.project}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded">
                        {winner.place}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Relive the Experience</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((item) => (
                <motion.div 
                  key={item}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md cursor-pointer"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-600">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="mt-8 px-6 py-2 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="register" className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Registration Open Now!
            </div>
          </div>
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Ready to Join Rampage 2.6?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Don't miss out on this exciting 24-hour hackathon. Build something amazing with us!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300"
            >
              Register Now
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-300"
            >
              View Schedule
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rampage;