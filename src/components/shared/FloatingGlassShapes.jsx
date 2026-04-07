import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FloatingGlassShapes = () => {
  const shapesRef = useRef([]);

  useEffect(() => {
    shapesRef.current.forEach((shape, index) => {
      if (!shape) return;
      const speed = 0.5 + index * 0.3;

      gsap.to(shape, { y: -30, duration: 3 + index, ease: 'power2.inOut', yoyo: true, repeat: -1 });
      gsap.to(shape, {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: { trigger: shape, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <div className="z-0 fixed inset-0 pointer-events-none">
      <div ref={el => shapesRef.current[0] = el} className="top-20 left-10 absolute bg-white/5 shadow-lg backdrop-blur-sm border border-white/10 rounded-full w-32 h-32" />
      <div ref={el => shapesRef.current[1] = el} className="top-40 right-20 absolute bg-pink-500/10 shadow-lg backdrop-blur-sm border border-pink-300/20 rounded-2xl w-24 h-24 rotate-45" />
      <div ref={el => shapesRef.current[2] = el} className="top-96 left-1/3 absolute bg-purple-500/10 shadow-lg backdrop-blur-sm border border-purple-300/20 rounded-full w-20 h-20" />
      <div ref={el => shapesRef.current[3] = el} className="right-10 bottom-40 absolute bg-indigo-500/10 shadow-lg backdrop-blur-sm border border-indigo-300/20 rounded-3xl w-28 h-28 rotate-12" />
      <div ref={el => shapesRef.current[4] = el} className="bottom-20 left-20 absolute bg-white/5 shadow-lg backdrop-blur-sm border border-white/15 rounded-full w-16 h-16" />
    </div>
  );
};

export default FloatingGlassShapes;
