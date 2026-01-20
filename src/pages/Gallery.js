import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, Camera, Video, Users, X, Search, ChevronLeft, ChevronRight, BookOpen, Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'blog'
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        mass: 0.5
      }
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  const imageHover = {
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  };
  
  const modalImage = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  
  const modalOverlay = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const categories = [
    { id: 'all', name: 'All', icon: <ImageIcon size={18} className="mr-2" /> },
    { id: 'events', name: 'Events', icon: <Video size={18} className="mr-2" /> },
    { id: 'workshops', name: 'Workshops', icon: <Users size={18} className="mr-2" /> },
    { id: 'team', name: 'Team', icon: <Camera size={18} className="mr-2" /> },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Annual Tech Fest 2023",
      date: "2023-10-15",
      time: "09:00 AM - 05:00 PM",
      location: "Main Auditorium",
      category: "events",
      image: "https://source.unsplash.com/random/800x600/?tech-conference",
      images: [
        "https://source.unsplash.com/random/800x600/?tech-conference",
        "https://source.unsplash.com/random/800x600/?event",
        "https://source.unsplash.com/random/800x600/?technology"
      ],
      description: "Join us for the most anticipated technical event of the year! The Annual Tech Fest brings together industry experts, tech enthusiasts, and students for a day of innovation, workshops, and competitions. Don't miss the opportunity to network and learn from the best in the field.",
      highlights: [
        "Keynote speeches from industry leaders",
        "Hands-on workshops on emerging technologies",
        "Coding competitions with exciting prizes",
        "Networking opportunities with tech companies"
      ]
    },
    {
      id: 2,
      title: "Web Development Workshop",
      date: "2023-09-28",
      time: "10:00 AM - 04:00 PM",
      location: "Computer Lab 3",
      category: "workshops",
      image: "https://source.unsplash.com/random/800x600/?coding-workshop",
      images: [
        "https://source.unsplash.com/random/800x600/?coding-workshop",
        "https://source.unsplash.com/random/800x600/?coding",
        "https://source.unsplash.com/random/800x600/?web-development"
      ],
      description: "Learn modern web development techniques in this hands-on workshop. From HTML5 and CSS3 to React and Node.js, we'll cover the full stack development process. Perfect for beginners and intermediate developers looking to enhance their skills.",
      highlights: [
        "Learn responsive web design",
        "Build a full-stack application",
        "Deploy your project live",
        "Get feedback from experienced developers"
      ]
    },
    {
      id: 3,
      title: "Team Building Session",
      date: "2023-11-05",
      time: "02:00 PM - 05:00 PM",
      location: "Outdoor Grounds",
      category: "team",
      image: "https://source.unsplash.com/random/800x600/?team-building",
      images: [
        "https://source.unsplash.com/random/800x600/?team-building",
        "https://source.unsplash.com/random/800x600/?teamwork",
        "https://source.unsplash.com/random/800x600/?group-activity"
      ],
      description: "Strengthen your team dynamics and improve collaboration through fun and engaging team-building activities. This session is designed to enhance communication, trust, and problem-solving skills among team members.",
      highlights: [
        "Interactive team challenges",
        "Leadership activities",
        "Communication exercises",
        "Fun outdoor games"
      ]
    },
    {
      id: 4,
      title: "Hackathon Finals",
      date: "2023-08-20",
      time: "10:00 AM - 10:00 PM",
      location: "Innovation Center",
      category: "events",
      image: "https://source.unsplash.com/random/800x600/?hackathon",
      images: [
        "https://source.unsplash.com/random/800x600/?hackathon",
        "https://source.unsplash.com/random/800x600/?programming",
        "https://source.unsplash.com/random/800x600/?coding-competition"
      ],
      description: "Witness the most innovative projects at our annual Hackathon Finals. Top teams will present their solutions to real-world problems, competing for exciting prizes and recognition. Join us for a day of creativity, coding, and competition!",
      highlights: [
        "24-hour coding competition",
        "Mentorship from industry experts",
        "Prizes for top projects",
        "Networking with sponsors"
      ]
    },
    {
      id: 5,
      title: "AI & ML Workshop",
      date: "2023-12-01",
      time: "11:00 AM - 03:00 PM",
      location: "AI Research Lab",
      category: "workshops",
      image: "https://source.unsplash.com/random/800x600/?ai-workshop",
      images: [
        "https://source.unsplash.com/random/800x600/?ai-workshop",
        "https://source.unsplash.com/random/800x600/?machine-learning",
        "https://source.unsplash.com/random/800x600/?artificial-intelligence"
      ],
      description: "Dive into the world of Artificial Intelligence and Machine Learning in this comprehensive workshop. Learn about neural networks, deep learning, and how to implement ML models using popular frameworks.",
      highlights: [
        "Hands-on ML model training",
        "Introduction to TensorFlow/PyTorch",
        "Real-world AI applications",
        "Q&A with AI experts"
      ]
    },
    {
      id: 6,
      title: "Annual Meetup",
      date: "2023-07-15",
      time: "06:00 PM - 09:00 PM",
      location: "Grand Ballroom",
      category: "team",
      image: "https://source.unsplash.com/random/800x600/?meeting",
      images: [
        "https://source.unsplash.com/random/800x600/?meeting",
        "https://source.unsplash.com/random/800x600/?networking",
        "https://source.unsplash.com/random/800x600/?conference"
      ],
      description: "Join us for our annual meetup where we celebrate our achievements, share knowledge, and plan for the future. This is a great opportunity to connect with fellow members and learn about upcoming initiatives.",
      highlights: [
        "Keynote presentations",
        "Awards ceremony",
        "Networking session",
        "Preview of upcoming events"
      ]
    }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openImage = (image, event = null) => {
    if (event) event.stopPropagation();
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const openEvent = (event, item) => {
    event.stopPropagation();
    setSelectedEvent(item);
    setViewMode('blog');
  };

  const closeEvent = () => {
    setSelectedEvent(null);
    setViewMode('grid');
  };

  const navigateImage = (direction) => {
    if (!selectedImage || !selectedEvent) return;
    
    const currentIndex = selectedEvent.images.findIndex(img => img === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? selectedEvent.images.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === selectedEvent.images.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(selectedEvent.images[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeImage();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Blog View Component
  const EventBlogView = ({ event, onClose }) => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="relative">
        <div className="relative h-96 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 cursor-pointer"
            onClick={() => openImage(event.images[0])}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-200 mb-6">
              <span className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span className="flex items-center">
                <Clock size={16} className="mr-1" />
                {event.time}
              </span>
              <span className="flex items-center">
                <MapPin size={16} className="mr-1" />
                {event.location}
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">{event.description}</p>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Event Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {event.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {event.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative group cursor-pointer aspect-square overflow-hidden rounded-lg"
                  onClick={() => openImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`${event.title} ${idx + 1}`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/80 text-black rounded-full p-2">
                      <ImageIcon size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link 
                to="/events" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                ← Back to all events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Main Gallery View
  const GalleryGridView = () => (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {filteredItems.map((item) => (
        <motion.div 
          key={item.id}
          variants={item}
          className="group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 cursor-pointer"
          onClick={(e) => openEvent(e, item)}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="relative aspect-video overflow-hidden">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              whileHover={imageHover}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                <p className="text-blue-200 text-sm">
                  {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
              </div>
            </div>
            <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={14} className="mr-1" />
                  {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </div>
              </div>
              <button 
                onClick={(e) => openEvent(e, item)}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center text-sm font-medium"
              >
                <BookOpen size={16} className="mr-1" /> Read More
              </button>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex -space-x-2">
                {item.images.slice(0, 3).map((img, idx) => (
                  <div 
                    key={idx} 
                    className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden"
                    onClick={(e) => {
                      e.stopPropagation();
                      openImage(img);
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`${item.title} ${idx + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {item.images.length > 3 && (
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-medium">
                    +{item.images.length - 3}
                  </div>
                )}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {item.images.length} {item.images.length === 1 ? 'photo' : 'photos'}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {viewMode === 'grid' ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }
              }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Our Gallery
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Capturing moments, creating memories. Explore our journey through these snapshots of events and activities.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }
              }}
              className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
            >
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 w-full md:w-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex justify-between items-center"
            >
              <button
                onClick={() => setViewMode('grid')}
                className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Gallery
              </button>
            </motion.div>
            {selectedEvent && <EventBlogView event={selectedEvent} onClose={closeEvent} />}
          </>
        )}

        {filteredItems.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={item}
                  whileHover="hover"
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-gray-800 cursor-pointer"
                  onClick={() => openImage(item)}
                  style={{
                    boxShadow: hoveredItem === item.id 
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                      : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <motion.div 
                    className="aspect-w-16 aspect-h-9 overflow-hidden"
                    whileHover={imageHover}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                      initial={{ scale: 1 }}
                      animate={hoveredItem === item.id ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </motion.div>
                  <motion.div 
                    className="p-6"
                    initial={{ y: 0 }}
                    animate={hoveredItem === item.id ? { y: -10 } : { y: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <motion.h3 
                      className="text-xl font-bold text-gray-800 dark:text-white mb-2"
                      initial={{ opacity: 1 }}
                      animate={hoveredItem === item.id ? { color: '#3b82f6' } : { color: '' }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-gray-500 dark:text-gray-400"
                      initial={{ opacity: 0.8, y: 0 }}
                      animate={hoveredItem === item.id ? { opacity: 1, y: -5 } : { opacity: 0.8, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No images found matching your criteria.</p>
          </div>
        )}

        <AnimatePresence mode="wait">
          {selectedImage && (
            <motion.div
              variants={modalOverlay}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
              onClick={closeImage}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeImage();
                }}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <ChevronLeft size={32} />
              </button>

              <motion.div 
                className="relative max-w-4xl w-full max-h-[90vh]"
                variants={modalImage}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] mx-auto object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                />
                <motion.div 
                  className="mt-6 text-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    {selectedImage.title}
                  </h3>
                  <p className="text-blue-200 mt-2">
                    {new Date(selectedImage.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </motion.div>
              </motion.div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <ChevronRight size={32} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
