import { Activity, Clock, Database, Shield, GitCommit } from 'lucide-react';
import { motion } from 'framer-motion';

export function Overview() {
  const metrics = [
    { label: 'API LATENCY', value: '120ms', status: 'normal' },
    { label: 'UPTIME', value: '99.9%', status: 'optimal' },
    { label: 'ACTIVE SERVICES', value: '12', status: 'optimal' },
    { label: 'ML ACCURACY', value: '89.5%', status: 'normal' },
    { label: 'DEPLOYMENTS', value: '18', status: 'optimal' }
  ];

  const activities = [
    { time: '12:03', msg: 'Spring Boot service deployed', type: 'info' },
    { time: '12:04', msg: 'JWT token validated for Admin user', type: 'success' },
    { time: '12:05', msg: 'AI inference completed in 45ms', type: 'info' },
    { time: '12:06', msg: 'Chess engine evaluation depth increased to 15', type: 'warning' },
    { time: '12:07', msg: 'Database replication synchronized across nodes', type: 'success' },
    { time: '12:15', msg: 'Memory allocation optimized in API Gateway', type: 'info' },
  ];

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto h-full">
      <div className="flex justify-between items-end mb-4 border-b border-[var(--border-color)] pb-4">
        <div>
          <h1 className="text-3xl tracking-wider text-[var(--text-primary)] mb-1">System Overview</h1>
          <p className="font-mono text-sm text-[var(--text-secondary)]">PRIMARY INFRASTRUCTURE METRICS & LOGS</p>
        </div>
        <div className="font-mono text-sm text-[var(--text-secondary)] flex items-center gap-2 bg-[var(--bg-secondary)] px-3 py-1 rounded border border-[var(--border-color)]">
          <Clock size={14} className="text-[var(--accent-blue)]" />
          <span>LIVE</span>
          <span className="status-indicator status-blue animate-pulse ml-2"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {metrics.map((m, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="panel flex flex-col justify-between"
          >
            <div className="panel-header" style={{ marginBottom: '0.5rem', border: 'none', padding: 0 }}>
              {m.label}
            </div>
            <div className="flex items-end justify-between">
              <span className="metric-value">{m.value}</span>
              <span className={`w-2 h-2 rounded-full mb-2 ${m.status === 'optimal' ? 'bg-[var(--accent-green)]' : 'bg-[var(--accent-blue)]'}`} style={{boxShadow: `0 0 8px var(--${m.status === 'optimal' ? 'accent-green' : 'accent-blue'})`}}></span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow min-h-[400px]">
        
        {/* Activity Feed */}
        <div className="panel lg:col-span-1 flex flex-col">
          <div className="panel-header">
            <span>OPERATIONAL ACTIVITY</span>
            <Activity size={14} className="text-[var(--text-secondary)]" />
          </div>
          <div className="flex-grow overflow-y-auto pr-2" style={{ maxHeight: '400px' }}>
            {activities.map((act, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 + 0.5 }}
                key={i} 
                className="flex gap-3 mb-3 border-l-2 pl-3 py-1 text-sm font-mono"
                style={{ 
                  borderColor: act.type === 'success' ? 'var(--accent-green)' : act.type === 'warning' ? 'var(--accent-yellow)' : 'var(--accent-blue)',
                  backgroundColor: 'rgba(22, 28, 34, 0.4)'
                }}
              >
                <span className="text-[var(--text-muted)] w-12 flex-shrink-0">[{act.time}]</span>
                <span className="text-[var(--text-primary)]">{act.msg}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Case Study Preview */}
        <div className="panel lg:col-span-2 flex flex-col">
          <div className="panel-header">
            <span>FEATURED WORKLOAD: HOSPITAL MGT SYSTEM</span>
            <Database size={14} className="text-[var(--text-secondary)]" />
          </div>
          <div className="flex-grow flex flex-col gap-4">
            <p className="text-[var(--text-secondary)] text-sm mb-2 max-w-xl">
              Scalable enterprise architecture combining Spring Boot APIs, React Frontends, and a Flask AI service for predictive diagnostics. Secured via JWT RBAC layers.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[var(--bg-tertiary)] border border-[var(--border-color)] p-4 rounded flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-blue)]"></div>
                <div className="font-mono text-xs text-[var(--accent-blue)] mb-1 flex items-center gap-2">
                  <Shield size={12} /> AUTHENTICATION
                </div>
                <div className="text-sm">JWT Validation Flow</div>
                <div className="text-xs text-[var(--text-secondary)]">Multi-role middleware verification</div>
              </div>
              
              <div className="bg-[var(--bg-tertiary)] border border-[var(--border-color)] p-4 rounded flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-green)]"></div>
                <div className="font-mono text-xs text-[var(--accent-green)] mb-1 flex items-center gap-2">
                  <Activity size={12} /> AI INFERENCE
                </div>
                <div className="text-sm">Disease Prediction</div>
                <div className="text-xs text-[var(--text-secondary)]">Flask-based ML pipeline integration</div>
              </div>
            </div>

            <div className="mt-auto border border-[var(--border-color)] rounded bg-[var(--bg-primary)] p-3">
              <div className="font-mono text-xs text-[var(--text-muted)] mb-2 uppercase">Recent Commits</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)]">
                  <GitCommit size={14} className="text-[var(--accent-blue)]" />
                  <span>feat(auth): implement RBAC middleware layer</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)]">
                  <GitCommit size={14} className="text-[var(--accent-green)]" />
                  <span>opt(ai): reduce inference latency by 15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
