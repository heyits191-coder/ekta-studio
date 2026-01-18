import React from 'react';
import Section from './Section';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" /> 
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10" />
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-90 scale-105 animate-[scaleReveal_10s_linear_infinite_alternate]"
        >
          {/* Using a high-quality Pexels video of a luxury beige interior */}
          <source src="https://videos.pexels.com/video-files/7578544/7578544-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2600" 
            alt="Luxury Interior Fallback" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <Section delay={100}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-8 justify-center md:justify-start">
              <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-white/80 font-sans text-[10px] tracking-widest uppercase backdrop-blur-sm">
                Delhi-NCR • Established 2018
              </span>
            </div>
          </Section>
          
          <Section delay={300}>
            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-9xl text-white leading-[0.9] tracking-tighter mb-8 mix-blend-overlay opacity-90">
              Timeless <br />
              <span className="italic font-serif font-extralight opacity-80">Luxury</span> Living.
            </h1>
          </Section>

          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-12 mt-12">
            <Section delay={500} className="max-w-md text-center md:text-left">
              <p className="font-sans text-white/80 text-lg md:text-xl font-light leading-relaxed text-balance">
                EKA Studio by Sana creates refined, functional interiors. 
                Spaces that speak quietly but resonate deeply.
              </p>
            </Section>

            <Section delay={700}>
               <div className="flex gap-6">
                 <a 
                  href="#projects" 
                  className="px-8 py-4 bg-white text-stone-900 text-xs font-medium tracking-widest uppercase hover:bg-stone-200 transition-colors duration-500 rounded-sm"
                >
                  View Works
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-4 border border-white/30 text-white text-xs font-medium tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all duration-500 rounded-sm backdrop-blur-sm"
                >
                  Consult
                </a>
               </div>
            </Section>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
         <div className="animate-bounce duration-[3000ms] p-4 border rounded-full border-white/10 backdrop-blur-md">
            <ArrowDown className="text-white w-4 h-4 opacity-70" />
         </div>
      </div>
    </section>
  );
};

export default Hero;