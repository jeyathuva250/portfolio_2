import { motion } from 'framer-motion';
import { Brain, Workflow, Target, ArrowLeft, BarChart3, Database, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function FlightDelay() {
  const tech = ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook', 'Kaggle Datasets'];
  
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
        <div className="mono text-[10px] uppercase tracking-[0.3em] text-accent-purple font-bold mb-4">Inference Engineering</div>
        <h1 className="text-5xl font-bold mb-6" style={{ letterSpacing: '-0.05em', overflowWrap: 'break-word' }}>Flight Delay Prediction Model</h1>
        <p className="text-xl text-secondary leading-relaxed max-w-[850px] opacity-80">
          A predictive engine built for high-dimensional tabular data. Focused on 
          reproducibility through automated pipelines and optimized ensemble learning.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-8 items-start">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', minWidth: 0 }}>
          <motion.section variants={itemVariants} className="panel" style={{ padding: '3rem' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-10 flex items-center gap-3">
              <Workflow size={18} className="text-accent-blue" /> Modular Pipeline Architecture
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { step: "Data Ingestion", desc: "Automated Kaggle dataset synchronization & validation.", icon: Database },
                { step: "Feature Engineering", desc: "Temporal block encoding & historical carrier delay aggregation.", icon: BarChart3 },
                { step: "Cross-Validation", desc: "5-fold stratified validation to ensure generalization.", icon: Target },
                { step: "Evaluation", desc: "F1 and Recall focus for imbalanced multi-class delays.", icon: Activity }
              ].map((item, i) => (
                <div key={i} style={{ padding: '1.5rem', background: 'var(--bg-tertiary)', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ color: 'var(--accent-blue)', opacity: 0.8 }}><item.icon size={20} /></div>
                  <div className="text-base font-bold">{item.step}</div>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="panel" style={{ padding: '3rem', borderLeft: '4px solid var(--accent-purple)' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-10 flex items-center gap-3">
              <Brain size={18} className="text-accent-purple" /> Model Rationale
            </h2>
            <div style={{ borderLeft: '0px solid var(--border-color)' }}>
              <h3 className="text-xl font-bold mb-4">Random Forest Ensemble Selection</h3>
              <p className="text-base text-secondary leading-relaxed mb-10 opacity-80">
                Random Forest was selected over Logistic Regression for its superior handling of non-linear features 
                and its ensemble nature, which significantly reduces variance on imbalanced flight delay datasets.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div className="flex justify-between mono text-[10px] text-muted mb-3 uppercase tracking-widest">
                    <span style={{ overflowWrap: 'break-word', maxWidth: '70%' }}>Random Forest (CV Score)</span>
                    <span style={{ color: 'var(--accent-green-bright)', fontWeight: 'bold' }}>0.1979</span>
                  </div>
                  <div style={{ height: '8px', background: 'var(--bg-primary)', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '90%' }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-green))' }} 
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mono text-[10px] text-muted mb-3 uppercase tracking-widest">
                    <span style={{ overflowWrap: 'break-word', maxWidth: '70%' }}>Logistic Regression (CV Score)</span>
                    <span>0.1535</span>
                  </div>
                  <div style={{ height: '8px', background: 'var(--bg-primary)', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '70%' }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      style={{ height: '100%', background: 'var(--border-highlight)' }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: 0 }}>
          <motion.div variants={itemVariants} className="panel" style={{ padding: '2.5rem' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">Stack</h2>
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

          <motion.div variants={itemVariants} className="panel" style={{ padding: '2.5rem' }}>
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-10">Feature Importance</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {[
                { label: 'Weather Condition', val: 92, color: 'var(--accent-blue)' },
                { label: 'Carrier Delay History', val: 78, color: 'var(--accent-purple)' },
                { label: 'Departure Block', val: 65, color: 'var(--accent-yellow)' },
                { label: 'Airport Congestion', val: 40, color: 'var(--accent-green)' }
              ].map(f => (
                <div key={f.label}>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-bold text-secondary" style={{ overflowWrap: 'break-word', maxWidth: '80%' }}>{f.label}</span>
                    <span className="mono text-[10px] text-muted">{f.val}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--bg-primary)', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${f.val}%` }}
                      transition={{ duration: 1.5, ease: "anticipate" }}
                      style={{ height: '100%', background: f.color }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </aside>
      </div>
    </motion.div>
  );
}
