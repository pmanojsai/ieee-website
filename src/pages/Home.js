import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Calendar, BookOpen, Zap, Globe, ArrowRight, TrendingUp, Cpu, Wifi, Users2, Shield, CpuIcon, Network, Code2, Lightbulb, Brain, Code, Bot, Server, Database, WifiIcon, RadioTower, MessageSquare, Activity, Rss, Cloud, GitBranch, GitPullRequest, GitCommit, GitMerge, GitBranchPlus, GitCompare, GitFork, GitGraph, GitPullRequestCreate, GitPullRequestDraft, GitPullRequestClosed } from 'lucide-react';
import { Link } from 'react-router-dom';
import a1 from '../assets/images/a-1.jpg';
import mainImage from '../assets/images/main.2.png';
import a2 from '../assets/images/a-2.jpg';
import a3 from '../assets/images/a-3.jpg';
import i1 from '../assets/images/s-6.jpg';
import i2 from '../assets/images/w-5.jpg';
import i3 from '../assets/images/w-1.jpg';
const Home = () => (
  <div className="min-h-screen">

    {/* Hero Section (clean, human-crafted) */}
    <motion.div className="relative overflow-hidden bg-white dark:bg-gray-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      {/* Subtle gradient mesh */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/50 dark:bg-blue-900/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-indigo-200/60 dark:bg-indigo-900/30 rounded-full blur-3xl" />
      </div>
      {/* Soft grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.6) 1px, transparent 1px)",
          backgroundSize: '28px 28px'
        }}
      />
      {/* Slow parallax orbs */}
      <motion.div
        className="pointer-events-none absolute top-10 left-10 w-6 h-6 rounded-full bg-blue-500/30"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-16 right-20 w-8 h-8 rounded-full bg-purple-500/30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-emerald-500/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <motion.h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-900 dark:text-white" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
              IEEE KLEF Student Branch
            </motion.h1>
            <motion.p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              Real projects. Real impact. We mentor, build, and showcase engineering work across campus and beyond.
            </motion.p>
            <motion.div className="mt-8 flex flex-col sm:flex-row gap-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
              <Link to="/membership"><button className="px-6 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors">Become a Member</button></Link>
              <Link to="/events"><button className="px-6 py-3 rounded-xl border border-blue-200 text-blue-800 dark:border-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">Explore Events</button></Link>
            </motion.div>
            <motion.div className="mt-10 grid grid-cols-3 gap-6" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }}>
              {[
                { label: 'Members', value: '500+' },
                { label: 'Events', value: '50+' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                  <div className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-blue-400">{s.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div className="relative" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src={mainImage} alt="Students collaborating on engineering project" className="w-full rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 object-cover" />
         
          </motion.div>
        </div>
      </div>
    </motion.div>

    {/* Metrics Section - Hidden */}
    <motion.section
      className="hidden py-16 md:py-20 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-900 dark:text-white mb-4">Impact in Numbers</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">A community that ships projects, publishes research, and runs hands-on events all year.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { number: "500+", label: "Active Members", icon: <Users className="w-8 h-8" />, color: "from-blue-500 to-blue-600" },
            { number: "50+", label: "Events Yearly", icon: <Calendar className="w-8 h-8" />, color: "from-purple-500 to-purple-600" },
            { number: "100%", label: "Success Rate", icon: <TrendingUp className="w-8 h-8" />, color: "from-orange-500 to-orange-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

    {/* Enhanced Features Section */}
    <motion.section
      className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-900 dark:text-white mb-4">What We Do</h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Hands-on workshops, industry talks, research sprints, and project showcases. Designed to be practical and resume-worthy.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <Users className="w-12 h-12" />,
              title: "Global Network",
              description: "Connect with over 400,000 IEEE members worldwide and build lasting professional relationships.",
              color: "from-blue-500 to-blue-600"
            },
            {
              icon: <Calendar className="w-12 h-12" />,
              title: "Events & Workshops",
              description: "Participate in exclusive technical workshops, conferences, and hands-on learning sessions.",
              color: "from-green-500 to-green-600"
            },
            {
              icon: <BookOpen className="w-12 h-12" />,
              title: "Learning Resources",
              description: "Access to cutting-edge research papers, technical publications, and educational materials.",
              color: "from-orange-500 to-orange-600"
            },
            {
              icon: <Zap className="w-12 h-12" />,
              title: "Innovation Hub",
              description: "Work on real-world projects and contribute to groundbreaking technological innovations.",
              color: "from-red-500 to-red-600"
            },
            {
              icon: <Globe className="w-12 h-12" />,
              title: "Industry Connect",
              description: "Direct access to industry leaders, internship opportunities, and career guidance.",
              color: "from-indigo-500 to-indigo-600"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-800 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

    {/* Faculty Advisors Showcase */}
    <motion.section 
      className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our Faculty Advisors
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Meet the dedicated faculty members who guide and mentor our IEEE student branch
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Faculty Card 1 */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="relative mb-6 group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ rotate: 2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                    <img 
                      src={i1} 
                      alt="Subramanyam Reddy" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Subramanyam Reddy</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full mb-2">
                    IEEE Research internship
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
               
                </p>
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Faculty Card 2 */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="relative mb-6 group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ rotate: 2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                    <img 
                      src={i2} 
                      alt="chervi nadadla" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Chervi Nadadla</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full mb-2">
                    IEEE Research internship
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  
                </p>
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Faculty Card 3 */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  className="relative mb-6 group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ rotate: 2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                    <img 
                      src={i3} 
                      alt="Vinay" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Vinay</h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full mb-2">
                   IEEE Research internship
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  
                </p>
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* Enhanced Societies Showcase */}
    <motion.section 
      className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-indigo-50/10 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/5 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block mb-3 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Communities
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Explore Our Societies
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join our specialized communities and connect with like-minded individuals
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            { 
              title: 'IEEE Core', 
              desc: 'Leadership, operations, and flagship initiatives that drive our community forward.', 
              icon: <Shield className="w-8 h-8" />,
              bg: 'from-blue-500 to-indigo-600',
              ring: 'ring-blue-500/20',
              features: ['Leadership Programs', 'Technical Events', 'Workshops', 'Networking'],
              link: '/team'
            },
            { 
              title: 'WIE', 
              desc: 'Empowering women in technology through mentorship, networking, and professional development.', 
              icon: <Lightbulb className="w-8 h-8" />,
              bg: 'from-pink-500 to-rose-500',
              ring: 'ring-pink-500/20',
              features: ['Mentorship', 'Workshops', 'Panel Discussions', 'Networking'],
              link: '/team' 
            },
            { 
              title: 'ComSoc', 
              desc: 'Advancing communications technology through research, education, and professional development.', 
              icon: <WifiIcon className="w-8 h-8" />,
              bg: 'from-emerald-500 to-teal-500',
              ring: 'ring-emerald-500/20',
              features: ['Networking Events', 'Tech Talks', 'Hackathons', 'Research'],
              link: '/team'
            },
            { 
              title: 'CS Society', 
              desc: 'Fostering innovation in computer science through hands-on learning and collaboration.', 
              icon: <Code2 className="w-8 h-8" />,
              bg: 'from-amber-500 to-orange-500',
              ring: 'ring-amber-500/20',
              features: ['Coding Competitions', 'Tech Workshops', 'Project Showcases', 'Industry Talks'],
              link: '/team'
            },
          ].map((s, index) => (
            <motion.div 
              key={s.title}
              className="group h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                type: 'spring',
                stiffness: 100
              }}
            >
              <Link to={s.link} className="block h-full">
                <motion.div 
                  className={`h-full rounded-2xl bg-white dark:bg-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 ${s.ring} hover:ring-2`}
                  whileHover={{ 
                    y: -8,
                    scale: 1.01,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Header with gradient */}
                  <div className={`h-2 bg-gradient-to-r ${s.bg}`}></div>
                  
                  <div className="p-6">
                    {/* Icon with gradient background */}
                    <motion.div 
                      className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${s.bg} text-white shadow-lg`}
                      whileHover={{
                        rotate: [0, 10, -5, 0],
                        scale: [1, 1.1, 1.1, 1],
                        transition: { duration: 0.6 }
                      }}
                    >
                      {s.icon}
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      {s.title}
                      <motion.span
                        className="ml-2 text-blue-500"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2,
                          ease: 'easeInOut'
                        }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {s.desc}
                    </p>
                    
                    {/* Features */}
                    <div className="mt-6 space-y-2">
                      {s.features.map((feature, i) => (
                        <motion.div 
                          key={i}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                        >
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <motion.div 
                      className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-700/50"
                      whileHover={{ x: 2 }}
                    >
                      <div className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                        <span>Learn more</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: 'loop'
                          }}
                          className="ml-1"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

    {/* Enhanced CTA Section */}
    <motion.section
      className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
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
          className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
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
          className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your IEEE Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through IEEE.
            Take the first step towards becoming a future engineering leader.
          </p>
          <Link to="/membership">
            <motion.button
              className="group px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-semibold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Become a Member Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  </div>
);

export default Home; 