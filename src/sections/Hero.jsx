import { useContext, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react';
import { featured } from '../data/portfolio.js';
import { EASE, MotionContext } from '../shared/motion.js';
import Magnetic from '../components/Magnetic.jsx';

const SCROLL_SPRING = { stiffness: 75, damping: 22, mass: 0.7, restDelta: 0.001 };

export default function Hero({ onProject }) {
  const ref = useRef(null);
  const enabled = useContext(MotionContext);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const titleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 190]), SCROLL_SPRING);
  const titleX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -110]), SCROLL_SPRING);
  const titleScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.72]), SCROLL_SPRING);
  const portraitY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -105]), SCROLL_SPRING);
  const portraitX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 42]), SCROLL_SPRING);
  const portraitScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.24]), SCROLL_SPRING);
  const copyY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -75]), SCROLL_SPRING);
  const sideY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -38]), SCROLL_SPRING);
  return <section id="home" className="hero" ref={ref}>
    <div className="hero-top"><span>SOFTWARE ENGINEER<br /><span className="muted">BACKEND & FULL-STACK</span></span><span className="availability"><i />OPEN TO REMOTE OPPORTUNITIES</span></div>
    <motion.div className="hero-title display" aria-hidden="true" style={enabled ? { x: titleX, y: titleY, scale: titleScale } : {}} initial={enabled ? { clipPath: 'inset(0 0 100% 0)' } : false} animate={{ clipPath: 'inset(0 0 0% 0)' }} transition={{ duration: 1.4, ease: EASE }}>DEVELOPER</motion.div>
    <motion.div className="hero-portrait" style={enabled ? { x: portraitX, y: portraitY, scale: portraitScale } : {}} initial={enabled ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }}><img src="./Asset/img/nikhil-portrait.png" alt="Portrait of Nikhil Singh" width="768" height="1271" fetchPriority="high" /></motion.div>
    <motion.div className="hero-intro" style={enabled ? { y: copyY } : {}} initial={enabled ? { opacity: 0, x: -35 } : false} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.35, ease: EASE }}>
      <p className="handwriting">Hello, I’m</p><h1 className="display">NIKHIL<span>.</span></h1><p className="hero-role">SOFTWARE<br />ENGINEER</p><p className="hero-description">Building backend services for the VFS Global Visa Processing Platform with ASP.NET Core, REST APIs, and SQL Server.</p>
      <Magnetic href="#portfolio" className="primary-link">Explore my projects <ArrowDown size={17} /></Magnetic>
      <span className="hero-location"><MapPin size={12} /> NOIDA, INDIA</span>
    </motion.div>
    <motion.div className="hero-side" style={enabled ? { y: sideY } : {}} initial={enabled ? { opacity: 0, x: 30 } : false} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.55, ease: EASE }}>
      <div className="hero-manifesto"><span className="crosshair" aria-hidden="true">✳</span><p>Innovate.<br />Build. Deploy.</p></div>
      <div className="hero-stats"><div><span className="display">40<span>+</span></span><p>ASP.NET CORE<br />REST ENDPOINTS</p></div><div><span className="display">750<span>+</span></span><p>DSA PROBLEMS<br />SOLVED</p></div><div className="hero-award-stat"><span className="display">10<span>+</span></span><a href="#awards" aria-label="See Nikhil's profile highlights">COMPANIES SECURED<ArrowUpRight size={12} /></a></div><a href="./Asset/cv/Nikhil_Singh_Resume.pdf" download><Download size={16} /><span>DOWNLOAD RESUME</span></a></div>
    </motion.div>
    <div className="hero-bottom"><button className="reel-button" onClick={() => onProject(featured[0])}><span className="play-circle"><ArrowUpRight size={15} /></span>VIEW FEATURED PROJECT<span className="muted">SOFTWARE / WEB</span></button><span className="hero-scroll">SCROLL TO EXPLORE <ArrowDown size={13} /></span><span className="edition">SELECTED PROJECTS</span></div>
  </section>;
}
