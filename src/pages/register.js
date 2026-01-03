import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Camera, X, AlertTriangle, Users, CreditCard, FileText, CheckCircle, QrCode } from 'lucide-react';
// Import your QR code image (replace with your actual QR code image path)
import qrCodeImage from '../assets/images/qr.png';

const Register = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [scanResult, setScanResult] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      setIsScanning(false);
      // Stop the camera when scan is complete
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    }
  };

  const handleError = (err) => {
    console.error('QR Scanner Error:', err);
  };

  const startScanner = async () => {
    try {
      setShowScanner(true);
      setIsScanning(true);
      setScanResult('');
      
      // Request camera access
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Could not access the camera. Please ensure you have granted camera permissions.');
      setShowScanner(false);
      setIsScanning(false);
    }
  };

  const stopScanner = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setShowScanner(false);
    setIsScanning(false);
  };

  const toggleGuidelines = () => {
    setShowGuidelines(!showGuidelines);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative">
        <Link 
          to="/rampage" 
          className="fixed top-24 left-6 z-50 inline-flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Rampage
        </Link>
        
        <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2">
              IEEE Event Registration
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
             //Scan the QR code to register for the event
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* QR Code Section - Left Side */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-600">
                <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Scan to Register</h2>
                 <p className="text-gray-600 dark:text-gray-300">Scan the event QR code to register</p>
                </div>
                
                {!showScanner ? (
                  <>
                    {/* QR Code Display */}
                    <div className="bg-white p-4 rounded-lg border-2 border-dashed border-blue-200 dark:border-blue-900 flex flex-col items-center justify-center mb-6">
                      <div className="w-64 h-64 flex items-center justify-center mb-4">
                        <img 
                          src={qrCodeImage} 
                          alt="IEEE Event QR Code" 
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/256/ffffff/000000?text=QR+Code';
                          }}
                        />
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">or</p>
                      </div>
                    </div>
                    
                    {/* Guidelines Toggle */}
                    <button
                      onClick={toggleGuidelines}
                      className="w-full text-center py-2 text-sm text-blue-600 dark:text-blue-400 hover:underline mb-4"
                    >
                      {showGuidelines ? 'Hide' : 'View'} Registration Guidelines
                    </button>
                    
                    {showGuidelines && (
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4 text-left">
                        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                          <FileText className="w-5 h-5 mr-2" />
                          Registration Guidelines
                        </h3>
                        <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <Users className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="ml-2">
                              <p className="font-medium">Team Composition</p>
                              <ul className="list-disc pl-4 mt-1 space-y-1">
                                <li>Each team must consist of 2 to 4 members only</li>
                                <li>Individual registrations are not allowed</li>
                                <li>Only ONE registration form submission is permitted per team</li>
                                <li>Duplicate or multiple submissions by the same team will be rejected</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <CreditCard className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="ml-2">
                              <p className="font-medium">Registration Fee Structure</p>
                              <ul className="list-disc pl-4 mt-1 space-y-1">
                                <li><span className="font-semibold">Non-IEEE Teams:</span> ₹1000 per team, irrespective of the number of members</li>
                                <li><span className="font-semibold">IEEE Teams:</span> ₹800 per team ONLY if all team members are active IEEE members</li>
                                <li className="text-sm text-gray-600 dark:text-gray-400">* Fee is non-refundable and non-transferable</li>
                              </ul>
                              
                              <p className="font-medium mt-3">Eligibility for ₹800 Registration Fee</p>
                              <ul className="list-disc pl-4 mt-1 space-y-1">
                                <li>All 2–4 team members must be IEEE members</li>
                                <li>Each member must provide a valid and active IEEE Membership ID</li>
                                <li>If even one team member is NOT an IEEE member, the team must pay ₹1000</li>
                              </ul>
                              
                              <p className="font-medium mt-3">Verification Rules</p>
                              <ul className="list-disc pl-4 mt-1 space-y-1">
                                <li>IEEE membership details will be verified by the organizing committee</li>
                                <li>Invalid, expired, fake, or missing IEEE Membership IDs will result in the team being charged ₹1000</li>
                                <li>Failure to comply with verification requirements may lead to cancellation of registration</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <CheckCircle className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="ml-2">
                              <p className="font-medium">Secondary Verification (via Luma – Mandatory for All Members)</p>
                              <ul className="list-disc pl-4 mt-1 space-y-1">
                                <li>All team members must register on the Luma page</li>
                                <li>Enter IEEE Membership ID and details for verification</li>
                                <li>This step is FREE and ensures eligibility</li>
                              </ul>
                              <a 
                                href="#" 
                                className="mt-2 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm"
                              >
                                👉 Proceed to Luma Verification Page
                              </a>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <AlertTriangle className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div className="ml-2">
                              <p className="font-medium">On-Site Mandatory Documents</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">All participating students must carry the following on the event day:</p>
                              <ul className="list-disc pl-4 mt-1 space-y-1">
                                <li>Valid Student ID Card issued by their respective college/university</li>
                                <li>NOC (No Objection Certificate), which must be submitted to the organizers during check-in</li>
                              </ul>
                              <p className="text-sm text-red-500 dark:text-red-400 mt-2">Participants failing to produce these documents may not be allowed to participate.</p>
                              
                              <p className="font-medium mt-4">General Rules</p>
                              <ul className="list-disc pl-4 mt-1 space-y-1">
                                <li>The registration fee is non-refundable and non-transferable</li>
                                <li>Registration is considered complete only after successful payment and document verification</li>
                                <li>Decisions taken by the Rampage V2.6 24 hour Hackathon Organizing Committee shall be final and binding</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                      />
                      {isScanning && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="border-4 border-white border-dashed rounded-lg w-64 h-64 flex items-center justify-center">
                            <p className="text-white text-center px-4">Position QR code within this frame</p>
                          </div>
                        </div>
                      )}
                      {scanResult && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4">
                          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                          <p className="text-white text-center text-lg font-medium mb-2">Scan Successful!</p>
                          <p className="text-gray-300 text-sm text-center mb-4">Registration details processed</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <button
                        onClick={stopScanner}
                        className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
                      >
                        <X className="w-5 h-5 mr-2" />
                        {scanResult ? 'Close' : 'Cancel'}
                      </button>
                      
                      {!scanResult && (
                        <button
                          onClick={startScanner}
                          className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center"
                        >
                          <Camera className="w-5 h-5 mr-2" />
                          Rescan
                        </button>
                      )}
                    </div>
                    
                    {scanResult && (
                      <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-center text-green-700 dark:text-green-300">
                          <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                          <span className="text-sm">Scan successful! Redirecting to registration form...</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Instructions Section - Right Side */}
              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="font-bold text-xl text-blue-800 dark:text-blue-200 mb-4">Event Registration Instructions</h3>
                  
                  <div className="space-y-5">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium mr-3 mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">Scan the QR Code</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          Use your phone's camera to scan the QR code on the left, or click the scan button to use your computer's camera.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium mr-3 mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">Complete Registration</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          After scanning, you'll be directed to the registration form to enter your details.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium mr-3 mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">Get Confirmation</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          You'll receive a confirmation email with event details after successful registration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-4">Event Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-blue-500 dark:text-blue-400 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Date & Time</p>
                        <p className="text-gray-800 dark:text-gray-200">Friday<br/>23rd 9:00 am to 24th 9 am</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-blue-500 dark:text-blue-400 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                        <p className="text-gray-800 dark:text-gray-200">KLH University<br/> Bowrampet

Bowrampet Village, Bachupally Mandal Hyderabad,Telangana,500043,India
</p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-2">What to Bring</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>Your registration confirmation (digital or printed)</li>
                        <li>Photo ID for check-in</li>
                        <li>Laptop or tablet (optional)</li>
                        <li>Questions for our speakers</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-3">Need Help?</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    If you're having trouble with registration or have any questions, please contact our support team.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-blue-600 dark:text-blue-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <a href="bmp.ieeeklefb.sb@gmail.com" className="hover:underline">KLEFB</a>
                    </div>
                    <div className="flex items-center text-blue-600 dark:text-blue-400">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <a href="tel:+11234567890" className="hover:underline">+91 98490 94295</a>
                    </div>
                  </div>
                </div>
                
                <a
                  href="https://luma.com/pgy9mouz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 mt-6"
                >
                  Continue to Registration
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
