import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const steps = [
  { number: "01", title: "Discovery", description: "Understanding lifestyle, needs, and vision." },
  { number: "02", title: "Design", description: "Concept, space planning, materials & mood." },
  { number: "03", title: "Execution", description: "Managed timelines, trusted vendors, site control." },
  { number: "04", title: "Delivery", description: "Final styling, handover, and walkthrough." }
];

export const Process: React.FC = () => {
  return (
    <section className="py-32 bg-white px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <RevealOnScroll>
           <h2 className="text-4xl font-semibold text-luxury-black tracking-tight mb-16 text-center">The Process.</h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-luxury-offwhite text-luxury-black flex items-center justify-center font-bold text-lg mb-6 shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-luxury-black mb-2">{step.title}</h3>
                <p className="text-luxury-gray text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};