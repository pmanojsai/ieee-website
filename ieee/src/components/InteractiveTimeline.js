import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const InteractiveTimeline = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  const timelineEvents = [
    {
      year: '2024',
      title: 'Inauguration of IEEE Student Branch at KLEFB, Hyderabad',
      //description: 'Official inauguration of IEEE Student Branch at KL Educational Foundation - Bowrampet with Student Branch code: STB60227179 and School Code: 60227772. The event featured dignitaries from IEEE Hyderabad Section including Dr. Y. Vijayalata Reddy (Chair) and Mr. Mahesh Nirati (SAC Chair), along with university leadership.',
      location: 'Main Campus',
      attendees: 250,
      achievements: ['Branch Recognition', 'First Event'],
      icon: <Award className="w-6 h-6" />
    },
    {
      year: '2024',
      title: 'IEEE Awareness Session & Student Interaction',
          //description: 'Hosted our first major technical conference with industry experts.',
      location: 'Auditorium ',
      attendees: 200,
      achievements: ['Awareness On IEEE'],
      icon: <Users className="w-6 h-6" />
    },
    {
      year: '2024',
      title: 'Web Wizard: Crafting & Stunning - Web Development Competition',
          //description: 'Organized a 48-hour hackathon with 15 teams participating.',
      location: 'Computer Labs And Auditorium',
      attendees: 250,
      achievements: ['Innovation Awards', 'Students Project Showcase'],
      icon: <Award className="w-6 h-6" />
    },
    {
      year: '2024',
      title: 'Rampage 4.5',
      //description: 'Annual research symposium showcasing student and faculty research.',
      location: 'Computer Labs And Auditorium',
      attendees: 150,
      achievements: ['Students Project Showcase', '1st 24 hrs hackerthon of KL University Bowrempet'],
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the milestones and achievements that have shaped our IEEE student branch
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 cursor-pointer ${
                    activeEvent === index ? 'ring-4 ring-blue-300' : ''
                  }`}
                  onClick={() => setActiveEvent(index)}
                >
                  <div className="w-full h-full flex items-center justify-center text-white">
                    {event.icon}
                  </div>
                </motion.div>

                {/* Event Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
                >
                  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 ${
                    activeEvent === index ? 'ring-2 ring-blue-300' : ''
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {event.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {event.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Users size={16} />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Achievements:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {event.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Timeline Progress
            </span>
            <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ width: 0 }}
                whileInView={{ width: `${((activeEvent + 1) / timelineEvents.length) * 100}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {Math.round(((activeEvent + 1) / timelineEvents.length) * 100)}%
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTimeline; 