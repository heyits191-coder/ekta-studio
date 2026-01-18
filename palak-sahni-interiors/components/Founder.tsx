import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const Founder: React.FC = () => {
  return (
    <section id="studio" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Text */}
        <div className="md:w-1/2 order-2 md:order-1">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-semibold text-luxury-black mb-6 tracking-tight">
              Designed for <span className="text-luxury-gold">feeling.</span>
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <div className="space-y-6 text-lg text-luxury-gray leading-relaxed font-normal">
              <p>
                "Design is not decoration. It’s how life feels inside a space."
              </p>
              <p>
                Palak Sahni founded the studio with one simple belief — spaces should be beautiful, but also deeply functional. Every project is approached with clarity, calm, and an eye for timeless detail.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h3 className="text-luxury-black font-semibold text-xl">Palak Sahni</h3>
              <p className="text-luxury-gray text-sm">Founder & Principal Designer</p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Image */}
        <div className="md:w-1/2 order-1 md:order-2">
          <RevealOnScroll variant="blur" delay={0.3}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
                alt="Palak Sahni" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[1.5s]"
              />
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
};