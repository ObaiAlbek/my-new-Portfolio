import { motion } from 'motion/react'; // oder framer-motion
import { ExternalLink, Github, Terminal, Layout, Network, Cpu, Database, Server } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'DevBase Web Platform',
      type: 'Fullstack Ecosytem',
      icon: Layout,
      description: 'A comprehensive web platform for developers featuring code sharing, collaboration tools, and project management capabilities. Engineered for performance and seamless user experience.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
      highlights: ['Real-time Collaboration', 'RESTful API', 'Microservices'],
      theme: {
        gradient: 'from-[#00FFF7] to-blue-600',
        textGlow: 'text-[#00FFF7]',
        bgGlow: 'bg-[#00FFF7]/10',
        border: 'border-[#00FFF7]/30'
      },
      techIcons: [Database, Terminal, Cpu],
      // NEU: Hier kommen deine echten Links rein!
      githubUrl: 'https://github.com/ObaiAlbek/devbase', 
      liveUrl: 'https://devbase-demo.com'
    },
    {
      title: 'JavaFX Client-Server',
      type: 'Desktop Network Architecture',
      icon: Network,
      description: 'A robust client-server chat application built with JavaFX. Implementing real-time messaging with a clean interface, focused on rock-solid backend communication and thread safety.',
      tech: ['Java', 'JavaFX', 'Sockets', 'Multi-threading', 'Maven'],
      highlights: ['Real-time Messaging', 'Clean Architecture', 'Scalable Design'],
      theme: {
        gradient: 'from-[#64FFDA] to-emerald-600',
        textGlow: 'text-[#64FFDA]',
        bgGlow: 'bg-[#64FFDA]/10',
        border: 'border-[#64FFDA]/30'
      },
      techIcons: [Server, Network, Terminal],
      // NEU: Hier kommen deine echten Links rein!
      githubUrl: 'https://github.com/ObaiAlbek/javafx-chat',
      liveUrl: '#' // Lass ein # drin, falls es keine Live-Demo gibt
    }
  ];

  return (
    <section id="projects" className="relative py-32 px-6 bg-[#0A192F] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#64FFDA]/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#112240] border border-slate-700 mb-6 shadow-lg">
            <Terminal className="w-4 h-4 text-[#00FFF7]" />
            <span className="text-sm font-mono text-slate-300 uppercase tracking-wider">Showcase</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-['Plus_Jakarta_Sans'] font-extrabold text-white mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#64FFDA]">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Showcase */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={project.title} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                
                {/* 1. Die visuelle Seite (Hologramm-Fenster) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="w-full lg:w-1/2 perspective-1000"
                >
                  <div className={`relative w-full aspect-video rounded-3xl bg-[#112240]/40 backdrop-blur-xl border border-slate-700/50 overflow-hidden group hover:border-slate-500/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]`}>
                    
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br ${project.theme.gradient} opacity-20 group-hover:opacity-40 blur-[50px] transition-all duration-700`} />

                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className={`absolute inset-8 rounded-2xl bg-[#0A192F]/80 backdrop-blur-md border ${project.theme.border} shadow-2xl overflow-hidden flex flex-col`}
                    >
                      <div className="h-8 bg-[#112240] border-b border-slate-700 flex items-center px-4 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      
                      <div className="flex-1 flex items-center justify-center relative">
                        <project.icon className={`w-20 h-20 ${project.theme.textGlow} opacity-80`} />
                        
                        {project.techIcons.map((Icon, i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -10, 0], x: [0, i % 2 === 0 ? 5 : -5, 0] }}
                            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i }}
                            className={`absolute ${i === 0 ? 'top-6 left-12' : i === 1 ? 'bottom-8 right-12' : 'top-10 right-16'} p-3 rounded-xl bg-[#112240] border border-slate-700 shadow-xl`}
                          >
                            <Icon className="w-5 h-5 text-slate-400" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                  </div>
                </motion.div>

                {/* 2. Die Text- und Inhalts-Seite */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${project.theme.bgGlow} ${project.theme.border} border w-fit mb-4`}>
                    <span className={`text-xs font-mono font-bold tracking-wider ${project.theme.textGlow} uppercase`}>
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-4xl font-['Plus_Jakarta_Sans'] font-bold text-slate-200 mb-6">
                    {project.title}
                  </h3>

                  <div className="p-6 rounded-2xl bg-[#112240]/40 backdrop-blur-sm border border-slate-700/50 mb-8 relative group">
                     <div className={`absolute inset-0 bg-gradient-to-r ${project.theme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                     <p className="text-slate-400 text-lg leading-relaxed font-['Inter'] relative z-10">
                       {project.description}
                     </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-3">
                      {project.highlights.map((highlight) => (
                        <span key={highlight} className="flex items-center gap-2 text-slate-300 font-['Inter']">
                          <div className={`w-1.5 h-1.5 rounded-full ${project.theme.bgGlow.replace('/10', '')}`} />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-4 py-2 rounded-lg bg-[#0A192F] border border-slate-700 text-slate-300 text-sm font-['JetBrains_Mono'] hover:border-slate-400 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* NEU: Action Buttons als echte Links (<a> Tags) */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`group relative inline-flex items-center px-6 py-3 bg-transparent border-2 ${project.theme.border} rounded-xl font-['Inter'] font-semibold text-white overflow-hidden transition-all hover:scale-105`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.theme.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      <span className="relative z-10 flex items-center gap-2">
                        <Github className="w-5 h-5" />
                        View Source
                      </span>
                    </a>

                    {/* Den "Live Demo" Button zeigen wir nur, wenn auch ein Link da ist (nicht #) */}
                    {project.liveUrl !== '#' && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group inline-flex items-center px-6 py-3 bg-[#112240] hover:bg-slate-700 text-white rounded-xl font-['Inter'] font-semibold gap-2 transition-all hover:scale-105 shadow-lg"
                      >
                        <ExternalLink className={`w-5 h-5 ${project.theme.textGlow}`} />
                        Live Demo
                      </a>
                    )}
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}