import { useContext, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { processSteps } from '../data/portfolio.js';
import { MotionContext } from '../shared/motion.js';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  const enabled = useContext(MotionContext);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 75%'] });
  return <section id="about" className="about section-wrap" ref={ref}>
    <Reveal className="about-lead"><div><span className="eyebrow">01 / ABOUT ME</span><h2 className="display">BUILDING SYSTEMS.<br />SOLVING <span className="accent">REAL PROBLEMS.</span></h2></div><p>Highly adaptable Software Engineer with production-level experience across .NET (C#, ASP.NET Core) and Java (Spring Boot), and the ability to switch stacks to meet enterprise needs. At Mphasis, building scalable REST APIs, microservices, and SQL Server architectures for the VFS Global Visa Processing Platform, supporting appointment management, slot configuration, and operational workflows.</p></Reveal>
    <div className="studio-grid">
      <Reveal className="education-panel"><h3 className="panel-heading">EDUCATION & SKILLS</h3><p className="eyebrow accent">EDUCATION</p><div className="education-row"><strong>Dr. B. R. Ambedkar National Institute of Technology Jalandhar</strong><span>B.Tech · Information Technology · Sep 2021 – Jul 2025</span><p>NIT Jalandhar (NITJ).</p></div><div className="education-row"><strong>Placement Representative</strong><span>NITJ</span><p>Secured 10+ companies for campus recruitment.</p></div><div className="education-row"><strong>GATE 2025</strong><p>Computer Science · Qualified</p></div><p className="eyebrow accent skills-heading">TECH STACK</p><div className="skill-tags">{['C#', 'Java', 'JavaScript', 'SQL', 'C++', '.NET 10', 'ASP.NET Core', 'Spring Boot', 'Web API', 'REST APIs', 'Microservices', 'Entity Framework Core', 'LINQ', 'SQL Server', 'MongoDB', 'Microsoft Azure', 'Azure DevOps', 'AWS', 'Docker', 'Git', 'Visual Studio Code', 'Vite', 'Tailwind CSS', 'Postman', 'xUnit', 'Moq'].map(s => <span key={s}>{s}</span>)}</div><div className="software-row">{[['azure', 'Microsoft Azure'], ['cplusplus', 'C++'], ['git', 'Git'], ['javascript', 'JavaScript'], ['microsoftsqlserver', 'Microsoft SQL Server'], ['react', 'React']].map(([file, name]) => <img key={file} src={`./Asset/svg/${file}.svg`} alt={name} title={name} loading="lazy" width="28" height="28" />)}</div></Reveal>
      <div className="process-panel"><Reveal><h3 className="panel-heading">HOW I BUILD SOFTWARE</h3></Reveal><div className="process-list"><div className="process-track"><motion.div style={{ scaleY: enabled ? scrollYProgress : 1 }} /></div>{processSteps.map(([num, title, text], i) => <Reveal key={num} className="process-row" delay={i * 0.035}><span className="process-num display">{num}</span><span className="process-node" /><div><h4>{title}</h4><p>{text}</p></div></Reveal>)}</div></div>
      <Reveal className="quote-panel"><span className="quote-mark display">“</span><blockquote>Innovate.<br />Build.<br /><em>Deploy.</em></blockquote><span className="handwriting">Nikhil</span><div className="quote-bottom">FROM COMPLEX REQUIREMENTS<br />TO PRODUCTION-READY SOLUTIONS.<span className="quote-symbol" aria-hidden="true">✳</span></div></Reveal>
    </div>
  </section>;
}
