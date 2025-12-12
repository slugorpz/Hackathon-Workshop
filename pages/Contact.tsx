import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('enquiry')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message 
          },
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
             
             {/* Info Section */}
             <div className="bg-slate-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <h1 className="text-4xl font-bold mb-6">Get in touch</h1>
                  <p className="text-slate-400 mb-12 text-lg">
                    Have questions about the club or upcoming events? We'd love to hear from you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-blue-400" />
                       </div>
                       <div>
                          <p className="text-sm text-slate-400 font-medium">Email Us</p>
                          <p className="text-lg font-semibold">contact@tieclub.edu</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-blue-400" />
                       </div>
                       <div>
                          <p className="text-sm text-slate-400 font-medium">Call Us</p>
                          <p className="text-lg font-semibold">+1 (555) 123-4567</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-blue-400" />
                       </div>
                       <div>
                          <p className="text-sm text-slate-400 font-medium">Visit Us</p>
                          <p className="text-lg font-semibold">Tech Block A, Innovation Hub</p>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>
             </div>

             {/* Form Section */}
             <div className="p-12 relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all disabled:opacity-50" 
                        placeholder="John Doe" 
                        disabled={isSubmitting}
                      />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all disabled:opacity-50" 
                        placeholder="john@example.com" 
                        disabled={isSubmitting}
                      />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4} 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all disabled:opacity-50" 
                        placeholder="How can we help you?"
                        disabled={isSubmitting}
                      ></textarea>
                   </div>

                   {submitStatus === 'success' && (
                     <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 animate-fade-in">
                        <CheckCircle className="h-5 w-5" />
                        <span>Message sent successfully! We'll get back to you soon.</span>
                     </div>
                   )}

                   {submitStatus === 'error' && (
                     <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 animate-fade-in">
                        <AlertCircle className="h-5 w-5" />
                        <span>{errorMessage}</span>
                     </div>
                   )}

                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 disabled:bg-blue-400 disabled:cursor-not-allowed"
                   >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                   </button>
                </form>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Contact;