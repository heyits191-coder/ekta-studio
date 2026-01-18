import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

interface ProjectData {
  id: number;
  title: string;
  location: string;
  cover: string;
  images: string[];
}

const projects: ProjectData[] = [
  { 
    id: 1, 
    title: 'The Vasant Vihar Residence', 
    location: 'New Delhi', 
    cover: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1600210492486-724fe5c67fb0']
  },
  { 
    id: 2, 
    title: 'Aurum Offices', 
    location: 'Gurgaon', 
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c']
  },
  { 
    id: 3, 
    title: 'Estate 54', 
    location: 'Jor Bagh', 
    cover: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3']
  },
  { 
    id: 4, 
    title: 'Monochrome Penthouse', 
    location: 'Mumbai', 
    cover: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c']
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-luxury-offwhite">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="mb-16">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-semibold text-luxury-black tracking-tight mb-2">Selected Works</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-xl text-luxury-gray">Spaces we are proud of.</p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <RevealOnScroll key={project.id} delay={idx * 0.2}>
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.cover} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold text-luxury-gray uppercase tracking-wide mb-1">{project.location}</p>
                  <h3 className="text-2xl font-semibold text-luxury-black group-hover:text-luxury-gold transition-colors">{project.title}</h3>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};