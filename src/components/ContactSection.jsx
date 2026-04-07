import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { sectionVariants } from './utils/animations';
import MagneticButton from './shared/MagneticButton';

const contactInfo = [
  { icon: 'email', label: 'Email', value: 'aputhecoder26@gmail.com' },
  { icon: 'call', label: 'Phone', value: '+880 1518671881' },
  { icon: 'chat', label: 'WhatsApp', value: '+880 1518671881', link: 'https://web.whatsapp.com/' },
  { icon: 'location_on', label: 'Location', value: 'Chattogram, Bangladesh' },
];

const ContactSection = () => {
  const form = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm('service_9tuzpte', 'template_x6d1fft', form.current, 'QowlL85FEAM-Tedw_')
      .then(() => {
        alert('Message sent successfully! ❤️');
        setFormData({ from_name: '', from_email: '', message: '' });
        setIsSending(false);
      })
      .catch(() => {
        alert('Oops! Something went wrong. ❌');
        setIsSending(false);
      });
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      id="contact"
      className="relative py-20 border-t border-white/20"
    >
      <div className="mb-12 md:mb-16 text-center">
        <h3 className="mb-3 font-bold text-primary text-sm uppercase tracking-wider">Get In Touch</h3>
        <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl">
          Let's Work <span className="font-display font-semibold gradient-text-pink italic">Together</span>
        </h1>
      </div>

      <div className="z-10 relative gap-10 grid grid-cols-1 lg:grid-cols-2">
        {/* Contact Info Cards */}
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

        {/* Contact Form */}
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
            className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 focus:border-primary rounded-xl outline-none w-full text-white placeholder-white/60 transition-colors"
          />
          <input
            required
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={formData.from_email}
            onChange={handleInputChange}
            className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 focus:border-primary rounded-xl outline-none w-full text-white placeholder-white/60 transition-colors"
          />
          <textarea
            required
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className="bg-white/10 backdrop-blur-sm p-4 border border-white/20 focus:border-primary rounded-xl outline-none w-full text-white placeholder-white/60 transition-colors resize-none"
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

export default ContactSection;
