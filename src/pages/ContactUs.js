import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3 font-sans">Contact Us</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Find our location and key contact details below. We welcome collaborations, sponsorships, and member inquiries.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Details */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-700"><MapPin className="w-5 h-5" /></div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">Address</h3>
                <p className="text-gray-600">KLH University, Bowrampet</p>
                <p className="text-gray-600">Bowrampet Village, Bachupally Mandal</p>
                <p className="text-gray-600">Hyderabad, Telangana 500043</p>
                <p className="text-gray-600">India</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-700"><Mail className="w-5 h-5" /></div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">Email</h3>
                <a href="mailto:ieee@klh.edu.in" className="text-gray-600 hover:text-blue-700 transition-colors">bmp.ieeeklefb.sb@gmail.com</a>
                <p className="text-gray-500 text-sm">Official IEEE Student Branch inbox</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-700"><Phone className="w-5 h-5" /></div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">Phone</h3>
                <a href="tel:+914084567890" className="text-gray-600 hover:text-blue-700 transition-colors">+91 98490 94295
                  
                </a>
                <p className="text-gray-500 text-sm">Student coordinator</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-700"><Clock className="w-5 h-5" /></div>
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">Hours</h3>
                <p className="text-gray-600">Mon–Fri: 9:00 AM – 5:00 PM</p>
                <p className="text-gray-500 text-sm">Closed on weekends and public holidays</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-[380px] md:h-[520px] rounded-2xl overflow-hidden shadow border border-gray-100">
          <iframe
            title="KLH University Campus Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789012!2d78.4015535!3d17.5472944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f21c7b459b5%3A0xc307c84e835d6187!2sKLH%20University%20Bowrampet%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;