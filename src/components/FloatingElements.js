import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = container.getBoundingClientRect();
      
      const x = (clientX / width) * 100;
      const y = (clientY / height) * 100;

      container.style.setProperty('--mouse-x', `${x}%`);
      container.style.setProperty('--mouse-y', `${y}%`);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingShapes = [
    {
      type: 'circle',
      size: 'w-8 h-8',
      color: 'bg-blue-500/30',
      animation: {
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 180, 360],
      },
      duration: 8,
      delay: 0
    },
    {
      type: 'square',
      size: 'w-6 h-6',
      color: 'bg-purple-500/40',
      animation: {
        y: [0, 15, 0],
        x: [0, -8, 0],
        rotate: [0, -90, -180],
      },
      duration: 6,
      delay: 1
    },
    {
      type: 'triangle',
      size: 'w-10 h-10',
      color: 'bg-green-500/35',
      animation: {
        y: [0, -25, 0],
        x: [0, 15, 0],
        rotate: [0, 120, 240],
      },
      duration: 10,
      delay: 2
    },
    {
      type: 'diamond',
      size: 'w-7 h-7',
      color: 'bg-orange-500/40',
      animation: {
        y: [0, 18, 0],
        x: [0, -12, 0],
        rotate: [0, -45, -90],
      },
      duration: 7,
      delay: 0.5
    },
    {
      type: 'hexagon',
      size: 'w-9 h-9',
      color: 'bg-pink-500/30',
      animation: {
        y: [0, -22, 0],
        x: [0, 8, 0],
        rotate: [0, 60, 120],
      },
      duration: 9,
      delay: 1.5
    }
  ];

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5
  }));

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%'
      }}
    >
      {/* Floating Geometric Shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.size} ${shape.color} rounded-full blur-sm`}
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + index * 10}%`,
          }}
          animate={shape.animation}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay
          }}
        />
      ))}

      {/* Interactive Mouse Follower */}
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
        style={{
          left: 'var(--mouse-x)',
          top: 'var(--mouse-y)',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      {/* Energy Waves */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glowing Orbs */}
      {[1, 2, 3].map((orb) => (
        <motion.div
          key={orb}
          className="absolute w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
          style={{
            left: `${orb * 25}%`,
            top: `${orb * 30}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + orb * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb * 0.5
          }}
        />
      ))}

      {/* Geometric Grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Text Elements */}
      {['IEEE', 'INNOVATION', 'TECHNOLOGY', 'FUTURE'].map((text, index) => (
        <motion.div
          key={text}
          className="absolute text-white/10 font-bold text-2xl pointer-events-none"
          style={{
            left: `${15 + index * 20}%`,
            top: `${20 + index * 15}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        >
          {text}
        </motion.div>
      ))}

      {/* Pulse Rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute border-2 border-blue-500/20 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: `${ring * 200}px`,
            height: `${ring * 200}px`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
            delay: ring * 0.5
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements; 