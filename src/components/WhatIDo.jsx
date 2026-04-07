import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { sectionVariants } from './utils/animations';

const skillsData = [
  { name: 'React', percentage: 70 },
  { name: 'JavaScript', percentage: 75 },
  { name: 'Node.js', percentage: 60 },
  { name: 'Tailwind CSS', percentage: 65 },
  { name: 'MongoDB', percentage: 50 },
];

const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Building responsive web applications and learning best practices in React and JavaScript.',
  },
  {
    number: '02',
    title: 'MERN Stack Projects',
    description: 'Creating full-stack applications using MongoDB, Express.js, React, and Node.js.',
  },
  {
    number: '03',
    title: 'Learning & Experimenting',
    description: 'Continuously improving my skills by experimenting with new frameworks.',
  },
];

const techStack = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git'];

const WhatIDo = () => {
  const ref = useRef(null);
  const skillsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView && skillsRef.current) {
      const skillBars = skillsRef.current.querySelectorAll('.skill-bar');
      const skillPercentages = skillsRef.current.querySelectorAll('.skill-percentage');

      gsap.set(skillBars, { width: 0 });
      gsap.set(skillPercentages, { opacity: 0 });

      gsap.to(skillBars, {
        width: (index) => `${skillsData[index].percentage}%`,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.3,
      });

      gsap.to(skillPercentages, { opacity: 1, duration: 0.5, stagger: 0.2, delay: 0.8 });
    }
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      id="skills"
      className="py-20 border-t border-white/20"
    >
      <header className="mb-16 text-center">
        <h2 className="mb-3 font-bold text-sm uppercase tracking-widest text-accent-pink">What I Do</h2>
        <h1 className="font-bold text-white text-4xl md:text-6xl leading-tight">
          Empowering <span className="pr-1 font-display font-semibold gradient-text-pink italic">Creativity</span>
          <br />
          <span className="gradient-text-purple">Through</span>
        </h1>
      </header>

      <div className="gap-16 grid grid-cols-1 lg:grid-cols-2">
        {/* Skill Bars */}
        <div ref={skillsRef} className="space-y-8">
          <h3 className="pl-4 border-l-4 border-accent-pink font-bold text-white text-2xl">Technical Skills</h3>
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-semibold text-white text-sm">{skill.name}</span>
                  <span className="skill-percentage opacity-0 font-mono font-bold text-xs text-accent-pink">{skill.percentage}%</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-full h-2 overflow-hidden">
                  <div className="skill-bar bg-gradient-to-r from-accent-pink to-primary rounded-full w-0 h-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div id="services" className="space-y-6">
          <h3 className="mb-8 pl-4 border-l-4 border-secondary font-bold text-white text-2xl">Services</h3>
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 shadow-sm backdrop-blur-md p-6 border border-white/20 rounded-2xl cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="opacity-40 font-black text-4xl text-accent-pink">{service.number}</span>
                <div>
                  <h4 className="mb-2 font-bold text-white text-xl">{service.title}</h4>
                  <p className="text-white/70 text-sm">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-20">
        {techStack.map((tech, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            className="bg-white/10 backdrop-blur-sm px-5 py-2.5 border border-white/20 rounded-full font-bold text-white text-xs cursor-pointer transition-all duration-300"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default WhatIDo;
