import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Plus, Search, X } from 'lucide-react';
import archive from '../data/projects.json';
import { categories, featured } from '../data/portfolio.js';
import BrandStrip from '../components/BrandStrip.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Portfolio({ onProject }) {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [limit, setLimit] = useState(9);
  const results = archive.filter(p => (category === 'All' || p.category === category) && `${p.title} ${p.category} ${p.role} ${p.description}`.toLowerCase().includes(query.toLowerCase()));
  const projects = expanded || category !== 'All' || query ? results.slice(0, limit) : featured;
  return <section id="portfolio" className="portfolio section-wrap">
    <Reveal className="section-heading"><div><span className="eyebrow">03 / SELECTED WORK</span><h2>PROJECTS IN FOCUS<span className="accent">.</span></h2></div><button className="text-link" onClick={() => { if (expanded) { setExpanded(false); setCategory('All'); setQuery(''); } else { setExpanded(true); setLimit(9); } }}>{expanded ? 'FEATURED PROJECTS' : 'ALL PROJECTS'}<ArrowRight size={21} /></button></Reveal>
    <Reveal className="portfolio-toolbar">
      <div className="filters" role="group" aria-label="Project categories">
        {categories.map(c => <button key={c} className={category === c ? 'selected' : ''} aria-pressed={category === c} onClick={() => { setCategory(c); setExpanded(true); setLimit(9); }}>{c}{c === category && <motion.span className="filter-line" layoutId="filter-line" />}</button>)}
      </div>
      <label className="search-box"><Search size={15} /><span>Search</span><input aria-label="Search projects" type="search" placeholder="Title, category, or description…" value={query} onChange={e => { setQuery(e.target.value); setExpanded(true); setLimit(9); }} /></label>
    </Reveal>
    <motion.div className="project-grid" layout><AnimatePresence mode="popLayout">{projects.map((p, i) => <ProjectCard key={p.category + p.title + p.media} project={p} index={i} onOpen={onProject} />)}</AnimatePresence></motion.div>
    {projects.length === 0 && <div className="empty-state"><p>No projects found for “{query}”.</p><button className="text-link" onClick={() => { setQuery(''); setCategory('All'); }}>Reset search <X size={15} /></button></div>}
    {expanded && results.length > limit && <div className="load-more"><button className="outline-button" onClick={() => setLimit(v => v + 9)}>Load more projects <Plus size={16} /></button><span>{projects.length} of {results.length} projects</span></div>}
    <BrandStrip />
  </section>;
}
