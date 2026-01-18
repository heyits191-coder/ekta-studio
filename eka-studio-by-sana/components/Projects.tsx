import React from 'react';
import Section from './Section';

interface ProjectProps {
  title: string;
  location: string;
  category: string;
  image: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, location, category, image, className }) => (
  <div className={`group relative block w-full h-full cursor-pointer ${className}`}>
    <div className="relative overflow-hidden w-full h-full bg-stone-200">
      <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-700 z-10" />
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-[1800ms] ease-luxury group-hover:scale-105"
      />
      
      {/* Hover Overlay Info */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <span className="inline-block self-start bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-stone-900 mb-2">
            {category}
          </span>
      </div>
    </div>
    
    <div className="mt-6 flex justify-between items-start">
      <div>
        <h3 className="text-xl font-display font-medium text-stone-900 mb-1 tracking-tight">{title}</h3>
        <p className="text-stone-500 font-light text-sm tracking-wide">{location}</p>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <Section className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stone-400"></div>
              <span className="text-stone-500 font-medium tracking-widest uppercase text-[10px]">Selected Works</span>
            </div>
            <h2 className="font-display font-light text-4xl md:text-6xl text-stone-900 leading-tight tracking-tight">
              A curation of our recent <br /> 
              residential milestones.
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors pb-2">
            <span className="text-xs font-medium tracking-widest uppercase">View Archive</span>
          </a>
        </Section>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
           
           {/* Column 1 */}
           <div className="flex flex-col gap-24">
             <Section>
               <ProjectCard 
                  title="The Beige Residence" 
                  location="Golf Course Road, Gurgaon" 
                  category="Apartment" 
                  image="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1600"
                  className="aspect-[4/5]"
                />
             </Section>
             <Section delay={100}>
               <ProjectCard 
                  title="Villa Serene" 
                  location="Chattarpur Farms" 
                  category="Architecture" 
                  image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1600"
                  className="aspect-[3/2]"
                />
             </Section>
           </div>

           {/* Column 2 */}
           <div className="flex flex-col gap-24 md:pt-32">
             <Section delay={150}>
               <ProjectCard 
                  title="Modern Heritage" 
                  location="Vasant Vihar, Delhi" 
                  category="Renovation" 
                  image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600"
                  className="aspect-[3/2]"
                />
             </Section>
             <Section delay={250}>
               <ProjectCard 
                  title="Skyline Penthouse" 
                  location="Noida Sector 150" 
                  category="Turnkey" 
                  image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
                  className="aspect-[4/5]"
                />
             </Section>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;