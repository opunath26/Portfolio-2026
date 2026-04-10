import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { sectionVariants } from './utils/animations';
import MagneticButton from './shared/MagneticButton';
import FloatingImage from './shared/FloatingImage';
import ImageReveal from './shared/ImageReveal';
import profile from '../assets/profile.jpeg';

const socialLinks = [
  { icon: <FaGithub />, link: 'https://github.com/opunath26', label: 'GitHub' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/apu-nath-76a490392/', label: 'LinkedIn' },
  { icon: <FaFacebook />, link: 'https://www.facebook.com/oputhecoder26', label: 'Facebook' },
];

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      id="home"
      className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2 py-16 lg:py-24"
    >
      {/* Left: Text Content */}
      <div className="space-y-8 order-2 lg:order-1">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1.5 border border-white/20 rounded-full font-bold text-primary text-xs uppercase tracking-wider">
          Available for hire
        </div>

        <h1 className="font-extrabold text-white text-5xl lg:text-7xl leading-[1.1] tracking-tight">
          I'm <span className="text-primary">Apu Nath</span>
        </h1>

        <h3 className="font-bold text-white/90 text-3xl lg:text-4xl leading-tight">
          Frontend-Based MERN Stack Developer
        </h3>

        <p className="max-w-lg text-white/70 text-xl leading-relaxed">
          Crafting digital experiences that <span className="font-bold text-primary">matter</span>. Specialized in MERN Stack Development.
        </p>

        <div className="flex flex-wrap gap-4">
          {/* ১. Let's Talk link connect kora holo */}
          <a href="#contact" className="inline-block">
            <MagneticButton
              isSpecial={true}
              className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 shadow-glow backdrop-blur-sm px-8 py-4 border border-primary/30 rounded-2xl font-bold text-white hover:scale-[1.02] transition-all duration-300 transform"
            >
              <span className="material-symbols-outlined">chat_bubble</span> Let's Talk
            </MagneticButton>
          </a>

          {/* ২. Download CV ke View CV kora holo ebong target blank rakha holo */}
          <a
            href="https://docs.google.com/document/d/1H3McEDcAeTZ1-59SYwSl9UDWPkrTm2fqch3jT9D8EvY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 border border-white/20 rounded-2xl font-bold text-white transition-all duration-300"
          >
            <span className="material-symbols-outlined">visibility</span> View CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 pt-2">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-primary/20 p-3 border border-white/10 rounded-full text-white hover:text-primary transition-all duration-300"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="gap-8 grid grid-cols-3 pt-8 border-white/20 border-t">
          <div><h3 className="font-extrabold text-3xl text-accent-pink">1+</h3><p className="text-white/60 text-sm">Years of Practice</p></div>
          <div><h3 className="font-extrabold text-3xl text-accent-pink">10+</h3><p className="text-white/60 text-sm">Practice Projects</p></div>
          <div><h3 className="font-extrabold text-3xl text-accent-pink">510+</h3><p className="text-white/60 text-sm">Hours of Coding</p></div>
        </div>
      </div>

      {/* Right: Profile Photo */}
      <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
        <div className="relative w-72 lg:w-[450px] h-72 lg:h-[450px]">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
          <FloatingImage className="relative bg-white/10 shadow-2xl backdrop-blur-md p-2 border border-white/20 rounded-full w-full h-full overflow-hidden">
            <ImageReveal className="w-full h-full">
              <img src={profile} className="rounded-full w-full h-full object-cover" alt="Apu Nath" />
            </ImageReveal>
          </FloatingImage>
          <div className="right-10 bottom-10 absolute bg-green-500/80 backdrop-blur-sm border-4 border-white/30 rounded-full w-8 h-8 animate-pulse"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;