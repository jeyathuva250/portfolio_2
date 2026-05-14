import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [bootLines, setBootLines] = useState<string[]>([]);
  // Use a ref so the effect closure always has the latest onComplete
  // without re-running the effect when the function reference changes
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const fullBootSequence = [
    "INITIALIZING ENGINEERING PROFILE...",
    "Loading infrastructure...",
    "[✓] Frontend Systems",
    "[✓] Backend APIs",
    "[✓] Authentication Layer",
    "[✓] AI Inference Engine",
    "[✓] Database Cluster",
    "[✓] Monitoring Services",
    "SYSTEM ONLINE"
  ];

  // Empty deps [] — runs once on mount, uses ref for onComplete
  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < fullBootSequence.length) {
        setBootLines(prev => [...prev, fullBootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => onCompleteRef.current(), 1000);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ 
      position: 'fixed',
      inset: 0,
      background: 'var(--bg-primary)',
      zIndex: 9998,
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      fontFamily: 'var(--font-mono)',
      padding: '2rem',
      color: 'var(--text-primary)'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        {bootLines.map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ 
              marginBottom: '0.75rem', 
              fontSize: i === 0 || i === fullBootSequence.length - 1 ? '1.1rem' : '0.9rem',
              fontWeight: i === 0 || i === fullBootSequence.length - 1 ? 800 : 400,
              color: line.includes('✓') || line.includes('ONLINE') ? 'var(--accent-green)' : 'var(--text-primary)',
              letterSpacing: '0.05em'
            }}
          >
            {line}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ width: '8px', height: '1.2rem', background: 'var(--accent-blue)', display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px' }}
        />
      </div>
    </div>
  );
}
