import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    imageUrl: 'https://picsum.photos/600/400?random=10',
  },
  {
    id: 2,
    title: 'Corporate Landing Page',
    description: 'A modern, high-conversion landing page for a corporate client featuring smooth scroll animations.',
    tags: ['Next.js', 'Framer Motion', 'CSS Modules'],
    imageUrl: 'https://picsum.photos/600/400?random=11',
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'Collaborative task manager enabling teams to organize workflows efficiently.',
    tags: ['Vue.js', 'Firebase', 'Pinia'],
    imageUrl: 'https://picsum.photos/600/400?random=12',
  },
  {
    id: 4,
    title: 'Real Estate Platform',
    description: 'Property listing platform with advanced filtering and map integration.',
    tags: ['React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://picsum.photos/600/400?random=13',
  },
  {
    id: 5,
    title: 'Social Media App',
    description: 'Interactive social feed with instant messaging and media sharing capabilities.',
    tags: ['React Native', 'GraphQL', 'AWS'],
    imageUrl: 'https://picsum.photos/600/400?random=14',
  },
  {
    id: 6,
    title: 'Portfolio V1',
    description: 'My previous portfolio website showcasing early web development work.',
    tags: ['HTML', 'SASS', 'JavaScript'],
    imageUrl: 'https://picsum.photos/600/400?random=15',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            A selection of my recent work displaying technical depth and creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="group relative bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-2 bg-white rounded-full text-slate-900 hover:bg-primary hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </button>
                  <button className="p-2 bg-white rounded-full text-slate-900 hover:bg-primary hover:text-white transition-colors">
                    <Github size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;