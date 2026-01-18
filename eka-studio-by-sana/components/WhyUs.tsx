import React from 'react';
import Section from './Section';

const WhyUs: React.FC = () => {
  return (
    <section className="py-32 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          <Section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-stone-400"></div>
              <span className="text-stone-500 font-medium tracking-widest uppercase text-[10px]">Why EKA Studio</span>
            </div>
            
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-stone-900 leading-[1.1] mb-10 tracking-tight">
              Why discerning clients <br /> choose <span className="italic font-serif font-light text-stone-600">EKA Studio</span>.
            </h2>
            
            <p className="text-stone-600 font-light text-lg leading-relaxed max-w-md">
              In a market flooded with generic templates, we offer a bespoke service that respects your individuality and your home's architecture.
            </p>
          </Section>
          
          <div className="space-y-16 mt-8 lg:mt-0">
            <Section delay={200}>
              <div className="group border-l border-stone-300 pl-8 hover:border-stone-900 transition-colors duration-500">
                <h3 className="font-display font-medium text-2xl text-stone-900 mb-4 group-hover:text-stone-600 transition-colors">Design-Led Approach</h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  We don't follow catalogues. Every corner is sketched, planned, and designed to balance aesthetics with everyday utility.
                </p>
              </div>
            </Section>

            <Section delay={300}>
              <div className="group border-l border-stone-300 pl-8 hover:border-stone-900 transition-colors duration-500">
                <h3 className="font-display font-medium text-2xl text-stone-900 mb-4 group-hover:text-stone-600 transition-colors">Transparent Process</h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  No hidden costs, no surprise timelines. You are part of the journey from the first mood board to the final handover.
                </p>
              </div>
            </Section>

            <Section delay={400}>
              <div className="group border-l border-stone-300 pl-8 hover:border-stone-900 transition-colors duration-500">
                <h3 className="font-display font-medium text-2xl text-stone-900 mb-4 group-hover:text-stone-600 transition-colors">Educator Mindset</h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  As educators in the design space, we believe in helping you understand the 'why' behind every material and layout choice.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;