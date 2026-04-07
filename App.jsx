import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-gray-200 antialiased transition-colors duration-300">
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="mx-auto px-6 w-full max-w-7xl">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <PortfolioSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Dark Mode Toggle */}
        <button 
          className="right-6 bottom-6 z-50 fixed bg-primary shadow-lg p-4 rounded-full text-white hover:scale-110 transition-transform"
          onClick={toggleDarkMode}
        >
          <span className={`${isDark ? 'hidden' : 'block'} material-icons-round`}>dark_mode</span>
          <span className={`${isDark ? 'block' : 'hidden'} material-icons-round`}>light_mode</span>
        </button>
      </div>
    </div>
  );
};

export default App;

const Header = () => {
  return (
    <header className="top-0 z-50 sticky bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-gray-100 dark:border-gray-800 border-b w-full">
      <div className="flex justify-between items-center mx-auto px-6 max-w-7xl h-20">
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center bg-primary shadow-glow rounded-xl w-10 h-10 text-white">
            <span className="material-symbols-outlined">grid_view</span>
          </div>
          <span className="font-bold text-xl tracking-tight">Portfolio.</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="font-medium hover:text-primary transition-colors" href="#home">Home</a>
          <a className="font-medium hover:text-primary transition-colors" href="#about">About</a>
          <a className="font-medium hover:text-primary transition-colors" href="#skills">Skills</a>
          <a className="font-medium hover:text-primary transition-colors" href="#services">Services</a>
        </nav>
        <button className="hidden md:block bg-primary hover:opacity-90 px-6 py-2.5 rounded-xl font-bold text-white text-sm active:scale-95 transition-all">
          Contact Me
        </button>
      </div>
    </header>
  );
};
const HeroSection = () => {
  return (
    <section id="home" className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2 py-16 lg:py-24 border-gray-100 dark:border-gray-800 border-b">
      <div className="space-y-8 order-2 lg:order-1">
        <div className="inline-flex items-center bg-primary/10 px-4 py-1.5 rounded-full font-bold text-primary text-xs uppercase tracking-wider">
          Available for hire
        </div>
        <h1 className="font-extrabold text-5xl lg:text-7xl leading-[1.1] tracking-tight">
          I'm <span className="text-primary">Apu Nath</span>
        </h1>
        <h3 className="font-bold text-3xl lg:text-4xl leading-tight">Frontend-Based MERN Stack Developer</h3>
        
        <p className="max-w-lg text-gray-500 dark:text-gray-400 text-xl leading-relaxed">
          Crafting digital experiences that <span className="font-bold text-primary">matter</span>. Specialized in MERN Stack Development.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-primary hover:opacity-90 shadow-glow px-8 py-4 rounded-2xl font-bold text-white hover:scale-[1.02] transition-all transform">
            <span className="material-symbols-outlined">chat_bubble</span> Let's Talk
          </button>
          <button className="flex items-center gap-2 bg-white hover:bg-gray-50 dark:bg-white/5 px-8 py-4 border border-gray-200 dark:border-gray-700 rounded-2xl font-bold transition-all">
            <span className="material-symbols-outlined">download</span> Download CV
          </button>
        </div>
        <div className="gap-8 grid grid-cols-3 pt-8 border-gray-100 dark:border-gray-800 border-t">
          <div><h3 className="font-extrabold text-3xl text-accent-pink">8+</h3><p className="text-gray-500 text-sm">Months of Learning & Practice</p></div>
          <div><h3 className="font-extrabold text-3xl text-accent-pink">10+</h3><p className="text-gray-500 text-sm">Practice Projects</p></div>
          <div><h3 className="font-extrabold text-3xl text-accent-pink">1000+</h3><p className="text-gray-500 text-sm">Hours of Coding</p></div>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
        <div className="relative w-72 lg:w-[450px] h-72 lg:h-[450px]">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white dark:bg-card-dark shadow-2xl p-2 border border-gray-100 dark:border-gray-800 rounded-full w-full h-full overflow-hidden">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQGcrSjfiovJgw/profile-displayphoto-scale_400_400/B56Zqf6AzBHQAg-/0/1763619380608?e=1769040000&v=beta&t=wdmaoG33v083X1SUM47TmxFU_erUuQa_-Boxe72gH0o" 
              className="rounded-full w-full h-full object-cover" 
              alt="ApuNath"
            />
          </div>
          <div className="right-10 bottom-10 absolute bg-green-500 border-4 border-white dark:border-background-dark rounded-full w-8 h-8 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
const AboutSection = () => {
  return (
    <section id="about" className="items-center gap-16 grid grid-cols-1 lg:grid-cols-2 py-20">
      <div className="group relative order-1 mx-auto lg:mx-0 max-w-md">
        <div className="hidden md:block image-border-decoration transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500"></div>
        <div className="z-10 relative bg-white dark:bg-card-dark shadow-2xl rounded-2xl aspect-[3/4] overflow-hidden">
          <img 
            alt="Portrait" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src="https://media.licdn.com/dms/image/v2/D5603AQGcrSjfiovJgw/profile-displayphoto-scale_400_400/B56Zqf6AzBHQAg-/0/1763619380608?e=1769040000&v=beta&t=wdmaoG33v083X1SUM47TmxFU_erUuQa_-Boxe72gH0o"
          />
          <div className="right-6 bottom-6 absolute bg-white/90 dark:bg-card-dark/90 shadow-xl backdrop-blur-md p-5 border border-gray-200 dark:border-gray-800 rounded-xl">
            <span className="font-bold text-4xl text-accent-pink">8+</span>
            <p className="mt-1 font-medium text-gray-500 text-sm leading-tight">Months Learning Experience</p>
          </div>
        </div>
      </div>

      <div className="space-y-8 order-2">
        <div className="space-y-4">
          <span className="flex items-center gap-2 font-semibold text-sm uppercase tracking-wider text-accent-pink">
            <span className="w-8 h-[2px] bg-accent-pink"></span> About Me
          </span>
          <h2 className="font-bold text-4xl lg:text-6xl leading-tight">
            Inspiring The <br/>
            <span className="pr-1 font-display font-semibold gradient-text-pink italic">Marvelous</span> <span className="gradient-text-purple">Project</span>
          </h2>
          <div className="space-y-4 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            <p>I'm Apu Nath, a passionate Frontend-Based MERN Stack Developer. I build responsive web applications with React, JavaScript, and Tailwind CSS.</p>
            <p>My goal is to write clean, maintainable code while delivering exceptional user experiences.</p>
          </div>
        </div>
        
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex items-center gap-3 bg-white dark:bg-card-dark p-4 border border-gray-100 dark:border-gray-800 rounded-xl">
            <span className="text-accent-pink material-icons-round">code</span>
            <span className="font-semibold">Clean Code</span>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-card-dark p-4 border border-gray-100 dark:border-gray-800 rounded-xl">
            <span className="text-accent-pink material-icons-round">bolt</span>
            <span className="font-semibold">Fast Projects</span>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-card-dark p-4 border border-gray-100 dark:border-gray-800 rounded-xl">
            <span className="text-accent-pink material-icons-round">code</span>
            <span className="font-semibold">Problem Solving</span>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-card-dark p-4 border border-gray-100 dark:border-gray-800 rounded-xl">
            <span className="text-accent-pink material-icons-round">bolt</span>
            <span className="font-semibold">Continuous Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};
const SkillsSection = () => {
  const skills = [
    { name: 'React', percentage: 70 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'Node.js', percentage: 60 },
    { name: 'Tailwind CSS', percentage: 65 },
    { name: 'MongoDB', percentage: 50 }
  ];

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

  return (
    <section id="skills" className="py-20 border-gray-100 dark:border-gray-800 border-t">
      <header className="mb-16 text-center">
        <h2 className="mb-3 font-bold text-sm uppercase tracking-widest text-accent-pink">What I Do</h2>
        <h1 className="font-bold text-4xl md:text-6xl leading-tight">
          Empowering <span className="pr-1 font-display font-semibold gradient-text-pink italic">Creativity</span><br/>
          <span className="gradient-text-purple">Through</span>
        </h1>
      </header>

      <div className="gap-16 grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-8">
          <h3 className="pl-4 border-accent-pink border-l-4 font-bold text-2xl">Technical Skills</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-end mb-2">
                  <span className="font-semibold text-sm">{skill.name}</span>
                  <span className="font-mono font-bold text-xs text-accent-pink">{skill.percentage}%</span>
                </div>
                <div className="bg-bar-bg-light dark:bg-bar-bg-dark rounded-full w-full h-2 overflow-hidden">
                  <div 
                    className="rounded-full h-full transition-all duration-1000 bg-accent-pink" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="services" className="space-y-6">
          <h3 className="mb-8 pl-4 border-secondary border-l-4 font-bold text-2xl">Services</h3>
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-card-dark shadow-sm p-6 border border-gray-100 hover:border-accent-pink/50 dark:border-gray-800 rounded-2xl transition-all">
              <div className="flex items-start gap-4">
                <span className="opacity-20 dark:opacity-40 font-black text-4xl text-accent-pink">{service.number}</span>
                <div>
                  <h4 className="mb-2 font-bold text-xl">{service.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-20">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-gray-100 dark:bg-card-dark px-5 py-2.5 border border-gray-200 dark:border-gray-800 rounded-full font-bold text-xs">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};
const PortfolioSection = () => {
  const projects = [
    {
      title: 'BookCourier',
      category: 'Web Development',
      description: 'BookCourier is a modern web application designed for online book sales.',
      bgClass: 'bg-[#1a1a1a]',
      icon: 'camping',
      iconColor: 'text-red-400',
      iconBg: 'bg-red-900/20 border-red-900/50'
    },
    {
      title: 'A-Store',
      category: 'Web Development',
      description: 'A-Store is your all-in-one app marketplace.',
      bgClass: 'bg-gradient-to-br from-purple-900 via-indigo-900 to-teal-900',
      isSpecial: true
    },
    {
      title: 'BookHaven',
      category: 'Web Development',
      description: 'Book Haven — a modern, responsive web client.',
      bgClass: 'bg-gray-900',
      isBookHaven: true
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="top-0 left-1/2 -z-10 absolute bg-primary/20 dark:bg-primary/10 blur-[120px] rounded-full w-[600px] h-[400px] -translate-x-1/2 pointer-events-none"></div>
      <header className="z-10 relative mb-16 text-center">
        <p className="mb-4 font-bold text-primary text-sm uppercase tracking-[0.2em]">Portfolio</p>
        <h1 className="font-extrabold text-gray-900 dark:text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
          Transforming <span className="bg-clip-text bg-gradient-to-r from-primary to-secondary pr-1 text-transparent italic">Ideas</span> Into 
          <br className="hidden md:block"/>
          <span className="bg-clip-text bg-gradient-to-r from-secondary to-primary pl-1 text-transparent italic">Experiences</span>
        </h1>
      </header>

      <div className="z-10 relative gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={index} className="group flex flex-col bg-white dark:bg-card-dark shadow-xl hover:shadow-2xl border border-gray-200 hover:border-primary/30 dark:border-gray-800 rounded-3xl h-full overflow-hidden transition-all duration-300">
            <div className={`relative flex justify-center items-center ${project.bgClass} p-8 h-64 overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              {project.isSpecial ? (
                <div className="z-10 relative flex justify-center items-center bg-white shadow-2xl rounded-3xl w-32 h-32 group-hover:scale-105 transition-transform duration-500">
                  <span className="bg-clip-text bg-gradient-to-br from-purple-600 to-red-500 font-black text-transparent text-6xl">b</span>
                </div>
              ) : project.isBookHaven ? (
                <div className="z-10 relative text-center">
                  <h3 className="mb-2 font-extrabold text-white text-3xl">BookHaven</h3>
                  <button className="bg-primary hover:opacity-90 shadow-lg px-6 py-2 rounded-full font-bold text-white text-xs transition-colors">Explore Books</button>
                </div>
              ) : (
                <div className="flex items-center gap-3 scale-100 group-hover:scale-105 transition-transform duration-500">
                  <span className="font-bold text-white text-3xl tracking-tight">{project.title}</span>
                  <div className={`flex justify-center items-center ${project.iconBg} border-2 rounded-xl w-12 h-12`}>
                    <span className={`${project.iconColor} text-2xl material-icons-round`}>{project.icon}</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col flex-1 p-6 md:p-8">
              <span className="block mb-3 font-bold text-primary text-xs uppercase tracking-widest">{project.category}</span>
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-bold text-gray-900 dark:text-white group-hover:text-primary text-2xl transition-colors">{project.title}</h2>
                <a className="flex items-center gap-1 mt-1 font-semibold hover:text-primary text-sm transition-colors" href="#">
                  Live Link <span className="text-base material-icons-round">arrow_outward</span>
                </a>
              </div>
              <p className="flex-1 mb-6 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
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
      icon: 'location_on',
      label: 'Location',
      value: 'Chattogram, Bangladesh'
    }
  ];

  return (
    <section id="contact" className="py-20 border-gray-100 dark:border-gray-800 border-t">
      <div className="mb-12 md:mb-16 text-center">
        <h3 className="mb-3 font-bold text-primary text-sm uppercase tracking-wider">Get In Touch</h3>
        <h1 className="font-bold text-gray-900 dark:text-white text-4xl md:text-5xl lg:text-6xl">
          Let's Work <span className="font-display font-semibold gradient-text-pink italic">Together</span>
        </h1>
      </div>

      <div className="gap-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-5 bg-white dark:bg-[#111111] shadow-sm p-6 border border-gray-100 dark:border-gray-800 rounded-2xl">
              <div className="flex justify-center items-center bg-primary/10 rounded-xl w-14 h-14 shrink-0">
                <span className="text-primary material-icons-round">{info.icon}</span>
              </div>
              <div className="overflow-hidden">
                <p className="mb-1 text-gray-500 dark:text-gray-400 text-sm">{info.label}</p>
                <p className="font-bold text-gray-900 dark:text-white text-base sm:text-lg truncate">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleInputChange}
            className="bg-white dark:bg-[#111111] p-4 border border-gray-100 focus:border-primary dark:border-gray-800 rounded-xl outline-none w-full text-gray-900 dark:text-white transition-colors"
          />
          
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleInputChange}
            className="bg-white dark:bg-[#111111] p-4 border border-gray-100 focus:border-primary dark:border-gray-800 rounded-xl outline-none w-full text-gray-900 dark:text-white transition-colors"
          />
          
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className="bg-white dark:bg-[#111111] p-4 border border-gray-100 focus:border-primary dark:border-gray-800 rounded-xl outline-none w-full text-gray-900 dark:text-white transition-colors resize-none"
          ></textarea>
          
          <button 
            type="submit"
            className="flex justify-center items-center gap-2 bg-primary hover:opacity-90 shadow-glow py-4 rounded-full w-full font-bold text-white active:scale-95 transition-all"
          >
            Send Message <span className="text-sm material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </section>
  );
};
const Footer = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    { icon: 'public', href: '#' },
    { icon: 'code', href: '#' },
    { icon: 'person', href: '#' }
  ];

  return (
    <footer className="bg-white dark:bg-background-dark mt-20 py-12 border-gray-100 dark:border-gray-800 border-t">
      <div className="mx-auto px-6 max-w-7xl">
        <div className="items-center gap-12 grid grid-cols-1 md:grid-cols-3 md:text-left text-center">
          
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start items-center gap-3">
              <div className="flex justify-center items-center bg-primary shadow-glow rounded-xl w-10 h-10 text-white">
                <span className="material-symbols-outlined">grid_view</span>
              </div>
              <span className="font-bold text-xl tracking-tight">Portfolio.</span>
            </div>
            <p className="mx-auto md:mx-0 max-w-xs text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Apu Nath — MERN Stack Developer. Building modern, clean, and functional web experiences.
            </p>
          </div>

          <div className="flex justify-center gap-8 font-medium text-sm">
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="flex justify-center items-center hover:bg-primary/5 border border-gray-200 hover:border-primary/50 dark:border-gray-800 rounded-full w-10 h-10 text-gray-500 hover:text-primary dark:text-gray-400 transition-all"
              >
                <span className="text-[20px] material-symbols-outlined">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-gray-100 dark:border-gray-800 border-t text-center">
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            © 2024 <span className="font-bold text-primary">Apu Nath</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};