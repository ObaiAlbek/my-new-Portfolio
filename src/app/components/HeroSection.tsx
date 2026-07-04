import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Code2 } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  // Mouse Tracking für einen coolen Leuchteffekt
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a192f]">
      {/* 1. Interaktiver Maus-Glow (folgt dem Mauszeiger) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.06), transparent 80%)`,
        }}
      />

      {/* 2. Animiertes Grid im Hintergrund */}
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(100, 255, 218, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Linke Seite: Text & CTA */}
        <div className="flex-1 max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#112240] border border-[#64FFDA]/30 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#64FFDA] animate-pulse" />
              
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter text-[#CCD6F6]"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFF7] via-[#64FFDA] to-[#00FFF7] animate-gradient-x">
              Obai Albek.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl text-[#8892B0] font-semibold mb-6"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-[#8892B0] mb-10 max-w-xl leading-relaxed"
          >
            Software Engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Focusing on{" "}
            <span className="text-[#64FFDA]">Clean Code</span>, scalable
            architectures, and B2B solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex px-8 py-4 bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] rounded-md overflow-hidden transition-all hover:bg-[#64FFDA]/10 font-['JetBrains_Mono'] font-medium items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)]"
            >
              Check out my work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Rechte Seite: Schwebendes Code-Fenster (Der Wow-Faktor) */}
        <motion.div
          className="flex-1 hidden lg:block"
          style={{ y }} // Parallax Scroll-Effekt
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
        >
          <div className="relative w-full max-w-md ml-auto">
            {/* Glow hinter dem Fenster */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#64FFDA] to-[#00FFF7] rounded-xl blur-lg opacity-20 animate-pulse"></div>

            <div className="relative rounded-xl bg-[#112240] border border-[#233554] shadow-2xl overflow-hidden">
              {/* Fenster-Kopf */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0a192f] border-b border-[#233554]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs text-[#8892B0] font-['JetBrains_Mono'] flex items-center gap-2">
                  <Terminal size={12} /> obai.ts
                </span>
              </div>

              {/* Code Inhalt */}
              <div className="p-6 font-['JetBrains_Mono'] text-sm sm:text-base leading-relaxed overflow-hidden">
                <div className="text-[#8892B0] mb-2">
                  {"// The developer you need"}
                </div>
                <div>
                  <span className="text-[#C678DD]">const</span>{" "}
                  <span className="text-[#E5C07B]">developer</span>{" "}
                  <span className="text-[#56B6C2]">=</span> {"{"}
                </div>
                <div className="ml-4">
                  <span className="text-[#E06C75]">name:</span>{" "}
                  <span className="text-[#98C379]">'Obai Albek'</span>,
                </div>
                <div className="ml-4">
                  <span className="text-[#E06C75]">role:</span>{" "}
                  <span className="text-[#98C379]">'Software Engineer'</span>,
                </div>
                <div className="ml-4">
                  <span className="text-[#E06C75]">skills:</span> {"["}
                  <span className="text-[#98C379]">'Java'</span>,{" "}
                  <span className="text-[#98C379]">'React'</span>,{" "}
                  <span className="text-[#98C379]">'SQL'</span>
                  {"]"},
                </div>
                <div className="ml-4">
                  <span className="text-[#E06C75]">passions:</span> {"["}
                  <span className="text-[#98C379]">'Clean Code'</span>,{" "}
                  <span className="text-[#98C379]">'Architecture'</span>
                  {"]"}
                </div>
                <div>{"}"};</div>
                <br />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    repeatType: "reverse",
                  }}
                  className="flex items-center gap-2 text-[#64FFDA]"
                >
                  <Code2 size={16} />{" "}
                  <span>System.out.println("Let's build!");</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
