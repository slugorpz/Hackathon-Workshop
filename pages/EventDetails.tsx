import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, Users, Award, ShieldCheck, User } from 'lucide-react';
import { Event } from '../types';

// Hardcoded data for demo purposes (ideally fetched via ID)
const getEventById = (id: string): Event | undefined => {
  const events: Event[] = [
    {
      id: '1',
      title: 'Future Tech Hackathon 2024',
      date: '2024-10-15',
      time: '09:00 AM',
      location: 'Main Auditorium',
      category: 'Hackathon',
      description: 'Join us for a 24-hour coding marathon where brilliant minds collide to solve real-world problems using cutting-edge technologies like AI, Blockchain, and IoT. Mentors from top tech companies will be available to guide you.',
      image: 'https://picsum.photos/800/600?random=1',
      status: 'Upcoming',
      organizer: 'TIE Tech Team',
      price: 'Free',
      maxParticipants: 200,
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
        price: '$10',
        maxParticipants: 100,
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
        price: 'Free',
        maxParticipants: 50,
      },
  ];
  return events.find(e => e.id === id);
};

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = getEventById(id || '');

  if (!event) {
    return <div className="p-20 text-center">Event not found. <Link to="/events" className="text-blue-600">Go back</Link></div>;
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Event Header Image */}
      <div className="h-80 w-full relative">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white max-w-7xl mx-auto">
          <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3 inline-block">
            {event.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-blue-400" /> {event.date}</div>
            <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-blue-400" /> {event.time}</div>
            <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-400" /> {event.location}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-200">About the Event</h2>
            <p className="text-slate-600 leading-relaxed text-lg">{event.description}</p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2 border-slate-200">Agenda</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                    <div className="w-0.5 h-full bg-slate-200 -mb-2"></div>
                  </div>
                  <div className="pb-6">
                    <span className="text-sm font-bold text-blue-600">09:00 AM - 10:30 AM</span>
                    <h4 className="text-lg font-bold text-slate-800">Session {i}: Introduction to Technology</h4>
                    <p className="text-slate-500 text-sm mt-1">Detailed breakdown of the session content goes here.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2 border-slate-200">Speakers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[1, 2].map(i => (
                 <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <img src={`https://picsum.photos/100/100?random=${i+10}`} alt="Speaker" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-slate-900">Dr. Jane Doe</h4>
                      <p className="text-xs text-blue-600 font-semibold uppercase">AI Researcher</p>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">Expert in Neural Networks and Deep Learning applications.</p>
                    </div>
                 </div>
               ))}
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
             <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
               <ShieldCheck className="h-6 w-6 text-blue-600" /> Rules & Guidelines
             </h2>
             <ul className="list-disc list-inside space-y-2 text-slate-700">
               <li>Participants must carry their college ID cards.</li>
               <li>Teams typically consist of 2-4 members.</li>
               <li>Bring your own laptops and chargers.</li>
               <li>Respect the code of conduct throughout the event.</li>
             </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2 border-slate-200">Prizes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl text-center">
                   <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                   <h3 className="font-bold text-yellow-800">1st Place</h3>
                   <p className="text-yellow-700 font-bold text-xl">$500</p>
                </div>
                <div className="bg-slate-100 border border-slate-200 p-6 rounded-xl text-center">
                   <Award className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                   <h3 className="font-bold text-slate-800">2nd Place</h3>
                   <p className="text-slate-700 font-bold text-xl">$300</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl text-center">
                   <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                   <h3 className="font-bold text-orange-800">3rd Place</h3>
                   <p className="text-orange-700 font-bold text-xl">$150</p>
                </div>
            </div>
          </section>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
              <div className="text-center mb-6">
                <p className="text-slate-500 mb-1 uppercase text-xs font-bold tracking-wider">Registration Closes In</p>
                <div className="text-3xl font-mono font-bold text-blue-600">02d : 14h : 35m</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                  <span className="text-slate-500">Price</span>
                  <span className="font-bold text-slate-900 text-lg">{event.price || 'Free'}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-2">
                  <span className="text-slate-500">Max Participants</span>
                  <span className="font-bold text-slate-900">{event.maxParticipants}</span>
                </div>
                 <div className="flex justify-between items-center text-sm pb-2">
                  <span className="text-slate-500">Organizer</span>
                  <span className="font-bold text-slate-900">{event.organizer}</span>
                </div>
              </div>

              <Link 
                to={`/register?event=${event.id}`}
                className="w-full block text-center bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Register Now
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Contact Person</h3>
              <div className="flex items-center gap-3">
                 <div className="bg-slate-100 p-2 rounded-full"><User className="h-5 w-5 text-slate-600"/></div>
                 <div>
                   <p className="text-sm font-bold text-slate-800">Alex Johnson</p>
                   <p className="text-xs text-slate-500">alex.j@tieclub.edu</p>
                 </div>
              </div>
            </div>

             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Sponsors</h3>
              <div className="grid grid-cols-2 gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                <div className="h-12 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400 text-xs">LOGO</div>
                <div className="h-12 bg-slate-200 rounded flex items-center justify-center font-bold text-slate-400 text-xs">LOGO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;