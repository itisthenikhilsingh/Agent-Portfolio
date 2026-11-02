import { useState } from 'react';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import archive from '../data/projects.json';
import { awards } from '../data/portfolio.js';
import Reveal from '../components/Reveal.jsx';

export default function Awards({ onProject }) {
  const [expanded, setExpanded] = useState(false);
  const laurelPath = 'M48 94C8 68 9 30 35 5M22 61C8 60 3 49 3 44c12 0 19 6 19 17zm-5-19C5 35 6 23 8 19c11 5 13 14 9 23zm7-20C15 12 20 3 24 0c7 8 6 16 0 22zM31 79C17 79 8 70 7 64c13-2 22 4 24 15zm-3-18c-5-10-2-19 7-25 5 11 1 20-7 25zm10 24c-6-11-4-20 5-27 6 9 5 20-5 27z';
  return <section id="awards" className={`recognition section-wrap ${expanded ? 'awards-expanded' : ''}`}>
    <Reveal className="recognition-intro">
      <span className="eyebrow">PROFILE HIGHLIGHTS</span>
      <h2 className="display">ENGINEERING<br /><span className="accent">IN PRACTICE.</span></h2>
      <div className="award-total">
        <svg viewBox="0 0 60 100" aria-hidden="true"><path d={laurelPath} fill="currentColor" /></svg>
        <span className="display">2025</span>
        <svg viewBox="0 0 60 100" aria-hidden="true"><g transform="translate(60 0) scale(-1 1)"><path d={laurelPath} fill="currentColor" /></g></svg>
        <span className="award-total-label">GATE CS<br />QUALIFIED</span>
      </div>
      <p>Backend engineering, full-stack products, and a focus on practical problem solving.</p>
      <button className="text-link award-proof" onClick={() => onProject(archive[0])}>VIEW QUIZ EASY PROJECT<ArrowUpRight size={18} /></button>
    </Reveal>
    <div className="recognition-list">
      <div className="recognition-list-head"><span>CAREER & ENGINEERING HIGHLIGHTS</span><span>PROFILE SNAPSHOT</span></div>
      <ol id="recognition-list">{awards.map((award, i) => <Reveal as="li" className={`recognition-row ${i > 2 ? 'additional-award' : ''}`} key={award.year} delay={i * .045}>
        <span className="award-index">0{i + 1}</span>
        <div><h3>{award.title}</h3><p>{award.event}</p></div>
        <span className="award-year display">{award.year}</span>
      </Reveal>)}</ol>
      <button className="award-expand" aria-expanded={expanded} aria-controls="recognition-list" onClick={() => setExpanded(v => !v)}>{expanded ? 'Show fewer highlights' : 'See all highlights'}{expanded ? <Minus size={16} /> : <Plus size={16} />}</button>
    </div>
  </section>;
}
