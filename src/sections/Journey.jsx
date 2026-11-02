import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Download, Minus, Plus } from 'lucide-react';
import archive from '../data/projects.json';
import { experiences } from '../data/portfolio.js';
import { EASE } from '../shared/motion.js';
import Reveal from '../components/Reveal.jsx';

export default function Journey({ onProject }) {
  const [open, setOpen] = useState(0);
  return <section id="experience" className="journey section-wrap">
    <Reveal className="section-heading"><div><span className="eyebrow">03 / EXPERIENCE</span><h2>BUILDING FOR THE REAL WORLD<span className="accent">.</span></h2></div><a className="text-link" href="./Asset/cv/Nikhil_Singh_Resume.pdf" download>DOWNLOAD RESUME<Download size={16} /></a></Reveal>
    <div className="journey-grid"><div className="experience-list">{experiences.map((job, i) => <Reveal className={`experience-row ${open === i ? 'is-open' : ''}`} key={job.title}><button aria-expanded={open === i} aria-controls={`job-${i}`} onClick={() => setOpen(open === i ? null : i)}><span className="experience-date">{job.date}</span><span><h3>{job.title}</h3><span className="experience-place">{job.place}</span></span>{open === i ? <Minus size={18} /> : <Plus size={18} />}</button><AnimatePresence initial={false}>{open === i && <motion.div id={`job-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }}><p>{job.text}</p></motion.div>}</AnimatePresence></Reveal>)}</div>
      <Reveal className="awards-panel"><p className="eyebrow">SELECTED PROJECTS</p><h3 className="display">IDEAS INTO<br /><span className="accent">APPLICATIONS.</span></h3><div className="award-list">{archive.map((project, i) => <button key={project.title} onClick={() => onProject(project)}><span>{String(i + 1).padStart(2, '0')}</span><span>{project.title}<small>{project.category}</small></span><ArrowUpRight size={19} /></button>)}</div></Reveal></div>
  </section>;
}
