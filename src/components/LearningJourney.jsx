import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Bangladesh Sweden Polytechnic Institute',
    department: 'Computer Science & Technology (CST)',
    duration: '2023 - 2026',
    description:
      'Studying Computer Engineering with a focus on web development, programming fundamentals, data structures, and modern software technologies. Gaining hands-on experience through academic and personal projects.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC) - Vocational',
    institution: 'Khagrachari Government Technical School and College',
    department: 'Electrical Works and Maintenance',
    duration: '2017 - 2022',
    description:
      'Completed HSC with a technical focus on Electrical Works and Maintenance, including basic electrical systems, wiring, and practical laboratory training.',
  },
];

const LearningJourney = () => {
  return (
    <section id="education" className="py-20 border-t border-white/20">
      <div className="mb-12 text-center">
        <h3 className="mb-3 font-bold text-primary text-sm uppercase tracking-wider">Learning Journey</h3>
        <h1 className="font-bold text-white text-4xl md:text-5xl">
          Educational <span className="gradient-text-pink italic">Qualification</span>
        </h1>
      </div>

      <div className="mx-auto px-6 max-w-4xl">
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-md p-8 border border-white/10 hover:border-primary/50 rounded-3xl transition-all"
            >
              {/* Decorative Dot */}
              <div className="top-8 -left-3 absolute bg-primary shadow-[0_0_15px_rgba(255,46,99,0.5)] rounded-full w-6 h-6" />

              <div className="flex md:flex-row flex-col md:justify-between md:items-start gap-4">
                <div>
                  <h2 className="font-bold text-white group-hover:text-primary text-2xl transition-colors">
                    {edu.degree}
                  </h2>
                  <p className="mt-1 font-medium text-white/80 text-lg">{edu.institution}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm text-accent-pink material-icons-round">account_tree</span>
                    <p className="font-semibold text-sm tracking-wide text-accent-pink/90">{edu.department}</p>
                  </div>
                </div>
                <div className="bg-primary/20 px-4 py-1 border border-primary/30 rounded-full w-fit">
                  <span className="font-bold text-primary text-sm">{edu.duration}</span>
                </div>
              </div>

              <p className="mt-4 text-white/60 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
