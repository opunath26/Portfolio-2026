import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import skillPathImg from './assets/project1.png';
import appOrbitImg from './assets/project2.png';
import warmPawsImg from './assets/project3.png';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';




// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="relative bg-gradient-to-br from-purple-900 dark:from-purple-950 via-pink-900 dark:via-pink-950 to-indigo-900 dark:to-indigo-950 min-h-screen overflow-x-hidden font-sans text-slate-900 dark:text-gray-200 antialiased transition-colors duration-300">

        {/* Floating Glass Shapes Background */}
        <FloatingGlassShapes />

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Glass Header */}
        <Header />

        {/* Main Content */}
        <main className="z-10 relative mx-auto px-6 w-full max-w-7xl">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <PortfolioSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Dark Mode Toggle */}
        <MagneticButton
          className="right-6 bottom-6 z-50 fixed bg-white/10 hover:bg-white/20 shadow-lg backdrop-blur-md p-4 border border-white/20 rounded-full text-white transition-all duration-300"
          onClick={toggleDarkMode}
        >
          <span className={`${isDark ? 'hidden' : 'block'} material-icons-round`}>dark_mode</span>
          <span className={`${isDark ? 'block' : 'hidden'} material-icons-round`}>light_mode</span>
        </MagneticButton>
      </div>
    </div>
  );
};

