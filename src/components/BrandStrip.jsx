import { useContext, useEffect, useRef, useState } from 'react';
import { useAnimationFrame, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Minus, Pause, Play, Plus } from 'lucide-react';
import brands from '../data/brands.json';
import { MotionContext } from '../shared/motion.js';
import Reveal from './Reveal.jsx';

export default function BrandStrip() {
  const enabled = useContext(MotionContext);
  const ref = useRef(null);
  const loopWidth = useRef(0);
  const inView = useInView(ref);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (!ref.current || showAll) return;
    const update = () => { loopWidth.current = ref.current?.querySelector('.brand-set')?.getBoundingClientRect().width || 0; };
    const observer = new ResizeObserver(update);
    observer.observe(ref.current); update();
    return () => observer.disconnect();
  }, [showAll]);
  useAnimationFrame((time, delta) => {
    if (!enabled || paused || interacting || !inView || showAll || !ref.current || !loopWidth.current) return;
    const el = ref.current;
    el.scrollLeft += Math.min(delta, 40) * 0.038;
    if (el.scrollLeft >= loopWidth.current) el.scrollLeft -= loopWidth.current;
  });
  const move = direction => { setPaused(true); ref.current?.scrollBy({ left: direction * ref.current.clientWidth * .7, behavior: enabled ? 'smooth' : 'instant' }); };
  return <Reveal className="brand-section"><div className="brand-heading"><p>TECH STACK<br /><strong>TOOLS I WORK WITH.</strong></p><div><button className="brand-all" onClick={() => setShowAll(v => !v)} aria-expanded={showAll} aria-controls="brand-collection">{showAll ? 'SHOW LESS' : `VIEW ALL (${brands.length})`}{showAll ? <Minus size={14} /> : <Plus size={14} />}</button>{!showAll && <><button className="icon-button brand-pause" aria-label={paused ? 'Resume logo animation' : 'Pause logo animation'} aria-pressed={paused} onClick={() => setPaused(v => !v)}>{paused ? <Play size={13} /> : <Pause size={13} />}</button><button className="icon-button" onClick={() => move(-1)} aria-label="Previous technologies"><ChevronLeft size={17} /></button><button className="icon-button" onClick={() => move(1)} aria-label="Next technologies"><ChevronRight size={17} /></button></>}</div></div><div id="brand-collection" className={showAll ? 'brand-full-grid' : 'brand-viewport'} ref={ref} onPointerEnter={e => { if (e.pointerType === 'mouse') setInteracting(true); }} onPointerLeave={() => setInteracting(false)} onPointerDown={() => setPaused(true)} onFocusCapture={() => setInteracting(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false); }} tabIndex={showAll ? undefined : 0} role={showAll ? 'list' : 'region'} aria-label="Technology logos, scroll to explore">
    {showAll ? brands.map(b => <div className="brand-logo" key={b.file} role="listitem"><img src={`./Asset/svg/brand/${b.file}`} alt={b.name} title={b.name} width="150" height="60" loading="lazy" /><span>{b.name}</span></div>) : <div className="brand-rail">{[0, 1].map(copy => <div className="brand-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>{brands.map(b => <div className="brand-logo" key={b.file}><img src={`./Asset/svg/brand/${b.file}`} alt={copy ? '' : b.name} title={b.name} width="150" height="60" loading="lazy" draggable="false" /></div>)}</div>)}</div>}
  </div></Reveal>;
}
