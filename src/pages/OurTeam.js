import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Search, Award, Sparkles } from 'lucide-react';
import a1 from '../assets/images/a-1.jpg';
import a2 from '../assets/images/a-2.jpg';
import a3 from '../assets/images/a-3.jpg';
import w1 from '../assets/images/w-1.jpg';
import w2 from '../assets/images/w-2.jpg';
import w3 from '../assets/images/w-3.jpg';    
import w4 from '../assets/images/w-4.jpg';
import w5 from '../assets/images/w-5.jpg';
import ec1 from '../assets/images/ec-1.jpg';
import c5 from '../assets/images/c-5.png';
import w6 from '../assets/images/w-6.png';
import ec2 from '../assets/images/ec-2.png';
import ec3 from '../assets/images/ec-3.jpg';
import ec4 from '../assets/images/ec-4.jpg';
import ec5 from '../assets/images/ec-5.jpg';
import ec6 from '../assets/images/ec-7.jpg';
import ec8 from '../assets/images/ec-8.jpg';
import ec9 from '../assets/images/ec-9.png';
import c1 from '../assets/images/c-1.jpg';
import c2 from '../assets/images/c-2.jpg';
import c3 from '../assets/images/c-3.jpg';
import c4 from '../assets/images/c-4.jpg';
import s1 from '../assets/images/s-1.jpg';
import s2 from '../assets/images/s-2.jpg';
import s3 from '../assets/images/s-3.jpg';
import s4 from '../assets/images/s-4.jpg';
import s5 from '../assets/images/s-5.jpg';
import s6 from '../assets/images/s-6.jpg';
import s7 from '../assets/images/s-7.jpg';
import s8 from '../assets/images/s-8.jpg';
import s9 from '../assets/images/s-9.jpg';
import principal from '../assets/images/principal.png';
import ithod from '../assets/images/ithod.png';
// Core IEEE Team (default)

const advicers = {
  IEEE: 'Dr.l koteswararao',  
  WIE: 'Dr. Lakshmi Prasanna Yeluri',   
};

const ieeeTeam = [
  {
    name: 'Annam Eswar Lakshmi Vallab',
    role: 'Chair',
    img: s1,
    //intro: 'Leads the chapter strategy and partnerships. Passionate about AI for social good.',
    linkedin: 'https://www.linkedin.com/in/example-alice',
    email: 'alice.johnson@example.edu'
  },
  {
    name: 'Lithesh',
    role: 'Vice Chair',
    img: s9,
   // intro: 'Drives operations and events. Loves robotics and community building.',
    linkedin: 'https://www.linkedin.com/in/example-bob',
    email: 'bob.smith@example.edu'
  },
  {
    name: 'Yashwanth Peddiraju',
    role: 'Secretary',
    img: s4,
    //intro: 'Keeps us organized. Interested in cybersecurity and technical writing.',
    linkedin: 'https://www.linkedin.com/in/example-carol',
    email: 'carol.lee@example.edu'
  },
  {
    name: 'Uday Raman Senthil Kumar',
    role: 'Treasurer',
    img: s5,
    //intro: 'Manages budgets and sponsorships. FinTech enthusiast and data viz fan.',
    linkedin: 'https://www.linkedin.com/in/senthil-kumar-89b0a125b/',
    email: 'david.kim@example.edu'
  },
  {
    name: 'Puneeth Manoj Sai Pasumarthi',
    role: 'Webmaster and Graphics designer',
    img: s7,
   // intro: 'Storyteller and community advocate. Builds visibility across campus and media.',
    linkedin: 'https://www.linkedin.com/in/p-puneeth-manoj-sai-978758289/',
    //email: 'emma.davis@example.edu'
  },
  {
    name: 'Dinesh Siva Kalyan Bollimuntha',
    role: 'Logistics coordinator',
    img: s8,
   // intro: 'Leads tech workshops and hack nights. Loves open-source and cloud-native tools.',
    linkedin: 'https://www.linkedin.com/in/dinesh-siva-kalyan-bollimuntha-a04657296/',
    //email: 'franklin.moore@example.edu'
  },
  {
    name: 'Pranav Tej G',
    role: 'ambassador',
    img: s2,
   // intro: 'Owns branding and UX. Passionate about inclusive design and motion graphics.',
    linkedin: 'https://www.linkedin.com/in/pranav-tej-g-0018b4334/',
    //email: 'grace.patel@example.edu'
  },
  {
    name: 'Sanikommu Subrahmanyam Reddy',
    role: 'Members And Relations',
    img: s6,
   // intro: 'Makes events seamless. Systems thinker with a love for automation.',
    linkedin: 'https://www.linkedin.com/in/sanikommu-subrahmanyam-reddy-514292295/',
    //email: 'hassan.ali@example.edu'
  },
];

