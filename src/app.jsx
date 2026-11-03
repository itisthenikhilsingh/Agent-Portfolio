import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, MotionConfig, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, Camera, CodeXml } from 'lucide-react';
import { EASE, getMotionPreference, MotionContext } from './shared/motion.js';
import ProjectDialog from './components/ProjectDialog.jsx';
import Awards from './sections/Awards.jsx';
import About from './sections/About.jsx';
import Breakdown from './sections/Breakdown.jsx';
import Contact from './sections/Contact.jsx';
import Header from './components/Header.jsx';
import SwarmBuild from './components/SwarmBuild.jsx';
import Hero from './sections/Hero.jsx';
import Journey from './sections/Journey.jsx';
import Portfolio from './sections/Portfolio.jsx';
import './styles/global.css';

export default function App() {
  const reduced = useReducedMotion();
  const [initialMotionOn] = useState(getMotionPreference);
  const startupSwarm = document.documentElement.hasAttribute('data-swarm-startup');
  const [motionOn, setMotionOn] = useState(() => startupSwarm ? false : initialMotionOn);
  const [swarmActive, setSwarmActive] = useState(false);
  const [swarmStatus, setSwarmStatus] = useState('');
  const motionBeforeSwarm = useRef(initialMotionOn);
  const autoSwarmStarted = useRef(false);
  const enabled = motionOn && !reduced;
  const [project, setProject] = useState(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 });
  useEffect(() => { document.documentElement.dataset.motion = enabled ? 'on' : 'off'; }, [enabled]);
  const toggle = () => {
    setMotionOn(!motionOn);
    try {
      localStorage.setItem('nikhil-motion', motionOn ? 'off' : 'on');
    } catch (error) {
      console.warn('Could not save motion preference.', error);
    }
  };
  const startSwarm = useCallback((automatic = false) => {
    if (!automatic) motionBeforeSwarm.current = motionOn;
    setMotionOn(false);
    setSwarmStatus('Loading local swarm engine.');
    setSwarmActive(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [motionOn]);
  useEffect(() => {
    if (autoSwarmStarted.current) return;
    autoSwarmStarted.current = true;
    startSwarm(true);
  }, [startSwarm]);
  const finishSwarm = useCallback((completed = false) => {
    document.documentElement.removeAttribute('data-swarm-startup');
    setSwarmActive(false);
    setMotionOn(motionBeforeSwarm.current);
    if (completed) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const close = useCallback(() => setProject(null), []);
  return <MotionContext.Provider value={enabled}>
    <MotionConfig reducedMotion={enabled ? 'user' : 'always'} transition={{ ease: EASE }}>
      <a className="skip-link" href="#about">Skip to about</a>
      <motion.div className="reading-progress" style={{ scaleX: enabled ? progress : scrollYProgress }} />
      <Header enabled={enabled} onToggle={toggle} onSwarm={startSwarm} />
      {swarmActive && <SwarmBuild onFinish={finishSwarm} onStatus={setSwarmStatus} />}
      {swarmActive && <span className="swarm-build-status" role="status" aria-live="polite">{swarmStatus}</span>}
      <main>
        <Hero onProject={setProject} />
        <About />
        <Journey onProject={setProject} />
        <Portfolio onProject={setProject} />
        <Awards onProject={setProject} />
        <Breakdown />
        <Contact onProject={setProject} />
      </main>
      <footer className="footer">
        <a className="wordmark" href="#home">NIKHIL<span>S</span></a>
        <span>© {new Date().getFullYear()} NIKHIL SINGH. INNOVATE. BUILD. DEPLOY.</span>
        <div>
          <a href="https://github.com/itisthenikhilsingh" target="_blank" rel="noopener noreferrer" aria-label="GitHub Nikhil Singh"><CodeXml size={17} /></a>
          <a href="https://www.linkedin.com/in/nikhil-singh-19b7a9233/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Nikhil Singh"><BriefcaseBusiness size={17} /></a>
          <a href="https://www.instagram.com/nik_hell" target="_blank" rel="noopener noreferrer" aria-label="Instagram Nikhil Singh"><Camera size={17} /></a>
          <a href="#home" aria-label="Back to top"><ArrowUpRight size={18} /></a>
        </div>
      </footer>
      <AnimatePresence>{project && <ProjectDialog key={project.title} project={project} onClose={close} />}</AnimatePresence>
    </MotionConfig>
  </MotionContext.Provider>;
}
