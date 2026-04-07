import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingImage = ({ children, className, intensity = 1 }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    gsap.to(image, { y: -20 * intensity, duration: 3, ease: 'power2.inOut', yoyo: true, repeat: -1 });
    gsap.to(image, { rotation: 2 * intensity, duration: 4, ease: 'power2.inOut', yoyo: true, repeat: -1 });

    return () => { gsap.killTweensOf(image); };
  }, [intensity]);

  return <div ref={imageRef} className={className}>{children}</div>;
};

export default FloatingImage;
