import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, MapPin, Filter } from 'lucide-react';
import { Event } from '../types';

// Expanded Mock Data
const allEvents: Event[] = [
  {
    id: '1',
    title: 'Future Tech Hackathon 2024',
    date: '2024-10-15',
    time: '09:00 AM',
    location: 'Main Auditorium',
    category: 'Hackathon',
    description: 'A 24-hour coding marathon to solve real-world problems using AI and Blockchain.',
    image: 'https://picsum.photos/800/600?random=1',
    status: 'Upcoming',
    organizer: 'TIE Tech',
  },
  {
    id: '2',
    title: 'Innovation Summit',
    date: '2024-11-02',
    time: '10:00 AM',
    location: 'Conference Hall B',
    category: 'Seminar',
    description: 'Industry leaders share insights on the future of entrepreneurship.',
    image: 'https://picsum.photos/800/600?random=2',
    status: 'Upcoming',
    organizer: 'TIE Core',
  },
  {
    id: '3',
    title: 'Startup Pitch Fest',
    date: '2024-11-20',
    time: '11:00 AM',
    location: 'Innovation Lab',
    category: 'Workshop',
    description: 'Pitch your startup idea to a panel of investors and win seed funding.',
    image: 'https://picsum.photos/800/600?random=3',
    status: 'Upcoming',
    organizer: 'TIE E-Cell',
  },
  {
    id: '4',
    title: 'Web3 Development Bootcamp',
    date: '2024-09-10',
    time: '02:00 PM',
    location: 'Online',
    category: 'Workshop',
    description: 'Learn the fundamentals of Ethereum and Smart Contracts.',
    image: 'https://picsum.photos/800/600?random=4',
    status: 'Past',
    organizer: 'TIE Tech',
  },
   {
    id: '5',
    title: 'AI in Healthcare Seminar',
    date: '2024-08-15',
    time: '10:00 AM',
    location: 'Seminar Hall 1',
    category: 'Seminar',
    description: 'Exploring how AI is transforming medical diagnostics.',
    image: 'https://picsum.photos/800/600?random=5',
    status: 'Past',
    organizer: 'TIE Research',
  },
];

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [monthFilter, setMonthFilter] = useState('All');

  const categories = ['All', 'Workshop', 'Seminar', 'Hackathon', 'Networking'];
  const months = ['All', 'August', 'September', 'October', 'November', 'December'];

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || event.category === categoryFilter;
    
    // Simple month check (assuming format YYYY-MM-DD)
    const eventMonthIndex = new Date(event.date).getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const eventMonthName = monthNames[eventMonthIndex];
    const matchesMonth = monthFilter === 'All' || eventMonthName === monthFilter;

    return matchesSearch && matchesCategory && matchesMonth;
  });

  const upcomingEvents = filteredEvents.filter(e => e.status === 'Upcoming');
  const pastEvents = filteredEvents.filter(e => e.status === 'Past');

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Events Calendar</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover workshops, seminars, and hackathons designed to boost your skills and network.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col md:flex-row gap-4 items-center border border-slate-100">
          
          <div className="flex-1 w-full relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search events..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
             <div className="relative min-w-[140px]">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                <select 
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full pl-9 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
             </div>

             <div className="relative min-w-[140px]">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                <select 
                  value={monthFilter}
                  onChange={(e) => setMonthFilter(e.target.value)}
                  className="w-full pl-9 pr-8 py-3 bg-slate-50 border border-slate-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {months.map(month => <option key={month} value={month}>{month}</option>)}
                </select>
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
          Upcoming Events
        </h2>
        
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-slate-300">
            <p className="text-slate-500">No upcoming events found matching your criteria.</p>
          </div>
        )}

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-slate-400 rounded-full"></span>
              Past Events
            </h2>
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
              {pastEvents.map(event => (
                <div key={event.id} className="min-w-[300px] md:min-w-[350px] snap-center">
                   <div className="bg-white rounded-xl border border-slate-200 overflow-hidden opacity-75 hover:opacity-100 transition-opacity">
                      <img src={event.image} alt={event.title} className="h-40 w-full object-cover grayscale hover:grayscale-0 transition-all" />
                      <div className="p-4">
                        <div className="text-xs font-bold text-slate-500 mb-1">{event.date}</div>
                        <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                        <Link to={`/events/${event.id}`} className="text-sm text-blue-600 hover:underline">View Recap</Link>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
    <div className="h-52 overflow-hidden relative">
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
         <span className="text-white text-xs font-bold bg-blue-600 px-2 py-1 rounded-md">{event.category}</span>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-slate-900 leading-tight">{event.title}</h3>
      </div>
      <div className="space-y-2 mb-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-blue-500" />
          <span>{event.date} • {event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-500" />
          <span>{event.location}</span>
        </div>
      </div>
      <p className="text-slate-600 text-sm mb-6 line-clamp-2 flex-1">
        {event.description}
      </p>
      <div className="mt-auto">
        <Link 
          to={`/events/${event.id}`}
          className="block w-full py-2.5 text-center border-2 border-slate-100 text-slate-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
        >
          Know More
        </Link>
      </div>
    </div>
  </div>
);

export default Events;