
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Share2, Heart } from 'lucide-react';
import e1Image from '../assets/images/e-1.jpg';
import e2Image from '../assets/images/e-2.jpg';
import e3Image from '../assets/images/e-3.jpg';
import e4Image from '../assets/images/e-4.jpg';
import e5Image from '../assets/images/e-5.jpg';
import e6Image from '../assets/images/e-6.jpg';
import b1Image from '../assets/images/b-1.jpg';
import b2Image from '../assets/images/b-2.jpg';

const InteractiveGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedImages, setLikedImages] = useState({});
  const [showCopied, setShowCopied] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: e1Image,
      title: "IEEE Technical Workshop 2024",
      description: "Students working on IoT projects during our technical workshop",
      category: "Workshop",
      likes: 156,
      date: "March 2024"
    },
    {
      id: 2,
      src: e2Image,
      title: "Annual Conference 2023",
      description: "Keynote speakers sharing insights on emerging technologies",
      category: "Conference",
      likes: 234,
      date: "November 2023"
    },
    {
      id: 3,
      src: e3Image,
      title: "Hackathon 2023",
      description: "Teams collaborating on innovative solutions during 48-hour challenge",
      category: "Hackathon",
      likes: 189,
      date: "October 2023"
    },
    {
      id: 4,
      src: e4Image,
      title: "Industry Networking",
      description: "Students connecting with industry professionals",
      category: "Networking",
      likes: 145,
      date: "September 2023"
    },
    {
      id: 5,
      src: e5Image,
      title: "Robotics Competition",
      description: "Teams showcasing their innovative robot designs",
      category: "Competition",
      likes: 267,
      date: "August 2023"
    },
    {
      id: 6,
      src: e6Image,
      title: "Awards Ceremony",
      description: "Celebrating excellence and achievements of our members",
      category: "Ceremony",
      likes: 198,
      date: "December 2023"
    },
    {
      id: 7,
      src: b1Image,
      title: "Team Building",
      description: "IEEE members participating in team building activities",
      category: "Team",
      likes: 123,
      date: "July 2023"
    },
    {
      id: 8,
      src: b2Image,
      title: "Research Symposium",
      description: "Students presenting their research findings",
      category: "Research",
      likes: 178,
      date: "June 2023"
    },
  ];

  // Initialize liked images from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem('galleryLikes');
    if (savedLikes) {
      setLikedImages(JSON.parse(savedLikes));
    }
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleLike = (id, e) => {
    e.stopPropagation();
    const newLikedImages = {
      ...likedImages,
      [id]: !likedImages[id]
    };
    setLikedImages(newLikedImages);
    localStorage.setItem('galleryLikes', JSON.stringify(newLikedImages));
  };

  const handleDownload = async (imageUrl, title, e) => {
    e.stopPropagation();
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `ieee-event-${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download image. Please try again.');
    }
  };

  const handleShare = async (image, e) => {
    e.stopPropagation();
    const shareData = {
      title: image.title,
      text: image.description,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      } else {
        // Fallback for browsers that don't support either API
        const textarea = document.createElement('textarea');
        textarea.value = shareData.url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Event Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our amazing moments captured during IEEE events and activities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedImage(image);
                setCurrentIndex(index);
              }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200 mb-3">{image.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                        {image.category}
                      </span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm">
                          <button 
                            onClick={(e) => handleLike(image.id, e)}
                            className={`flex items-center gap-1 ${likedImages[image.id] ? 'text-red-500' : 'text-white'}`}
                          >
                            <Heart 
                              className={`w-4 h-4 ${likedImages[image.id] ? 'fill-current' : ''}`} 
                            />
                            {likedImages[image.id] ? image.likes + 1 : image.likes}
                          </button>
                        </div>
                        <span className="text-sm text-gray-300">{image.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Main Image */}
                <div className="relative">
                  <img
                    src={galleryImages[currentIndex].src}
                    alt={galleryImages[currentIndex].title}
                    className="w-full h-[70vh] object-contain rounded-2xl"
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{galleryImages[currentIndex].title}</h3>
                      <p className="text-gray-200 mb-3">{galleryImages[currentIndex].description}</p>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                          {galleryImages[currentIndex].category}
                        </span>
                        <span className="text-gray-300">{galleryImages[currentIndex].date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={(e) => handleLike(galleryImages[currentIndex].id, e)}
                        className={`flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full transition-colors ${likedImages[galleryImages[currentIndex].id] ? 'bg-white/30 text-red-500' : 'bg-white/20 text-white hover:bg-white/30'}`}
                      >
                        <Heart 
                          className={`w-5 h-5 ${likedImages[galleryImages[currentIndex].id] ? 'fill-current' : ''}`} 
                        />
                        {likedImages[galleryImages[currentIndex].id] ? galleryImages[currentIndex].likes + 1 : galleryImages[currentIndex].likes}
                      </button>
                      <button 
                        onClick={(e) => handleDownload(galleryImages[currentIndex].src, galleryImages[currentIndex].title, e)}
                        className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Download className="w-5 h-5" />
                        Download
                      </button>
                      <div className="relative">
                        <button 
                          onClick={(e) => handleShare(galleryImages[currentIndex], e)}
                          className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Share2 className="w-5 h-5" />
                          Share
                        </button>
                        {showCopied && (
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 text-xs px-2 py-1 rounded whitespace-nowrap">
                            Link copied to clipboard!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveGallery; 