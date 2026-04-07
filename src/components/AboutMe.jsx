import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { sectionVariants } from './utils/animations';
import FloatingImage from './shared/FloatingImage';
import ImageReveal from './shared/ImageReveal';
import profile2 from '../assets/profile2.png';

const traits = [
  { icon: 'history_edu', text: 'My Journey' },
  { icon: 'favorite', text: 'Love UI/UX' },
  { icon: 'sports_cricket', text: 'Cricket Fan' },
  { icon: 'explore', text: 'Traveling' },
];

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      id="about"
      className="items-center gap-16 grid grid-cols-1 lg:grid-cols-2 py-20"
    >
      {/* Left: Image */}
      <div className="group relative order-1 mx-auto lg:mx-0 max-w-md">
        <div className="hidden md:block -top-4 right-4 bottom-4 -left-4 z-0 absolute border-2 border-primary/30 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500 pointer-events-none"></div>
        <FloatingImage
          intensity={0.8}
          className="z-10 relative bg-white/10 shadow-2xl backdrop-blur-md border border-white/20 rounded-2xl aspect-[3/4] overflow-hidden"
        >
          <ImageReveal delay={0.2} className="w-full h-full">
            <img
              alt="Portrait"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={profile2}
            />
          </ImageReveal>
          <div className="right-6 bottom-6 absolute bg-white/20 shadow-xl backdrop-blur-md p-5 border border-white/30 rounded-xl">
            <span className="font-bold text-4xl text-accent-pink">8+</span>
            <p className="mt-1 font-medium text-white/80 text-sm leading-tight">Months Learning Experience</p>
          </div>
        </FloatingImage>
      </div>

      {/* Right: Content */}
      <div className="space-y-8 order-2">
        <div className="space-y-4">
          <span className="flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-accent-pink">
            <span className="w-8 h-[2px] bg-accent-pink"></span> About Me
          </span>
          <h2 className="font-bold text-white text-4xl lg:text-6xl leading-tight">
            Inspiring The <br />
            <span className="pr-1 font-display font-semibold gradient-text-pink italic">Marvelous</span>{' '}
            <span className="gradient-text-purple">Project</span>
          </h2>
          <div className="space-y-4 text-white/70 text-lg leading-relaxed">
            <p>
              I'm <span className="font-semibold text-white">Apu Nath</span>. My programming journey began with a simple curiosity about how websites work. What started as exploring HTML has now evolved into a full-blown passion for the{' '}
              <span className="text-primary">MERN Stack</span>, where I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p>
              I truly enjoy crafting <span className="font-medium text-white">interactive user interfaces</span> and building robust backends. There's a certain thrill in optimizing code and seeing a project come to life.
            </p>
            <p>
              Beyond the world of syntax and servers, I'm an enthusiast of <span className="text-secondary">Cricket</span> and I love <span className="text-secondary">Traveling</span> to new places.
            </p>
          </div>
        </div>

        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          {traits.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 border border-white/20 rounded-xl cursor-pointer"
            >
              <span className="text-accent-pink material-icons-round">{item.icon}</span>
              <span className="font-semibold text-white">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
