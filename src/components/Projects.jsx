import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import skillPathImg from '../assets/project1.png';
import appOrbitImg from '../assets/project2.png';
import warmPawsImg from '../assets/project3.png';

const projectsData = [
  {
    title: 'Pawfect Match',
    category: 'Team Project (Next.js)',
    image: 'https://i.ibb.co.com/7NxrNBND/1.png', 
    link: 'https://pawfect-match-sepia.vercel.app/',
    github: 'https://github.com/Jahid160/Pawfect-Match.git',
    description: 'A comprehensive pet adoption and e-commerce ecosystem. Led a team of six to build this full-stack solution featuring admin dashboards, secure payments, and pet care categories.',
    techStack: [ 'Node.js', 'MongoDB', 'Firebase', 'Stripe', 'Tailwind CSS'],
    challenges: 'Coordinating task allocation for a team of 6 and ensuring consistent UI/UX across complex features like the admin dashboard and notification system.',
    futurePlans: 'Expanding the vet appointment system and integrating an AI-driven pet compatibility quiz.',
  },
  {
    title: 'Idea Arena',
    category: 'Innovative Project Showcase',
    image: 'https://i.ibb.co.com/QFW6rZYm/Idea-arina.png',
    link: 'https://idea-arena-74762.web.app/',
    github: 'https://github.com/opunath26/idea-arena-client.git',
    description: 'A modern centralized hub designed to showcase and manage diverse software applications. Optimized for high performance and seamless user experience.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
    challenges: 'Optimizing the front-end for fast loading times while managing a large database of projects and ensuring real-time search accuracy.',
    futurePlans: 'Implementing a user voting system and an AI-based project categorization tool.',
  },
  {
    title: 'Skill Path',
    category: 'Web Development',
    image: skillPathImg,
    link: 'https://ubiquitous-longma-59b633.netlify.app/',
    github: 'https://github.com/opunath26/skillpath-client.git',
    description: 'Skill Path is an interactive learning platform designed to help students master new skills with ease.',
    techStack: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    challenges: 'Managing complex state for the course progress and ensuring a smooth user experience across all devices was a major challenge.',
    futurePlans: 'Plan to add a community forum and real-time quiz feature to enhance student engagement.',
  },
  {
    title: 'AppOrbit',
    category: 'Web Development',
    image: appOrbitImg,
    link: 'https://apporbit.pages.dev/',
    github: 'https://github.com/opunath26/apporbit-store.git',
    description: 'AppOrbit is a modern marketplace for digital assets, allowing users to browse and buy applications.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    challenges: 'Implementing a secure payment gateway and handling large image uploads efficiently were the key hurdles.',
    futurePlans: 'Integrating AI-driven recommendations based on user search history.',
  },
  {
    title: 'WarmPaws',
    category: 'Web Development',
    image: warmPawsImg,
    link: 'https://green-earth-op.pages.dev/',
    github: 'https://github.com/your-username/warmpaws',
    description: 'A non-profit initiative focused on providing pet care and shelter during harsh winter months.',
    techStack: ['React', 'Tailwind CSS', 'EmailJS'],
    challenges: 'Creating a high-performance donation form that feels intuitive while maintaining a clean look.',
    futurePlans: 'Expanding to a full-scale pet adoption tracking system with local shelter integration.',
  },
];

const ProjectModal = ({ project, onClose }) => (
  <div className="z-[100] fixed inset-0 flex justify-center items-center p-4">
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      className="absolute inset-0 bg-black/80 backdrop-blur-sm"
    />
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 50 }}
      className="relative bg-neutral-900 shadow-2xl border border-white/20 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
    >
      <button onClick={onClose} className="top-5 right-5 absolute bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors">
        <span className="material-icons-round">close</span>
      </button>

      <div className="p-8">
        <img src={project.image} alt={project.title} className="mb-6 border border-white/10 rounded-2xl w-full h-64 object-cover" />
        <h2 className="mb-2 font-bold text-white text-3xl">{project.title}</h2>
        <p className="mb-6 text-white/70 text-lg italic">{project.description}</p>

        <div className="space-y-6">
          <div>
            <h4 className="mb-2 font-bold text-primary text-sm uppercase tracking-wider">Main Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="bg-primary/10 px-3 py-1 border border-primary/20 rounded-lg text-primary text-xs">{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-bold text-secondary text-sm uppercase tracking-wider">Challenges Faced</h4>
            <p className="text-white/60 text-sm leading-relaxed">{project.challenges}</p>
          </div>
          <div>
            <h4 className="mb-2 font-bold text-sm uppercase tracking-wider text-accent-pink">Future Plans</h4>
            <p className="text-white/60 text-sm leading-relaxed">{project.futurePlans}</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4 border-white/10 border-t">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary px-6 py-3 rounded-xl font-bold text-white active:scale-95 transition-transform">
              Live Project <span className="material-icons-round">open_in_new</span>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 border border-white/20 rounded-xl font-bold text-white transition-all">
              GitHub <span className="material-icons-round">code</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
      id="projects"
      className="relative py-20 overflow-hidden"
    >
      <div className="top-0 left-1/2 -z-10 absolute bg-primary/20 blur-[120px] rounded-full w-[600px] h-[400px] -translate-x-1/2 pointer-events-none"></div>

      <header className="z-10 relative mb-16 text-center">
        <p className="mb-4 font-bold text-primary text-sm uppercase tracking-[0.2em]">Portfolio</p>
        <h1 className="font-extrabold text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
          Transforming{' '}
          <span className="bg-clip-text bg-gradient-to-r from-primary to-secondary pr-1 text-transparent italic">Ideas</span>{' '}
          Into Experiences
        </h1>
      </header>

      <div className="z-10 relative gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <motion.article
            key={index}
            whileHover={{ y: -10 }}
            className="group flex flex-col bg-white/10 shadow-xl backdrop-blur-md border border-white/20 rounded-3xl h-full overflow-hidden"
          >
            <div className="relative border-white/10 border-b h-64 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex flex-col flex-1 p-6">
              <span className="block mb-2 font-bold text-primary text-xs uppercase tracking-widest">{project.category}</span>
              <h2 className="mb-3 font-bold text-white text-2xl">{project.title}</h2>
              <p className="flex-1 mb-6 text-white/70 text-sm line-clamp-3">{project.description}</p>
              <div className="flex gap-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-primary/20 hover:bg-primary px-4 py-2 border border-primary/30 rounded-xl font-bold text-white text-xs transition-all">
                  Live Link
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-white/10 hover:bg-white/20 px-4 py-2 border border-white/20 rounded-xl font-bold text-white text-xs transition-all"
                >
                  View More
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
