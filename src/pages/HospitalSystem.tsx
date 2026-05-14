import { motion } from 'framer-motion';
import { Database, Shield, Cpu, Activity, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HospitalSystem() {
  const tech = ['Spring Boot', 'React', 'Redux', 'Material UI', 'Flask', 'Python', 'Scikit-learn', 'OpenAI GPT-4o-mini', 'MySQL', 'JWT'];
  const challenges = [
    {
      title: "RBAC Consistency",
      problem: "Ensuring secure access across multi-role environments.",
      solution: "Implemented JWT tokens with embedded role claims validated by a Spring Security filter on every request, mirrored by protected React routes for pre-emptive redirection."
    },
    {
      title: "Concurrent Booking Conflicts",
      problem: "Preventing double-booking in high-traffic appointment slots.",
      solution: "Resolved with database-level transactional locks (15-minute slot reservation) in the Appointment module."
    },
    {
      title: "GPT-4o-mini Integration",
      problem: "Extracting structured data from unstructured symptoms without regex complexity.",
      solution: "Prompted the model to return only structured JSON symptom vectors, consumed directly by the Random Forest classifier."
    }
  ];

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
        <div className="mono text-[10px] uppercase tracking-[0.3em] text-accent-blue font-bold mb-4">Architecture Deep Dive</div>
        <h1 className="text-5xl font-bold mb-6" style={{ letterSpacing: '-0.05em', overflowWrap: 'break-word' }}>Hospital OPD & Appointment Management</h1>
        <p className="text-xl text-secondary leading-relaxed max-w-[850px] opacity-80">
          A high-availability medical platform bridging legacy administrative flows with modern AI inference. 
          Built with a scalable N-tier architecture to handle concurrent multi-role traffic.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-8 items-start">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', minWidth: 0 }}>
          <motion.section variants={itemVariants} transition={{ duration: 0.5 }} className="panel" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-blue)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-3">
              <Shield size={18} className="text-accent-blue" /> Role: User & Dept Management Lead
            </h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: 0, listStyle: 'none' }}>
              {[
                "Architected the full authentication pipeline: registration, stateless JWT issuance, and persistent RBAC.",
                "Engineered the Department Management module with dynamic doctor-to-department linking logic.",
                "Enforced role-level security across Admin, Doctor, Patient, and Receptionist domains."
              ].map((bullet, i) => (
                <li key={i} style={{ display: 'flex', gap: '1.25rem', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <div style={{ width: '12px', height: '1.5px', background: 'var(--accent-blue)', marginTop: '0.75rem', flexShrink: 0 }} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} transition={{ duration: 0.5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
              <h2 className="mono text-[11px] uppercase tracking-[0.4em] text-muted">Core Architecture</h2>
              <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--border-color) 0%, transparent 100%)' }}></div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="panel" style={{ padding: '2.5rem' }}>
                <div style={{ padding: '0.8rem', background: 'var(--bg-tertiary)', borderRadius: '12px', width: 'fit-content', marginBottom: '1.5rem', color: 'var(--accent-purple)' }}>
                  <Cpu size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Decoupled ML Engine</h3>
                <p className="text-sm text-secondary leading-relaxed opacity-80">
                  Flask AI service runs on a dedicated port, ensuring heavy Random Forest inference operations do not increase latency for core transactional Spring Boot APIs.
                </p>
              </div>
              <div className="panel" style={{ padding: '2.5rem' }}>
                <div style={{ padding: '0.8rem', background: 'var(--bg-tertiary)', borderRadius: '12px', width: 'fit-content', marginBottom: '1.5rem', color: 'var(--accent-green)' }}>
                  <Database size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">High-Integrity Data</h3>
                <p className="text-sm text-secondary leading-relaxed opacity-80">
                  Fully normalized MySQL schema with strict foreign key constraints, guaranteeing medical records and billing links remain valid through complex update cycles.
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: 0 }}>
          <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="panel" style={{ padding: '2.5rem' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Technical Stack</h2>
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

          <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="panel" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(46, 160, 67, 0.05) 100%)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-2">
              <Activity size={16} className="text-accent-green" /> System Performance
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <div className="mono text-[10px] text-muted mb-2 uppercase tracking-widest">Model F1-Score</div>
                <div className="text-4xl font-bold gradient-text" style={{ background: 'linear-gradient(to right, var(--accent-green-bright), var(--accent-blue-bright))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>0.89</div>
                <div className="text-xs text-muted mt-1">Accuracy: 89.5%</div>
              </div>
              <div style={{ height: '1px', background: 'var(--border-color)' }}></div>
              <div>
                <div className="mono text-[10px] text-muted mb-2 uppercase tracking-widest">API Latency (200 Req/s)</div>
                <div className="text-3xl font-bold">120ms</div>
                <div className="text-xs text-muted mt-1">Measured on Spring Boot Gateway</div>
              </div>
            </div>
          </motion.div>
        </aside>
      </div>



      <motion.section variants={itemVariants} transition={{ duration: 0.5 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
          <h2 className="mono text-[11px] uppercase tracking-[0.4em] text-muted">Engineering Solutions</h2>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--border-color) 0%, transparent 100%)' }}></div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {challenges.map(c => (
            <div key={c.title} className="panel" style={{ padding: '2.5rem', minWidth: 0 }}>
              <div className="mono text-[9px] uppercase tracking-[0.2em] text-accent-blue mb-2 font-bold">Challenge</div>
              <h3 className="text-lg font-bold mb-3">{c.title}</h3>
              <p className="text-sm text-secondary mb-6 leading-relaxed" style={{ fontStyle: 'italic', opacity: 0.7 }}>"{c.problem}"</p>
              <div className="mono text-[9px] uppercase tracking-[0.2em] text-accent-green mb-2 font-bold">Resolution</div>
              <p className="text-sm text-muted leading-relaxed" style={{ overflowWrap: 'break-word' }}>{c.solution}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
