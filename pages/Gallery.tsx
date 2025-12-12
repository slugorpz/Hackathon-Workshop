import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const images = [
    { id: 1, url: 'https://picsum.photos/400/300?random=30', category: 'Hackathon', year: '2023' },
    { id: 2, url: 'https://picsum.photos/400/500?random=31', category: 'Seminar', year: '2023' },
    { id: 3, url: 'https://picsum.photos/400/400?random=32', category: 'Workshop', year: '2024' },
    { id: 4, url: 'https://picsum.photos/400/300?random=33', category: 'Hackathon', year: '2024' },
    { id: 5, url: 'https://picsum.photos/400/500?random=34', category: 'Seminar', year: '2023' },
    { id: 6, url: 'https://picsum.photos/400/300?random=35', category: 'Workshop', year: '2024' },
  ];

  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Event Gallery</h1>
          <p className="text-slate-500">Relive the moments of innovation and teamwork.</p>
        </div>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {['All', 'Hackathon', 'Seminar', 'Workshop'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {filteredImages.map((img) => (
             <div key={img.id} className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <img src={img.url} alt="Gallery Item" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <div className="text-white">
                      <p className="font-bold text-lg">{img.category}</p>
                      <p className="text-sm opacity-80">{img.year}</p>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;