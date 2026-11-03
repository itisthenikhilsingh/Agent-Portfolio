import { useContext, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { MotionContext } from '../shared/motion.js';
import MediaImage from './MediaImage.jsx';

export default function ProjectCard({ project, index, onOpen }) {
  const enabled = useContext(MotionContext);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-20, 20]), { stiffness: 85, damping: 24, mass: 0.65 });
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.96, 1.04]), { stiffness: 85, damping: 24, mass: 0.65 });
  const video = ['youtube', 'drive'].includes(project.type);
  return <motion.article ref={ref} className="project-card" layout initial={enabled ? { opacity: 0, y: 36, scale: 0.94 } : false} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.08 }} transition={enabled ? { type: 'spring', stiffness: 110, damping: 20, delay: (index % 3) * 0.06 } : { duration: 0 }} exit={{ opacity: 0, scale: 0.96 }}>
    <button className="project-open" onClick={() => onOpen(project)} aria-label={`View ${project.title}`}><motion.div className="project-picture" style={enabled ? { y, scale } : {}}><MediaImage src={project.image} alt={project.title} /></motion.div><span className="project-type">{project.type === 'render' ? '3D BREAKDOWN' : video ? 'FILM / VIDEO' : project.type === 'website' ? 'WEBSITE' : 'PROJECT'}</span><span className="project-hover">{video ? <Play fill="currentColor" size={18} /> : <ArrowUpRight size={22} />}</span><span className="project-frame" aria-hidden="true" /></button>
    <button className="project-caption" onClick={() => onOpen(project)}><span className="project-number display">{String(index + 1).padStart(2, '0')}</span><span><h3>{project.title}</h3><span className="project-category">{project.category}{project.year ? ` / ${project.year}` : ''}</span></span><ArrowUpRight size={20} /></button>
  </motion.article>;
}
