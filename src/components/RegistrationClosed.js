import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

const RegistrationClosed = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Close Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 rounded-full p-3">
            <X className="w-8 h-8 text-red-600" />
          </div>
        </div>
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Registrations Are Closed</h2>
        
        {/* Message */}
        <p className="text-gray-600 mb-8">
          We're sorry, but registrations for this event have now closed. Stay tuned for future events and opportunities!
        </p>
        
        {/* Button */}
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationClosed;
