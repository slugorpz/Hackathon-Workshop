import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { id: '1', name: 'Dr. Alan Grant', role: 'Faculty Head', category: 'Faculty', image: 'https://picsum.photos/300/300?random=20' },
    { id: '2', name: 'Sarah Connor', role: 'President', category: 'Core', image: 'https://picsum.photos/300/300?random=21' },
    { id: '3', name: 'Tony Stark', role: 'Tech Lead', category: 'Core', image: 'https://picsum.photos/300/300?random=22' },
    { id: '4', name: 'Bruce Wayne', role: 'Event Head', category: 'Core', image: 'https://picsum.photos/300/300?random=23' },
    { id: '5', name: 'Diana Prince', role: 'Creative Lead', category: 'Executive', image: 'https://picsum.photos/300/300?random=24' },
    { id: '6', name: 'Clark Kent', role: 'PR Manager', category: 'Executive', image: 'https://picsum.photos/300/300?random=25' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
         <h1 className="text-4xl font-bold text-slate-900 mb-4">Meet the Team</h1>
         <p className="text-slate-500 max-w-2xl mx-auto">
           The passionate individuals behind TIE Club dedicated to fostering innovation.
         </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Faculty & President */}
        <div className="mb-20">
           <h2 className="text-2xl font-bold text-center mb-10 text-slate-800">Leadership</h2>
           <div className="flex flex-wrap justify-center gap-10">
              {teamMembers.slice(0, 2).map(member => <TeamCard key={member.id} member={member} />)}
           </div>
        </div>

        {/* Core Team */}
        <div>
           <h2 className="text-2xl font-bold text-center mb-10 text-slate-800">Core Team</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.slice(2).map(member => <TeamCard key={member.id} member={member} />)}
           </div>
        </div>
      </div>
    </div>
  );
};

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-slate-100">
    <div className="h-64 overflow-hidden relative bg-slate-200">
       <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
       <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          <a href="#" className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
          <a href="#" className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
       </div>
    </div>
    <div className="p-6 text-center">
       <h3 className="font-bold text-lg text-slate-900">{member.name}</h3>
       <p className="text-blue-600 text-sm font-medium">{member.role}</p>
    </div>
  </div>
);

export default Team;