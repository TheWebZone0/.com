import React from 'react';
import { User, Award, Globe, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 rounded-2xl"></div>
            <img 
              src="https://picsum.photos/600/800?random=1" 
              alt="Working" 
              className="relative rounded-2xl shadow-xl w-full object-cover h-[500px]" 
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Professional Web Developer & UI/UX Enthusiast
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              Hello! I'm <span className="font-semibold text-primary">Adham Ahmed</span>, a passionate web developer dedicated to building digital solutions that not only look good but perform flawlessly. 
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              With deep expertise in modern JavaScript frameworks and backend architectures, I help businesses and individuals translate their vision into reality. Whether it's a sleek landing page or a complex web system, I bring precision and creativity to every line of code.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-lg">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Clean Code</h4>
                  <p className="text-xs text-slate-500">Maintainable & Scalable</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Modern Tech</h4>
                  <p className="text-xs text-slate-500">Latest Frameworks</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">User Centric</h4>
                  <p className="text-xs text-slate-500">Best UX Practices</p>
                </div>
              </div>

               <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Quality</h4>
                  <p className="text-xs text-slate-500">High Performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;