import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Database, Server, Code, Activity, MapPin, GraduationCap, Mail, Phone, ExternalLink, Smartphone } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Dashboard() {

  const projects = [
    { 
      name: 'Hospital OPD System', 
      desc: 'N-tier architecture with Spring Boot & AI inference layer. Role: User & Dept Management Lead.', 
      path: '/hospital', 
      icon: Database,
      tech: ['Spring Boot', 'React', 'Flask', 'MySQL', 'GPT-4o-mini'],
      color: 'var(--accent-blue)'
    },
    { 
      name: 'HMS Mobile App', 
      desc: 'Full-stack React Native ecosystem with Express.js backend and MongoDB data orchestration.', 
      path: '/hms-mobile', 
      icon: Smartphone,
      tech: ['React Native', 'Node.js', 'Express', 'MongoDB'],
      color: 'var(--accent-purple)'
    },
    { 
      name: 'SportsX Identity', 
      desc: 'High-integrity identity management with concurrent update consistency via MySQL triggers.', 
      path: '/sportsx', 
      icon: Server,
      tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
      color: 'var(--accent-green)'
    },
    { 
      name: 'Flight Delay AI', 
      desc: 'Reproducible ML pipeline for predictive analytics on imbalanced datasets.', 
      path: '/flight-delay', 
      icon: Activity,
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      color: 'var(--accent-purple)'
    },
    { 
      name: 'Viva Pizzeria', 
      desc: 'Responsive restaurant platform with optimized Next.js components and micro-interactions.', 
      path: '/viva', 
      icon: Code,
      tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
      color: 'var(--accent-yellow)'
    },
  ];

  const skillGroups = [
    { name: 'Backend Frameworks', items: ['Spring Boot', 'Node.js', 'Express', 'Flask', 'REST API Design', 'JWT Authentication'] },
    { name: 'Frontend Development', items: ['React', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS', 'Redux', 'Material UI', 'Framer Motion', 'Responsive Design'] },
    { name: 'AI / ML', items: ['Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'TensorFlow (basic)'] },
    { name: 'Languages', items: ['Java', 'Python', 'C', 'JavaScript'] },
    { name: 'Databases', items: ['MySQL', 'MongoDB', 'MS SQL Server', 'T-SQL'] },
    { name: 'Dev Tools', items: ['Git', 'GitHub', 'Postman', 'IntelliJ', 'VS Code', 'Apache Tomcat'] },
  ];



  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="dashboard-container"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '6rem', position: 'relative' }}
    >
      {/* Decorative Glows */}
      <div className="sidebar-desktop" style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(56, 139, 253, 0.05) 0%, transparent 70%)', zIndex: -1 }}></div>
      <div className="sidebar-desktop" style={{ position: 'absolute', top: '40%', left: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(46, 160, 67, 0.03) 0%, transparent 70%)', zIndex: -1 }}></div>

      {/* Hero Section */}
      <motion.section variants={itemVariants} transition={{ duration: 0.5 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ padding: '0.4rem 0.8rem', background: 'rgba(46, 160, 67, 0.1)', border: '1px solid rgba(46, 160, 67, 0.2)', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-green-bright)', boxShadow: '0 0 8px var(--accent-green-bright)' }}></div>
            <span className="mono text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--accent-green-bright)', fontWeight: 700 }}>Available for Internships</span>
          </div>
        </div>
        <h1 className="text-6xl font-bold" style={{ marginBottom: '2rem', letterSpacing: '-0.05em', lineHeight: 1.05 }}>
          Architecting <span className="gradient-text">intelligent systems</span> <br className="sidebar-desktop" /> for the next generation.
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', fontSize: '1.35rem', lineHeight: '1.6', fontWeight: 400, letterSpacing: '-0.01em' }}>
          Jeyanthan Thuvarakan — Software Engineer specialized in AI, Machine Learning, and Full-Stack development. 
          Building intelligent systems that bridge the gap between robust backends and predictive inference.
        </p>
      </motion.section>

      {/* Projects Grid */}
      <motion.section variants={itemVariants} transition={{ duration: 0.5 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
          <h2 className="mono text-[11px] uppercase tracking-[0.4em] text-muted">Selected Systems</h2>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--border-color) 0%, transparent 100%)' }}></div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.name} to={project.path} className="panel-link">
              <div className="panel" style={{ padding: '2.5rem', height: '100%', position: 'relative', overflow: 'hidden' }}>
                <div className="flex justify-between items-start mb-6">
                  <div style={{ padding: '0.8rem', background: 'var(--bg-tertiary)', borderRadius: '12px', color: project.color, border: '1px solid var(--border-color)' }}>
                    <project.icon size={24} />
                  </div>
                  <ArrowUpRight size={20} className="text-muted" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                <p className="text-secondary leading-relaxed mb-6 opacity-80">{project.desc}</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="mono text-[9px] uppercase tracking-wider px-2 py-1 bg-black/20 rounded border border-white/5">{t}</span>
                  ))}
                  {project.tech.length > 3 && <span className="mono text-[9px] uppercase tracking-wider px-2 py-1 bg-black/20 rounded border border-white/5">+{project.tech.length - 3}</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Technical Arsenal */}
      <motion.section variants={itemVariants} transition={{ duration: 0.5 }} id="skills">
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
          <h2 className="mono text-[11px] uppercase tracking-[0.4em] text-muted">Technical Arsenal</h2>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--border-color) 0%, transparent 100%)' }}></div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.name} className="panel" style={{ padding: '2rem' }}>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-accent-blue">{group.name}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {group.items.map((skill) => (
                  <span key={skill} className="mono text-[10px] tracking-wider px-3 py-1.5 bg-white/5 rounded-full border border-white/5 hover:border-accent-blue/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience / Education */}
      <motion.section variants={itemVariants} transition={{ duration: 0.5 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
          <h2 className="mono text-[11px] uppercase tracking-[0.4em] text-muted">Infrastructure & Foundation</h2>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--border-color) 0%, transparent 100%)' }}></div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="panel" style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', borderLeft: '4px solid var(--accent-blue)' }}>
            <div style={{ padding: '0.8rem', background: 'var(--bg-tertiary)', borderRadius: '12px', height: 'fit-content', color: 'var(--accent-blue)' }}>
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">B.Sc. (Hons) in IT</h3>
              <div className="text-base text-secondary mb-2">SLIIT</div>
              <div className="mono text-[10px] text-muted font-bold uppercase tracking-widest mb-4">2024 — 2028 | AI Specialization</div>
              <p className="text-sm text-muted leading-relaxed opacity-80">
                Deep diving into ML theory, intelligent systems, and scalable backend engineering. GPA Maintainer.
              </p>
            </div>
          </div>

          <div className="panel" style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', borderLeft: '4px solid var(--accent-yellow)' }}>
            <div style={{ padding: '0.8rem', background: 'var(--bg-tertiary)', borderRadius: '12px', height: 'fit-content' }}>
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">G.C.E. Advanced Level</h3>
              <div className="text-base text-secondary mb-1">Jaffna Hindu College</div>
              <div className="mono text-[10px] text-muted font-bold uppercase tracking-widest">2022 A/L | Biology, Physics, Chemistry</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section variants={itemVariants} transition={{ duration: 0.5 }} className="panel" style={{ padding: '3.5rem 2rem', textAlign: 'center', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, rgba(56, 139, 253, 0.05) 100%)', border: '1px solid var(--border-color)', borderRadius: '24px' }}>
        <div className="mono text-[10px] uppercase tracking-[0.4em] text-accent-blue mb-6 font-bold">Contact & Inquiries</div>
        <h2 className="text-4xl font-bold mb-8 tracking-tight">Let's build the <span className="gradient-text">next big thing</span> together.</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          <a href="mailto:jeyathuva25@gmail.com" className="back-button" style={{ margin: 0, padding: '1rem 2rem', gap: '1rem' }}>
            <Mail size={20} /> <span className="font-bold">Email Me</span>
          </a>
          <a href="https://www.linkedin.com/in/thuvarakan-jeyanthan-50414b369?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="back-button" style={{ margin: 0, padding: '1rem 2rem', gap: '1rem' }}>
            <ExternalLink size={20} /> <span className="font-bold">LinkedIn</span>
          </a>
        </div>
        <div className="mono text-sm text-muted space-y-4">
          <div className="flex items-center justify-center gap-3"><Phone size={16} className="text-accent-blue" /> +94 779 879 423</div>
          <div className="flex items-center justify-center gap-3"><MapPin size={16} className="text-accent-blue" /> Jaffna, Sri Lanka</div>
        </div>
      </motion.section>
    </motion.div>
  );
}
