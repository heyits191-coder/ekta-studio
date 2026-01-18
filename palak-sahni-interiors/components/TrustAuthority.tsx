import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';

export const TrustAuthority: React.FC = () => {
  const stats = [
    { label: "Projects Completed", value: "400+" },
    { label: "Followers", value: "19k" },
    { label: "Experience", value: "12 Yrs" },
  ];

  return (
    <section className="bg-luxury-offwhite py-24 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-5xl font-semibold text-luxury-black tracking-tight mb-4">
              Trusted Quality.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-luxury-gray text-lg max-w-2xl mx-auto">
              We don't just decorate. We architect your lifestyle with precision and care.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <RevealOnScroll key={idx} delay={idx * 0.15}>
              <div className="bg-white p-10 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform duration-500">
                <span className="text-5xl font-bold text-luxury-black tracking-tighter mb-2">{stat.value}</span>
                <span className="text-sm font-medium text-luxury-gray uppercase tracking-wide">{stat.label}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};