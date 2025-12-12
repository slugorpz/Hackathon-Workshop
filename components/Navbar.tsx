import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, LogIn, LogOut, User as UserIcon } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Connect', path: '/connect' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setIsLoginOpen(false); // Close modal on successful login
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      if (error) throw error;
    } catch (error: any) {
      console.error("Error logging in with Google:", error);
      alert("Failed to login with Google: " + (error.message || "Unknown error"));
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Hexagon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                TIE Club
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive(link.path) ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 ml-4">
                {user ? (
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <UserIcon className="h-4 w-4" />
                      {user.email?.split('@')[0]}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
                    >
                      <LogOut className="h-4 w-4" /> Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1"
                  >
                    <LogIn className="h-4 w-4" /> Sign In
                  </button>
                )}
                
                <Link
                  to="/admin"
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors border-l border-slate-200"
                >
                  Member Portal
                </Link>
                <Link
                  to="/events"
                  className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Register Now
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 absolute w-full h-screen overflow-y-auto pb-20">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-slate-100 pt-4 mt-4 space-y-3">
                 {user ? (
                   <button
                    onClick={handleLogout}
                    className="block w-full text-center px-4 py-3 text-red-500 font-medium hover:bg-red-50 rounded-lg"
                  >
                    Sign Out ({user.email?.split('@')[0]})
                  </button>
                 ) : (
                   <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsLoginOpen(true);
                    }}
                    className="block w-full text-center px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 rounded-lg border border-slate-200"
                  >
                    Sign In
                  </button>
                 )}

                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-2 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  Member Portal
                </Link>
                <Link
                  to="/events"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsLoginOpen(false)}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 transform transition-all scale-100 animate-fade-in-up">
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center mb-8">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <LogIn className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
              <p className="text-slate-500 mt-2 text-sm">Sign in to access your account</p>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow-md group"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </button>
            
            <p className="mt-6 text-center text-xs text-slate-400">
              By signing in, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;