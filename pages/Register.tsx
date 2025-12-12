import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Download } from 'lucide-react';

const Register: React.FC = () => {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get('event');
  const [submitted, setSubmitted] = useState(false);
  
  // Mock event name fetch
  const eventName = eventId ? 'Future Tech Hackathon 2024' : 'Selected Event';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-2xl text-center animate-fade-in-up">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Registration Successful!</h2>
          <p className="text-slate-500 mb-8">
            You have successfully registered for <strong>{eventName}</strong>. A confirmation email has been sent to you.
          </p>
          <div className="space-y-3">
             <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors">
               <Download className="h-4 w-4" /> Download Ticket
             </button>
             <Link to="/" className="block w-full text-slate-600 py-3 hover:text-blue-600 transition-colors text-sm font-medium">
               Back to Home
             </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-slate-900 px-8 py-6 text-white">
          <h2 className="text-xl font-bold opacity-90">Event Registration</h2>
          <p className="text-3xl font-bold mt-1">{eventName}</p>
          <p className="text-slate-400 text-sm mt-2">Please fill in the details correctly. Fields marked with * are mandatory.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
              <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
              <input required type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
              <input required type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="+1 (555) 000-0000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">College / Organization *</label>
              <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="University Name" />
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
             <label className="block text-sm font-medium text-slate-700 mb-2">Participation Type</label>
             <div className="flex gap-4">
               <label className="flex items-center gap-2 cursor-pointer border p-3 rounded-lg flex-1 hover:bg-slate-50">
                 <input type="radio" name="type" className="text-blue-600 focus:ring-blue-500" defaultChecked />
                 <span className="text-sm font-medium">Individual</span>
               </label>
               <label className="flex items-center gap-2 cursor-pointer border p-3 rounded-lg flex-1 hover:bg-slate-50">
                 <input type="radio" name="type" className="text-blue-600 focus:ring-blue-500" />
                 <span className="text-sm font-medium">Team (2-4 Members)</span>
               </label>
             </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-slate-500 bg-blue-50 p-4 rounded-lg">
             <input type="checkbox" required className="rounded text-blue-600 focus:ring-blue-500" />
             <span>I agree to the rules and regulations of the TIE Club event.</span>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;