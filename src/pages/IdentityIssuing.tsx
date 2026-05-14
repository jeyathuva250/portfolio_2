import { motion } from 'framer-motion';
import { Database, Shield, Zap, ArrowLeft, GitBranch, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function IdentityIssuing() {
  const tech = ['Spring Boot', 'Java', 'MySQL', 'React', 'HTML', 'CSS'];
  
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
        <div className="mono text-[10px] uppercase tracking-[0.3em] text-accent-green font-bold mb-4">Integrity-First Backend</div>
        <h1 className="text-5xl font-bold mb-6" style={{ letterSpacing: '-0.05em', overflowWrap: 'break-word' }}>SportsX Identity Issuing System</h1>
        <p className="text-xl text-secondary leading-relaxed max-w-[850px] opacity-80">
          A high-integrity identity management platform designed for scale, utilizing 
          backend-enforced validation and database-level triggers for comprehensive auditing.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-8 items-start">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', minWidth: 0 }}>
          <motion.section variants={itemVariants} className="panel" style={{ padding: '3rem', background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(56, 139, 253, 0.03) 100%)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-10 flex items-center gap-3">
              <Shield size={18} className="text-accent-blue" /> Architecture & Data Strategy
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: '12px', height: 'fit-content', color: 'var(--accent-blue)', border: '1px solid var(--border-color)', flexShrink: 0 }}>
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Normalized MySQL Engine</h3>
                  <p className="text-base text-secondary leading-relaxed opacity-80">
                    Engineered a fully normalized schema with composite indexes on high-frequency query paths. 
                    This guarantees O(log n) lookup performance even as the identity registry grows into the millions.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: '12px', height: 'fit-content', color: 'var(--accent-purple)', border: '1px solid var(--border-color)', flexShrink: 0 }}>
                  <GitBranch size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Decoupled Service Layer</h3>
                  <p className="text-base text-secondary leading-relaxed opacity-80">
                    Utilized a strict separation between Repository, Service, and Controller layers. 
                    This ensures business logic remains testable and decoupled from data access details.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
              <h2 className="mono text-[11px] uppercase tracking-[0.4em] text-muted">Technical Implementation</h2>
              <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--border-color) 0%, transparent 100%)' }}></div>
            </div>
            <div className="panel" style={{ padding: '3rem' }}>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal size={14} className="text-accent-blue" />
                    <h3 className="text-base font-bold">Audit Logic</h3>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">
                    Implemented MySQL triggers to enforce referential integrity and write to an immutable audit log. 
                    This captures every mutation without bloating the application codebase.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Zap size={14} className="text-accent-green" />
                    <h3 className="text-base font-bold">Write Safety</h3>
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">
                    Combines unique DB constraints with pre-write backend validation. 
                    Ensures 100% duplicate prevention with explicit user-friendly error propagation.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: 0 }}>
          <motion.div variants={itemVariants} className="panel" style={{ padding: '2.5rem' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">System Stack</h2>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {tech.map(t => (
                <span key={t} className="mono text-[10px] uppercase tracking-wider font-bold" style={{ 
                  background: 'rgba(255,255,255,0.03)', 
                  padding: '0.4rem 0.8rem', 
                  borderRadius: '6px', 
                  border: '1px solid var(--border-color)', 
                  color: 'var(--text-secondary)' 
                }}>{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="panel" style={{ padding: '2.5rem', background: 'var(--bg-tertiary)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent-blue mb-6">Integrity Metrics</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div className="text-4xl font-bold mb-1 tracking-tighter">100%</div>
                <div className="text-xs text-muted uppercase tracking-widest">Duplicate Prevention</div>
              </div>
              <div style={{ height: '1px', background: 'var(--border-color)' }}></div>
              <div>
                <div className="text-3xl font-bold mb-1 tracking-tighter">O(log n)</div>
                <div className="text-xs text-muted uppercase tracking-widest">Lookup Complexity</div>
              </div>
            </div>
          </motion.div>
        </aside>
      </div>
    </motion.div>
  );
}
