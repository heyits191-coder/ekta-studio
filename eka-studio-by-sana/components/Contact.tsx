import React from 'react';
import Section from './Section';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-stone-950 text-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Section>
            <span className="text-stone-500 font-medium tracking-widest uppercase text-[10px] mb-8 block">Get in Touch</span>
            <h2 className="font-display font-light text-5xl md:text-7xl lg:text-8xl mb-12 tracking-tighter">
              Let's create <br/> something <span className="italic font-serif text-stone-400">timeless</span>.
            </h2>
          </Section>
          
          <Section delay={200}>
            <p className="text-stone-400 text-lg font-light max-w-xl mx-auto mb-20 leading-relaxed">
              We are currently accepting bookings for the upcoming season. 
              Limited project slots available for 2024-25.
            </p>
          </Section>

          <Section delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:consult@ekastudio.in" 
                className="w-full sm:w-auto px-12 py-5 bg-stone-50 text-stone-950 text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 rounded-sm"
              >
                Book Consultation
              </a>
              <a 
                href="#" 
                className="w-full sm:w-auto px-12 py-5 border border-stone-800 text-stone-50 text-xs font-bold tracking-widest uppercase hover:bg-stone-900 transition-colors duration-300 flex items-center justify-center gap-3 rounded-sm"
              >
                Instagram
                <ArrowRight size={16} />
              </a>
            </div>
          </Section>
        </div>
      </div>
    </section>
  );
};

export default Contact;