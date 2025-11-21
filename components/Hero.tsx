import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary font-semibold text-sm tracking-wide">
              Available for Freelance Projects
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              I am <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Adham Ahmed</span>
              <br />
              <span className="text-slate-600 dark:text-slate-400 text-3xl sm:text-4xl lg:text-6xl">Web Developer.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transforming ideas into powerful, modern, and high-performance web experiences. 
              Specialized in both Front-End elegance and Back-End robustness.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="https://wa.me/201091569465"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                Hire Me on WhatsApp
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Visual Element (Abstract or Photo) */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative hidden md:block">
            <div className="relative w-full aspect-square rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-slate-800 dark:to-slate-900 p-8 animate-pulse-slow">
               {/* Abstract decorative code representation */}
               <div className="w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl relative">
                  <img 
                    src="https://picsum.photos/800/800?grayscale&blur=2" 
                    alt="Adham Ahmed Abstract Workspace" 
                    className="object-cover w-full h-full opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end justify-center pb-12">
                     <span className="text-white font-bold text-2xl tracking-widest">CREATIVE</span>
                  </div>
               </div>
               
               {/* Floating Badges */}
               <div className="absolute top-10 -left-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-[bounce_3s_infinite]">
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 <span className="font-bold text-sm">Online</span>
               </div>
               <div className="absolute bottom-10 -right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-[bounce_4s_infinite]">
                 <span className="font-bold text-sm">5+ Years Exp.</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;