// WIE (Women in Engineering) Team
const wieTeam = [
  {
    name: 'Nadendla Chervi',
    role: 'WIE Chair',
    img: w5,
   // intro: 'Championing diversity and inclusion through mentorship and outreach programs.',
    linkedin: 'https://www.linkedin.com/in/chervi-nadendla-5958b2282/',
    //email: 'isha.verma@example.edu'
  },
  {
    name: 'S Vinay ',
    role: 'WIE Vice Chair',
    img: w1,

   // intro: 'Organizes WIE talks and leadership circles for aspiring engineers.',
    linkedin: 'https://www.linkedin.com/in/vinaysrigadi/',
    //email: 'nora.james@example.edu'
  },
  {
    name: 'V Sravanthi',
    role: 'Treasurer',
    img: w2,
  //  intro: 'Curates hands-on workshops bridging theory and practice for women in tech.',
    linkedin: 'https://www.linkedin.com/in/v-l-sravanthi/',
   // email: 'priya.sharma@example.edu'
  },
  {
    name: 'Sri Ruchitha ',
    role: 'Secretary',
    img: w6,
   // intro: 'Building community partnerships and organizing mentorship programs for women engineers.',
    linkedin: 'https://www.linkedin.com/in/sri-ruchitha-tirupathi-89aba2324/',
    //email: 'sophie.martinez@example.edu'
  },
  {
    name: 'Deekshitha ',
    role: 'Webmaster',
    img: w4,
    //intro: 'Leading technical workshops and hackathons focused on empowering women in STEM.',
    linkedin: 'https://www.linkedin.com/in/example-olivia',
    //email: 'olivia.taylor@example.edu'
  }
];

// ComSoc (Communications Society) Team
const comsocTeam = [
  {
    name: 'Gayathri Yerra',
    role: 'Chair',
    img: ec9,
   // intro: 'Leading the ComSoc chapter with a vision for advancing communication technologies.',
    linkedin: 'https://www.linkedin.com/in/gayathri-yerra/',
   // email: 'gayathriyerra@ieee.org'
  },
  {
    name: 'Venkata Ram Charan',
    role: 'Vice Chair',
    img: ec6,
   // intro: 'Supporting the Chair in driving ComSoc initiatives and member engagement.',
    linkedin: 'https://www.linkedin.com/in/venkata-ram-charan-reddy/',
    //email: 'venkataram2005@gmail.com'
  },
  {
    name: 'Akhil Sesetty',
    role: 'Treasurer',
    img: ec1,
    //intro: 'Managing the financial aspects and sponsorships for ComSoc activities.',
    linkedin: 'https://www.linkedin.com/in/venkata-akhil-sesetty-4a6354326/',
    //email: 'akhil.sesetty@gmail.com'
  },
  {
    name: 'Mukthesh',
    role: 'Membership & Outreach Lead',
    img: ec2,
    //intro: 'Expanding our community and fostering connections among members.',
    linkedin: 'https://www.linkedin.com/in/vejandla-mukthesh-kumar-044464325/',
    //email: 'Muktheshvejandla9141@gmail.com'
  },
  {
    name: 'Sumapriya',
    role: 'Web Master',
    img: ec5,
    //intro: 'Maintaining and enhancing our online presence and digital platforms.',
    linkedin: 'https://www.linkedin.com/in/suma-priya-chittari-560218325/',
    //email: 'sumapriyac@gmail.com'
  },
  {
    name: 'Tanmayi',
    role: 'Secretary',
    img: ec8,
    //intro: 'Ensuring smooth communication and documentation for ComSoc activities.',
    linkedin: 'https://www.linkedin.com/in/sri-sai-tanmayi-sistla-764303326/',
    //email: 'tanmayisistla28@gmail.com'
  }
];

