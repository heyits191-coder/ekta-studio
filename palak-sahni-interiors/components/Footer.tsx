import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-gray-200 pt-20 pb-10 text-[12px] md:text-[13px] leading-relaxed">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
             <h3 className="font-semibold text-luxury-black mb-4 text-sm">Palak Sahni Interiors</h3>
             <div className="text-luxury-charcoal space-y-1">
                <p>Architecture & Design Studio</p>
                <p>New Delhi, India</p>
                <p className="mt-4 text-luxury-gray">Designed for living.</p>
             </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-luxury-black mb-3">Explore</h4>
            <ul className="space-y-2.5 text-luxury-charcoal">
              <li><a href="#projects" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Selected Works</a></li>
              <li><a href="#services" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Expertise</a></li>
              <li><a href="#process" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Process</a></li>
              <li><a href="#studio" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">The Studio</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-luxury-black mb-3">Connect</h4>
            <ul className="space-y-2.5 text-luxury-charcoal">
              <li><a href="#contact" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Contact Us</a></li>
              <li><a href="#" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Book Consultation</a></li>
              <li><a href="#" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Careers</a></li>
              <li><a href="#" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Press & Media</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
             <h4 className="font-semibold text-luxury-black mb-3">Follow</h4>
             <ul className="space-y-2.5 text-luxury-charcoal">
               <li><a href="#" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Instagram</a></li>
               <li><a href="#" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Pinterest</a></li>
               <li><a href="#" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">LinkedIn</a></li>
             </ul>
          </div>
          
           {/* Empty Col for spacing on larger screens or extra info */}
           <div className="hidden lg:block"></div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-luxury-gray">
          
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
             <span>Copyright © 2026 Palak Sahni Interiors. All rights reserved.</span>
          </div>

          <div className="flex gap-6">
             <a href="#" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Privacy Policy</a>
             <a href="#" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Terms of Use</a>
             <a href="#" className="hover:text-luxury-black hover:underline decoration-1 underline-offset-2">Site Map</a>
          </div>

        </div>
        
        <div className="mt-4 text-[10px] text-gray-400">
           <p>Images used for demonstration purposes. Palak Sahni Interiors is a fictional luxury brand demo.</p>
        </div>

      </div>
    </footer>
  );
};