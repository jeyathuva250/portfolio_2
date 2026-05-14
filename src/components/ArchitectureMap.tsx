import { motion } from 'framer-motion';
import { Database, Shield, Monitor, Server, Cpu } from 'lucide-react';

export default function ArchitectureMap() {
  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl tracking-wider text-[var(--text-primary)] mb-1">Architecture Visualizer</h1>
        <p className="font-mono text-sm text-[var(--text-secondary)]">SYSTEM TOPOLOGY: HOSPITAL MANAGEMENT SYSTEM</p>
      </div>

      <div className="panel flex-grow relative overflow-hidden flex items-center justify-center p-8">
        <div className="absolute top-4 right-4 flex gap-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="status-indicator status-green"></span> Healthy
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-[2px] bg-[var(--accent-blue)]"></span> Request Flow
          </div>
        </div>

        {/* Nodes Container */}
        <div className="relative w-full max-w-4xl h-[500px] flex justify-between items-center px-12">
          
          {/* Connection Lines (SVGs) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* React to Gateway */}
            <motion.path 
              d="M 200 250 C 300 250, 300 150, 400 150" 
              fill="transparent" 
              stroke="var(--border-color)" 
              strokeWidth="2" 
            />
            {/* React to Security */}
            <motion.path 
              d="M 200 250 C 300 250, 300 350, 400 350" 
              fill="transparent" 
              stroke="var(--border-color)" 
              strokeWidth="2" 
            />
            {/* Gateway to Database */}
            <motion.path 
              d="M 550 150 C 650 150, 650 250, 750 250" 
              fill="transparent" 
              stroke="var(--border-color)" 
              strokeWidth="2" 
            />
            {/* Security to AI Service */}
            <motion.path 
              d="M 550 350 C 650 350, 650 400, 750 400" 
              fill="transparent" 
              stroke="var(--border-color)" 
              strokeWidth="2" 
            />

            {/* Packets */}
            <motion.circle r="4" fill="var(--accent-blue)" filter="blur(1px)">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 200 250 C 300 250, 300 150, 400 150"
              />
            </motion.circle>
            <motion.circle r="4" fill="var(--accent-blue)" filter="blur(1px)">
              <animateMotion
                dur="3s"
                begin="1s"
                repeatCount="indefinite"
                path="M 200 250 C 300 250, 300 350, 400 350"
              />
            </motion.circle>
            <motion.circle r="4" fill="var(--accent-green)" filter="blur(1px)">
              <animateMotion
                dur="3s"
                begin="1.5s"
                repeatCount="indefinite"
                path="M 550 150 C 650 150, 650 250, 750 250"
              />
            </motion.circle>
            <motion.circle r="4" fill="var(--accent-yellow)" filter="blur(1px)">
              <animateMotion
                dur="3s"
                begin="2s"
                repeatCount="indefinite"
                path="M 550 350 C 650 350, 650 400, 750 400"
              />
            </motion.circle>
          </svg>

          {/* Client Node */}
          <div className="z-10 absolute left-[50px] top-[200px]">
            <motion.div whileHover={{ scale: 1.05 }} className="node active">
              <Monitor size={24} className="text-[var(--text-primary)] mb-2" />
              <div className="text-sm font-semibold">React Client</div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">Frontend Interface</div>
              <div className="mt-2 text-[10px] font-mono flex items-center gap-1">
                <span className="status-indicator status-green w-1.5 h-1.5"></span> 24ms
              </div>
            </motion.div>
          </div>

          {/* Spring Boot Node */}
          <div className="z-10 absolute left-[400px] top-[100px]">
            <motion.div whileHover={{ scale: 1.05 }} className="node">
              <Server size={24} className="text-[var(--text-primary)] mb-2" />
              <div className="text-sm font-semibold">Spring Boot API</div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">Core Services</div>
              <div className="mt-2 text-[10px] font-mono flex items-center gap-1">
                <span className="status-indicator status-green w-1.5 h-1.5"></span> 45ms
              </div>
            </motion.div>
          </div>

          {/* Security Node */}
          <div className="z-10 absolute left-[400px] top-[300px]">
            <motion.div whileHover={{ scale: 1.05 }} className="node">
              <Shield size={24} className="text-[var(--text-primary)] mb-2" />
              <div className="text-sm font-semibold">JWT Layer</div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">RBAC Auth</div>
              <div className="mt-2 text-[10px] font-mono flex items-center gap-1">
                <span className="status-indicator status-green w-1.5 h-1.5"></span> 12ms
              </div>
            </motion.div>
          </div>

          {/* DB Node */}
          <div className="z-10 absolute right-[50px] top-[200px]">
            <motion.div whileHover={{ scale: 1.05 }} className="node">
              <Database size={24} className="text-[var(--text-primary)] mb-2" />
              <div className="text-sm font-semibold">MySQL Cluster</div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">Persistent Storage</div>
              <div className="mt-2 text-[10px] font-mono flex items-center gap-1">
                <span className="status-indicator status-green w-1.5 h-1.5"></span> 8ms
              </div>
            </motion.div>
          </div>

          {/* AI Node */}
          <div className="z-10 absolute right-[50px] top-[400px]">
            <motion.div whileHover={{ scale: 1.05 }} className="node" style={{ borderColor: 'var(--accent-yellow)' }}>
              <Cpu size={24} className="text-[var(--accent-yellow)] mb-2" />
              <div className="text-sm font-semibold">Flask AI</div>
              <div className="text-[10px] text-[var(--text-muted)] font-mono">Inference Engine</div>
              <div className="mt-2 text-[10px] font-mono flex items-center gap-1">
                <span className="status-indicator status-yellow w-1.5 h-1.5"></span> 180ms
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