// CS Society (Computer Society) Team
const csSocietyTeam = [
  {
    name: 'Vaishnavi Avva',
    role: 'CS Society Chair',
    img: c3,
    //intro: 'Focuses on AI/ML education and open-source initiatives.',
    linkedin: 'https://www.linkedin.com/in/vaishnavi-avva-4916762a8/',
    //email: 'zoe.martin@example.edu'
  },
  
  {
    name: ' Mahendar',
    role: 'Vice chair',
    img: c1,
    //intro: 'Leads community projects in web, mobile, and systems programming.',
    linkedin: 'https://www.linkedin.com/in/example-leo',
    //email: 'leo.park@example.edu'
  },
  {
    name: 'Sri Harsha Vardhan',
    role: 'Secretary',
    img: c4,
    //intro: 'Drives coding bootcamps and peer-learning groups across campus.',
    linkedin: 'https://www.linkedin.com/in/perali-sri-harsha-vardhan-3a8541325/',
    //email: 'maya.chen@example.edu'
  },
  {
    name: 'pavan',
    role: 'Treasurer',
    img: c2,
    //intro: 'Passionate about full-stack development and teaching modern web technologies.',
    linkedin: 'https://www.linkedin.com/in/example-ryan',
    //email: 'ryan.foster@example.edu'
  },
  {
    name: 'Lakshmi Priya',
    role: 'Webmaster',
    img: c5,
    //intro: 'Passionate about full-stack development and teaching modern web technologies.',
    linkedin: 'https://www.linkedin.com/in/kalvakota-lakshmipriya-30783a305/',
    //email: 'ryan.foster@example.edu'
  },

];

