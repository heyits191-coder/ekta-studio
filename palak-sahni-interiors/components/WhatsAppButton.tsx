import React from 'react';

export const WhatsAppButton: React.FC = () => {
  // Using a placeholder number; in production, this would be the studio's actual business number.
  const phoneNumber = "919999999999"; 
  const message = "Hello, I am interested in discussing a project with Palak Sahni Interiors.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative flex items-center gap-3">
        
        {/* Hover Label (Desktop) */}
        <span className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl shadow-lg shadow-black/5 text-xs font-medium text-luxury-black opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap hidden md:block">
           Chat with us
        </span>

        {/* Button Container */}
        <div className="relative">
            {/* Subtle Pulse Effect */}
            <span className="absolute -inset-2 rounded-full bg-luxury-gold/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></span>
            
            {/* Main Icon Circle */}
            <div className="relative bg-luxury-black text-white p-4 rounded-full shadow-2xl hover:shadow-black/20 hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/10">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="white"
                className="w-6 h-6"
            >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.03-.967-.272-.297-.471-.446-.644-.446-.174 0-.446.002-.694.002-.248 0-.644.093-.99.471-.347.377-1.339 1.307-1.339 3.186 0 1.88 1.363 3.692 1.553 3.945.19.254 2.684 4.103 6.504 5.753 2.721 1.176 3.273.94 3.868.882.595-.058 1.908-.78 2.18-1.533.272-.754.272-1.401.19-1.533-.082-.132-.297-.198-.595-.347z"/>
            </svg>
            </div>
        </div>
      </div>
    </a>
  );
};