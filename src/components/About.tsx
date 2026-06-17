import { useState, useRef } from "react";
import { Sparkles, ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
// @ts-ignore
import piyushPortrait from "../assets/images/piyush_portrait.jpg";

interface AboutProps {
  onBackToPortfolio: (anchor?: string) => void;
  onOpenResume: () => void;
}

export default function About({ onBackToPortfolio, onOpenResume }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>("");
  const [glareClass, setGlareClass] = useState<string>("opacity-0");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const [holoStyle, setHoloStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - height / 2) / (height / 2)) * -10;
    const rotateY = ((x - width / 2) / (width / 2)) * 10;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`
    );

    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;
    setGlareClass("opacity-100");
    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.18) 0%, transparent 60%)`,
    });

    // Holographic rainbow gradient shift
    setHoloStyle({
      opacity: 0.28,
      backgroundPosition: `${glareX}% ${glareY}%`,
      backgroundImage: `linear-gradient(${135 + rotateY * 2.5}deg, rgba(255, 75, 0, 0.35) 0%, rgba(255, 168, 0, 0.2) 25%, rgba(0, 180, 255, 0.35) 50%, rgba(255, 75, 0, 0.35) 75%, rgba(0, 180, 255, 0.2) 100%)`,
      backgroundSize: "200% 200%",
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlareClass("opacity-0 transition-opacity duration-500");
    setGlareStyle({});
    setHoloStyle({ opacity: 0, transition: "opacity 0.5s ease-out" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="pt-28 pb-16 sm:pt-32 sm:pb-24 flex flex-col items-start w-full max-w-full overflow-hidden"
      id="about-page"
    >
      {/* Back to Portfolio navigational button */}
      <button
        onClick={() => onBackToPortfolio("#about")}
        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#FF4B00] mb-8 group cursor-pointer transition-colors"
        id="about-back-btn"
      >
        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
        Back to Portfolio
      </button>

      {/* Hero Segment */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start border-b border-[#E5E5E5] dark:border-[#222222] pb-12 mb-12 w-full max-w-full">
        
        {/* Left: Beautiful Headshot Block */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start select-none">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: transformStyle,
              transition: transformStyle ? "none" : "transform 0.5s ease-out",
              transformStyle: "preserve-3d",
            }}
            className="relative group w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-[#F3F4F6] dark:bg-[#1E1E20] border border-[#E5E5E5] dark:border-[#222222] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(255,75,0,0.08)] cursor-pointer z-10"
            id="about-portrait-container"
          >
            {/* The portrait headshot in original full colors */}
            <img
              src={piyushPortrait}
              alt="Piyush Deshmukh"
              className="w-full h-full object-cover pointer-events-none rounded-2xl"
              style={{
                transform: "translateZ(20px)",
              }}
              id="about-portrait-img"
            />
            
            {/* Parallax HUD Crosshairs */}
            <div
              className="absolute inset-3.5 border border-white/5 pointer-events-none transition-opacity duration-300 font-mono text-[9px] text-[#FF4B00]/55 flex items-center justify-center z-10"
              style={{
                transform: "translateZ(32px)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute top-0 left-0 font-light select-none">+</div>
              <div className="absolute top-0 right-0 font-light select-none">+</div>
              <div className="absolute bottom-0 left-0 font-light select-none">+</div>
              <div className="absolute bottom-0 right-0 font-light select-none">+</div>
            </div>

            {/* Holographic foil overlay */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-color-dodge z-25 transition-opacity duration-150 rounded-2xl"
              style={holoStyle}
            />

            {/* Glare overlay */}
            <div
              className={`absolute inset-0 pointer-events-none mix-blend-overlay z-20 rounded-2xl ${glareClass}`}
              style={glareStyle}
            />
            {/* Elegant orange border outline */}
            <div className="absolute inset-0 border border-[#FF4B00]/0 group-hover:border-[#FF4B00]/30 rounded-2xl transition-colors duration-500 pointer-events-none z-10" />
          </div>

          <p className="text-[11px] font-mono text-[#6B6B6B] dark:text-[#A1A1AA] mt-3.5 text-center md:text-left flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#FF4B00]" /> Piyush Deshmukh
          </p>
        </div>

        {/* Right: Detailed Bio */}
        <div className="md:col-span-8 space-y-4 pt-1">
          <div className="text-sm sm:text-[15px] text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed space-y-4 font-normal">
            <p>
              I'm a Product-focused Designer who solves real user problems through thoughtful UX, clean UI, and strong product thinking. I design digital products by aligning user needs, business goals, and technology ensuring experiences are intuitive, scalable, and impactful.
            </p>
            <p>
              Product-minded engineer with hands-on experience spanning UX design, product thinking, and full-stack development. Skilled at identifying user problems, translating them into well-designed product solutions, and seeing them through to working software bridging the gap between design, strategy, and engineering.
            </p>
            <p>
              Throughout my journey, I have had the opportunity to build and ship software as an intern at Wyreflow Technologies, ioGenies Solutions, Sustainfy Energy, and I-Hub QTF IISER Pune. These experiences have allowed me to lead end-to-end product design projects (research, wireframing, prototyping, usability testing, and iteration) and build AI-driven features with hands-on technical implementation in React and Flutter, successfully bridging the gap between design and engineering with full-stack thinking.
            </p>
          </div>

          {/* Quick Meta Stats */}
          <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-mono">
            <div className="border border-[#E5E5E5] dark:border-[#222222] rounded-xl p-3 bg-[#FAFAFA] dark:bg-[#212124]">
              <span className="block text-[#6B6B6B] dark:text-[#A1A1AA] uppercase tracking-wider text-[9px] mb-1">Education</span>
              <span className="font-semibold text-[#111111] dark:text-[#FAFAFA]">B.E. Computer Engineering</span>
            </div>
            <div className="border border-[#E5E5E5] dark:border-[#222222] rounded-xl p-3 bg-[#FAFAFA] dark:bg-[#212124]">
              <span className="block text-[#6B6B6B] dark:text-[#A1A1AA] uppercase tracking-wider text-[9px] mb-1">Location Base</span>
              <span className="font-semibold text-[#111111] dark:text-[#FAFAFA]">Pune, India (Open to travel)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Dynamic Action Block */}
      <div className="w-full text-center sm:text-left bg-[#FAFAFA] dark:bg-[#212124] border border-[#E5E5E5] dark:border-[#222222] p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-[#111111] dark:text-[#FAFAFA] mb-1">
            Let's build something functional.
          </h3>
          <p className="text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1AA]">
            I'm currently reviewing roles in Product Design, UX, and APM portfolios.
          </p>
        </div>
        
        <div className="flex flex-row flex-wrap justify-center sm:justify-end gap-3 shrink-0">
          <button
            onClick={() => onBackToPortfolio("#work")}
            className="px-4 py-2 bg-[#FF4B00] hover:bg-[#E54100] text-white text-xs font-mono font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Explore My Work
          </button>
          
          <button
            onClick={onOpenResume}
            className="px-4 py-2 border border-[#E5E5E5] dark:border-[#222222] hover:border-[#111111] dark:hover:border-[#FAFAFA] text-[#111111] dark:text-[#FAFAFA] text-xs font-mono font-medium rounded-lg bg-white dark:bg-[#161618] transition-colors cursor-pointer"
          >
            Review Resume
            <ArrowUpRight className="w-3.5 h-3.5 inline ml-1" />
          </button>
        </div>
      </div>

    </motion.div>
  );
}