// Faculty Advisors for each society
const advisors = {
  IEEE: {
    name: 'Dr. Lakshmi Prasanna Yeluri',
    role: 'Faculty Advisor',
    img: a1,
   // intro: 'Dr. Lakshmi Prasanna Yeluri is an accomplished academician and dedicated mentor with over 19 years of teaching experience in Computer Science. She is currently working as an Assistant Professor in the Department of CSIT at KL University, Hyderabad (KLH). She also serves as an IEEE Professional Member and Student Branch Counsellor for KLEF Hyderabad (Bachupally Campus), where she actively supports and guides student initiatives, technical events, and research activities.Throughout her career, Dr. Prasanna has worked with several reputed institutions, including Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), MLRIT, and SBIT, contributing significantly to academic growth and student development.She holds a PhD in Computer Science, along with an MTech and BTech from Jawaharlal Nehru Technological University (JNTU). Her academic journey reflects her strong commitment to excellence, innovation, and continuous learning.With expertise in areas such as web development, student counselling, and professional development, Dr. Prasanna is known for her supportive guidance, leadership in IEEE student activities, and passion for empowering young engineers.',
    linkedin: 'https://www.linkedin.com/in/dr-lakshmi-prasanna-yeluri-41321458/',
    //email: 'sarah.johnson@example.edu',
    department: 'Computer Science and Information Technology',
    expertise: 'IEEE Leadership, Student Engagement, Mentorship'
  },
        // ADVISOR1: {
      //name: 'Dr. John Smith',
     // role: 'Senior Advisor',
     // img: a2,
      //linkedin: '#',
      //email: 'john.smith@example.edu',
      //department: 'Computer Science',
      //expertise: 'Artificial Intelligence, Machine Learning'
   // },
   // ADVISOR2: {
     // // name: 'Dr. Sarah Williams',
      //role: 'Technical Advisor',
      //img: a3,
      //linkedin: '#',
      //email: 'sarah.williams@example.edu',
      //department: 'Electronics & Communication',
      //expertise: 'IoT, Embedded Systems'
    //},
  WIE: {
    name: 'Dr. Lakshmi Prasanna Yeluri',
    role: 'WIE Faculty Advisor',
    img: a1,
   // intro: 'Dr. Lakshmi Prasanna Yeluri is an accomplished academician and dedicated mentor with over 19 years of teaching experience in Computer Science. She is currently working as an Assistant Professor in the Department of CSIT at KL University, Hyderabad (KLH). She also serves as an IEEE Professional Member and Student Branch Counsellor for KLEF Hyderabad (Bachupally Campus), where she actively supports and guides student initiatives, technical events, and research activities.Throughout her career, Dr. Prasanna has worked with several reputed institutions, including Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), MLRIT, and SBIT, contributing significantly to academic growth and student development.She holds a PhD in Computer Science, along with an MTech and BTech from Jawaharlal Nehru Technological University (JNTU). Her academic journey reflects her strong commitment to excellence, innovation, and continuous learning.With expertise in areas such as web development, student counselling, and professional development, Dr. Prasanna is known for her supportive guidance, leadership in IEEE student activities, and passion for empowering young engineers.',
    linkedin: 'https://www.linkedin.com/in/dr-lakshmi-prasanna-yeluri-41321458/',
    //email: 'priya.sharma@example.edu',
    department: 'Computer Science and Information Technology',
    expertise: ' IEEE Leadership, Student Engagement, Mentorship,Women in Engineering'
  },
  COMSOC: {
    name: 'Dr. Amarana Prabhakara Rao',
    role: 'ComSoc Faculty Advisor',
    img: a3,
    //intro: 'Computer Science Professor specializing in artificial intelligence, machine learning, and cybersecurity.',
    linkedin: 'https://www.linkedin.com/in/dr-amarana-prabhakara-rao-a33760109/',
    //email: 'michael.chen@example.edu',
    department: 'Computer Science',
    expertise: 'AI/ML, Cybersecurity, Data Science'
  },
  CSS: {
    name: 'Dr.P V Rao',
    role: 'CS Society Faculty Advisor',
    img: a2,
   // intro: 'Computer Science Professor with expertise in software engineering, systems programming, and open-source development.',
    linkedin: 'https://in.linkedin.com/in/dr-venkateswara-rao-pulipati-01549516a',
    //email: 'alex.rodriguez@example.edu',
    department: 'Computer Science',
    expertise: 'Software Engineering, Systems Programming, Open Source'
  }
};

const tabs = [
  { key: 'IEEE', label: 'IEEE Core' },
  { key: 'WIE', label: 'WIE' },
  { key: 'COMSOC', label: 'ComSoc' },
  { key: 'CSS', label: 'CS Society' }
];

