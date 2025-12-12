import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Lightbulb, ArrowRight, TrendingUp } from 'lucide-react';
import { Event } from '../types';

// Mock Data
const stats = [
  { label: 'Events Hosted', value: '45+', icon: Calendar },
  { label: 'Participants Reached', value: '3,500+', icon: Users },
  { label: 'Startups Incubated', value: '12', icon: Lightbulb },
];

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Future Tech Hackathon 2024',
    date: 'Oct 15, 2024',
    time: '09:00 AM',
    location: 'Main Auditorium',
    category: 'Hackathon',
    description: 'A 24-hour coding marathon to solve real-world problems using AI and Blockchain.',
    image: 'https://picsum.photos/800/600?random=1',
    status: 'Upcoming',
    organizer: 'TIE Club Tech Team',
  },
  {
    id: '2',
    title: 'Innovation Summit',
    date: 'Nov 02, 2024',
    time: '10:00 AM',
    location: 'Conference Hall B',
    category: 'Seminar',
    description: 'Industry leaders share insights on the future of entrepreneurship in the digital age.',
    image: 'https://picsum.photos/800/600?random=2',
    status: 'Upcoming',
    organizer: 'TIE Club Core',
  },
  {
    id: '3',
    title: 'Startup Pitch Fest',
    date: 'Nov 20, 2024',
    time: '11:00 AM',
    location: 'Innovation Lab',
    category: 'Workshop',
    description: 'Pitch your startup idea to a panel of investors and win seed funding.',
    image: 'https://picsum.photos/800/600?random=3',
    status: 'Upcoming',
    organizer: 'TIE Entrepreneur Cell',
  },
];

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             <img src="https://picsum.photos/1920/1080?random=10" alt="Background" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium">Join the revolution of ideas</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-400 bg-clip-text text-transparent">
            Technology, Innovation <br className="hidden md:block" />
            & Entrepreneurship
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
            We are a community driven by the passion to create, innovate, and lead. 
            Join TIE Club to transform your ideas into reality through our world-class events.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/events"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              View Upcoming Events
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-full font-semibold transition-all flex items-center justify-center"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-20 z-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <stat.icon className="h-8 w-8" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Upcoming Events</h2>
              <p className="text-slate-500">Don't miss out on what's happening next at TIE Club.</p>
            </div>
            <Link to="/events" className="hidden sm:flex items-center text-blue-600 font-semibold hover:text-blue-700">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col">
                <div className="h-48 overflow-hidden relative group">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                    {event.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-slate-500 mb-3 gap-4">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{event.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2 flex-1">
                    {event.description}
                  </p>
                  <Link 
                    to={`/events/${event.id}`}
                    className="block w-full py-3 text-center bg-slate-50 text-slate-700 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

           <div className="mt-8 text-center sm:hidden">
            <Link to="/events" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
              View All Events <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Quote/CTA */}
      <section className="py-20 bg-blue-600 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">"Innovation is the ability to see change as an opportunity - not a threat."</h2>
          <p className="text-blue-100 mb-8 text-lg">- Steve Jobs</p>
          <Link to="/team" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
            Meet Our Innovators
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;