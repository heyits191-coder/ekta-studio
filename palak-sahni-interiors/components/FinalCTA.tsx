import React from 'react';
import { ChevronRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 md:py-40 bg-white flex flex-col items-center justify-center text-center px-6">
        <RevealOnScroll>
          <h2 className="text-5xl md:text-7xl font-semibold text-luxury-black mb-6 tracking-tighter">
              Create your <br/><span className="text-luxury-gold">timeless</span> space.
          </h2>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.2}>
          <p className="text-xl text-luxury-gray mb-12 font-normal">
              Tell us about your space. We’ll take care of the rest.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="flex flex-col md:flex-row items-center gap-6">
              <a href="#contact" className="bg-luxury-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-sm hover:scale-105 duration-300">
                  Start Your Project
              </a>
              <a href="#contact" className="text-luxury-black font-medium text-sm flex items-center hover:text-luxury-gold transition-colors">
                  Book a call <ChevronRight size={16} className="ml-1" />
              </a>
          </div>
        </RevealOnScroll>
    </section>
  );
};