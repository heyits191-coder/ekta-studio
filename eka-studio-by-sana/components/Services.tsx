import React from 'react';
import Section from './Section';
import { ArrowUpRight } from 'lucide-react';

interface ServiceItemProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ number, title, description, delay }) => (
  <Section delay={delay} className="group border-t border-stone-200 hover:border-stone-400 transition-colors duration-700">
    <div className="py-12 md:py-20 flex flex-col md:flex-row md:items-baseline justify-between gap-8 cursor-pointer">
      <div className="md:w-1/6">
        <span className="text-stone-400 text-xs font-medium tracking-widest group-hover:text-stone-900 transition-colors duration-500">
          {number}
        </span>
      </div>
      
      <div className="md:w-2/5">
        <h3 className="font-display font-light text-3xl md:text-4xl text-stone-900 mb-4 group-hover:translate-x-2 transition-transform duration-700 ease-luxury tracking-tight">
          {title}
        </h3>
      </div>

      <div className="md:w-1/3">
        <p className="text-stone-500 font-light leading-relaxed text-base group-hover:text-stone-700 transition-colors duration-500">
          {description}
        </p>
      </div>

      <div className="md:w-auto flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
         <ArrowUpRight className="w-6 h-6 text-stone-900 stroke-1" />
      </div>
    </div>
  </Section>
);

const Services: React.FC = () => {
  const services = [
    {
      number: "(01)",
      title: "Luxury Residential",
      description: "End-to-end interior design for villas, luxury apartments, and builder floors. Tailored specifically to your lifestyle and rituals."
    },
    {
      number: "(02)",
      title: "Architectural Planning",
      description: "Structural changes, layout optimization, and spatial planning that harmonizes form with function before decoration begins."
    },
    {
      number: "(03)",
      title: "Turnkey Execution",
      description: "Stress-free implementation. We handle everything from material procurement to the final styling, ensuring pristine quality."
    },
    {
      number: "(04)",
      title: "Design Consultation",
      description: "Expert guidance for those who need professional direction on specific areas, materials, or layouts without full execution."
    }
  ];

  return (
    <section id="services" className="py-32 bg-stone-50">
      <div className="container mx-auto px-6">
        <Section className="mb-24 flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stone-400"></div>
              <span className="text-stone-500 font-medium tracking-widest uppercase text-[10px]">Our Expertise</span>
            </div>
            <h2 className="font-display font-light text-4xl md:text-6xl text-stone-900 leading-[1.05] tracking-tight">
              Comprehensive design solutions <br />
              <span className="text-stone-400">crafted for modern living.</span>
            </h2>
          </div>
        </Section>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceItem 
              key={index} 
              {...service} 
              delay={index * 100} 
            />
          ))}
          <div className="border-t border-stone-200"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;