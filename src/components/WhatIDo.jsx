import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { sectionVariants } from './utils/animations';

import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiFirebase, 
  SiVite 
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const skillsData = [
  { name: 'React', percentage: 70 },
  { name: 'JavaScript', percentage: 75 },
  { name: 'Node.js', percentage: 80 },
  { name: 'Tailwind CSS', percentage: 85 },
  { name: 'MongoDB', percentage: 70 },
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

// Tech stack with icons and tech names
const techStack = [
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500 text-base" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-500 text-base" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400 text-base" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400 text-base" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-base" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500 text-base" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300 text-base" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-emerald-500 text-base" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500 text-base" /> },
  { name: 'Git', icon: <SiGit className="text-orange-600 text-base" /> },
  { name: 'GitHub', icon: <SiGithub className="text-white text-base" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400 text-base" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400 text-base" /> },
  { name: 'VS Code', icon: <FaCode className="text-blue-400 text-base" /> },
];

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
      className="py-20 border-white/20 border-t"
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
          <h3 className="pl-4 border-accent-pink border-l-4 font-bold text-white text-2xl">Technical Skills</h3>
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-semibold text-white text-sm">{skill.name}</span>
                  <span className="opacity-0 font-mono font-bold text-xs text-accent-pink skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r to-primary rounded-full w-0 h-full from-accent-pink skill-bar"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div id="services" className="space-y-6">
          <h3 className="mb-8 pl-4 border-secondary border-l-4 font-bold text-white text-2xl">Services</h3>
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

      {/* Tech Stack Tags with Icons */}
      <div className="flex flex-wrap justify-center gap-3 mt-20">
        {techStack.map((tech, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 border border-white/20 rounded-full font-bold text-white text-xs transition-all duration-300 cursor-pointer"
          >
            {tech.icon}
            <span>{tech.name}</span>
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default WhatIDo;