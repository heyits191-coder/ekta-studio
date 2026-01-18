import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Studio', href: '#studio' },
    { name: 'Services', href: '#services' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  // Dynamic text color based on scroll state
  const textColorClass = scrolled || mobileMenuOpen ? 'text-luxury-black' : 'text-white/90 hover:text-white';
  const logoColorClass = scrolled || mobileMenuOpen ? 'text-luxury-black' : 'text-white';

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out ${
          scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 h-10 md:h-12 flex justify-between items-center">
          <a href="#" className={`text-sm font-bold tracking-tight z-50 transition-colors duration-300 ${logoColorClass}`}>
            PALAK SAHNI
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[12px] font-medium tracking-wide transition-colors duration-300 ${textColorClass}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden z-50 transition-colors duration-300 ${logoColorClass}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-30 flex flex-col pt-24 items-center transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 w-full px-8 text-center">
           {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-semibold text-luxury-black pb-4 hover:text-luxury-gold transition-colors"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
        </div>
      </div>
    </>
  );
};