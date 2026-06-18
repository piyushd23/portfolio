import React, { useState, useRef } from "react";
import { User, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
// @ts-ignore
import piyushPortrait from "../assets/images/piyush_portrait.jpg";

interface AboutSectionProps {
  onGoToDetailedAbout: () => void;
}

export default function AboutSection({ onGoToDetailedAbout }: AboutSectionProps) {
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

    // Mouse positions relative to the element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize rotation coordinates (-10 to 10 degrees max)
    const rotateX = ((y - height / 2) / (height / 2)) * -10;
    const rotateY = ((x - width / 2) / (width / 2)) * 10;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`
    );

    // Calculate glare percentages
    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;
    setGlareClass("opacity-100");
    setGlareStyle({
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.18) 0%, transparent 60%)`,
    });

    // Color shifting holographic foil based on coordinate location
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
    <section
      className="py-20 sm:py-28 border-b border-[#E5E5E5] dark:border-[#222222] w-full max-w-full relative overflow-hidden"
      id="about"
    >
      {/* Decorative clean ambient background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 rounded-full bg-[#FF4B00] opacity-[0.03] dark:opacity-[0.04] blur-[80px] pointer-events-none select-none" />

      {/* Section Header */}
      <div className="relative">
        <div className="absolute -top-[76px] sm:-top-[96px] left-0 pointer-events-none scroll-snap-target" />
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-12"
          id="about-header"
        >
          <User className="w-4.5 h-4.5 text-[#FF4B00]" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#FAFAFA]" id="about-title">
            About Me
          </h2>
        </motion.div>
      </div>

      {/* Classy Content Block */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start w-full max-w-full" id="about-section-content">
        
        {/* Left: Interactive 3D tilt portrait headshot */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: transformStyle,
              transition: transformStyle ? "none" : "transform 0.5s ease-out",
              transformStyle: "preserve-3d",
            }}
            className="relative group w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden bg-[#F3F4F6] dark:bg-[#1E1E20] border border-[#E5E5E5] dark:border-[#222222] shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(255,75,0,0.08)] cursor-pointer select-none"
            id="about-section-portrait-container"
          >
            {/* The portrait headshot in its original full colors (no grayscale classes) */}
            <img
              src={piyushPortrait}
              alt="Piyush Deshmukh"
              className="w-full h-full object-cover pointer-events-none rounded-2xl"
              style={{
                transform: "translateZ(20px)",
              }}
              id="about-section-portrait"
            />
            
            {/* Parallax Floating HUD Crosshairs */}
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

            {/* Holographic shifting foil overlay */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-color-dodge z-25 transition-opacity duration-150 rounded-2xl"
              style={holoStyle}
            />

            {/* Glare overlay */}
            <div
              className={`absolute inset-0 pointer-events-none mix-blend-overlay z-20 rounded-2xl ${glareClass}`}
              style={glareStyle}
            />
            {/* Elegant orange border outline that fades in on hover */}
            <div className="absolute inset-0 border border-[#FF4B00]/0 group-hover:border-[#FF4B00]/30 rounded-2xl transition-colors duration-500 pointer-events-none z-10" />
          </div>
        </div>

        {/* Right: Sophisticated typography & custom underline CTA */}
        <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left pt-2">
          <h3 className="text-lg sm:text-xl font-medium text-[#111111] dark:text-[#FAFAFA] tracking-tight leading-snug mb-4 max-w-xl">
            Product-focused designer bridging the gap between UX strategy and high-fidelity code.
          </h3>
          
          <p className="text-sm sm:text-[15px] text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed font-normal max-w-xl mb-6">
            I design and ship digital experiences by aligning user needs, business goals, and engineering efficiency. Spanning UX research, rapid prototyping, and hands-on React/Flutter development, I focus on turning complex workflows into elegant, seamless, and high-impact software.
          </p>
          
          <div>
            <button
              onClick={onGoToDetailedAbout}
              className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#FF4B00] border border-[#E5E5E5] dark:border-[#222222] hover:border-[#FF4B00]/40 dark:hover:border-[#FF4B00]/40 rounded-lg p-2.5 px-3.5 bg-transparent hover:bg-[#FF4B00]/5 dark:hover:bg-[#FF4B00]/5 transition-colors duration-150 cursor-pointer"
              id="about-section-cta"
            >
              <span>Know More About Me</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
