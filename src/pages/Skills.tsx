import { motion } from 'framer-motion';
import { Cpu, Code, Database, Globe, Zap, Shield, Layout } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Skills() {
  const skillGroups = [
    { 
      name: 'Backend Frameworks', 
      icon: Database,
      color: 'var(--accent-green)',
      items: ['Spring Boot', 'Node.js', 'Express', 'Flask', 'REST API Design', 'JWT Authentication'] 
    },
    { 
      name: 'Frontend Development', 
      icon: Layout,
      color: 'var(--accent-yellow)',
      items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Redux', 'Material UI', 'Framer Motion', 'Responsive Design'] 
    },
    { 
      name: 'AI / Machine Learning', 
      icon: Cpu,
      color: 'var(--accent-purple)',
      items: ['Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'TensorFlow (basic)', 'Data Preprocessing', 'Model Evaluation', 'Feature Engineering'] 
    },
    { 
      name: 'Languages', 
      icon: Code,
      color: 'var(--accent-blue)',
      items: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL (T-SQL)'] 
    },
    { 
      name: 'Databases', 
      icon: Globe,
      color: 'var(--accent-blue)',
      items: ['MySQL', 'MongoDB', 'MS SQL Server', 'PostgreSQL (Basic)'] 
    },
    { 
      name: 'Engineering Tools', 
      icon: Shield,
      color: 'var(--text-muted)',
      items: ['Git', 'GitHub', 'Postman', 'IntelliJ', 'VS Code', 'Apache Tomcat', 'Docker (Learning)'] 
    },
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '6rem' }}
    >
      <header>
        <div className="mono text-[10px] uppercase tracking-[0.3em] text-accent-blue font-bold mb-4">Core Competencies</div>
        <h1 className="text-5xl font-bold mb-6" style={{ letterSpacing: '-0.05em' }}>Technical Arsenal</h1>
        <p className="text-xl text-secondary leading-relaxed max-w-[850px] opacity-80">
          A comprehensive map of my engineering stack, specialized in building intelligent, 
          scalable systems from the ground up.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-8">
        {skillGroups.map((group) => (
          <motion.div 
            key={group.name} 
            variants={itemVariants} 
            transition={{ duration: 0.5 }}
            className="panel" 
            style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ 
                padding: '0.75rem', 
                background: 'var(--bg-tertiary)', 
                borderRadius: '12px', 
                border: '1px solid var(--border-color)', 
                color: group.color 
              }}>
                <group.icon size={24} />
              </div>
              <h2 className="text-lg font-bold">{group.name}</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 skills-grid">
              {group.items.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: group.color, opacity: 0.6 }} />
                  <span className="text-sm text-secondary opacity-90">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.section variants={itemVariants} transition={{ duration: 0.5 }} className="panel" style={{ padding: '4rem', textAlign: 'center', background: 'linear-gradient(to right, var(--bg-secondary), var(--bg-tertiary))' }}>
        <div className="flex justify-center mb-6">
          <Zap size={32} className="text-accent-yellow" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
        <p className="text-base text-secondary max-w-2xl mx-auto opacity-80">
          Currently deepening expertise in distributed systems, advanced deep learning architectures, 
          and cloud-native deployment patterns.
        </p>
      </motion.section>
    </motion.div>
  );
}
