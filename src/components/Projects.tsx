
import { Network, Database, Layers, Smartphone } from 'lucide-react';

export function Projects() {
  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl tracking-wider text-[var(--text-primary)] mb-1">System Case Studies</h1>
        <p className="font-mono text-sm text-[var(--text-secondary)]">ENGINEERING DOCUMENTATION & ARCHITECTURES</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
        
        {/* FoodieFix Project Panel */}
        <div className="panel flex flex-col h-full">
          <div className="panel-header">
            <span>FOOD DELIVERY COMMERCE INFRASTRUCTURE</span>
            <Layers size={14} className="text-[var(--text-secondary)]" />
          </div>
          
          <div className="flex-grow flex flex-col gap-6">
            <div>
              <h2 className="text-xl mb-2 text-[var(--text-primary)]">FoodieFix Platform</h2>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                A scalable commerce infrastructure built to handle real-time order tracking, menu management, and payment workflows.
              </p>
              
              <div className="flex gap-2 flex-wrap mb-4">
                {['Node.js', 'React Native', 'MongoDB', 'Redis', 'Stripe API'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-muted)] text-[10px] font-mono uppercase rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-[var(--border-color)] rounded bg-[var(--bg-primary)] p-4 flex-grow relative overflow-hidden flex items-center justify-center">
              <div className="absolute top-2 left-2 font-mono text-[10px] text-[var(--text-muted)] uppercase">Architecture Trace</div>
              
              <div className="w-full max-w-sm flex flex-col gap-6 relative mt-4">
                {/* SVG lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  <path d="M 190 30 L 190 60" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="2 2" />
                  <path d="M 190 100 L 190 130" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="2 2" />
                  <path d="M 190 170 L 190 200" stroke="var(--border-color)" strokeWidth="2" strokeDasharray="2 2" />
                </svg>

                <div className="z-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] p-2 rounded flex items-center gap-3 w-full">
                  <Smartphone size={16} className="text-[var(--text-primary)]" />
                  <div className="text-sm">Customer App</div>
                </div>
                
                <div className="z-10 bg-[var(--bg-tertiary)] border border-[var(--accent-blue)] p-2 rounded flex items-center gap-3 w-full shadow-[0_0_10px_rgba(88,166,255,0.1)]">
                  <Network size={16} className="text-[var(--accent-blue)]" />
                  <div className="text-sm font-semibold">API Gateway</div>
                  <div className="ml-auto status-indicator status-blue w-2 h-2 animate-pulse"></div>
                </div>

                <div className="z-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] p-2 rounded flex items-center gap-3 w-full">
                  <Layers size={16} className="text-[var(--text-primary)]" />
                  <div className="text-sm">Order / Payment Service</div>
                </div>

                <div className="z-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] p-2 rounded flex items-center gap-3 w-full">
                  <Database size={16} className="text-[var(--text-primary)]" />
                  <div className="text-sm">Database Cluster</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* System Logs / Specs */}
        <div className="panel flex flex-col h-full">
          <div className="panel-header">
            <span>SYSTEM SPECIFICATIONS</span>
            <Database size={14} className="text-[var(--text-secondary)]" />
          </div>
          
          <div className="flex-grow space-y-4">
            <div className="border-l-2 border-[var(--accent-blue)] pl-4 py-2">
              <div className="text-sm font-semibold mb-1">State Transitions & Order Lifecycle</div>
              <div className="font-mono text-xs text-[var(--text-secondary)] space-y-1">
                <div>CREATED → PENDING_PAYMENT</div>
                <div>PENDING_PAYMENT → CONFIRMED</div>
                <div>CONFIRMED → PREPARING</div>
                <div>PREPARING → OUT_FOR_DELIVERY</div>
                <div className="text-[var(--accent-green)]">OUT_FOR_DELIVERY → DELIVERED</div>
              </div>
            </div>

            <div className="border-l-2 border-[var(--accent-yellow)] pl-4 py-2">
              <div className="text-sm font-semibold mb-1">Technical Challenges Solved</div>
              <ul className="list-disc list-inside text-sm text-[var(--text-secondary)] space-y-1">
                <li>Real-time WebSocket sync for active orders</li>
                <li>Distributed transaction management for payments</li>
                <li>Redis caching layer for high-read menu items</li>
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-[var(--border-color)]">
              <div className="font-mono text-[10px] text-[var(--text-muted)] mb-2 uppercase">Live Transaction Stream (Simulated)</div>
              <div className="terminal h-32 text-xs">
                <div>[TX-9901] Payment intent created - $24.50</div>
                <div>[WS-CONN] Client device connected (ID: usr_892)</div>
                <div className="text-[var(--accent-green)]">[TX-9901] Payment succeeded. Emitting ORDER_CONFIRMED.</div>
                <div>[DB-WRITE] Updating inventory counts...</div>
                <div className="animate-pulse">_</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
