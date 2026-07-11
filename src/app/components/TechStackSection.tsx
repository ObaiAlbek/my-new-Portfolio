import { motion } from 'motion/react';
import { Server, Layout, Database, GitBranch, Cpu } from 'lucide-react';

export function TechStackSection() {
  const techStack = [
    {
      category: 'Backend Architecture',
      icon: Server,
      skills: ['Java', 'REST APIs', 'Spring Boot', 'Microservices', 'OOP'],
      theme: {
        iconColor: 'text-cyan-400', // Leuchtendes Cyan fürs Icon
        gradient: 'from-cyan-400 to-blue-600',
        bgGlow: 'bg-cyan-500/10',
        borderHover: 'hover:border-cyan-400',
        textGlow: 'group-hover:text-cyan-300',
        boxShadow: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]'
      }
    },
    {
      category: 'Frontend Interfaces',
      icon: Layout,
      skills: ['TypeScript', 'React', 'JavaScript', 'Tailwind', 'HTML/CSS', 'next.js'],
      theme: {
        iconColor: 'text-violet-400', // Leuchtendes Violett fürs Icon
        gradient: 'from-violet-400 to-fuchsia-600',
        bgGlow: 'bg-violet-500/10',
        borderHover: 'hover:border-violet-400',
        textGlow: 'group-hover:text-violet-300',
        boxShadow: 'hover:shadow-[0_0_40px_rgba(167,139,250,0.2)]'
      }
    },
    {
      category: 'Data Engineering',
      icon: Database,
      skills: ['SQL', 'MariaDB', 'PostgreSQL', 'MongoDB', 'Redis'],
      theme: {
        iconColor: 'text-emerald-400', // Leuchtendes Smaragdgrün
        gradient: 'from-emerald-400 to-teal-600',
        bgGlow: 'bg-emerald-500/10',
        borderHover: 'hover:border-emerald-400',
        textGlow: 'group-hover:text-emerald-300',
        boxShadow: 'hover:shadow-[0_0_40px_rgba(52,211,153,0.2)]'
      }
    },
    {
      category: 'DevOps & Workflow',
      icon: GitBranch,
      skills: ['Git', 'CI/CD', 'Docker', 'Agile', 'Linux'],
      theme: {
        iconColor: 'text-rose-400', // Leuchtendes Pink/Rot
        gradient: 'from-rose-400 to-orange-600',
        bgGlow: 'bg-rose-500/10',
        borderHover: 'hover:border-rose-400',
        textGlow: 'group-hover:text-rose-300',
        boxShadow: 'hover:shadow-[0_0_40px_rgba(251,113,133,0.2)]'
      }
    }
  ];

  return (
    <section id="stack" className="relative py-32 px-6 bg-[#0A192F] overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#64FFDA] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#112240] border border-slate-700 mb-6">
            <Cpu className="w-4 h-4 text-[#00FFF7]" />
            <span className="text-sm font-mono text-slate-300 uppercase tracking-wider">My Arsenal</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-['Plus_Jakarta_Sans'] font-extrabold text-white mb-6 tracking-tight">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#64FFDA]">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative p-8 rounded-3xl bg-[#112240]/40 backdrop-blur-xl border border-white/5 transition-all duration-500 overflow-hidden ${stack.theme.boxShadow} hover:-translate-y-1`}
            >
              <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${stack.theme.gradient} opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-700`} />
              
              {/* Hier ist der reparierte Header-Bereich */}
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className={`flex items-center justify-center p-4 rounded-2xl ${stack.theme.bgGlow} transition-colors duration-500`}>
                  <stack.icon className={`w-8 h-8 ${stack.theme.iconColor}`} />
                </div>
                <h3 className={`text-2xl font-['Plus_Jakarta_Sans'] font-bold text-slate-200 transition-colors duration-300 ${stack.theme.textGlow}`}>
                  {stack.category}
                </h3>
              </div>
              {/* Ende der Reparatur */}

              <div className="relative z-10 flex flex-wrap gap-3">
                {stack.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      delay: index * 0.1 + skillIndex * 0.05 
                    }}
                    className={`px-4 py-2 rounded-xl bg-[#0A192F]/80 border border-slate-700/50 text-slate-300 text-sm font-['JetBrains_Mono'] font-medium transition-all duration-300 cursor-default shadow-lg ${stack.theme.borderHover} hover:text-white hover:shadow-2xl`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}