import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Registration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/rampage" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Rampage
        </Link>
        
        <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
            Register for Rampage 2.6
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Scan to Register</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Scan the QR code with your phone's camera to complete your registration for Rampage 2.6.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-white">Event Details</h3>
                  <p className="text-gray-600 dark:text-gray-300">Date: [Event Date]</p>
                  <p className="text-gray-600 dark:text-gray-300">Time: [Event Time]</p>
                  <p className="text-gray-600 dark:text-gray-300">Venue: [Event Venue]</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Having trouble scanning? Contact us at: ieee@klh.edu.in
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
              <div className="w-64 h-64 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center p-4">
                  <p className="text-gray-500 dark:text-gray-400 mb-2">QR Code</p>
                  <p className="text-xs text-gray-400">[QR Code will be displayed here]</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Scan this QR code with your phone's camera
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
