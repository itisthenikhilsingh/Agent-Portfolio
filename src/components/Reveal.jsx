import { useContext } from 'react';
import { motion } from 'framer-motion';
import { MotionContext } from '../shared/motion.js';

export default function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const enabled = useContext(MotionContext);
  const Component = motion[as];
  return <Component className={className} initial={enabled ? { opacity: 0, y: 36, scale: 0.94 } : false} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.12 }} transition={enabled ? { type: 'spring', stiffness: 95, damping: 20, mass: 0.8, delay } : { duration: 0 }}>{children}</Component>;
}
