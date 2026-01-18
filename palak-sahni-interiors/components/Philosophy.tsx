import React from 'react';
import { Quote } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="studio" className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Text Side */}
        <div className="order-2 md:order-1">
          <div className="w-12 h-[1px] bg-luxury-gold mb-8"></div>
          <h2 className="font-serif text-4xl md:text-5xl text-luxury-black mb-8 leading-snug">
            Design is the silence <br/> between the <span className="italic text-luxury-gold">noise.</span>
          </h2>
          <p className="font-sans text-gray-600 leading-relaxed mb-6 font-light">
            At Palak Sahni Interiors, we believe luxury is not about abundance, but about precision. It is the careful curation of light, texture, and space to create environments that feel simultaneously expansive and intimate.
          </p>
          <p className="font-sans text-gray-600 leading-relaxed mb-8 font-light">
            Our process is deeply personal. We listen to the unspoken needs of our clients, translating their aspirations into architectural narratives that stand the test of time. From the bespoke joinery to the hand-selected marble, every detail is a deliberate choice.
          </p>
          <div className="flex items-center space-x-4">
             <div className="font-serif italic text-lg text-luxury-charcoal">Palak Sahni</div>
             <div className="h-[1px] w-8 bg-gray-300"></div>
             <div className="text-xs uppercase tracking-widest text-gray-400">Principal Architect</div>
          </div>
        </div>

        {/* Image Side */}
        <div className="order-1 md:order-2 relative group">
           <div className="absolute top-0 right-0 w-full h-full border border-luxury-gold/30 transform translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
           <div className="relative overflow-hidden w-full h-[600px]">
             <img 
               src="https://picsum.photos/id/203/1000/1200" 
               alt="Palak Sahni Portrait or Interior Detail" 
               className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000 ease-out transform hover:scale-105"
             />
           </div>
        </div>

      </div>
    </section>
  );
};
