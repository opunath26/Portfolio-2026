import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MagneticButton = ({ children, className, onClick, isSpecial = false, ...props }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const multiplier = isSpecial ? 0.6 : 0.4;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(button, { x: x * multiplier, y: y * multiplier, duration: 0.3, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isSpecial]);

  return (
    <button ref={buttonRef} className={`${className} cursor-pointer`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default MagneticButton;
