import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import NotificationProvider from './components/NotificationSystem';
import InteractiveGallery from './components/InteractiveGallery';
import InteractiveTimeline from './components/InteractiveTimeline';
import StatisticsCounter from './components/StatisticsCounter';
import AnimatedTestimonials from './components/AnimatedTestimonials';
import ThreeDCardCarousel from './components/3DCardCarousel';
import FloatingElements from './components/FloatingElements';
import AnimatedAchievements from './components/AnimatedAchievements';
import Membership from './pages/Membership';
import ScrollToTop from './components/ScrollToTop';
import EventGalleryPage from './pages/EventGalleryPage';

const Home = lazy(() => import('./pages/Home'));
const Rampage = lazy(() => import('./pages/Rampage'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const OurTeam = lazy(() => import('./pages/OurTeam'));
const OurEvents = lazy(() => import('./pages/OurEvents'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Gallery = lazy(() => import('./pages/Gallery'));


const Register = lazy(() => import('./pages/register'));// Dark Mode Context
export const DarkModeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      <NotificationProvider>
        <Router>
          <div className={`min-h-screen transition-colors duration-300 ${
            isDark ? 'dark bg-gray-900' : 'bg-white'
          }`}>
            {/* Floating Elements Background */}
            <FloatingElements />
            
            {/* Particle Background */}
            <ParticleBackground />
            
            {/* Scroll Progress */}
            <ScrollProgress />
            
            {/* Navbar */}
            <Navbar />
            
            {/* Main Content */}
            <main className="relative z-10">
              <Suspense fallback={<div className="py-32 text-center text-blue-600">Loading...</div>}>
              <Routes>
                <Route path="/" element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Home />
                    <ThreeDCardCarousel />
                    <StatisticsCounter />
                    <AnimatedAchievements />
                    <InteractiveTimeline />
                    <InteractiveGallery />
                  </motion.div>
                } />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/team" element={<OurTeam />} />
                <Route path="/events" element={<OurEvents />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/event-gallery" element={<EventGalleryPage />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/rampage" element={<Rampage />} />


                <Route path="/register" element={<Register />} />

              </Routes>
              </Suspense>
            </main>
            
            {/* Scroll to Top Button */}
            <ScrollToTop />
            
            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </NotificationProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
