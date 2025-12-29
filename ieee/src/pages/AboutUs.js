import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, BookOpen, Zap, Target } from 'lucide-react';

import a1 from '../assets/images/a-1.jpg';  
import a2 from '../assets/images/a-2.jpg';
import a3 from '../assets/images/a-3.jpg';
const AboutUs = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    {/* Hero Section */}
    <motion.section
      className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About IEEE
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-blue-100 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </motion.p>
      </div>
    </motion.section>

    {/* Main Content */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-blue-800 mb-6">
              Advancing Technology for Humanity
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization, 
              with over 400,000 members in more than 160 countries. Since our founding in 1884, we've been at the forefront 
              of technological innovation.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our college chapter fosters a vibrant community of students passionate about technology, innovation, and leadership. 
              We organize workshops, seminars, and events to empower students and connect them with industry leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-medium">500+ Members</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-medium">25+ Awards</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-medium">Global Network</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                To foster technological innovation and excellence for the benefit of humanity by advancing the theory and practice 
                of electrical, electronics, and computer engineering.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">400K+</div>
                  <div className="text-blue-200 text-sm">Global Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">160+</div>
                  <div className="text-blue-200 text-sm">Countries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape our community culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Target className="w-12 h-12" />,
              title: "Excellence",
              description: "We strive for the highest standards in everything we do, from technical innovation to community service."
            },
            {
              icon: <Users className="w-12 h-12" />,
              title: "Collaboration",
              description: "We believe in the power of teamwork and diverse perspectives to solve complex challenges."
            },
            {
              icon: <Zap className="w-12 h-12" />,
              title: "Innovation",
              description: "We encourage creative thinking and breakthrough solutions that push technological boundaries."
            },
            {
              icon: <Globe className="w-12 h-12" />,
              title: "Global Impact",
              description: "We work to create positive change worldwide through technology and engineering excellence."
            },
            {
              icon: <BookOpen className="w-12 h-12" />,
              title: "Continuous Learning",
              description: "We promote lifelong learning and professional development for all our members."
            },
            {
              icon: <Award className="w-12 h-12" />,
              title: "Integrity",
              description: "We maintain the highest ethical standards in all our professional and personal endeavors."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-blue-600 mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of our chapter's growth and achievements over the years.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-400"></div>
          {[
             {
    year: "2024",
    title: "Inauguration of IEEE Student Branch",
    location: "KLEF Deemed to be University, Hyderabad Main Campus",
    attendees: "250 attendees",
    achievements: [
      "Branch Recognition",
      "First Official IEEE Event"
    ]
  },
  {
    year: "2024",
    title: "IEEE Awareness Session & Student Interaction",
    location: "Auditorium",
    attendees: "200 attendees",
    achievements: [
      "Awareness on IEEE",
      "Student Engagement"
    ]
  },
  {
    year: "2024",
    title: "Web Wizard: Crafting & Stunning",
    location: "Computer Labs and Auditorium",
    attendees: "250 attendees",
    achievements: [
      "Innovation Awards",
      "Student Project Showcase"
    ]
  },
  {
    year: "2024",
    title: "Rampage 4.5",
    location: "Computer Labs and Auditorium",
    attendees: "150 attendees",
    achievements: [
      "Student Project Showcase",
      "First 24-Hour Hackathon at KL University, Bowrampet"
    ]
  }
          ].map((milestone, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
            </motion.div>
          ))}
        </div>

        {/* Faculty Advisors Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Faculty Advisors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Meet the dedicated faculty members who guide and mentor our IEEE student branch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              name: 'Lakshmi Prasanna',
              role: 'Faculty Advisor',
              department: 'Women in Engineering and Student Branch',
              expertise: 'IEEE Leadership, Student Engagement, Mentorship',
              intro: 'Dedicated faculty advisor with extensive experience in mentoring student leaders and promoting IEEE initiatives.',
              img: a1
            },
            {
              name: 'Dr.P V Rao',
              role: 'Associate Faculty Advisor',
              department: 'Computer Science',
              expertise: 'AI/ML, Cybersecurity, Data Science',
              intro: 'Computer Science Professor specializing in artificial intelligence, machine learning, and cybersecurity.',
              img: a2
            },
            {
              name: 'Dr.Prabhakar Rao',
              role: 'Faculty Advisor',
              department: 'Electrical and Electronics Engineering',
              expertise: 'Robotics, Automation ',
              intro: 'Mechanical Engineering Professor and advocate for women in STEM with expertise in robotics and automation.',
              img: a3
            }
          ].map((advisor, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative mb-6">
                <img 
                  src={advisor.img} 
                  alt={advisor.name} 
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{advisor.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{advisor.role}</p>
              <p className="text-blue-500 text-sm font-medium mb-2">{advisor.department}</p>
              <p className="text-gray-500 text-sm italic mb-4">{advisor.expertise}</p>
              <p className="text-gray-600 leading-relaxed">{advisor.intro}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AboutUs; 