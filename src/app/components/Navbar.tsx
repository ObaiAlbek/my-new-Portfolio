import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download, Terminal } from 'lucide-react';

const navLinks = [
  { label: 'About', id: 'about', href: '#about' },
  { label: 'Stack', id: 'stack', href: '#stack' },
  { label: 'Experience', id: 'experience', href: '#experience' },
  { label: 'Projects', id: 'projects', href: '#projects' },
  { label: 'Contact', id: 'contact', href: '#contact' },
];

const sectionIds = ['hero', ...navLinks.map((link) => link.id)];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHeroActive = activeSection === 'hero';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A192F]/80 backdrop-blur-md border-b border-slate-800/50 shadow-lg shadow-black/20'
          : 'bg-[#0A192F]/0 border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className={`flex items-center gap-2 font-['JetBrains_Mono'] font-bold text-lg px-3 py-1.5 rounded-full transition-all duration-300 ${
            isHeroActive
              ? 'text-[#64FFDA] bg-[#64FFDA]/10 border border-[#64FFDA]/30 shadow-[0_0_15px_rgba(100,255,218,0.15)]'
              : 'text-slate-200 border border-transparent hover:text-[#64FFDA]'
          }`}
        >
          <Terminal className="w-5 h-5 text-[#64FFDA]" />
          Obai<span className="text-[#64FFDA]">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-sm font-['JetBrains_Mono'] transition-all duration-300 ${
                  isActive
                    ? 'text-[#64FFDA] bg-[#64FFDA]/10 border border-[#64FFDA]/30 shadow-[0_0_15px_rgba(100,255,218,0.15)]'
                    : 'text-slate-400 border border-transparent hover:text-[#64FFDA] hover:bg-[#64FFDA]/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#64FFDA]/10 border border-[#64FFDA]/40 text-[#64FFDA] text-sm font-['JetBrains_Mono'] font-medium hover:bg-[#64FFDA]/20 hover:shadow-[0_0_20px_rgba(100,255,218,0.25)] transition-all"
          >
            <Download className="w-4 h-4" />
            CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden text-slate-200 hover:text-[#64FFDA] transition-colors p-2 -mr-2"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0A192F]/95 backdrop-blur-md border-b border-slate-800/50 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-base font-['JetBrains_Mono'] transition-colors ${
                      isActive
                        ? 'text-[#64FFDA] bg-[#64FFDA]/10 border border-[#64FFDA]/30'
                        : 'text-slate-300 border border-transparent hover:text-[#64FFDA] hover:bg-[#64FFDA]/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="/cv.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-[#64FFDA]/10 border border-[#64FFDA]/40 text-[#64FFDA] text-sm font-['JetBrains_Mono'] font-medium w-fit"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
