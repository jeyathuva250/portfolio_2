
import { Settings, Cpu, Activity, Search } from 'lucide-react';

export function ChessEngine() {
  const renderBoard = () => {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      const row = Math.floor(i / 8);
      const col = i % 8;
      const isDark = (row + col) % 2 === 1;
      
      let piece = '';
      let highlight = false;
      
      // Setup some pieces for visual
      if (i === 27) { piece = '♙'; highlight = true; } // e4
      if (i === 36) { piece = '♞'; highlight = true; } // c5
      if (i === 52) { piece = '♟'; }
      if (i === 60) { piece = '♚'; }
      if (i === 4) { piece = '♔'; }

      squares.push(
        <div key={i} className={`chess-square ${isDark ? 'dark' : 'light'} ${highlight ? 'highlight' : ''}`}>
          {piece && <span className="chess-piece">{piece}</span>}
        </div>
      );
    }
    return squares;
  };

  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-3xl tracking-wider text-[var(--text-primary)] mb-1">Algorithmic Chess Engine</h1>
          <p className="font-mono text-sm text-[var(--text-secondary)]">MINIMAX SEARCH & MOVE EVALUATION INTERFACE</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="panel px-3 py-1 flex items-center gap-2 border-[var(--accent-blue)] border">
            <Search size={14} className="text-[var(--accent-blue)]" />
            <span className="font-mono text-sm text-[var(--accent-blue)]">DEPTH: 15</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow">
        
        {/* Board Panel */}
        <div className="panel lg:col-span-1 flex flex-col items-center justify-center relative">
          <div className="absolute top-4 left-4 font-mono text-xs text-[var(--text-muted)]">SYS.BOARD_STATE</div>
          <div className="w-[80%] max-w-[300px]">
            <div className="chess-board">
              {renderBoard()}
            </div>
            
            <div className="mt-4 flex justify-between font-mono text-[10px] text-[var(--text-secondary)]">
              <span>EVAL: +1.24</span>
              <span>NODES: 1.2M</span>
            </div>
            {/* Evaluation Bar */}
            <div className="w-full h-1 bg-[var(--bg-tertiary)] mt-1 rounded overflow-hidden">
              <div className="h-full bg-[var(--text-primary)]" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        {/* Engine Analysis */}
        <div className="panel lg:col-span-2 flex flex-col">
          <div className="panel-header">
            <span>COMPUTATION FLOW & NODE ANALYSIS</span>
            <Cpu size={14} className="text-[var(--text-secondary)]" />
          </div>
          
          <div className="flex-grow grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <div className="border border-[var(--border-color)] p-3 rounded bg-[var(--bg-primary)]">
                <div className="font-mono text-[10px] text-[var(--text-muted)] mb-2 uppercase">Current Search Tree</div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--text-secondary)]">├─</span> 
                    <span className="bg-[var(--accent-blue)] text-[var(--bg-primary)] px-1 rounded">Nf3</span>
                    <span className="text-[var(--text-muted)]">(+1.24)</span>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <span className="text-[var(--text-secondary)]">├─</span> 
                    <span>Nc6</span>
                    <span className="text-[var(--text-muted)]">(+1.10)</span>
                  </div>
                  <div className="flex items-center gap-2 ml-8 text-[var(--accent-green)]">
                    <span className="text-[var(--text-secondary)]">└─</span> 
                    <span>Bc4</span>
                    <span className="text-[var(--text-muted)] font-bold">(+1.35) [BEST]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--text-secondary)]">└─</span> 
                    <span>d4</span>
                    <span className="text-[var(--text-muted)]">(+0.80)</span>
                  </div>
                </div>
              </div>
              
              <div className="border border-[var(--border-color)] p-3 rounded bg-[var(--bg-primary)] flex-grow">
                <div className="font-mono text-[10px] text-[var(--text-muted)] mb-2 uppercase">Engine Metrics</div>
                <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                  <div>
                    <div className="text-[var(--text-secondary)] text-[10px]">NPS</div>
                    <div>845,000</div>
                  </div>
                  <div>
                    <div className="text-[var(--text-secondary)] text-[10px]">HASH FULL</div>
                    <div>12.4%</div>
                  </div>
                  <div>
                    <div className="text-[var(--text-secondary)] text-[10px]">TB HITS</div>
                    <div>0</div>
                  </div>
                  <div>
                    <div className="text-[var(--text-secondary)] text-[10px]">TIME</div>
                    <div>12.4s</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-[var(--border-color)] p-3 rounded bg-[var(--bg-primary)] flex flex-col">
              <div className="font-mono text-[10px] text-[var(--text-muted)] mb-2 uppercase flex justify-between">
                <span>Move History</span>
                <Settings size={12} />
              </div>
              <div className="flex-grow overflow-y-auto font-mono text-xs text-[var(--text-secondary)] space-y-1">
                <div className="grid grid-cols-3 hover:bg-[var(--bg-secondary)] px-1">
                  <span>1.</span><span>e4</span><span>c5</span>
                </div>
                <div className="grid grid-cols-3 hover:bg-[var(--bg-secondary)] px-1">
                  <span>2.</span><span>Nf3</span><span>d6</span>
                </div>
                <div className="grid grid-cols-3 hover:bg-[var(--bg-secondary)] px-1">
                  <span>3.</span><span>d4</span><span>cxd4</span>
                </div>
                <div className="grid grid-cols-3 hover:bg-[var(--bg-secondary)] px-1">
                  <span>4.</span><span>Nxd4</span><span>Nf6</span>
                </div>
                <div className="grid grid-cols-3 hover:bg-[var(--bg-secondary)] px-1 text-[var(--text-primary)] border-l-2 border-[var(--accent-blue)] bg-[var(--bg-secondary)]">
                  <span>5.</span><span>Nc3</span><span className="animate-pulse">_</span>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-[var(--border-color)] flex items-center gap-2">
                <Activity size={14} className="text-[var(--accent-green)]" />
                <span className="font-mono text-xs text-[var(--accent-green)]">Engine computing response...</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
