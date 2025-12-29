import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Award, Code, BookOpen, Users2, Trophy, Star } from 'lucide-react';



import e1Image from '../assets/images/e-1.jpg';
import e2Image from '../assets/images/e-2.jpg';
import e3Image from '../assets/images/e-3.jpg';
import e4Image from '../assets/images/e-4.jpg';
import e5Image from '../assets/images/e-5.jpg';
import e6Image from '../assets/images/e-6.jpg';
const events = [
  {
    id: 1,
    title: "Inauguration of IEEE Student Branch at KLEFB, Hyderabad",
    date: "December 30, 2024",
    time: "10:00 AM - 11:15 AM",
    location: "Auditorium (3rd Floor-3-08)",
    description: "Official inauguration of IEEE Student Branch at KL Educational Foundation - Bowrampet with Student Branch code: STB60227179 and School Code: 60227772. The event featured dignitaries from IEEE Hyderabad Section including Dr. Y. Vijayalata Reddy (Chair) and Mr. Mahesh Nirati (SAC Chair), along with university leadership.",
    image: e2Image,
    category: "Inauguration",
    attendees: "26 Student Members + 4 Professional Members",
    status: "Completed",
    highlights: [
      "Lighting of Lamp Ceremony",
      "Website Inauguration", 
      "Felicitation of Dignitaries",
      "Group Photograph"
    ],
    achievements: [
      "Student Branch Established: STB60227179",
      "26 Student Members Enrolled",
      "4 Professional Members Joined"
    ]
  },
  {
    id: 2,
    title: "IEEE Awareness Session & Student Interaction",
    date: "December 30, 2024",
    time: "10:00 AM - 12:00 PM",
    location: "Auditorium (3rd Floor-3-08)",
    description: "Comprehensive awareness session led by Mahesh Neerati, Student Activity Center Chair of IEEE Hyderabad Section, introducing students and faculty to the world of IEEE. The session highlighted the transformative benefits of IEEE membership and provided a roadmap for establishing the student branch at KL University.",
    image: e1Image,
    category: "Awareness Session",
    attendees: "600+ IEEE Student Members",
    status: "Completed",
    highlights: [
      "IEEE Benefits Overview",
      "Interactive Student Session", 
      "Fun Engagement Games",
      "Guest Speakers Interaction"
    ],
    achievements: [
      "600+ IEEE Members Enrolled",
      "Multiple Society Chapters Proposed",
      "Enhanced Student Engagement"
    ]
  },
  {
    id: 3,
    title: "Web Wizard: Crafting & Stunning - Web Development Competition",
    date: "March 6, 2025",
    time: "9:00 AM - 3:30 PM",
    location: "KLHB Campus",
    description: "A premier web development competition fostering innovation, creativity, and technical expertise among students. Participants developed real-world web solutions across multiple domains including AgriTech, HealthTech, GovTech, Smart Living, Transport, and EcoTech.",
    image: e3Image,
    category: "Competition",
    attendees: "Multiple Student Teams",
    status: "Upcoming",
    highlights: [
      "Web Development Challenge",
      "Multiple Technology Themes", 
      "Real-world Problem Solving",
      "Team Collaboration"
    ],
    achievements: [
      "Industry-Relevant Skill Development",
      "Practical Project Experience",
      "Networking Opportunities"
    ]
  },
  {
    id: 4,
    title: "Rampage 4.5",
    date: "September 5, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "KL University Campus",
    description: "24-hour hackathon event with 150 teams participating.",
    image: e4Image,
    category: "Fest",
    attendees: "80+ Students",
    status: "Completed",
    highlights: ["15 Industry Professionals", "Internship Opportunities", "Career Guidance"],
    achievements: ["150+ teams participated", "Industry Partnerships", "Innovation Showcase"]
  },
  {
    id: 5,
    title: "Inauguration of KLEFB WIE , Comsoc and Computer Society",
    date: "August 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Engineering Lab",
    description: "Exciting robotics competition with 12 teams showcasing innovative designs. First prize went to the autonomous delivery robot project.",
    image: e5Image,
    category: "Competition",
    attendees: "12 Teams",
    status: "Completed",
    highlights: ["Innovative Designs", "Autonomous Systems", "Technical Excellence"],
    achievements: ["First Prize Award", "Patent Applications"]
  },
  {
    id: 6,
    title: "guest lecture by Ajay krishna",
    date: "December 10, 2023",
    time: "7:00 PM - 9:00 PM",
    location: "Grand Hall",
    description: "Celebrated the achievements of our outstanding members. Awarded 15 students for academic excellence and leadership contributions.",
    image: e6Image,
    category: "Ceremony",
    attendees: "200+ Attendees",
    status: "Completed",
    highlights: ["15 Student Awards", "Leadership Recognition", "Academic Excellence"],
    achievements: ["Excellence Awards", "Leadership Development"]
  }
];

const categoryIcons = {
  Workshop: <Code className="w-5 h-5" />,
  Conference: <BookOpen className="w-5 h-5" />,
  Hackathon: <Code className="w-5 h-5" />,
  Networking: <Users2 className="w-5 h-5" />,
  Competition: <Trophy className="w-5 h-5" />,
  Ceremony: <Award className="w-5 h-5" />
};

const OurEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getEventShareUrl = (event) => {
    try {
      const base = window.location.origin;
      return `${base}/events#event-${event.id}`;
    } catch {
      return `/events#event-${event.id}`;
    }
  };

  const handleViewGallery = (event) => {
    if (!event) return;
    const url = event.image;
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShareEvent = async (event) => {
    if (!event) return;
    const url = getEventShareUrl(event);
    const shareData = {
      title: event.title,
      text: `${event.title} • ${event.date} @ ${event.location}`,
      url
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        alert('Event link copied to clipboard');
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Event link copied to clipboard');
      }
    } catch (e) {
      console.error('Share failed', e);
      alert('Unable to share. Link copied instead.');
      try {
        await navigator.clipboard.writeText(url);
      } catch {}
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Events
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Celebrating innovation, learning, and achievement through our successful events
            </p>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: "6", label: "Events Completed" },
              { number: "800+", label: "Total Attendees" },
              { number: "15", label: "Industry Partners" },
              { number: "95%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {event.status}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-2 rounded-full text-xs font-semibold flex items-center gap-1">
                      {categoryIcons[event.category]}
                      {event.category}
                    </span>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-lg font-bold mb-1">{event.title}</h3>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {event.attendees}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6" id={`event-${event.id}`}>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold group-hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedEvent.status}
                  </span>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    {categoryIcons[selectedEvent.category]}
                    {selectedEvent.category}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedEvent.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                      {selectedEvent.date}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-blue-500" />
                      {selectedEvent.time}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                      {selectedEvent.location}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Users className="w-5 h-5 mr-3 text-blue-500" />
                      {selectedEvent.attendees}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h4>
                    <div className="space-y-2">
                      {selectedEvent.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <Award className="w-4 h-4 mr-2 text-yellow-500" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedEvent.description}
                </p>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => handleViewGallery(selectedEvent)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold"
                  >
                    View Gallery
                  </button>
                  <button
                    onClick={() => handleShareEvent(selectedEvent)}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 font-semibold"
                  >
                    Share Event
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurEvents; 