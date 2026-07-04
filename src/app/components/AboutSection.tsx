import { motion } from 'motion/react';
import { Code2, Rocket, Target, Terminal, Database, Layout } from 'lucide-react';

export function AboutSection() {
  const principles = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, readable code that stands the test of time.',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(100,255,218,0.3)]',
      iconColor: 'text-[#64FFDA]',
      iconBg: 'bg-[#64FFDA]/10 border-[#64FFDA]/20'
    },
    {
      icon: Target,
      title: 'Quality Driven',
      description: 'Committed to excellence in every line of code and architecture.',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]', 
      iconColor: 'text-[#8B5CF6]',
      iconBg: 'bg-[#8B5CF6]/10 border-[#8B5CF6]/20'
    },
    {
      icon: Rocket,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies, from backend to frontend.',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(0,255,247,0.3)]', // Cyan
      iconColor: 'text-[#00FFF7]',
      iconBg: 'bg-[#00FFF7]/10 border-[#00FFF7]/20'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#0A192F] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#64FFDA]/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header aligned to left for a more editorial look */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-['Plus_Jakarta_Sans'] font-bold text-slate-200">
            About <span className="text-[#64FFDA]">Me</span>
          </h2>
          <div className="h-[1px] flex-1 bg-slate-700 max-w-xs" />
        </motion.div>

        {/* Top Part: Text (Left) & Visual (Right) */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-slate-400 font-['Inter'] leading-relaxed"
          >
            <p>
              Passionate about <span className="text-[#64FFDA] font-['JetBrains_Mono'] px-1 bg-[#64FFDA]/10 rounded">Clean Code</span>, 
              maintainable software architectures, and scalable <span className="text-[#00FFF7]">B2B solutions</span>. 
              Driven by quality and continuous learning, I focus on creating robust systems that deliver real business value.
            </p>
            <p>
              My approach combines technical excellence with practical problem-solving. Whether I'm designing complex database schemas or crafting intuitive user interfaces, my goal is to ensure that every solution is not just functional, but elegant and highly maintainable.
            </p>
            
            {/* Small Tech Badges inline */}
            <div className="pt-4 flex flex-wrap gap-3">
              {['Java', 'TypeScript', 'React', 'SQL'].map((tech) => (
                <span key={tech} className="text-sm font-mono text-slate-300 border border-slate-700 px-3 py-1 rounded-full bg-[#112240]">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Glassmorphism Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#64FFDA]/20 to-[#8B5CF6]/20 rounded-full blur-[80px]" />
            
            {/* Glass Card */}
            <div className="relative w-full max-w-sm p-8 rounded-2xl bg-[#112240]/60 backdrop-blur-xl border border-white/5 shadow-2xl">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-lg">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Backend Architecture</h3>
                    <p className="text-sm text-slate-400">Java, REST, Spring</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                  <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-lg">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Data Engineering</h3>
                    <p className="text-sm text-slate-400">SQL, MariaDB, Design</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-lg">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Frontend Interfaces</h3>
                    <p className="text-sm text-slate-400">React, TypeScript, UI/UX</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Part: 3 Principles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`p-8 rounded-2xl bg-gradient-to-b from-[#112240] to-transparent border border-white/5 transition-all duration-500 group hover:-translate-y-2 hover:bg-[#112240] ${principle.glowColor}`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${principle.iconBg}`}>
                <principle.icon className={`w-7 h-7 ${principle.iconColor}`} />
              </div>
              <h3 className="text-xl font-['Plus_Jakarta_Sans'] font-semibold text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-slate-400 font-['Inter'] leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
