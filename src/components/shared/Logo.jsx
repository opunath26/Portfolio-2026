import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="group flex items-center gap-3 cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Icon Section with Liquid Gradient & Glow */}
      <motion.div
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.1 }
        }}
        className="relative flex justify-center items-center rounded-xl w-12 h-12 overflow-hidden"
      >
        {/* Animated Background Flow */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#FF2E63,#08D9D6,#FF2E63)] opacity-70"
        />
        
        {/* Glass Overlay */}
        <div className="absolute inset-[2px] bg-neutral-900/90 backdrop-blur-md rounded-[10px]" />

        {/* The Letters */}
        <motion.span
          variants={{
            rest: { y: 0, opacity: 1 },
            hover: { y: -2, scale: 1.1, color: "#FF2E63" }
          }}
          className="relative font-black text-white text-2xl tracking-tighter"
        >
          AN
        </motion.span>
        
        {/* Inner Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-primary/10 rounded-xl" 
        />
      </motion.div>

      {/* Text Section with Reveal Effect */}
      <div className="flex flex-col leading-none">
        <div className="relative overflow-hidden">
          <motion.span 
            className="block font-black text-white text-xl uppercase tracking-tighter"
          >
            Apu<span className="text-primary">Nath</span>
          </motion.span>
          
          {/* Shimmer/Light Beam Effect on Hover */}
          <motion.div 
            variants={{
              rest: { x: "-100%" },
              hover: { x: "100%" }
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
          />
        </div>

        <motion.span 
          variants={{
            rest: { opacity: 0.5, x: 0 },
            hover: { opacity: 1, x: 2, color: "#08D9D6" }
          }}
          className="font-bold text-[10px] text-white/50 uppercase tracking-[0.25em]"
        >
          Full Stack Dev
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Logo;