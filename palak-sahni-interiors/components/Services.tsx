import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

const services = [
  { title: "Architectural Consulting", desc: "Structural modifications and spatial planning that redefine flow and function." },
  { title: "Interior Design", desc: "Complete aesthetic curation from wall treatments to bespoke furniture selection." },
  { title: "Art Curation", desc: "Sourcing and commissioning exclusive art pieces to elevate the narrative of the home." },
  { title: "Turnkey Execution", desc: "End-to-end project management ensuring the vision is executed flawlessly." }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-16">
          <RevealOnScroll>
            <h2 className="text-4xl font-semibold text-luxury-black tracking-tight mb-4">Expertise.</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-xl text-luxury-gray max-w-2xl">
              A holistic design service, overseeing every detail from the first sketch to the final styling.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.1}>
              <div className="bg-luxury-offwhite p-10 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <span className="text-sm font-bold text-luxury-gold mb-4 block">0{idx + 1}</span>
                <h3 className="text-2xl font-semibold text-luxury-black mb-3">{service.title}</h3>
                <p className="text-luxury-gray font-normal leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};