const OurTeam = () => {
  const [activeTab, setActiveTab] = useState('IEEE');

  const activeTeam = activeTab === 'IEEE'
    ? ieeeTeam
    : activeTab === 'WIE'
    ? wieTeam
    : activeTab === 'COMSOC'
    ? comsocTeam
    : csSocietyTeam;

  const currentAdvisor = advisors[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      <motion.div
        className="max-w-7xl mx-auto py-20 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Team
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Meet the passionate leaders and innovators of our IEEE Student Branch and its specialized societies
          </motion.p>
        </div>

        {/* 🔷 Advisors Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 mb-12 max-w-6xl mx-auto px-4"
        >
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
            {/* First Advisor */}
            <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border-2 border-blue-200 dark:border-blue-700 shadow-2xl flex items-center gap-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl ring-2 ring-blue-500/40">
                <img
                  src={principal}
                  className="w-full h-full object-cover"
                  alt="Dr. Lakshmi Prasanna Yeluri"
                />
              </div>
              <div className="text-left">
                <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Faculty Advisor
                </p>

      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
        Dr. L Koteswararao
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-base">
        Computer Science and Information Technology
      </p>

      <a
        href="https://www.linkedin.com/in/dr-koteswara-rao-l-29300241/?originalSubdomain=in"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl hover:shadow-2xl"
      >
        <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Second Advisor */}
          <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border-2 border-blue-200 dark:border-blue-700 shadow-2xl flex items-center gap-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl ring-2 ring-blue-500/40">
                <img
                  src={ithod}
                  className="w-full h-full object-cover"
                  alt="Dr. Sk Khaja Shareef"
                />
              </div>
            <div className="text-left">
              <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Faculty Advisor
              </p>

      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
        Dr. Sk Khaja Shareef
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-base">
        Computer Science and Information Technology
      </p>

      <a
        href="https://www.linkedin.com/in/dr-sk-khaja-shareef-54513528/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl hover:shadow-2xl"
      >
        <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>
          </div>
        </motion.div>

<motion.div  // ⬅️ your tabs start here (do NOT move this)

    
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        
        <div className="inline-flex rounded-2xl bg-white dark:bg-gray-800 p-2 shadow-xl border border-gray-100 dark:border-gray-700">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-6 py-3 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 ${
                activeTab === tab.key
                  ? 'text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>


      {/* Faculty Advisor Section - Elevated and Prominent */}
      <motion.div
        key={`advisor-${activeTab}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-16"
      >
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 md:p-10 border-2 border-blue-200 dark:border-blue-700 shadow-2xl hover:shadow-3xl transition-all duration-300"
          whileHover={{ scale: 1.01, y: -4 }}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Advisor Photo - Top Left */}
            <div className="flex-shrink-0">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-2xl opacity-30"></div>
                <img 
                  src={currentAdvisor.img} 
                  alt={currentAdvisor.name} 
                  className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover object-top border-4 border-white dark:border-gray-700 shadow-2xl ring-4 ring-blue-500/30"
                />
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-3 shadow-xl ring-4 ring-white dark:ring-gray-800">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </motion.div>
            </div>
            
            {/* Advisor Information - Right Side */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 rounded-full mb-4">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Faculty Advisor</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">{currentAdvisor.name}</h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">{currentAdvisor.role}</p>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-2">{currentAdvisor.department}</p>
                <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-full">
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium italic">{currentAdvisor.expertise}</span>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl">
                {currentAdvisor.intro}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {currentAdvisor.linkedin && (
                  <motion.a
                    href={currentAdvisor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn profile of ${currentAdvisor.name}`}
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Linkedin className="w-7 h-7 relative z-10" />
                    <span className="relative z-10 text-base">LinkedIn Profile</span>
                  </motion.a>
                )}
                {currentAdvisor.email && (
                  <motion.a
                    href={`mailto:${currentAdvisor.email}`}
                    aria-label={`Email ${currentAdvisor.name}`}
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 border-2 border-blue-200 dark:border-blue-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Mail className="w-6 h-6 relative z-10" />
                    <span className="relative z-10 text-base">Send Email</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Team Members Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Team <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Members</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Dedicated individuals driving innovation and excellence</p>
      </motion.div>

      {/* Team Members Grid */}
      <motion.div
        key={`team-${activeTab}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {activeTeam.map((member) => (
          <motion.div
            key={member.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center border border-gray-100 dark:border-gray-700"
          >
            <div className="relative mb-5">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-lg opacity-20"></div>
              <div className="relative w-32 h-32 md:w-36 md:h-36">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className={`w-full h-full rounded-full object-cover ${member.img === s7 ? 'scale-90' : ''} border-4 border-white dark:border-gray-700 shadow-xl ring-2 ring-blue-500/30 scale-110`} 
                  style={member.img === s7 ? { objectPosition: '55% 40%' } : {}} 
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">{member.name}</h3>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold mb-4 shadow-md">
              {member.role}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-6 leading-relaxed">{member.intro}</p>
            <div className="flex items-center gap-4 mt-auto">
              {member.linkedin && (
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn profile of ${member.name}`}
                  className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
                  title="LinkedIn"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              )}
              {member.email && (
                <motion.a
                  href={`mailto:${member.email}`}
                  aria-label={`Email ${member.name}`}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                  title="Email"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      </motion.div>
    </div>
  );
};

export default OurTeam; 