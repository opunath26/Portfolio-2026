import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

// Shared utilities
import CustomCursor from './components/shared/CustomCursor';
import FloatingGlassShapes from './components/shared/FloatingGlassShapes';
import MagneticButton from './components/shared/MagneticButton';

// Page sections
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import LearningJourney from './components/LearningJourney';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="relative bg-gradient-to-br from-purple-900 dark:from-purple-950 via-pink-900 dark:via-pink-950 to-indigo-900 dark:to-indigo-950 min-h-screen overflow-x-hidden font-sans text-slate-900 dark:text-gray-200 antialiased transition-colors duration-300">

        {/* Background decorations */}
        <FloatingGlassShapes />

        {/* Custom cursor (desktop only) */}
        <CustomCursor />

        {/* Sticky glass navbar */}
        <Navbar />

        {/* Page sections */}
        <main className="z-10 relative mx-auto px-6 w-full max-w-7xl">
          <HeroSection />
          <AboutMe />
          <LearningJourney />
          <WhatIDo />
          <Projects />
          <ContactSection />
        </main>

        <Footer />

        {/* Dark mode toggle */}
        <MagneticButton
          className="right-6 bottom-6 z-50 fixed bg-white/10 hover:bg-white/20 shadow-lg backdrop-blur-md p-4 border border-white/20 rounded-full text-white transition-all duration-300"
          onClick={() => setIsDark(!isDark)}
        >
          <span className={`${isDark ? 'hidden' : 'block'} material-icons-round`}>dark_mode</span>
          <span className={`${isDark ? 'block' : 'hidden'} material-icons-round`}>light_mode</span>
        </MagneticButton>
      </div>
    </div>
  );
};

export default App;
