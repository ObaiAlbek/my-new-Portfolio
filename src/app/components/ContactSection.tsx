import { useState } from 'react';
import { motion } from 'framer-motion'; // oder 'motion/react' je nach deinem Setup
import { Mail, Github, Linkedin, Copy, Check, Sparkles, Send, Terminal } from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  
  // Ich habe deine echte E-Mail aus dem Lebenslauf genommen!
  const email = "obay.albeek@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Setzt sich nach 2 Sekunden zurück
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ObaiAlbek',
      gradient: 'from-slate-700 to-slate-900',
      glow: 'group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]',
      text: 'group-hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/obaialbek',
      gradient: 'from-blue-600 to-blue-900',
      glow: 'group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]',
      text: 'group-hover:text-blue-400'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#0A192F] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-gradient-to-t from-[#00FFF7]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#112240] border border-slate-700 mb-6">
            <Sparkles className="w-4 h-4 text-[#64FFDA]" />
            <span className="text-sm font-mono text-slate-300 uppercase tracking-wider">What's Next?</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-['Plus_Jakarta_Sans'] font-extrabold text-white mb-6 tracking-tight">
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] to-[#64FFDA]">Connection</span>
          </h2>
          <p className="text-lg text-slate-400 font-['Inter'] max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. Let's build something extraordinary together.
          </p>
        </motion.div>

        {/* The Grid */}
        <div className="grid lg:grid-cols-5 gap-6 mb-24">
          
          {/* Main Contact Card (Spans 3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 group relative p-1 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-[#112240]"
          >
            {/* Animated Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7] via-[#64FFDA] to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl" />
            
            <div className="relative h-full p-8 md:p-12 rounded-[22px] bg-[#0A192F]/90 backdrop-blur-2xl border border-white/5 flex flex-col justify-between">
              
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#0A192F]"></span>
                  </div>
                  <span className="text-emerald-400 font-mono text-sm uppercase tracking-wider font-semibold">
                    System Online • Available for opportunities
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-['Plus_Jakarta_Sans'] font-bold text-slate-200 mb-4">
                  Let's create <br/> something impactful.
                </h3>
              </div>

              {/* Interactive Email Copier */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-between px-6 py-4 rounded-xl bg-[#112240] border border-slate-700 hover:border-[#00FFF7]/50 transition-colors group/btn"
                >
                  <div className="flex items-center gap-4">
                    <Mail className={`w-5 h-5 transition-colors ${copied ? 'text-emerald-400' : 'text-slate-400 group-hover/btn:text-[#00FFF7]'}`} />
                    <span className={`font-mono text-sm md:text-base transition-colors ${copied ? 'text-emerald-400' : 'text-slate-300'}`}>
                      {email}
                    </span>
                  </div>
                  {copied ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-slate-500 group-hover/btn:text-[#00FFF7] transition-colors" />
                  )}
                </button>
                
                <a 
                  href={`mailto:${email}`}
                  className="flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#00FFF7] to-[#64FFDA] text-[#0A192F] font-bold font-['Inter'] hover:shadow-[0_0_30px_rgba(0,255,247,0.4)] transition-all hover:-translate-y-1"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Shoot
                </a>
              </div>

            </div>
          </motion.div>

          {/* Social Cards (Span 2 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
                className={`group relative flex-1 flex items-center justify-between p-8 rounded-3xl bg-[#112240]/40 backdrop-blur-xl border border-white/5 transition-all duration-500 hover:-translate-y-2 ${link.glow}`}
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex items-center gap-6">
                  <div className="p-4 rounded-2xl bg-[#0A192F] border border-slate-700 group-hover:border-slate-500 transition-colors">
                    <link.icon className={`w-8 h-8 text-slate-400 transition-colors duration-300 ${link.text}`} />
                  </div>
                  <div>
                    <h4 className="text-xl font-['Plus_Jakarta_Sans'] font-bold text-slate-200 group-hover:text-white transition-colors">
                      {link.label}
                    </h4>
                    <span className="text-sm font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                      Connect &rarr;
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

        </div>

        {/* High-Tech Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-slate-500 font-mono text-sm">
            <Terminal className="w-4 h-4" />
            <span>Built with <span className="text-[#64FFDA]">React</span> & <span className="text-[#00FFF7]">TypeScript</span></span>
          </div>
          
          <div className="text-slate-600 text-sm font-['Inter']">
            © {new Date().getFullYear()} Obai Albek. Designed & Engineered with precision.
          </div>
        </motion.div>

      </div>
    </section>
  );
}