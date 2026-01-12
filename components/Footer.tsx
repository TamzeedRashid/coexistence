
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 px-6 border-t border-neutral-800 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-bold serif-font mb-2">Voices of Coexistence</h2>
          <p className="text-sm max-w-xs">
            Synthesizing in-depth personal interviews, academic research, and grounded theory to explore religious pluralism.
          </p>
        </div>
        <div className="flex space-x-6 text-sm">
          <span className="hover:text-white transition-colors cursor-default">Archive</span>
          <span className="hover:text-white transition-colors cursor-default">Contact</span>
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-600">
          © {new Date().getFullYear()} Research Publication
        </div>
      </div>
    </footer>
  );
};
