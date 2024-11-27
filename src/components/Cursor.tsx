import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div 
      ref={cursorRef}
      className="fixed w-8 h-8 pointer-events-none z-50"
      style={{
        transform: 'translate(-50%, -50%)',
        backgroundImage: 'url(/lovable-uploads/aeee2638-80e5-430d-aff3-68353b105527.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        mixBlendMode: 'difference'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default Cursor;