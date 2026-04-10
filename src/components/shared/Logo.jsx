import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="group flex items-center gap-3 cursor-pointer"
      whileHover="hover"
      initial="rest"
    >
      {/* Icon: The Morphing Square */}
      <div className="relative flex justify-center items-center w-11 h-11">
        {/* Solid Background that shrinks on hover */}
        <motion.div 
          variants={{
            rest: { scale: 1, borderRadius: "12px" },
            hover: { scale: 0.8, borderRadius: "50%", rotate: 90 }
          }}
          className="absolute inset-0 bg-primary shadow-glow"
        />
        
        {/* Outline that appears on hover */}
        <motion.div 
          variants={{
            rest: { opacity: 0, scale: 0.8 },
            hover: { opacity: 1, scale: 1.1 }
          }}
          className="absolute inset-0 border-2 border-white rounded-xl"
        />

        <motion.span
          variants={{
            rest: { color: "#FFFFFF", scale: 1 },
            hover: { color: "#FFFFFF", scale: 0.9 }
          }}
          className="relative font-black text-xl"
        >
          AN
        </motion.span>
      </div>

      {/* Text: The Underline Reveal */}
      <div className="flex flex-col">
        <div className="relative">
          <span className="font-black text-white text-2xl uppercase tracking-tighter">
            Apu<span className="text-primary group-hover:text-white transition-colors duration-300">Nath</span>
          </span>
          
          {/* Animated Underline */}
          <motion.div 
            variants={{
              rest: { width: 0 },
              hover: { width: "100%" }
            }}
            className="-bottom-1 left-0 absolute bg-gradient-to-r from-primary to-secondary h-[3px]"
          />
        </div>

        <motion.span 
          variants={{
            rest: { opacity: 0.4, x: 0 },
            hover: { opacity: 1, x: 4 }
          }}
          className="mt-1 font-bold text-[9px] text-white uppercase tracking-[0.3em]"
        >
          Creative Developer
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Logo;