import React from 'react';
import { Layout, Server, Globe, PenTool, Database } from 'lucide-react';
import { Service } from '../types';

const servicesData: Service[] = [
  {
    id: 1,
    title: 'Front-End Development',
    description: 'Building responsive, interactive, and pixel-perfect user interfaces using React, Tailwind, and modern JS.',
    icon: Layout,
  },
  {
    id: 2,
    title: 'Back-End Development',
    description: 'Creating robust server-side logic, API integrations, and database management for scalable applications.',
    icon: Server,
  },
  {
    id: 3,
    title: 'Full Website Creation',
    description: 'End-to-end web solutions from concept to deployment, ensuring a seamless online presence.',
    icon: Globe,
  },
  {
    id: 4,
    title: 'UI/UX Implementation',
    description: 'Translating designs into functional code with a focus on animation, accessibility, and user experience.',
    icon: PenTool,
  },
  {
    id: 5,
    title: 'System Development',
    description: 'Architecting complex management systems and dashboards tailored to business needs.',
    icon: Database,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">My Services</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            High-quality development solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-800 group"
            >
              <div className="w-14 h-14 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="text-primary group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;