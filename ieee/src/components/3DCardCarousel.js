import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Users, Award, Code, BookOpen, Globe } from 'lucide-react';

const ThreeDCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const cards = [
    {
      id: 1,
      title: "Innovation Hub",
      description: "Where brilliant minds come together to create the future of technology",
      icon: <Code className="w-12 h-12" />,
      color: "from-blue-500 to-purple-600",
      stats: "100+ Projects",
      category: "Development"
    },
    {
      id: 2,
      title: "Global Network",
      description: "Connect with 400,000+ engineers worldwide and build lasting relationships",
      icon: <Globe className="w-12 h-12" />,
      color: "from-green-500 to-emerald-600",
      stats: "400K+ Members",
      category: "Networking"
    },
    {
      id: 3,
      title: "Learning Excellence",
      description: "Access cutting-edge research and educational resources from industry leaders",
      icon: <BookOpen className="w-12 h-12" />,
      color: "from-orange-500 to-red-600",
      stats: "1000+ Papers",
      category: "Education"
    },
    {
      id: 4,
      title: "Award Recognition",
      description: "Get recognized for your achievements with prestigious IEEE awards",
      icon: <Award className="w-12 h-12" />,
      color: "from-purple-500 to-pink-600",
      stats: "25+ Awards",
      category: "Recognition"
    },
    {
      id: 5,
      title: "Community Impact",
      description: "Make a difference in the engineering community and society",
      icon: <Users className="w-12 h-12" />,
      color: "from-indigo-500 to-blue-600",
      stats: "50+ Events",
      category: "Community"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, cards.length]);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + cards.length) % cards.length;
    const isActive = diff === 0;
    const isNext = diff === 1;
    const isPrev = diff === cards.length - 1;

    if (isActive) {
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        zIndex: 10,
        opacity: 1
      };
    } else if (isNext) {
      return {
        transform: 'translateX(60%) scale(0.8) rotateY(-15deg)',
        zIndex: 5,
        opacity: 0.7
      };
    } else if (isPrev) {
      return {
        transform: 'translateX(-60%) scale(0.8) rotateY(15deg)',
        zIndex: 5,
        opacity: 0.7
      };
    } else {
      return {
        transform: 'translateX(0) scale(0.6) rotateY(0deg)',
        zIndex: 1,
        opacity: 0.3
      };
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Discover IEEE Excellence
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Experience the power of innovation through our interactive showcase
          </p>
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="relative h-96 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="absolute w-80 h-96 cursor-pointer"
                style={getCardStyle(index)}
                initial={false}
                animate={getCardStyle(index)}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 0,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setCurrentIndex(index)}
              >
                <div className={`w-full h-full bg-gradient-to-br ${card.color} rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden group`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-white mb-6">
                        {card.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {card.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm font-medium">
                          {card.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        </div>
                      </div>
                      <div className="text-white font-bold text-lg mt-2">
                        {card.stats}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevCard}
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <div className="flex gap-3">
            {cards.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextCard}
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Auto-play Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-green-500 text-white' 
                : 'bg-white/20 text-white border border-white/20'
            }`}
          >
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ThreeDCardCarousel; 