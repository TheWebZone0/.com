import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-2 text-lg font-semibold text-white">Adham Ahmed</p>
        <p className="text-sm opacity-70">
          &copy; {new Date().getFullYear()} All rights reserved. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;