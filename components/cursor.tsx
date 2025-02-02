'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.5,
      }}
    >
      <div className="w-full h-full bg-primary/50 rounded-full blur-sm" />
    </motion.div>
  );
}