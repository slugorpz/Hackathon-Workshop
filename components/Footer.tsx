import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">TIE Club</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Fostering Technology, Innovation, and Entrepreneurship among students to build the leaders of tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/events" className="hover:text-blue-400 transition-colors">Upcoming Events</Link></li>
              <li><Link to="/team" className="hover:text-blue-400 transition-colors">Our Team</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>
                  123 University Campus,<br />
                  Tech Block A, Innovation Hub,<br />
                  City, State 560001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href="mailto:contact@tieclub.edu" className="hover:text-blue-400">contact@tieclub.edu</a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} TIE Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;