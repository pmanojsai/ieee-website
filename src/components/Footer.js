import React from 'react';
import { Linkedin, Mail, MapPin, Phone, Clock, Heart } from 'lucide-react';

const socials = [
  { href: 'https://www.linkedin.com', icon: <Linkedin size={20} />, label: 'LinkedIn' },
  { href: 'mailto:bmp.ieeeklefb.sb@gmail.com', icon: <Mail size={20} />, label: 'Email' },
];

const Footer = () => (
  <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
    {/* Main Footer Content */}
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <div>
             <h3 className="text-2xl font-bold">KLEFB IEEE Student Branch</h3>
              <p className="text-blue-200">Advancing Technology for Humanity</p>
            </div>
          </div>
          <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
            Empowering the next generation of engineers through innovation, collaboration, 
            and cutting-edge technology. Join us in shaping the future of engineering.
          </p>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="/" className="text-blue-100 hover:text-yellow-400 transition-colors duration-300">Home</a></li>
            <li><a href="/about" className="text-blue-100 hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
            <li><a href="/team" className="text-blue-100 hover:text-yellow-400 transition-colors duration-300">Our Team</a></li>
            <li><a href="/events" className="text-blue-100 hover:text-yellow-400 transition-colors duration-300">Events</a></li>
            <li><a href="/contact" className="text-blue-100 hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-yellow-400">Contact Info</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-blue-100 text-sm">KLH University, Bowrampet</p>
                <p className="text-blue-100 text-sm">Bowrampet Village, Bachupally Mandal Hyderabad, Telangana 500043, India</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <a href="tel:+919849094295" className="text-blue-100 text-sm hover:text-yellow-400 transition-colors">+91 98490 94295</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <a href="mailto:bmp.ieeeklefb.sb@gmail.com" className="text-blue-100 text-sm hover:text-yellow-400 transition-colors">bmp.ieeeklefb.sb@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-yellow-400 flex-shrink-0" />
              <span className="text-blue-100 text-sm">Mon-Fri: 9AM-5PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>

   
    {/* Bottom Bar */}
    <div className="border-t border-blue-700">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-blue-200 text-sm">
            <span>© {new Date().getFullYear()} KLEFB IEEE Student Branch. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-blue-200 text-sm">
            <a href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-yellow-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 