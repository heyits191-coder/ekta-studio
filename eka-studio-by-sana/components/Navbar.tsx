import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Studio', href: '#about' },
    { name: 'Founder', href: '#founder' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury ${
          isScrolled 
            ? 'bg-stone-50/80 backdrop-blur-xl py-4 border-b border-stone-200/50 text-stone-900 shadow-sm' 
            : 'bg-transparent py-8 text-white'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="relative z-50 group">
            <span className={`font-display font-bold text-2xl tracking-tighter transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-white'}`}>
              EKA
            </span>
            <span className={`font-sans font-light text-sm tracking-widest ml-1 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-stone-500' : 'text-white/70'}`}>
              STUDIO
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-100 opacity-70 ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-2.5 text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-500 border rounded-sm ${
                isScrolled 
                  ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-stone-900'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 relative transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-stone-50 z-40 transition-all duration-1000 ease-luxury ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-display font-light text-stone-900 tracking-tight"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="w-12 h-px bg-stone-200 my-4"></div>
          <a
            href="#contact"
            className="text-xs font-medium tracking-widest uppercase text-stone-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Start Project
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;