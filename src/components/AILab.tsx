import { motion } from 'framer-motion';
import { Cpu, Activity, Database, Server } from 'lucide-react';

export function AILab() {
  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl tracking-wider text-[var(--text-primary)] mb-1">AI Systems Control</h1>
        <p className="font-mono text-sm text-[var(--text-secondary)]">INFERENCE PIPELINE & MODEL OPERATIONS</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
        
        {/* Operations Dashboard */}
        <div className="panel flex flex-col">
          <div className="panel-header">
            <span>MODEL STATE: PREDICTIVE DIAGNOSTICS</span>
            <Cpu size={14} className="text-[var(--text-secondary)]" />
          </div>
          
          <div className="space-y-6 flex-grow">
            <div>
              <div className="flex justify-between font-mono text-xs mb-1">
                <span className="text-[var(--text-secondary)]">INFERENCE CONFIDENCE</span>
                <span className="text-[var(--accent-green)]">94.2%</span>
              </div>
              <div className="w-full h-1 bg-[var(--bg-tertiary)] rounded overflow-hidden">
                <div className="h-full bg-[var(--accent-green)]" style={{ width: '94.2%' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[var(--border-color)] p-3 rounded">
                <div className="font-mono text-[10px] text-[var(--text-muted)] mb-1 uppercase">Model Status</div>
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="status-indicator status-green"></span> ACTIVE (v3.1)
                </div>
              </div>
              <div className="border border-[var(--border-color)] p-3 rounded">
                <div className="font-mono text-[10px] text-[var(--text-muted)] mb-1 uppercase">Response Time</div>
                <div className="font-mono text-sm text-[var(--accent-blue)]">45ms avg</div>
              </div>
            </div>

            <div className="border border-[var(--border-color)] rounded bg-[var(--bg-primary)] p-4 flex-grow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <Activity size={100} />
              </div>
              <div className="font-mono text-xs text-[var(--text-muted)] mb-3 uppercase border-b border-[var(--border-color)] pb-2">Live Inference Logs</div>
              <div className="font-mono text-xs space-y-2">
                <div className="text-[var(--text-secondary)]">[T-0s] Receiving feature vector...</div>
                <div className="text-[var(--text-primary)]">[T-12ms] Preprocessing complete. Normalizing inputs.</div>
                <div className="text-[var(--accent-blue)]">[T-25ms] Passing through hidden layers (64x32x16)...</div>
                <div className="text-[var(--accent-green)]">[T-45ms] Output tensor generated. Confidence: 0.94</div>
                <div className="animate-pulse">_</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Visualizer */}
        <div className="panel flex flex-col relative">
          <div className="panel-header">
            <span>PIPELINE TOPOLOGY</span>
            <Activity size={14} className="text-[var(--text-secondary)]" />
          </div>
          
          <div className="flex-grow flex flex-col items-center justify-center gap-6 relative py-8">
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <motion.path d="M 250 100 L 250 180" fill="transparent" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
              <motion.path d="M 250 260 L 250 340" fill="transparent" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="4 4" />
              
              <motion.circle r="4" fill="var(--accent-blue)" filter="blur(1px)">
                <animateMotion dur="2s" repeatCount="indefinite" path="M 250 100 L 250 180" />
              </motion.circle>
              <motion.circle r="4" fill="var(--accent-green)" filter="blur(1px)">
                <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 250 260 L 250 340" />
              </motion.circle>
            </svg>

            <motion.div whileHover={{ scale: 1.05 }} className="node z-10 w-48">
              <Database size={20} className="text-[var(--text-primary)] mb-1" />
              <div className="text-sm font-semibold">Input Feature Vector</div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">[128-dim array]</div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="node z-10 w-48 active">
              <Server size={20} className="text-[var(--accent-blue)] mb-1" />
              <div className="text-sm font-semibold">Flask AI Microservice</div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">PyTorch / TensorFlow</div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="node z-10 w-48" style={{ borderColor: 'var(--accent-green)' }}>
              <Cpu size={20} className="text-[var(--accent-green)] mb-1" />
              <div className="text-sm font-semibold">Prediction Result</div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">JSON Payload</div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
}
