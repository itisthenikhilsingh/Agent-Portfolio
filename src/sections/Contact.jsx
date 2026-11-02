import { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, CodeXml, Mail, MapPin, Plus } from 'lucide-react';
import { featured } from '../data/portfolio.js';
import Magnetic from '../components/Magnetic.jsx';
import MediaImage from '../components/MediaImage.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Contact({ onProject }) {
  const [sent, setSent] = useState(false);
  const send = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Hi Nikhil, I'm ${data.get('name')}.\n\nI'd like to discuss: ${data.get('type')}\n${data.get('message')}`;
    window.location.href = `mailto:nikhilsingh672001@gmail.com?subject=${encodeURIComponent('Portfolio enquiry')}&body=${encodeURIComponent(text)}`;
    setSent(true);
  };
  return <section id="contact" className="contact section-wrap">
    <div className="contact-grid"><Reveal className="contact-intro"><span className="eyebrow">04 / GET IN TOUCH</span><h2 className="display">LET’S BUILD<br />SOMETHING<span className="accent">.</span></h2><p>Open to remote opportunities worldwide.<br />Based in Noida, India.</p><Magnetic href="mailto:nikhilsingh672001@gmail.com" className="contact-cta"><span className="round-arrow"><ArrowUpRight size={21} /></span>EMAIL NIKHIL</Magnetic></Reveal>
      <Reveal className="contact-links" delay={0.1}><a href="mailto:nikhilsingh672001@gmail.com"><Mail /><span><small>EMAIL</small>nikhilsingh672001@gmail.com</span><ArrowUpRight size={16} /></a><a href="https://github.com/itisthenikhilsingh" target="_blank" rel="noopener noreferrer"><CodeXml /><span><small>GITHUB</small>itisthenikhilsingh</span><ArrowUpRight size={16} /></a><a href="https://www.linkedin.com/in/nikhil-singh-19b7a9233/" target="_blank" rel="noopener noreferrer"><BriefcaseBusiness /><span><small>LINKEDIN</small>Nikhil Singh</span><ArrowUpRight size={16} /></a><div><MapPin /><span><small>BASED IN</small>Noida, India</span></div></Reveal>
      <Reveal className="contact-reel" delay={0.2}><button onClick={() => onProject(featured[0])} aria-label="View Quiz Easy project"><div className="reel-screen"><span className="reel-screen-top">NIKHIL SINGH<span>SOFTWARE / PROJECTS</span></span><MediaImage src={featured[0]?.image} alt="Quiz Easy project preview" /><span className="reel-screen-title display">BUILD<br /><span>AND DEPLOY.</span></span><span className="play-circle"><ArrowUpRight size={18} /></span></div><span className="reel-caption">EXPLORE A FEATURED PROJECT.</span></button></Reveal></div>
    <Reveal><details className="project-brief"><summary>Send a project enquiry <Plus size={19} /></summary><form onSubmit={send}><label>Your name<input name="name" required placeholder="Name" autoComplete="name" maxLength="100" /></label><label>What would you like to discuss?<select name="type"><option>Backend engineering</option><option>Java & Spring Boot</option><option>Full-stack development</option><option>Cloud & DevOps</option><option>Project collaboration</option><option>Other</option></select></label><label className="brief-message">Message<textarea name="message" required rows="3" placeholder="Tell me a little about your project…" maxLength="3000" /></label><button className="solid-button" type="submit">Continue to email <ArrowUpRight size={18} /></button><p className="form-note" role="status">{sent ? 'Your email draft is ready in your mail app.' : 'This opens a pre-filled email draft.'}</p></form></details></Reveal>
  </section>;
}
