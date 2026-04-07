import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { sectionVariants } from './utils/animations';

const socialLinks = [
  { name: 'LinkedIn', icon: 'account_circle', href: 'https://www.linkedin.com/in/apu-nath-76a490392/' },
  { name: 'GitHub', icon: 'code', href: 'https://github.com/opunath26' },
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/oputhecoder26' },
  { name: 'Instagram', icon: 'photo_camera', href: 'https://www.instagram.com/artistop26?utm_source=qr' },
  { name: 'WhatsApp', icon: 'chat', href: 'https://wa.me/8801518671881' },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.footer
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="bg-white/5 backdrop-blur-md mt-20 py-12 border-t border-white/20"
    >
      <div className="mx-auto px-6 max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between items-center gap-8">

          {/* Logo & Tagline */}
          <div className="space-y-4 md:text-left text-center">
            <div className="flex justify-center md:justify-start items-center gap-3">
              <div className="flex justify-center items-center bg-primary/20 shadow-glow backdrop-blur-sm border border-primary/30 rounded-xl w-10 h-10 text-white">
                <span className="material-symbols-outlined">grid_view</span>
              </div>
              <span className="font-bold text-white text-xl tracking-tight">Web Artist</span>
            </div>
            <p className="max-w-xs text-white/60 text-sm leading-relaxed">
              Apu Nath — MERN Stack Developer. Creating seamless web experiences with React and modern technologies.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.15, color: '#FF2E63' }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
              >
                <div className="flex justify-center items-center bg-white/5 shadow-lg group-hover:shadow-primary/20 backdrop-blur-sm border border-white/20 group-hover:border-primary/50 rounded-2xl w-14 h-14 text-white/60 transition-all">
                  <span className="text-[28px] material-symbols-outlined">{social.icon}</span>
                </div>
                <span className="text-[10px] text-white/40 group-hover:text-primary uppercase tracking-widest transition-colors">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-xs md:text-left text-center">
            © {new Date().getFullYear()} <span className="font-bold text-primary">Apu Nath</span>. Built with ❤️, React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex w-2 h-2">
              <span className="inline-flex absolute bg-green-400 opacity-75 rounded-full w-full h-full animate-ping"></span>
              <span className="inline-flex relative bg-green-500 rounded-full w-2 h-2"></span>
            </span>
            <span className="text-[10px] text-white/60 uppercase tracking-wider">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
