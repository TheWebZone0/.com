import React from 'react';

const skills = [
  { name: 'HTML5 / CSS3', level: 95 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'React / Next.js', level: 88 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js / Express', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Firebase', level: 75 },
  { name: 'UI / UX Design', level: 85 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Tech Icons Row */}
        <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-8">Preferred Tools</h3>
            <div className="flex flex-wrap justify-center gap-6 opacity-70">
                {/* Visual placeholders for logos - using text for simplicity/reliability without external assets */}
                {['VS Code', 'Git', 'Figma', 'Postman', 'Webpack', 'Vercel'].map(tool => (
                    <span key={tool} className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 text-sm font-medium">
                        {tool}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;