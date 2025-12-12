import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { 
  LayoutDashboard, PlusCircle, Users, Settings, Image as ImageIcon, LogOut, Search
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'create' | 'participants'>('dashboard');

  const renderContent = () => {
    switch(activeTab) {
      case 'create': return <CreateEventForm />;
      case 'participants': return <ParticipantManagement />;
      default: return <DashboardHome />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-white">TIE Admin</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem 
            icon={LayoutDashboard} 
            label="Dashboard" 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')} 
          />
          <SidebarItem 
            icon={PlusCircle} 
            label="Create Event" 
            active={activeTab === 'create'} 
            onClick={() => setActiveTab('create')} 
          />
          <SidebarItem 
            icon={Users} 
            label="Participants" 
            active={activeTab === 'participants'} 
            onClick={() => setActiveTab('participants')} 
          />
          <SidebarItem icon={ImageIcon} label="Gallery" onClick={() => {}} />
          <SidebarItem icon={Settings} label="Settings" onClick={() => {}} />
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 text-sm font-medium text-red-400 hover:text-red-300 w-full px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
            <LogOut className="h-5 w-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen">
        <header className="bg-white shadow-sm border-b border-slate-200 p-6 flex justify-between items-center md:hidden">
             <h1 className="font-bold text-slate-800">Admin Panel</h1>
             {/* Mobile toggle would go here */}
        </header>
        
        <div className="p-8">
           {renderContent()}
        </div>
      </main>
    </div>
  );
};

const SidebarItem: React.FC<{ icon: any, label: string, active?: boolean, onClick: () => void }> = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors ${
      active ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 hover:text-white'
    }`}
  >
    <Icon className="h-5 w-5" />
    <span className="font-medium">{label}</span>
  </button>
);

const DashboardHome: React.FC = () => {
  const data = [
    { name: 'Hackathon', participants: 150 },
    { name: 'Seminar', participants: 80 },
    { name: 'Workshop', participants: 200 },
    { name: 'Meetup', participants: 50 },
  ];
  const pieData = [
    { name: 'Students', value: 400 },
    { name: 'Professionals', value: 100 },
    { name: 'Faculty', value: 50 },
  ];
  const COLORS = ['#2563eb', '#06b6d4', '#64748b'];

  return (
    <div className="space-y-6">
       <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
       
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <h3 className="text-slate-500 text-sm font-medium uppercase mb-2">Total Registrations</h3>
             <p className="text-3xl font-bold text-slate-900">1,245</p>
             <span className="text-green-500 text-xs font-bold">+12% from last month</span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <h3 className="text-slate-500 text-sm font-medium uppercase mb-2">Live Events</h3>
             <p className="text-3xl font-bold text-slate-900">3</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <h3 className="text-slate-500 text-sm font-medium uppercase mb-2">Volunteers Active</h3>
             <p className="text-3xl font-bold text-slate-900">45</p>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-80">
            <h3 className="font-bold text-slate-800 mb-4">Registration Analytics</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <RechartsTooltip cursor={{fill: '#f1f5f9'}} />
                <Bar dataKey="participants" fill="#2563eb" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-80">
            <h3 className="font-bold text-slate-800 mb-4">Demographics</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
         </div>
       </div>
    </div>
  );
};

const CreateEventForm: React.FC = () => (
  <div className="max-w-4xl">
    <h1 className="text-2xl font-bold text-slate-900 mb-6">Create New Event</h1>
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Event Name</label>
            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Annual Tech Summit" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white">
              <option>Workshop</option>
              <option>Seminar</option>
              <option>Hackathon</option>
            </select>
          </div>

           <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
            <input type="date" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Time</label>
            <input type="time" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

           <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Venue</label>
            <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Room No / Hall" />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Event details..."></textarea>
          </div>
          
          <div className="col-span-2 border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer">
             <ImageIcon className="mx-auto h-12 w-12 text-slate-400" />
             <p className="mt-2 text-sm text-slate-500">Click to upload Event Poster</p>
          </div>
        </div>
        
        <div className="flex justify-end gap-4 pt-4">
           <button type="button" className="px-6 py-2 text-slate-600 font-medium hover:bg-slate-100 rounded-lg transition-colors">Cancel</button>
           <button type="button" className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">Create Event</button>
        </div>
      </form>
    </div>
  </div>
);

const ParticipantManagement: React.FC = () => (
  <div>
    <div className="flex justify-between items-center mb-6">
       <h1 className="text-2xl font-bold text-slate-900">Participants</h1>
       <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">Export CSV</button>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100 flex gap-4">
         <div className="relative flex-1 max-w-sm">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
           <input type="text" placeholder="Search participants..." className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
         </div>
      </div>
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
          <tr>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">College</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {[1, 2, 3, 4, 5].map((i) => (
             <tr key={i} className="hover:bg-slate-50 transition-colors">
               <td className="px-6 py-4 font-medium text-slate-900">Student Name {i}</td>
               <td className="px-6 py-4 text-slate-600">student{i}@example.com</td>
               <td className="px-6 py-4 text-slate-600">Tech University</td>
               <td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Confirmed</span></td>
               <td className="px-6 py-4">
                 <button className="text-blue-600 hover:underline">Edit</button>
               </td>
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminDashboard;