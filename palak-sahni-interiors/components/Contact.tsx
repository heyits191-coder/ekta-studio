import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-luxury-offwhite px-6 md:px-12">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-luxury-black tracking-tight mb-4">Contact Us.</h2>
          <p className="text-luxury-gray">New Delhi, India</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-luxury-black focus:outline-none focus:border-luxury-gold transition-colors"
            />
             <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-luxury-black focus:outline-none focus:border-luxury-gold transition-colors"
            />
          </div>
          <textarea 
            rows={4}
            placeholder="Tell us about your project" 
            className="w-full bg-white border border-gray-200 rounded-2xl p-4 text-luxury-black focus:outline-none focus:border-luxury-gold transition-colors resize-none"
          />
          <div className="text-center">
            <button type="submit" className="bg-luxury-gold text-white px-10 py-4 rounded-full font-medium hover:bg-yellow-600 transition-colors">
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};