import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './shared/MagneticButton';

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="top-0 z-40 sticky bg-white/10 shadow-lg backdrop-blur-md border-b border-white/20 w-full"
    >
      <div className="flex justify-between items-center mx-auto px-6 max-w-7xl h-20">
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center bg-primary/20 shadow-glow backdrop-blur-sm border border-primary/30 rounded-xl w-10 h-10 text-white">
            <span className="material-symbols-outlined">grid_view</span>
          </div>
          <span className="font-bold text-white text-xl tracking-tight">Web Artist</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['home', 'about', 'skills', 'services'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="font-medium text-white/80 hover:text-white capitalize transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <MagneticButton className="hidden md:block bg-primary/20 hover:bg-primary/30 backdrop-blur-sm px-6 py-2.5 border border-primary/30 rounded-xl font-bold text-white text-sm transition-all duration-300">
          Hire Me
        </MagneticButton>
      </div>
    </motion.header>
  );
};

export default Navbar;
