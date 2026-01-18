import React from 'react';
import Section from './Section';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2 relative order-2 md:order-1">
            <Section>
               <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-0 overflow-hidden bg-stone-200">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                    alt="Sana - Founder of EKA Studio" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-luxury"
                  />
                  {/* Quote Overlay */}
                  <div className="absolute -bottom-10 -right-10 bg-white p-10 max-w-xs shadow-2xl hidden lg:block z-10">
                      <div className="w-8 h-px bg-stone-900 mb-4"></div>
                      <p className="font-serif italic text-xl text-stone-800 leading-relaxed">"Good design isn’t loud, it speaks quietly and lasts long."</p>
                  </div>
               </div>
            </Section>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2 md:pl-20">
            <Section delay={200}>
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-8 h-px bg-stone-400"></div>
                 <span className="text-stone-500 font-medium tracking-widest uppercase text-[10px]">The Founder</span>
              </div>
              <h2 className="font-display font-light text-6xl lg:text-7xl text-stone-900 mb-3 tracking-tighter">Sana</h2>
              <p className="text-lg text-stone-400 font-light mb-10 tracking-widest uppercase text-xs">Principal Designer & Educator</p>
            </Section>

            <Section delay={400}>
              <div className="space-y-8 text-stone-600 font-light text-lg leading-relaxed">
                <p>
                  With a background deeply rooted in architectural precision and a love for organic textures, 
                  Sana established EKA Studio to bridge the gap between stark modernism and warm liveability.
                </p>
                <p>
                  Apart from designing homes for Delhi's elite, Sana is a dedicated design educator, mentoring 
                  the next generation of interior designers. This academic approach ensures that every project 
                  at EKA is technically sound, not just visually pleasing.
                </p>
              </div>
            </Section>

            <Section delay={600}>
               <div className="mt-16 opacity-70">
                  <span className="font-serif text-4xl italic text-stone-900">Sana.</span>
               </div>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;