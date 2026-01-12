
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { BlogEntryOne } from './components/BlogEntryOne';
import { BlogEntryTwo } from './components/BlogEntryTwo';
import { Footer } from './components/Footer';

export enum Page {
  LANDING = 'landing',
  BLOG_ONE = 'blog-one',
  BLOG_TWO = 'blog-two'
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LANDING);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case Page.LANDING:
        return <LandingPage onNavigate={setCurrentPage} />;
      case Page.BLOG_ONE:
        return <BlogEntryOne />;
      case Page.BLOG_TWO:
        return <BlogEntryTwo />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
