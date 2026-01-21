import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X, FileText } from 'lucide-react';

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
          We're sorry, but registrations for this event have now closed. Stay tuned for future hackerthons and opportunities!
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href="/NOC_Rampage_V2.6.docx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            <FileText className="w-4 h-4" />
            Download NOC
          </a>
        </div>
        
        {/* Contact Information */}
        <div className="mt-6 text-sm text-gray-600">
          For any queries, contact us at:{' '}
          <a 
            href="mailto:rampage.klhb@gmail.com" 
            className="text-blue-600 hover:underline"
          >
            rampage.klhb@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationClosed;
