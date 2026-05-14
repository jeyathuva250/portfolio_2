import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo, useRef } from 'react';
import { Server, Shield, Activity, Cpu } from 'lucide-react';

export default function TLogoLoader({ onComplete }: { onComplete: () => void }) {
  const [countdown, setCountdown] = useState(3);
  const [status, setStatus] = useState('Initializing Systems...');
  const [progress, setProgress] = useState(0);
  const [isBursting, setIsBursting] = useState(false);

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const statuses = [
      'Establishing Secure Handshake...',
      'Load Balancer: SYNCHRONIZED',
      'Deploying Interface...'
    ];

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsBursting(true);
          setTimeout(() => onCompleteRef.current(), 1000);
          return 0;
        }
        const next = prev - 1;
        setStatus(statuses[3 - next] || statuses[2]);
        setProgress(((3 - next + 1) / 3) * 100);
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Generate random data nodes for the orbit
  const orbitNodes = useMemo(() => [...Array(8)].map((_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 3 + Math.random() * 2,
    radius: 90 + Math.random() * 40
  })), []);

  return (
    <div style={{ 
      position: 'fixed', 
      inset: 0, 
      background: '#050608', 
      zIndex: 9999, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Matrix/Grid Effect */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundImage: 'linear-gradient(rgba(56, 139, 253, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 139, 253, 0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        opacity: 0.3,
        maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
      }} />

      <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Burst Effect */}
        <AnimatePresence>
          {isBursting && (
            <motion.div 
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ 
                position: 'absolute', 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                background: 'white',
                filter: 'blur(20px)',
                zIndex: 20
              }} 
            />
          )}
        </AnimatePresence>

        {/* Orbiting Nodes */}
        {orbitNodes.map((node) => (
          <motion.div
            key={node.id}
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: node.duration, repeat: Infinity, ease: "linear", delay: node.delay },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ 
              position: 'absolute', 
              width: node.radius * 2, 
              height: node.radius * 2,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              pointerEvents: 'none'
            }}
          >
            <div style={{ 
              width: '4px', 
              height: '4px', 
              background: progress > 50 ? 'var(--accent-green)' : 'var(--accent-blue)', 
              borderRadius: '50%',
              boxShadow: `0 0 10px ${progress > 50 ? 'var(--accent-green)' : 'var(--accent-blue)'}`
            }} />
          </motion.div>
        ))}

        {/* Rotating Structural Rings */}
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
          style={{ 
            width: '240px', 
            height: '240px', 
            borderRadius: '50%', 
            border: '1px solid rgba(56, 139, 253, 0.2)',
            position: 'absolute'
          }} 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ 
            width: '200px', 
            height: '200px', 
            borderRadius: '50%', 
            border: '1px dashed rgba(56, 139, 253, 0.15)',
            position: 'absolute'
          }} 
        />

        {/* The Logo Container */}
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            skewX: [0, 1, -1, 0] // Subtle glitch skew
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            skewX: { duration: 0.2, repeat: Infinity, repeatDelay: 3 }
          }}
          style={{ 
            width: '150px', 
            height: '150px', 
            background: 'rgba(15, 23, 42, 0.9)',
            borderRadius: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `2px solid ${progress > 80 ? 'var(--accent-green)' : 'var(--accent-blue)'}`,
            boxShadow: `0 0 50px ${progress > 80 ? 'rgba(46, 160, 67, 0.3)' : 'rgba(56, 139, 253, 0.3)'}`,
            position: 'relative',
            zIndex: 10,
            overflow: 'hidden',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Scanline Animation */}
          <motion.div 
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ 
              position: 'absolute', 
              left: 0, 
              width: '100%', 
              height: '20px', 
              background: 'linear-gradient(to bottom, transparent, rgba(56, 139, 253, 0.1), transparent)',
              zIndex: 2
            }} 
          />

          <motion.img 
            src="/t_logo.png"
            animate={{ 
              filter: [
                'drop-shadow(0 0 10px rgba(56, 139, 253, 0.5))',
                'drop-shadow(0 0 20px rgba(56, 139, 253, 0.7))',
                'drop-shadow(0 0 10px rgba(56, 139, 253, 0.5))'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ 
              width: '85%',
              height: '85%',
              objectFit: 'contain',
              zIndex: 1
            }}
          />

          {/* Glitch Overlay - Occasional */}
          <motion.div 
            animate={{ opacity: [0, 0.3, 0, 0.2, 0] }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4 }}
            style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'var(--accent-blue)', 
              mixBlendMode: 'overlay',
              zIndex: 3
            }} 
          />
        </motion.div>

        {/* Countdown Floating Display */}
        <motion.div 
          style={{ 
            position: 'absolute', 
            top: '-60px', 
            textAlign: 'center'
          }}
        >
          <div className="mono text-[10px] uppercase tracking-[0.5em] text-accent-blue font-bold opacity-60">System Ready In</div>
          <div className="text-4xl font-black text-white/20 mt-1">0{countdown}</div>
        </motion.div>
      </div>

      <div style={{ width: '350px', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginTop: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '0.6rem 1.2rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <Cpu size={14} className="text-accent-blue" />
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-white/80 font-bold">
            {status}
          </div>
        </div>
        
        {/* Advanced Progress Bar */}
        <div style={{ width: '100%', position: 'relative' }}>
          <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
            <motion.div 
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
              style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-green))', boxShadow: '0 0 15px var(--accent-blue)' }}
            />
          </div>
          <motion.div 
            animate={{ x: `${progress}%` }}
            transition={{ duration: 1 }}
            style={{ position: 'absolute', top: '-6px', width: '16px', height: '16px', background: 'white', borderRadius: '50%', marginLeft: '-8px', filter: 'blur(4px)', opacity: 0.6 }}
          />
        </div>

        <div style={{ display: 'flex', gap: '2.5rem', marginTop: '0.5rem', opacity: 0.6 }}>
          <div className="flex flex-col items-center gap-2">
            <Server size={18} className={progress > 25 ? 'text-accent-blue' : ''} />
            <div className="mono text-[8px] uppercase">Node</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Shield size={18} className={progress > 50 ? 'text-accent-blue' : ''} />
            <div className="mono text-[8px] uppercase">Auth</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Activity size={18} className={progress > 75 ? 'text-accent-blue' : ''} />
            <div className="mono text-[8px] uppercase">Stream</div>
          </div>
        </div>
      </div>
    </div>
  );
}
