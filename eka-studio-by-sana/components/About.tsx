import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-48 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          
          {/* Visual Composition */}
          <div className="w-full lg:w-1/2 relative">
             <Section>
               <div className="relative z-10 pl-8 md:pl-16">
                 <div className="aspect-[3/4] overflow-hidden bg-stone-200">
                    <img 
                      src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200" 
                      alt="Minimalist Detail" 
                      className="object-cover w-full h-full hover:scale-110 transition-transform duration-[2000ms] ease-luxury"
                    />
                 </div>
               </div>
               
               {/* Decorative Element */}
               <div className="absolute top-12 left-0 w-3/4 h-3/4 border border-stone-300 z-0 opacity-60"></div>
             </Section>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
             <Section delay={200}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-stone-400"></div>
                  <span className="text-stone-500 font-medium tracking-widest uppercase text-[10px]">The Philosophy</span>
                </div>
                
                <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-10 leading-[1.1] tracking-tight">
                  True luxury lies in <br/>
                  <span className="text-stone-400 italic font-serif">intentional restraint</span>.
                </h2>
             </Section>
             
             <Section delay={400}>
                <div className="space-y-8 text-stone-600 font-light text-lg leading-relaxed max-w-lg">
                  <p>
                    Founded by Sana, EKA Studio is an architectural interior practice that rejects fleeting trends. 
                    We focus on the permanent: light, volume, and honest materials that age gracefully.
                  </p>
                  <p>
                    With over 8 years of specialized experience, we maintain a <span className="text-stone-900 font-normal">"Limited Slots"</span> policy. 
                    This ensures every project receives the founder's undivided attention and obsessive dedication to detail.
                  </p>
                </div>
             </Section>

             <Section delay={600}>
                <div className="mt-16 flex gap-16 border-t border-stone-200 pt-8">
                  <div>
                    <span className="block text-5xl font-display font-light text-stone-900 mb-2">08</span>
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest">Years Experience</span>
                  </div>
                  <div>
                    <span className="block text-5xl font-display font-light text-stone-900 mb-2">45+</span>
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest">Luxury Homes</span>
                  </div>
                </div>
             </Section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;