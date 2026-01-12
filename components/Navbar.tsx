
import React from 'react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: Page.LANDING, label: 'Home' },
    { id: Page.BLOG_ONE, label: 'Memory & History' },
    { id: Page.BLOG_TWO, label: 'Gender & Economy' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate(Page.LANDING)}
          >
            <span className="text-xl font-bold text-teal-800 tracking-tight serif-font">Voices of Coexistence</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`${
                    currentPage === item.id
                      ? 'text-teal-700 border-b-2 border-teal-700'
                      : 'text-neutral-500 hover:text-neutral-700'
                  } px-1 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          {/* Mobile nav indicator */}
          <div className="md:hidden text-xs text-neutral-400 font-mono">
            {currentPage === Page.LANDING ? 'Index' : currentPage === Page.BLOG_ONE ? 'Part I' : 'Part II'}
          </div>
        </div>
      </div>
      {/* Mobile nav bottom bar for easier access */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 flex justify-around items-center h-14 z-50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full ${
              currentPage === item.id ? 'text-teal-700 bg-teal-50/50' : 'text-neutral-500'
            }`}
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
