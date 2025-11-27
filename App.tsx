import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { Planner } from './components/Planner';
import { Footer } from './components/Footer';
import { Collections } from './components/Collections';
import { Inspiration } from './components/Inspiration';

function App() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden scroll-smooth">
      <Navigation />
      
      <main>
        <Hero />
        <Inspiration />
        <Collections />
        <Destinations />
        <Planner />
      </main>

      <Footer />
    </div>
  );
}

export default App;