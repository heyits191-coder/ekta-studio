import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustAuthority } from './components/TrustAuthority';
import { Founder } from './components/Founder';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="antialiased text-gray-900 selection:bg-luxury-gold selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <TrustAuthority />
        <Founder />
        <Portfolio />
        <Services />
        <Process />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;