import { ArrowRight, ArrowUpRight, ChevronsDown, MapPin, User } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenResume: () => void;
  onGoToAbout: () => void;
}

export default function Hero({ onOpenResume, onGoToAbout }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full pt-40 sm:pt-48 lg:pt-52 flex flex-col items-start relative overflow-hidden scroll-snap-target"
      id="hero"
    >
      
      {/* Ambient background matching the reference designs - now spans full width */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none" id="hero-background">
        
        {/* Animated Mesh Blobs - Clean & consistent warm tones centered around the Primary Brand Orange */}
        {/* Blob 1 (Top-Right): Primary Orange Glow */}
        <div className="absolute -top-[10%] right-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-[#FF4B00] opacity-[0.20] dark:opacity-[0.28] blur-[100px] sm:blur-[130px] animate-blob-1 pointer-events-none" />
        
        {/* Blob 2 (Left-Center): Warm Amber / Deep Red-Orange Glow */}
        <div className="absolute top-[15%] left-[5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-[#FF8000] dark:bg-[#E64200] opacity-[0.15] dark:opacity-[0.20] blur-[90px] sm:blur-[120px] animate-blob-2 pointer-events-none" />
        
        {/* Blob 3 (Center-Right): Soft Gold / Coral Glow */}
        <div className="absolute bottom-[5%] right-[20%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-[#FFA800] dark:bg-[#FF5A00] opacity-[0.12] dark:opacity-[0.16] blur-[80px] sm:blur-[110px] animate-blob-3 pointer-events-none" />

        {/* Technical Grid Pattern - SVG with lines and intersection dots */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-95 dark:opacity-95"
          style={{
            maskImage: 'radial-gradient(circle at 50% 35%, black 30%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 35%, black 30%, transparent 85%)'
          }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                {/* Grid Lines */}
                <path 
                  d="M 40 0 L 0 0 0 40" 
                  fill="none" 
                  className="stroke-[#FF4B00]/20 dark:stroke-[#FF4B00]/24" 
                  strokeWidth="1" 
                />
                {/* Intersection Dots */}
                <circle 
                  cx="0" 
                  cy="0" 
                  r="1.5" 
                  className="fill-[#FF4B00]/45 dark:fill-[#FF4B00]/55" 
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* SVG Noise Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.065] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Soft feathering to blend into the rest of the page */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#161618] transition-colors duration-200" />
      </div>

      {/* Content wrapper with z-10 to stay above the background, centered and with bottom padding to align with other sections */}
      <div className="relative z-10 w-full max-w-[920px] mx-auto px-5 sm:px-6 flex flex-col items-start pb-24 sm:pb-32">
        {/* Short eyebrow label in muted text */}
        <motion.span
          variants={itemVariants}
          className="text-xs font-mono font-semibold tracking-[0.15em] text-[#FF4B00] uppercase mb-3"
          id="hero-eyebrow"
        >
          Product Designer, UIUX & APM
        </motion.span>

        {/* Large heading with animated underline on "Piyush" */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-[52px] font-semibold text-[#111111] dark:text-[#FAFAFA] tracking-tight leading-none mb-4" 
          id="hero-heading"
        >
          Hi, I'm{" "}
          <span className="font-semibold text-[#111111] dark:text-[#FAFAFA]">
            Piyush
          </span>
          .
        </motion.h1>

        {/* Sub-heading (one line, ~20px) */}
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl font-medium text-[#111111] dark:text-[#FAFAFA] leading-snug tracking-tight mb-5" 
          id="hero-subheading"
        >
          Designing and building intuitive digital products.
        </motion.p>

        {/* Body paragraph (2–3 sentences) */}
        <motion.p 
          variants={itemVariants}
          className="text-[#6B6B6B] dark:text-[#A1A1AA] text-[15px] sm:text-base leading-relaxed tracking-normal font-normal max-w-(--size-xs) mb-8" 
          id="hero-body"
        >
          I translate user research and wireframes into shipped, high-impact digital experiences. Open to roles in Product Design, UX, and APM.
        </motion.p>

        {/* CTA buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-row flex-wrap gap-4 items-center mb-6" 
          id="hero-cta-group"
        >
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="inline-flex items-center justify-center gap-1.5 bg-[#FF4B00] hover:bg-[#E54100] text-white text-sm font-medium h-10 px-5 rounded-lg transition-colors duration-200 shadow-xs hover:shadow-md cursor-pointer"
            id="hero-cta-work"
          >
            View My Work <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onGoToAbout}
            className="group inline-flex items-center justify-center gap-2 text-xs font-mono font-medium text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#FF4B00] border border-[#E5E5E5] dark:border-[#222222] hover:border-[#FF4B00]/40 dark:hover:border-[#FF4B00]/40 rounded-lg p-2.5 px-3.5 bg-transparent hover:bg-[#FF4B00]/5 dark:hover:bg-[#FF4B00]/5 transition-colors duration-150 cursor-pointer"
            id="hero-cta-about"
          >
            <User className="w-4 h-4 text-[#6B6B6B]/80 group-hover:text-[#FF4B00] transition-colors shrink-0" />
            <span>Know About Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 shrink-0" />
          </motion.button>
        </motion.div>

        {/* Location and Open to work status - stacked vertically and clean (no capsules) */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-start gap-y-2 text-xs font-mono" 
          id="hero-status-group"
        >
          {/* Location */}
          <div 
            className="flex items-center gap-1.5 text-[#6B6B6B] dark:text-[#A1A1AA]" 
            id="hero-location"
          >
            <div className="w-3.5 flex justify-center shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#FF4B00]" />
            </div>
            <span>Pune, India</span>
          </div>

          {/* Open to Work */}
          <div 
            className="flex items-center gap-1.5" 
            id="hero-availability"
          >
            <div className="w-3.5 flex justify-center shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 dark:bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 dark:bg-green-500"></span>
              </span>
            </div>
            <span className="text-[#374151] dark:text-[#E5E7EB] font-medium">Open to Work</span>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
          variants={itemVariants}
          className="w-full flex justify-center mt-16 sm:mt-20 pointer-events-none"
          id="hero-scroll-indicator"
        >
          <div className="flex flex-col items-center gap-1">
            {/* Fine Vertical Line aligning with the tech grids */}
            <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[#6B6B6B]/25 to-[#FF4B00] dark:via-[#A1A1AA]/25 dark:to-[#FF4B00]" />
            {/* Animating Chevrons */}
            <ChevronsDown className="w-4 h-4 text-[#FF4B00] animate-slow-bob shrink-0" />
            <span className="text-[9px] font-mono tracking-widest text-[#6B6B6B]/45 dark:text-[#A1A1AA]/45 uppercase mt-1">
              Scroll
            </span>
          </div>
        </motion.div>
      </div>

    </motion.section>
  );
}
