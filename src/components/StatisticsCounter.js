import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Calendar, TrendingUp, Code, BookOpen } from 'lucide-react';

const StatisticsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: 250,
      suffix: '+',
      label: 'Active Members',
      description: 'Students actively participating',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: 15,
      suffix: '',
      label: 'Awards Won',
      description: 'National and international recognition',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: 50,
      suffix: '+',
      label: 'Events Organized',
      description: 'Workshops, seminars, and conferences',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: 95,
      suffix: '%',
      label: 'Success Rate',
      description: 'Project completion and placement',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Code className="w-8 h-8" />,
      number: 100,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Innovative technical solutions',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: 25,
      suffix: '+',
      label: 'Research Papers',
      description: 'Published in reputed journals',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const Counter = ({ end, suffix, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
      if (hasAnimated) {
        const startTime = Date.now();
        const startValue = 0;

        const updateCounter = () => {
          const currentTime = Date.now();
          const elapsed = (currentTime - startTime) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);
          
          setCount(currentCount);
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        requestAnimationFrame(updateCounter);
      }
    }, [hasAnimated, end, duration]);

    return (
      <span className="text-4xl font-bold text-white">
        {count}{suffix}
      </span>
    );
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discover the remarkable achievements and growth of our IEEE student branch
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {hasAnimated ? (
                        <Counter end={stat.number} suffix={stat.suffix} />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                    <div className="text-blue-200 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
                
                <p className="text-blue-100 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
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
            className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticsCounter; 