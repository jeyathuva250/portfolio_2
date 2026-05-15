import { motion } from 'framer-motion';
import { Database, Shield, Smartphone, Server, ArrowLeft, Layout, Settings, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HMSMobileApp() {
  const tech = ['React Native', 'Expo', 'Expo Router', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'RESTful API'];
  const highlights = [
    {
      title: "Scalable Architecture",
      desc: "Built a robust client-server mobile application architecture ensuring seamless communication and performance."
    },
    {
      title: "Secure Authentication",
      desc: "Implemented a high-integrity JWT-based authentication and authorization system for sensitive healthcare data."
    },
    {
      title: "Modular Backend",
      desc: "Structured the Express server using modular practices for maintainability and independent service scaling."
    },
    {
      title: "Mobile-First UX",
      desc: "Focused on a responsive healthcare workflow management specifically optimized for mobile devices."
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
        <div className="mono text-[10px] uppercase tracking-[0.3em] text-accent-blue font-bold mb-4">Mobile Infrastructure</div>
        <h1 className="text-5xl font-bold mb-6" style={{ letterSpacing: '-0.05em', overflowWrap: 'break-word' }}>HMS Mobile Ecosystem</h1>
        <p className="text-xl text-secondary leading-relaxed max-w-[850px] opacity-80">
          A modern full-stack Hospital Management mobile application designed to digitize healthcare workflows. 
          Bridging mobile accessibility with secure, scalable backend services.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-8 items-start">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', minWidth: 0 }}>
          <motion.section variants={itemVariants} transition={{ duration: 0.5 }} className="panel" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-blue)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-3">
              <Layers size={18} className="text-accent-blue" /> Project Architecture
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div style={{ display: 'flex', gap: '1.25rem' }}>
                <div style={{ padding: '0.6rem', background: 'var(--bg-tertiary)', borderRadius: '8px', height: 'fit-content' }}>
                  <Smartphone size={18} className="text-accent-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">frontend/</h4>
                  <p className="text-sm text-secondary opacity-70">Expo React Native mobile application with file-based routing via Expo Router.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.25rem' }}>
                <div style={{ padding: '0.6rem', background: 'var(--bg-tertiary)', borderRadius: '8px', height: 'fit-content' }}>
                  <Server size={18} className="text-accent-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">backend/</h4>
                  <p className="text-sm text-secondary opacity-70">Express REST API server handling business logic and secure data orchestration.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1.25rem' }}>
                <div style={{ padding: '0.6rem', background: 'var(--bg-tertiary)', borderRadius: '8px', height: 'fit-content' }}>
                  <Database size={18} className="text-accent-green" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">database/</h4>
                  <p className="text-sm text-secondary opacity-70">MongoDB collections with strictly defined Mongoose models for data integrity.</p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} transition={{ duration: 0.5 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
              <h2 className="mono text-[11px] uppercase tracking-[0.4em] text-muted">Core Features</h2>
              <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--border-color) 0%, transparent 100%)' }}></div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="panel" style={{ padding: '2.5rem' }}>
                <div style={{ padding: '0.8rem', background: 'var(--bg-tertiary)', borderRadius: '12px', width: 'fit-content', marginBottom: '1.5rem', color: 'var(--accent-blue)' }}>
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Security First</h3>
                <p className="text-sm text-secondary leading-relaxed opacity-80">
                  Secure authentication and authorization system protecting patient data and hospital records.
                </p>
              </div>
              <div className="panel" style={{ padding: '2.5rem' }}>
                <div style={{ padding: '0.8rem', background: 'var(--bg-tertiary)', borderRadius: '12px', width: 'fit-content', marginBottom: '1.5rem', color: 'var(--accent-yellow)' }}>
                  <Layout size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Workflow Sync</h3>
                <p className="text-sm text-secondary leading-relaxed opacity-80">
                  Seamless appointment and medical workflow handling designed for real-time hospital management.
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: 0 }}>
          <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="panel" style={{ padding: '2.5rem' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Stack Configuration</h2>
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

          <motion.div variants={itemVariants} transition={{ duration: 0.5 }} className="panel" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(56, 139, 253, 0.05) 100%)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-2">
              <Settings size={16} className="text-accent-blue" /> Dev Highlights
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {highlights.map((h, i) => (
                <div key={i}>
                  <div className="mono text-[10px] text-accent-blue mb-1 uppercase tracking-widest">{h.title}</div>
                  <div className="text-sm text-secondary opacity-80 leading-relaxed">{h.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </aside>
      </div>

      <motion.section variants={itemVariants} transition={{ duration: 0.5 }} style={{ marginTop: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
          <h2 className="mono text-[11px] uppercase tracking-[0.4em] text-muted">Development Focus</h2>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--border-color) 0%, transparent 100%)' }}></div>
        </div>
        <div className="panel" style={{ padding: '3rem', textAlign: 'center' }}>
          <p className="text-lg text-secondary leading-relaxed italic opacity-80">
            "Engineered with a focus on environment-based configuration management and a clean separation between services, 
            ensuring the application remains scalable and adaptable for future medical infrastructure demands."
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
}
