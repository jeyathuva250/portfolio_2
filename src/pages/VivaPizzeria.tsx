import { motion } from 'framer-motion';
import { Smartphone, Zap, Box, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function VivaPizzeria() {
  const tech = ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'];
  
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="dashboard-container"
      style={{ display: 'flex', flexDirection: 'column', paddingBottom: '6rem', maxWidth: '100%', overflowX: 'hidden' }}
    >
      <header>
        <Link to="/" className="back-button">
          <ArrowLeft size={16} /> <span className="mono text-[10px] uppercase tracking-widest">Back to Systems</span>
        </Link>
        <div className="mono text-[10px] uppercase tracking-[0.3em] text-accent-yellow font-bold mb-4">Frontend Engineering</div>
        <h1 className="text-5xl font-bold mb-6" style={{ letterSpacing: '-0.05em', overflowWrap: 'break-word' }}>Viva Pizzeria & Pasta House</h1>
        <p className="text-xl text-secondary leading-relaxed max-w-[850px] opacity-80">
          A premium digital experience for a modern restaurant. Built with 
          asset-optimization and cinematic motion design at its core.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-8 items-start">
        <motion.section variants={itemVariants} className="panel" style={{ padding: '3rem', background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(210, 153, 34, 0.03) 100%)' }}>
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-10 flex items-center gap-3">
            <Box size={18} className="text-accent-yellow" /> Reusable Architecture
          </h2>
          <p className="text-base text-secondary leading-relaxed mb-8 opacity-80">
            Developed a modular component system that powers the entire menu experience, 
            allowing for dynamic updates via a unified data structure.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {['MenuSection', 'ProductCard', 'MotionButton', 'NavOverlay'].map(comp => (
              <span key={comp} className="mono text-[10px] tracking-wider" style={{ padding: '0.4rem 0.75rem', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--accent-yellow)' }}>{comp}.tsx</span>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="panel" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-yellow)' }}>
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-10 flex items-center gap-3">
            <Zap size={18} className="text-accent-yellow" /> Motion Design
          </h2>
          <p className="text-base text-secondary leading-relaxed opacity-80">
            Utilized Framer Motion to implement staggered reveal animations and tactile hover states. 
            The result is a cinematic feel that increases perceived brand value.
          </p>
        </motion.section>
      </div>

      <div className="grid grid-cols-2 gap-8 items-start">
        <motion.section variants={itemVariants} className="panel" style={{ padding: '3rem' }}>
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-10 flex items-center gap-3">
            <Smartphone size={18} className="text-accent-blue" /> Mobile-First Optimization
          </h2>
          <p className="text-base text-secondary leading-relaxed mb-8 opacity-80">
            Engineered using a strict mobile-first strategy. Every interaction—from navigation 
            to checkout—is optimized for high-speed touch interactions.
          </p>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div>
              <div className="text-2xl font-bold mb-1">98/100</div>
              <div className="mono text-[10px] uppercase tracking-widest text-muted">Lighthouse Perf</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">{"<"} 0.8s</div>
              <div className="mono text-[10px] uppercase tracking-widest text-muted">LCP Target</div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="panel" style={{ padding: '3rem' }}>
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-10 flex items-center gap-3">
            <ImageIcon size={18} className="text-accent-green" /> Asset Engineering
          </h2>
          <p className="text-sm text-secondary leading-relaxed opacity-80 mb-6">
            Leveraged Next.js Image optimization and WebP conversion to serve 
            high-fidelity photography with minimal payload.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['Next/Image Integration', 'Dynamic Sharp Resizing', 'WebP/AVIF Support'].map(feat => (
              <div key={feat} className="flex items-center gap-2 text-xs text-muted">
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-green)' }} />
                {feat}
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <motion.div variants={itemVariants} className="panel" style={{ padding: '2.5rem' }}>
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 text-center">Core Stack</h2>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {tech.map(t => (
            <span key={t} className="text-lg font-bold tracking-tight px-6 py-2" style={{ background: 'var(--bg-tertiary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>{t}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