// Floating Glass Shapes Background Component
const FloatingGlassShapes = () => {
  const shapesRef = useRef([]);

  useEffect(() => {
    const shapes = shapesRef.current;

    shapes.forEach((shape, index) => {
      if (shape) {
        // Different parallax speeds for each shape
        const speed = 0.5 + (index * 0.3);

        // Floating animation
        gsap.to(shape, {
          y: -30,
          duration: 3 + index,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        });

        // Parallax scroll effect
        gsap.to(shape, {
          yPercent: -50 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: shape,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="z-0 fixed inset-0 pointer-events-none">
      {/* Glass Sphere 1 */}
      <div
        ref={el => shapesRef.current[0] = el}
        className="top-20 left-10 absolute bg-white/5 shadow-lg backdrop-blur-sm border border-white/10 rounded-full w-32 h-32"
      />

      {/* Glass Square 1 */}
      <div
        ref={el => shapesRef.current[1] = el}
        className="top-40 right-20 absolute bg-pink-500/10 shadow-lg backdrop-blur-sm border border-pink-300/20 rounded-2xl w-24 h-24 rotate-45"
      />

      {/* Glass Sphere 2 */}
      <div
        ref={el => shapesRef.current[2] = el}
        className="top-96 left-1/3 absolute bg-purple-500/10 shadow-lg backdrop-blur-sm border border-purple-300/20 rounded-full w-20 h-20"
      />

      {/* Glass Square 2 */}
      <div
        ref={el => shapesRef.current[3] = el}
        className="right-10 bottom-40 absolute bg-indigo-500/10 shadow-lg backdrop-blur-sm border border-indigo-300/20 rounded-3xl w-28 h-28 rotate-12"
      />

      {/* Glass Sphere 3 */}
      <div
        ref={el => shapesRef.current[4] = el}
        className="bottom-20 left-20 absolute bg-white/8 shadow-lg backdrop-blur-sm border border-white/15 rounded-full w-16 h-16"
      />
    </div>
  );
};
const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;

    if (!cursorDot || !cursorRing) return;

    // Check if device supports hover (desktop)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) {
      setIsVisible(false);
      document.body.classList.remove('custom-cursor-active');
      return;
    }

    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move dot immediately
      gsap.to(cursorDot, {
        x: mouseX,
        y: mouseY,
        duration: 0,
        ease: "none"
      });

      // Move ring with lag for premium feel
      gsap.to(cursorRing, {
        x: mouseX,
        y: mouseY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      // Scale up both elements when hovering interactive elements
      gsap.to(cursorDot, {
        scale: 2,
        backgroundColor: "#FF2E63",
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(cursorRing, {
        scale: 1.5,
        borderColor: "#FF2E63",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      // Return to normal state
      gsap.to(cursorDot, {
        scale: 1,
        backgroundColor: "#FF2E63",
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(cursorRing, {
        scale: 1,
        borderColor: "rgba(255, 46, 99, 0.3)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseDown = () => {
      gsap.to([cursorDot, cursorRing], {
        scale: 0.8,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.1,
        ease: "power2.out"
      });
      gsap.to(cursorRing, {
        scale: 1,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('custom-cursor-active');
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Cursor Dot */}
      <div
        ref={cursorDotRef}
        className="z-[9999] fixed bg-primary rounded-full w-2 h-2 cursor-dot pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Cursor Ring */}
      <div
        ref={cursorRingRef}
        className="z-[9998] fixed border border-primary/30 rounded-full w-8 h-8 cursor-ring pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

// Professional Custom Cursor Component
const MagneticButton = ({ children, className, onClick, isSpecial = false, ...props }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const multiplier = isSpecial ? 0.6 : 0.4; // Stronger effect for special buttons

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * multiplier,
        y: y * multiplier,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isSpecial]);

  return (
    <button
      ref={buttonRef}
      className={`${className} cursor-pointer`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Floating Image Component
const FloatingImage = ({ children, className, intensity = 1 }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    // Create floating animation
    gsap.to(image, {
      y: -20 * intensity,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    // Add subtle rotation
    gsap.to(image, {
      rotation: 2 * intensity,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    return () => {
      gsap.killTweensOf(image);
    };
  }, [intensity]);

  return (
    <div ref={imageRef} className={className}>
      {children}
    </div>
  );
};

// Image Reveal Component using Framer Motion
const ImageReveal = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Framer Motion Section Animation Variants
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
};

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="top-0 z-40 sticky bg-white/10 shadow-lg backdrop-blur-md border-white/20 border-b w-full"
    >
      <div className="flex justify-between items-center mx-auto px-6 max-w-7xl h-20">
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center bg-primary/20 shadow-glow backdrop-blur-sm border border-primary/30 rounded-xl w-10 h-10 text-white">
            <span className="material-symbols-outlined">grid_view</span>
          </div>
          <span className="font-bold text-white text-xl tracking-tight">Web Artist</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="font-medium text-white/80 hover:text-white transition-colors" href="#home">Home</a>
          <a className="font-medium text-white/80 hover:text-white transition-colors" href="#about">About</a>
          <a className="font-medium text-white/80 hover:text-white transition-colors" href="#skills">Skills</a>
          <a className="font-medium text-white/80 hover:text-white transition-colors" href="#services">Services</a>
        </nav>
        <MagneticButton className="hidden md:block bg-primary/20 hover:bg-primary/30 backdrop-blur-sm px-6 py-2.5 border border-primary/30 rounded-xl font-bold text-white text-sm transition-all duration-300">
          Hire Me
        </MagneticButton>
      </div>
    </motion.header>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Requirement 4: Social Links Array
  const socialLinks = [
    { icon: <FaGithub />, link: 'https://github.com/opunath26', label: 'GitHub' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/apu-nath-76a490392/', label: 'LinkedIn' },
    { icon: <FaFacebook />, link: 'https://www.facebook.com/oputhecoder26', label: 'Facebook' },
  ];

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="home"
      className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2 py-16 lg:py-24"
    >
      <div className="space-y-8 order-2 lg:order-1">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1.5 border border-white/20 rounded-full font-bold text-primary text-xs uppercase tracking-wider">
          Available for hire
        </div>

        <h1 className="font-extrabold text-white text-5xl lg:text-7xl leading-[1.1] tracking-tight">
          I'm <span className="text-primary">Apu Nath</span>
        </h1>

        {/* Requirement 2: Designation clearly visible */}
        <h3 className="font-bold text-white/90 text-3xl lg:text-4xl leading-tight">
          Frontend-Based MERN Stack Developer
        </h3>

        <p className="max-w-lg text-white/70 text-xl leading-relaxed">
          Crafting digital experiences that <span className="font-bold text-primary">matter</span>. Specialized in MERN Stack Development.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-4">
          <MagneticButton
            isSpecial={true}
            className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 shadow-glow backdrop-blur-sm px-8 py-4 border border-primary/30 rounded-2xl font-bold text-white hover:scale-[1.02] transition-all duration-300 transform"
          >
            <span className="material-symbols-outlined">chat_bubble</span> Let's Talk
          </MagneticButton>

          {/* Requirement 3: Resume Download Button Fixed */}
          <a
            href="https://drive.google.com/file/d/1xRFSlvYOErAWWlntK9YTmN0vC_B30ncw/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-4 border border-white/20 rounded-2xl font-bold text-white transition-all duration-300"
          >
            <span className="material-symbols-outlined">download</span> Download CV
          </a>
        </div>

        {/* Requirement 4: Social Links Embedded */}
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

        <div className="gap-8 grid grid-cols-3 pt-8 border-white/20 border-t">
          <div><h3 className="font-extrabold text-3xl text-accent-pink">8+</h3><p className="text-white/60 text-sm">Months of Practice</p></div>
          <div><h3 className="font-extrabold text-3xl text-accent-pink">10+</h3><p className="text-white/60 text-sm">Practice Projects</p></div>
          <div><h3 className="font-extrabold text-3xl text-accent-pink">1000+</h3><p className="text-white/60 text-sm">Hours of Coding</p></div>
        </div>
      </div>

      {/* RIGHT SIDE: Photo Section (Requirement 2: Professional Photo) */}
      <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
        <div className="relative w-72 lg:w-[450px] h-72 lg:h-[450px]">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
          <FloatingImage className="relative bg-white/10 shadow-2xl backdrop-blur-md p-2 border border-white/20 rounded-full w-full h-full overflow-hidden">
            <ImageReveal className="w-full h-full">
              <img
                src="https://drive.google.com/file/d/1JYifDAtnDvLZ4OlN4h1J1m1dtg-NNJDD/view?usp=drive_link"
                className="rounded-full w-full h-full object-cover"
                alt="Apu Nath Professional Portrait"
              />
            </ImageReveal>
          </FloatingImage>
          {/* Status Indicator */}
          <div className="right-10 bottom-10 absolute bg-green-500/80 backdrop-blur-sm border-4 border-white/30 rounded-full w-8 h-8 animate-pulse"></div>
        </div>
      </div>
    </motion.section>
  );
};
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="about"
      className="items-center gap-16 grid grid-cols-1 lg:grid-cols-2 py-20"
    >
      {/* LEFT SIDE: Image Section (Ager motoi thakbe) */}
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
              src="https://media.licdn.com/dms/image/v2/D5603AQGcrSjfiovJgw/profile-displayphoto-scale_400_400/B56Zqf6AzBHQAg-/0/1763619380608?e=1769040000&v=beta&t=wdmaoG33v083X1SUM47TmxFU_erUuQa_-Boxe72gH0o"
            />
          </ImageReveal>
          <div className="right-6 bottom-6 absolute bg-white/20 shadow-xl backdrop-blur-md p-5 border border-white/30 rounded-xl">
            <span className="font-bold text-4xl text-accent-pink">8+</span>
            <p className="mt-1 font-medium text-white/80 text-sm leading-tight">Months Learning Experience</p>
          </div>
        </FloatingImage>
      </div>

      {/* RIGHT SIDE: Content Section (Update kora hoyeche) */}
      <div className="space-y-8 order-2">
        <div className="space-y-4">
          <span className="flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-accent-pink">
            <span className="w-8 h-[2px] bg-accent-pink"></span> About Me
          </span>
          <h2 className="font-bold text-white text-4xl lg:text-6xl leading-tight">
            Inspiring The <br />
            <span className="pr-1 font-display font-semibold gradient-text-pink italic">Marvelous</span> <span className="gradient-text-purple">Project</span>
          </h2>

          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            {/* 1. Intro & Journey */}
            <p>
              I'm <span className="font-semibold text-white">Apu Nath</span>. My programming journey began with a simple curiosity about how websites work. What started as exploring HTML has now evolved into a full-blown passion for the <span className="text-primary">MERN Stack</span>, where I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>

            {/* 2. Type of work you enjoy */}
            <p>
              I truly enjoy crafting <span className="font-medium text-white">interactive user interfaces</span> and building robust backends. There’s a certain thrill in optimizing code and seeing a project come to life, ensuring it's not just functional but also lightning-fast.
            </p>

            {/* 3. Hobbies/Personality */}
            <p>
              Beyond the world of syntax and servers, I’m an enthusiast of <span className="text-secondary">Cricket</span> and I love <span className="text-secondary">Traveling</span> to new places. These hobbies help me stay creative and bring a fresh perspective to my development work.
            </p>
          </div>
        </div>

        {/* Dynamic Skill/Trait Cards */}
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          {[
            { icon: 'history_edu', text: 'My Journey' }, // icon change korlam context anujayi
            { icon: 'favorite', text: 'Love UI/UX' },
            { icon: 'sports_cricket', text: 'Cricket Fan' },
            { icon: 'explore', text: 'Traveling' }
          ].map((item, index) => (
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



const EducationSection = () => {
  const educationData = [
    {
      degree: "	Diploma in Computer Engineering",
      institution: "Bangladesh Sweden Polytechnic Institute",
      department: "Computer Science & Technology(CST)",
      duration: "2023 - 2026",
      description: "Studying Computer Engineering with a focus on web development, programming fundamentals, data structures, and modern software technologies. Gaining hands-on experience through academic and personal projects."
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Vocational",
      institution: "Khagrachari Government Technical School and College",
      department: "Electrical Works and Maintenance",
      duration: "2017 - 2022",
      description: "Completed HSC with a technical focus on Electrical Works and Maintenance, including basic electrical systems, wiring, and practical laboratory training."
    }
  ];

  return (
    <section id="education" className="py-20 border-white/20 border-t">
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
                    <p className="font-semibold text-sm tracking-wide text-accent-pink/90">
                      {edu.department}
                    </p>
                  </div>
                </div>

                <div className="bg-primary/20 px-4 py-1 border border-primary/30 rounded-full w-fit">
                  <span className="font-bold text-primary text-sm">{edu.duration}</span>
                </div>
              </div>

              <div className="mt-4">

                <p className="mt-2 text-white/60 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Skills data - moved outside component to prevent re-renders
const skillsData = [
  { name: 'React', percentage: 70 },
  { name: 'JavaScript', percentage: 75 },
  { name: 'Node.js', percentage: 60 },
  { name: 'Tailwind CSS', percentage: 65 },
  { name: 'MongoDB', percentage: 50 }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const skillsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      number: '01',
      title: 'Frontend Development',
      description: 'Building responsive web applications and learning best practices in React and JavaScript.'
    },
    {
      number: '02',
      title: 'MERN Stack Projects',
      description: 'Creating full-stack applications using MongoDB, Express.js, React, and Node.js.'
    },
    {
      number: '03',
      title: 'Learning & Experimenting',
      description: 'Continuously improving my skills by experimenting with new frameworks.'
    }
  ];

  const techStack = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git'];

  // GSAP Stagger Animation for Skill Bars
  useEffect(() => {
    if (isInView && skillsRef.current) {
      const skillBars = skillsRef.current.querySelectorAll('.skill-bar');
      const skillPercentages = skillsRef.current.querySelectorAll('.skill-percentage');

      // Reset skill bars
      gsap.set(skillBars, { width: 0 });
      gsap.set(skillPercentages, { opacity: 0 });

      // Animate skill bars with stagger
      gsap.to(skillBars, {
        width: (index) => `${skillsData[index].percentage}%`,
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.3
      });

      // Animate percentage text
      gsap.to(skillPercentages, {
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.8
      });
    }
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="skills"
      className="py-20 border-white/20 border-t"
    >
      <header className="mb-16 text-center">
        <h2 className="mb-3 font-bold text-sm uppercase tracking-widest text-accent-pink">What I Do</h2>
        <h1 className="font-bold text-white text-4xl md:text-6xl leading-tight">
          Empowering <span className="pr-1 font-display font-semibold gradient-text-pink italic">Creativity</span><br />
          <span className="gradient-text-purple">Through</span>
        </h1>
      </header>

      <div className="gap-16 grid grid-cols-1 lg:grid-cols-2">
        <div ref={skillsRef} className="space-y-8">
          <h3 className="pl-4 border-accent-pink border-l-4 font-bold text-white text-2xl">Technical Skills</h3>
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <div key={index} className="group">
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

        <div id="services" className="space-y-6">
          <h3 className="mb-8 pl-4 border-secondary border-l-4 font-bold text-white text-2xl">Services</h3>
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 shadow-sm backdrop-blur-md p-6 border border-white/20 rounded-2xl transition-all cursor-pointer"
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

      <div className="flex flex-wrap justify-center gap-3 mt-20">
        {techStack.map((tech, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            className="bg-white/10 backdrop-blur-sm px-5 py-2.5 border border-white/20 rounded-full font-bold text-white text-xs transition-all duration-300 cursor-pointer"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};




const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Modal-er jonno state
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Skill Path',
      category: 'Web Development',
      image: skillPathImg,
      link: 'https://ubiquitous-longma-59b633.netlify.app/',
      github: 'https://github.com/opunath26/skillpath-client.git', // Add your GitHub
      description: 'Skill Path is an interactive learning platform designed to help students master new skills with ease.',
      techStack: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      challenges: 'Managing complex state for the course progress and ensuring a smooth user experience across all devices was a major challenge.',
      futurePlans: 'Plan to add a community forum and real-time quiz feature to enhance student engagement.'
    },
    {
      title: 'AppOrbit',
      category: 'Web Development',
      image: appOrbitImg,
      link: 'https://apporbit.pages.dev/',
      github: 'https://github.com/opunath26/apporbit-store.git', // Add your GitHub
      description: 'AppOrbit is a modern marketplace for digital assets, allowing users to browse and buy applications.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      challenges: 'Implementing a secure payment gateway and handling large image uploads efficiently were the key hurdles.',
      futurePlans: 'Integrating AI-driven recommendations based on user search history.'
    },
    {
      title: 'WarmPaws',
      category: 'Web Development',
      image: warmPawsImg,
      link: 'https://green-earth-op.pages.dev/',
      github: 'https://github.com/your-username/warmpaws', // Add your GitHub
      description: 'A non-profit initiative focused on providing pet care and shelter during harsh winter months.',
      techStack: ['React', 'Tailwind CSS', 'EmailJS'],
      challenges: 'Creating a high-performance donation form that feels intuitive while maintaining a clean look.',
      futurePlans: 'Expanding to a full-scale pet adoption tracking system with local shelter integration.'
    }
  ];

  return (
    <motion.section
      ref={ref}
      id="projects" // ID add korlam navbar connection-er jonno
      className="relative py-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="top-0 left-1/2 -z-10 absolute bg-primary/20 blur-[120px] rounded-full w-[600px] h-[400px] -translate-x-1/2 pointer-events-none"></div>

      <header className="z-10 relative mb-16 text-center">
        <p className="mb-4 font-bold text-primary text-sm uppercase tracking-[0.2em]">Portfolio</p>
        <h1 className="font-extrabold text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
          Transforming <span className="bg-clip-text bg-gradient-to-r from-primary to-secondary pr-1 text-transparent italic">Ideas</span> Into Experiences
        </h1>
      </header>

      {/* Projects Grid */}
      <div className="z-10 relative gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
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
                <a href={project.link} target="_blank" className="bg-primary/20 hover:bg-primary px-4 py-2 border border-primary/30 rounded-xl font-bold text-white text-xs transition-all">Live Link</a>
                {/* View More Button */}
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

      {/* --- PROJECT DETAILS MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="z-[100] fixed inset-0 flex justify-center items-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative bg-neutral-900 shadow-2xl border border-white/20 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="top-5 right-5 absolute bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
              >
                <span className="material-icons-round">close</span>
              </button>

              <div className="p-8">
                <img src={selectedProject.image} alt={selectedProject.title} className="mb-6 border border-white/10 rounded-2xl w-full h-64 object-cover" />

                <h2 className="mb-2 font-bold text-white text-3xl">{selectedProject.title}</h2>
                <p className="mb-6 text-white/70 text-lg italic">{selectedProject.description}</p>

                <div className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="mb-2 font-bold text-primary text-sm uppercase tracking-wider">Main Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="bg-primary/10 px-3 py-1 border border-primary/20 rounded-lg text-primary text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h4 className="mb-2 font-bold text-secondary text-sm uppercase tracking-wider">Challenges Faced</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{selectedProject.challenges}</p>
                  </div>

                  {/* Future Plans */}
                  <div>
                    <h4 className="mb-2 font-bold text-sm uppercase tracking-wider text-accent-pink">Future Plans</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{selectedProject.futurePlans}</p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-4 border-white/10 border-t">
                    <a href={selectedProject.link} target="_blank" className="flex items-center gap-2 bg-primary px-6 py-3 rounded-xl font-bold text-white active:scale-95 transition-transform">
                      Live Project <span className="material-icons-round">open_in_new</span>
                    </a>
                    <a href={selectedProject.github} target="_blank" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 border border-white/20 rounded-xl font-bold text-white transition-all">
                      GitHub Client <span className="material-icons-round">code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const ContactSection = () => {
  const form = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // State keys updated to match input names exactly
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_9tuzpte',
      'template_x6d1fft',
      form.current,
      'QowlL85FEAM-Tedw_'
    )
      .then((result) => {
        alert("Message sent successfully! ❤️");
        setFormData({ from_name: '', from_email: '', message: '' });
        setIsSending(false);
      }, (error) => {
        alert("Oops! Something went wrong. ❌");
        setIsSending(false);
      });
  };

  const contactInfo = [
    {
      icon: 'email',
      label: 'Email',
      value: 'aputhecoder26@gmail.com'
    },
    {
      icon: 'call',
      label: 'Phone',
      value: '+880 1518671881'
    },
    {
      icon: 'chat',
      label: 'WhatsApp',
      value: '+880 1518671881',
      link: 'https://web.whatsapp.com/'
    },
    {
      icon: 'location_on',
      label: 'Location',
      value: 'Chattogram, Bangladesh'
    }
  ];

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="contact"
      className="relative py-20 border-white/20 border-t"
    >
      <div className="mb-12 md:mb-16 text-center">
        <h3 className="mb-3 font-bold text-primary text-sm uppercase tracking-wider">Get In Touch</h3>
        <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl">
          Let's Work <span className="font-display font-semibold gradient-text-pink italic">Together</span>
        </h1>
      </div>

      <div className="z-10 relative gap-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-5 bg-white/10 shadow-sm backdrop-blur-md p-6 border border-white/20 rounded-2xl cursor-pointer"
            >
              <div className="flex justify-center items-center bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-xl w-14 h-14 shrink-0">
                <span className="text-primary material-icons-round">{info.icon}</span>
              </div>
              <div className="overflow-hidden">
                <p className="mb-1 text-white/60 text-sm">{info.label}</p>
                <p className="font-bold text-white text-base sm:text-lg truncate">{info.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.form
          ref={form}
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
          className="z-20 relative space-y-4 bg-white/10 backdrop-blur-md p-8 border border-white/20 rounded-2xl"
        >
          <input
            required
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleInputChange}
            className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 focus:border-primary rounded-xl outline-none w-full text-white transition-colors placeholder-white/60"
          />

          <input
            required
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={formData.from_email}
            onChange={handleInputChange}
            className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 focus:border-primary rounded-xl outline-none w-full text-white transition-colors placeholder-white/60"
          />

          <textarea
            required
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 focus:border-primary rounded-xl outline-none w-full text-white transition-colors resize-none placeholder-white/60"
          ></textarea>

          <MagneticButton
            isSpecial={true}
            type="submit"
            disabled={isSending}
            className="flex justify-center items-center gap-2 bg-primary/20 hover:bg-primary/30 shadow-glow backdrop-blur-sm py-4 border border-primary/30 rounded-full w-full font-bold text-white transition-all duration-300"
          >
            {isSending ? 'Sending...' : 'Send Message'}
            {!isSending && <span className="text-sm material-symbols-outlined">send</span>}
          </MagneticButton>
        </motion.form>
      </div>
    </motion.section>
  );
};

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { name: 'LinkedIn', icon: 'account_circle', href: 'https://www.linkedin.com/in/apu-nath-76a490392/' },
    { name: 'GitHub', icon: 'code', href: 'https://github.com/opunath26' },
    { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/oputhecoder26' },
    { name: 'Instagram', icon: 'photo_camera', href: 'https://www.instagram.com/artistop26?utm_source=qr' },
    { name: 'WhatsApp', icon: 'chat', href: 'https://wa.me/8801518671881' }
  ];

  return (
    <motion.footer
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-white/5 backdrop-blur-md mt-20 py-12 border-white/20 border-t"
    >
      <div className="mx-auto px-6 max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between items-center gap-8">

          {/* Left Side: Logo & Info */}
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

          {/* Social Icons Section */}
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

        {/* Bottom Copyright Updated */}
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 mt-12 pt-8 border-white/20 border-t">
          <p className="text-white/60 text-xs md:text-left text-center">
            © {new Date().getFullYear()} <span className="font-bold text-primary">Apu Nath</span>. Built with ❤️, React & Tailwind CSS.
          </p>
          
          {/* Quick links - Hiring Badge */}
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

export default App;