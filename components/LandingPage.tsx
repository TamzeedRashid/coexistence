
import React from 'react';
import { Page } from '../App';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-neutral-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/29/1920/1080" 
            alt="Bangladesh landscape" 
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 serif-font leading-tight">
            Voices of Coexistence
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 font-light italic serif-font max-w-2xl mx-auto leading-relaxed">
            Exploring the soul of a nation through the lived experiences of religious pluralism in Bangladesh.
          </p>
        </div>
      </section>

      {/* Introduction Content */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-lg prose-teal mx-auto">
          <div className="mb-12 border-l-4 border-teal-700 pl-8 py-2">
            <h2 className="text-3xl font-bold mb-6 serif-font">General Introduction</h2>
            <p className="text-lg leading-relaxed mb-6 text-neutral-800">
              Bangladesh is a state that is made of two strings: religion and soil. In its constitution, it incorporates the principle of secularism and equality, but in real life, the social grammar of identity and belonging is more complex and unwritten. When law principles collide with lived reality what occurs? What is the way through the web of religious identity of the people who live in the country which is unifying and divisive in its history?
            </p>
          </div>

          <p className="text-lg leading-relaxed mb-6 text-neutral-700">
            This blog is <strong>Voices of Coexistence</strong>, which explores this complex scenery. We go beyond the abstract discussions of secularism and religiosity and examine the lived, daily experiences of religious coexistence and conflict in Bangladesh today. We will be able to hear the voices that are rarely heard in politics through the synthesis of in-depth personal interviews, academic research, and grounded theory.
          </p>

          <p className="text-lg leading-relaxed mb-12 text-neutral-700">
            The next list explores central themes: the weaponization or weaponry of memory and history; the gender and economic practicalism that silently governs interfaith relationships; the everyday resilience of practical daily life against polarization. We suggest that to comprehend the social cohesion inside Bangladesh we needed to hear not just laws and leaders, but also farmers, archivists, mothers, and workers who are negotiating pluralism at home and in their communities. It is an exploration of the soul of a nation, in the voices that give life to it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              onClick={() => onNavigate(Page.BLOG_ONE)}
              className="group cursor-pointer p-8 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300"
            >
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-4 block">Blog Entry 1</span>
              <h3 className="text-2xl font-bold mb-4 serif-font group-hover:text-teal-800 transition-colors">The Battle for Memory</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                When history becomes a weapon in Bangladesh. A deep look at the struggle for narrative and the Living Archive of Lived Faith.
              </p>
              <span className="text-sm font-medium text-teal-700 group-hover:underline flex items-center">
                Read entry <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </div>

            <div 
              onClick={() => onNavigate(Page.BLOG_TWO)}
              className="group cursor-pointer p-8 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300"
            >
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-4 block">Blog Entry 2</span>
              <h3 className="text-2xl font-bold mb-4 serif-font group-hover:text-teal-800 transition-colors">The Invisible Architects</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                How gender and economy quietly shape coexistence. Exploring women as guardians and the power of the market place.
              </p>
              <span className="text-sm font-medium text-teal-700 group-hover:underline flex items-center">
                Read entry <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
