import React, { useEffect, useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      
      {/* Animated Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop" 
            alt="Luxury Interior Background" 
            className="w-full h-full object-cover animate-subtle-zoom opacity-80"
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 text-center flex flex-col items-center pt-20">
        
        {/* Badge */}
        <div className={`mb-8 transition-all duration-1000 ease-out delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
           <span className="px-4 py-1.5 rounded-full border border-white/20 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-white/80 bg-white/10 backdrop-blur-md">
             Est. 2014
           </span>
        </div>

        {/* Headline */}
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-white mb-8 leading-[1.0] transition-all duration-1000 ease-out delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Timeless. <br/>
          <span className="text-white/60">By Design.</span>
        </h1>
        
        {/* Subtext */}
        <p className={`text-lg md:text-xl text-white/80 font-light max-w-xl mx-auto mb-12 leading-relaxed tracking-wide transition-all duration-1000 ease-out delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          We craft interiors that breathe. <br/>
          Where silence meets structure, and luxury feels like home.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col md:flex-row gap-5 justify-center items-center mb-16 transition-all duration-1000 ease-out delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#contact" className="bg-white text-luxury-black rounded-full px-10 py-4 text-sm font-medium hover:bg-luxury-offwhite hover:scale-105 transition-all duration-300 shadow-xl shadow-white/5">
            Start Your Project
          </a>
          <a href="#projects" className="group text-white text-sm font-medium flex items-center hover:text-luxury-gold transition-colors px-6 py-4 backdrop-blur-sm bg-white/5 rounded-full border border-white/10 hover:bg-white/10">
            View Gallery <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-70 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <a href="#studio" className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

    </section>
  );
};