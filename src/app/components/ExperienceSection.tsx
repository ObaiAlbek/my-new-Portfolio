import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Users, Calendar, ChevronRight, Zap, Star } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      icon: Briefcase,
      title: 'Software Development',
      company: 'scireum GmbH',
      period: '2026 - Present',
      type: 'B2B E-Commerce',
      description: 'Developing scalable B2B e-commerce solutions with focus on clean architecture and maintainable code.',
      highlights: ['Microservices Architecture', 'REST API Development', 'Database Optimization'],
      theme: {
        color: 'text-cyan-400',
        gradient: 'from-cyan-400 to-blue-600',
        bgGlow: 'bg-cyan-500/10',
        border: 'group-hover:border-cyan-400/50',
        shadow: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]'
      }
    },
    {
      icon: Users,
      title: 'Java Programming Tutor',
      company: 'Technische Hochschule Mannheim',
      period: '2025 - 2026',
      type: 'Education',
      description: 'Teaching Java programming fundamentals and best practices to university students.',
      highlights: ['Object-Oriented Programming', 'Code Quality', 'Mentoring'],
      theme: {
        color: 'text-violet-400',
        gradient: 'from-violet-400 to-fuchsia-600',
        bgGlow: 'bg-violet-500/10',
        border: 'group-hover:border-violet-400/50',
        shadow: 'hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]'
      }
    },
    {
      icon: GraduationCap,
      title: 'B.Sc. Informatik',
      company: 'Technische Hochschule Mannheim',
      period: 'Sep 2023 - Present',
      type: 'Education',
      description: 'Pursuing a Bachelor of Science in Computer Science, with a focus on software engineering, algorithms, and data management.',
      highlights: ['Software Engineering', 'Algorithms & Data Structures', 'Database Systems'],
      grade: '1,6',
      theme: {
        color: 'text-emerald-400',
        gradient: 'from-emerald-400 to-teal-600',
        bgGlow: 'bg-emerald-500/10',
        border: 'group-hover:border-emerald-400/50',
        shadow: 'hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]'
      }
    }
  ];

  return (
    <section id="experience" className="relative py-32 px-6 bg-[#0A192F] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#64FFDA] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#112240] border border-slate-700 mb-6">
            <Zap className="w-4 h-4 text-[#00FFF7]" />
            <span className="text-sm font-mono text-slate-300 uppercase tracking-wider">My Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-['Plus_Jakarta_Sans'] font-extrabold text-white mb-6 tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#64FFDA]">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Die zentrale leuchtende Linie (versteckt auf Mobile, sichtbar auf Desktop) */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-700 to-transparent transform lg:-translate-x-1/2" />

          <div className="space-y-16 lg:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={exp.title} className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Timeline Icon (Knotenpunkt auf der Linie) */}
                  <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                      className="relative"
                    >
                      <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${exp.theme.bgGlow}`} />
                      <div className={`w-12 h-12 rounded-full bg-[#0A192F] border-2 border-slate-700 flex items-center justify-center z-10 relative transition-colors duration-300 group-hover:border-cyan-400`}>
                        <exp.icon className={`w-5 h-5 ${exp.theme.color}`} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Unsichtbarer Spacer für die andere Seite (nur Desktop) */}
                  <div className="hidden lg:block w-1/2" />

                  {/* Card Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className={`w-full lg:w-1/2 pl-20 lg:pl-0 ${isEven ? 'lg:pr-12' : 'lg:pl-12'}`}
                  >
                    <div className={`group relative p-8 rounded-3xl bg-[#112240]/40 backdrop-blur-xl border border-slate-700/50 transition-all duration-500 overflow-hidden ${exp.theme.shadow} ${exp.theme.border} hover:-translate-y-2`}>
                      
                      {/* Hintergrund-Glow der Karte beim Hover */}
                      <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br ${exp.theme.gradient} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-700`} />

                      <div className="relative z-10">
                        {/* Company & Period Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                          <h3 className="text-2xl font-['Plus_Jakarta_Sans'] font-bold text-slate-200 group-hover:text-white transition-colors">
                            {exp.title}
                          </h3>
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A192F] border border-slate-700 text-sm font-mono text-slate-400">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Role & Type */}
                        <div className="mb-6">
                          <div className={`flex items-center gap-3 ${exp.grade ? 'mb-3' : ''}`}>
                            <span className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${exp.theme.gradient}`}>
                              {exp.company}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                            <span className="text-sm font-mono text-slate-400 uppercase tracking-wider">
                              {exp.type}
                            </span>
                          </div>
                          {exp.grade && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm font-mono font-semibold">
                              <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                              Current Grade: {exp.grade}
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 leading-relaxed mb-8 font-['Inter']">
                          {exp.description}
                        </p>

                        {/* Highlights (Pills) */}
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <motion.span
                              key={highlight}
                              whileHover={{ scale: 1.05 }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A192F]/60 border border-slate-700 text-slate-300 text-sm font-['JetBrains_Mono'] hover:text-white transition-colors cursor-default"
                            >
                              <ChevronRight className={`w-3.5 h-3.5 ${exp.theme.color}`} />
                              {highlight}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}