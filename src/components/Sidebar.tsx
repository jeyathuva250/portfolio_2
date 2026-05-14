import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Database, Home, Server, Code, Mail, Phone, ExternalLink, Cpu, Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Overview', path: '/', icon: Home },
    { name: 'Technical Arsenal', path: '/skills', icon: Cpu },
    { name: 'Hospital System', path: '/hospital', icon: Database },
    { name: 'SportsX Identity', path: '/sportsx', icon: Server },
    { name: 'Viva Pizzeria', path: '/viva', icon: Code },
    { name: 'Flight Delay AI', path: '/flight-delay', icon: Activity },
  ];

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: mobile ? '0.5rem' : '0.75rem', flex: 1 }}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.path} 
            to={item.path} 
            onClick={() => setIsOpen(false)}
            className="sidebar-link"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: mobile ? '1.1rem 1.5rem' : '0.85rem 1.25rem', 
              borderRadius: '12px', 
              backgroundColor: isActive ? 'rgba(56, 139, 253, 0.1)' : 'transparent', 
              color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textDecoration: 'none',
              border: isActive ? '1px solid rgba(56, 139, 253, 0.3)' : '1px solid transparent',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {isActive && (
              <motion.div 
                layoutId="active-glow"
                style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'radial-gradient(circle at center, rgba(56, 139, 253, 0.15) 0%, transparent 70%)',
                  zIndex: 0
                }}
              />
            )}
            <item.icon 
              size={mobile ? 20 : 18} 
              strokeWidth={isActive ? 2.5 : 2} 
              style={{ 
                opacity: isActive ? 1 : 0.6, 
                color: isActive ? 'var(--accent-blue)' : 'inherit',
                zIndex: 1 
              }} 
            />
            <span 
              className={mobile ? "text-lg font-bold" : "text-sm font-semibold tracking-tight"} 
              style={{ zIndex: 1 }}
            >
              {item.name}
            </span>
            {isActive && !mobile && (
              <motion.div 
                layoutId="active-pill"
                style={{ marginLeft: 'auto', width: '3px', height: '14px', background: 'var(--accent-blue)', borderRadius: '100px', zIndex: 1 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <button className="mobile-nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-sidebar open"
            style={{ 
              padding: '2.5rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              background: 'rgba(10, 13, 16, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRight: '1px solid var(--border-color)'
            }}
          >
            <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Thuvarakan</h1>
                <div className="mono text-[10px] uppercase tracking-[0.3em] text-accent-blue mt-2 font-bold">AI & Software Engineering</div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', padding: '0.5rem' }}>
                <X size={20} />
              </button>
            </div>
            
            <NavLinks mobile />

            <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                <a href="https://github.com/jeyathuva250" target="_blank" rel="noreferrer" className="text-primary"><Code size={24} /></a>
                <a href="https://www.linkedin.com/in/thuvarakan-jeyanthan-50414b369?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-primary"><ExternalLink size={24} /></a>
                <a href="mailto:jeyathuva25@gmail.com" className="text-primary"><Mail size={24} /></a>
              </div>
              <div className="mono text-[11px] text-muted space-y-2">
                <div className="flex items-center gap-3"><Phone size={14} className="text-accent-blue" /> +94 779 879 423</div>
                <div className="flex items-center gap-3"><MapPin size={14} className="text-accent-blue" /> Jaffna, Sri Lanka</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="sidebar-desktop" style={{ 
        width: '300px', 
        borderRight: '1px solid var(--border-color)', 
        height: '100vh', 
        padding: '3rem 2rem', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(10, 13, 16, 0.5)',
        backdropFilter: 'blur(30px)',
        zIndex: 100
      }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-green) 100%)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(56, 139, 253, 0.3)' }}>
              <span className="mono font-bold text-white text-lg">J</span>
            </div>
            <h1 className="text-xl font-bold" style={{ letterSpacing: '-0.04em', color: 'var(--text-primary)' }}>
              Thuvarakan
            </h1>
          </div>
          <div className="mono text-[10px] uppercase tracking-[0.3em]" style={{ color: 'var(--accent-blue)', fontWeight: 800 }}>
            AI & Software Engineering
          </div>
        </div>

        <NavLinks />

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/jeyathuva250" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors"><Code size={20} /></a>
            <a href="https://www.linkedin.com/in/thuvarakan-jeyanthan-50414b369?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors"><ExternalLink size={20} /></a>
            <a href="mailto:jeyathuva25@gmail.com" className="text-secondary hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
          <div className="mono text-[10px] text-muted space-y-3">
            <div className="flex items-center gap-3">
              <Phone size={12} className="text-accent-blue" /> <span>+94 779 879 423</span>
            </div>
            <div className="flex items-center gap-3">
              <ExternalLink size={12} className="text-accent-blue" /> <span>Jaffna, Sri Lanka</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function MapPin({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
