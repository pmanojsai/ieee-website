import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, Medal, Crown, Zap, Target, TrendingUp, Users } from 'lucide-react';

const AnimatedAchievements = () => {
  const [activeAchievement, setActiveAchievement] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const achievements = [
    {
      id: 1,
      title: "Outstanding Student Branch",
      year: "2024",
      description: "Recognized as the best IEEE student branch in the region for exceptional leadership and innovation",
      icon: <Trophy className="w-12 h-12" />,
      color: "from-yellow-400 to-orange-500",
      category: "Leadership",
      impact: "Regional Recognition",
      stats: "1st Place"
    },
    {
      id: 2,
      title: "Innovation Excellence Award",
      year: "2023",
      description: "Awarded for developing cutting-edge AI solutions that address real-world engineering challenges",
      icon: <Zap className="w-12 h-12" />,
      color: "from-blue-500 to-purple-600",
      category: "Innovation",
      impact: "Industry Impact",
      stats: "15 Projects"
    },
    {
      id: 3,
      title: "Research Publication Prize",
      year: "2023",
      description: "Published groundbreaking research in top-tier IEEE journals with high citation impact",
      icon: <Star className="w-12 h-12" />,
      color: "from-green-500 to-emerald-600",
      category: "Research",
      impact: "Academic Excellence",
      stats: "25 Papers"
    },
    {
      id: 4,
      title: "Community Service Award",
      year: "2024",
      description: "Recognized for outstanding contributions to the engineering community and society",
      icon: <Medal className="w-12 h-12" />,
      color: "from-purple-500 to-pink-600",
      category: "Service",
      impact: "Social Impact",
      stats: "1000+ Hours"
    },
    {
      id: 5,
      title: "Technical Excellence",
      year: "2023",
      description: "Demonstrated exceptional technical skills and problem-solving abilities in competitions",
      icon: <Target className="w-12 h-12" />,
      color: "from-red-500 to-orange-600",
      category: "Technical",
      impact: "Skill Development",
      stats: "95% Success"
    },
    {
      id: 6,
      title: "Growth Achievement",
      year: "2024",
      description: "Achieved remarkable growth in membership and engagement with innovative programs",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-indigo-500 to-blue-600",
      category: "Growth",
      impact: "Expansion",
      stats: "300% Growth"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAchievement((prev) => (prev + 1) % achievements.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [achievements.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('achievements-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="achievements-section" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Our Achievements
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Celebrating excellence and innovation through our remarkable accomplishments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Achievement Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAchievement}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${achievements[activeAchievement].color} rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-white">
                        {achievements[activeAchievement].icon}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">
                          {achievements[activeAchievement].year}
                        </div>
                        <div className="text-white/80 text-sm">
                          {achievements[activeAchievement].category}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {achievements[activeAchievement].title}
                    </h3>
                    
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      {achievements[activeAchievement].description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white/80 text-sm mb-1">Impact</div>
                        <div className="text-white font-semibold">
                          {achievements[activeAchievement].impact}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white/80 text-sm mb-1">Achievement</div>
                        <div className="text-white font-bold text-lg">
                          {achievements[activeAchievement].stats}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Achievement Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-white text-sm">Achievement</span>
                <div className="flex gap-1">
                  {achievements.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeAchievement 
                          ? 'bg-white scale-125' 
                          : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white text-sm">
                  {activeAchievement + 1} / {achievements.length}
                </span>
              </div>
            </motion.div>
          </div>

          {/* Achievement Grid */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
                  index === activeAchievement
                    ? 'border-white/50 bg-white/10'
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                }`}
                onClick={() => setActiveAchievement(index)}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                    <div className="text-white">
                      {achievement.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {achievement.title}
                    </div>
                    <div className="text-blue-300 text-xs">
                      {achievement.year}
                    </div>
                  </div>
                </div>
                <div className="text-white/70 text-xs leading-relaxed">
                  {achievement.description.substring(0, 80)}...
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "25+", label: "Awards Won", icon: <Crown className="w-8 h-8" /> },
            { number: "100+", label: "Projects Completed", icon: <Target className="w-8 h-8" /> },
            { number: "500+", label: "Members Impacted", icon: <Users className="w-8 h-8" /> },
            { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-8 h-8" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-blue-300 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedAchievements; 