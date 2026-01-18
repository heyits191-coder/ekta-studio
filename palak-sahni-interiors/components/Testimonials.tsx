import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Working with Palak Sahni Interiors felt effortless. Every detail was considered, every promise delivered. The space truly feels like us.",
    author: "R. Malhotra",
    location: "New Delhi"
  },
  {
    text: "A masterclass in understated luxury. Palak understood our vision immediately and elevated it beyond what we imagined.",
    author: "S. Gupta",
    location: "Gurgaon"
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-luxury-offwhite px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold text-luxury-gray uppercase tracking-wide mb-12">Client Stories</h2>

        <div className="relative h-64 flex items-center justify-center">
           {testimonials.map((t, idx) => (
             <div 
              key={idx}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
             >
                <h3 className="text-2xl md:text-4xl font-semibold text-luxury-black leading-tight tracking-tight mb-8">
                  "{t.text}"
                </h3>
                <div>
                  <p className="text-base font-medium text-luxury-black">{t.author}</p>
                  <p className="text-sm text-luxury-gray">{t.location}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};