import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;
    if (!cursorDot || !cursorRing) return;

    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) { setIsVisible(false); document.body.classList.remove('custom-cursor-active'); return; }

    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e) => {
      gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0, ease: 'none' });
      gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.15, ease: 'power2.out' });
    };

    const onEnter = () => {
      gsap.to(cursorDot, { scale: 2, backgroundColor: '#FF2E63', duration: 0.3, ease: 'power2.out' });
      gsap.to(cursorRing, { scale: 1.5, borderColor: '#FF2E63', duration: 0.3, ease: 'power2.out' });
    };

    const onLeave = () => {
      gsap.to(cursorDot, { scale: 1, backgroundColor: '#FF2E63', duration: 0.3, ease: 'power2.out' });
      gsap.to(cursorRing, { scale: 1, borderColor: 'rgba(255,46,99,0.3)', duration: 0.3, ease: 'power2.out' });
    };

    const onDown = () => gsap.to([cursorDot, cursorRing], { scale: 0.8, duration: 0.1, ease: 'power2.out' });
    const onUp = () => {
      gsap.to(cursorDot, { scale: 1, duration: 0.1, ease: 'power2.out' });
      gsap.to(cursorRing, { scale: 1, duration: 0.1, ease: 'power2.out' });
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    const els = document.querySelectorAll('button, a, input, textarea, [role="button"]');
    els.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave); });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.body.classList.remove('custom-cursor-active');
      els.forEach(el => { el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave); });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={cursorDotRef} className="z-[9999] fixed bg-primary rounded-full w-2 h-2 cursor-dot pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }} />
      <div ref={cursorRingRef} className="z-[9998] fixed border border-primary/30 rounded-full w-8 h-8 cursor-ring pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }} />
    </>
  );
};

export default CustomCursor;
