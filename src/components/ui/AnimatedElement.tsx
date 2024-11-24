import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedElementProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
}

export const AnimatedElement = ({ 
  children, 
  delay = 0,
  ...props 
}: AnimatedElementProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          delay,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }}
      viewport={{ once: true, margin: '-100px' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
