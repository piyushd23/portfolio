import { useEffect } from "react";
import { ProjectItem } from "../types";
import { X, Calendar, User, Briefcase, Sparkles, CheckCircle2, ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  // Prevent background scroll when opened
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/60 dark:bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
      id="case-study-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ scale: 0.93, y: 15, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 10, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="w-full max-w-3xl bg-white dark:bg-[#1C1C1E] rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.4)] border border-black/[0.04] dark:border-white/[0.06] overflow-hidden flex flex-col max-h-[85vh] md:max-h-[90vh] pointer-events-auto"
      >
        {/* Header sticky bar */}
        <div className="sticky top-0 z-10 bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-md border-b border-black/[0.04] dark:border-white/[0.06] px-6 sm:px-10 py-4 sm:py-5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-medium tracking-wider text-[#FF4B00] bg-[#FF4B00]/5 px-2.5 py-1 rounded-full uppercase">
              {project.isCaseStudy ? "Case Study" : "Project"}
            </span>
            <span className="text-[#6B6B6B] dark:text-[#A1A1AA] text-xs">/</span>
            <span className="text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA]">{project.name}</span>
          </div>
          
          <button
            onClick={onClose}
            id="case-study-close"
            className="p-1 px-3 text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] hover:bg-[#F3F4F6] dark:hover:bg-[#2B2B30] rounded-md transition duration-200 border border-[#E5E5E5] dark:border-[#222222] flex items-center gap-1.5 cursor-pointer"
          >
            Close <span className="text-[10px] opacity-60">ESC</span>
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modal scrollable content - data-lenis-prevent added to allow native scroll bounds */}
        <div 
          data-lenis-prevent
          className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 sm:py-10 max-w-full custom-scrollbar"
        >
          
          {/* Title Block */}
          <header className="mb-8">
            <h1 id="case-study-title" className="text-3xl sm:text-4xl font-semibold text-[#111111] dark:text-[#FAFAFA] tracking-tight leading-tight mb-3">
              {project.name}
            </h1>
            <p className="text-lg text-[#6B6B6B] dark:text-[#A1A1AA] font-normal leading-relaxed">
              {project.description}
            </p>
          </header>

          {/* Quick Metadata Grid */}
          <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#E5E5E5] dark:border-[#222222]/80 mb-8 bg-[#FAFAFA] dark:bg-[#111111]/90 rounded-xl p-4">
            <div>
              <span className="block text-[11px] font-mono tracking-wider text-[#6B6B6B] dark:text-[#A1A1AA] uppercase mb-1 flex items-center gap-1">
                <User className="w-3 h-3 text-[#FF4B00]" /> My Role
              </span>
              <span className="text-sm font-medium text-[#111111] dark:text-[#FAFAFA]">{project.myRole}</span>
            </div>
            
            <div>
              <span className="block text-[11px] font-mono tracking-wider text-[#6B6B6B] dark:text-[#A1A1AA] uppercase mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#FF4B00]" /> Timeline
              </span>
              <span className="text-sm font-medium text-[#111111] dark:text-[#FAFAFA]">{project.timeline}</span>
            </div>

            <div className="col-span-2">
              <span className="block text-[11px] font-mono tracking-wider text-[#6B6B6B] dark:text-[#A1A1AA] uppercase mb-1 flex items-center gap-1">
                <Briefcase className="w-3 h-3 text-[#FF4B00]" /> Core Stack / Tools
              </span>
              <div className="flex flex-wrap gap-1 mt-0.5">
                {project.toolsUsed.map((tool) => (
                  <span 
                    key={tool} 
                    className="text-[11px] text-[#374151] dark:text-[#D1D5DB] bg-white dark:bg-[#252528] border border-[#E5E5E5] dark:border-[#2E2E30] px-1.5 py-0.5 rounded animate-none"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Detailed sections */}
          <div className="space-y-8">
            
            {/* Long Overview */}
            <div>
              <h3 className="text-base font-mono uppercase text-[#6B6B6B] dark:text-[#A1A1AA] tracking-wider mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF4B00]" /> Overview & Vision
              </h3>
              <p className="text-sm text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* The Challenge */}
            <div className="p-5 border border-[#E5E5E5] dark:border-[#2E2E30] rounded-xl bg-white dark:bg-[#252528]">
              <h3 className="text-sm font-mono tracking-wider uppercase text-[#111111] dark:text-[#FAFAFA] font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> The Problem
              </h3>
              <p className="text-sm text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* My Shipped Solution */}
            <div className="p-5 border border-[#FF4B00]/15 dark:border-[#FF4B00]/25 rounded-xl bg-[#FF4B00]/3 dark:bg-[#FF4B00]/5">
              <h3 className="text-sm font-mono tracking-wider uppercase text-[#FF4B00] font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#FF4B00] rounded-full"></span> My Design & Shipped Solution
              </h3>
              <p className="text-sm text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Key Insights & Hard Metrics */}
            <div>
              <h3 className="text-base font-mono uppercase text-[#6B6B6B] dark:text-[#A1A1AA] tracking-wider mb-3">
                Key Insights & Friction Eliminated
              </h3>
              <ul className="space-y-3">
                {project.keyInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#FF4B00] shrink-0 mt-0.5" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Callout links - Behance or Github buttons */}
            <div className="pt-6 border-t border-[#E5E5E5] dark:border-[#222222] flex flex-wrap gap-4">
              {project.isCaseStudy ? (
                <a
                  href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-white bg-[#FF4B00] hover:bg-[#E54100] px-4.5 py-2.5 rounded-lg transition-colors duration-150 cursor-pointer shadow-xs hover:shadow-sm"
                >
                  View Case Study on Behance
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <>
                  <a
                    href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-white dark:text-[#111111] bg-[#111111] dark:bg-[#FAFAFA] hover:bg-[#252525] dark:hover:bg-[#E5E5E5] px-4.5 py-2.5 rounded-lg transition-colors duration-150 cursor-pointer shadow-xs hover:shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                  
                  {project.id === "biopay" && (
                    <a
                      href="https://github.com/piyushd23" // Replace with live URL if available in the future
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#FF4B00] hover:text-[#E54100] px-4.5 py-2.5 rounded-lg border border-[#FF4B00]/25 hover:border-[#FF4B00] transition-colors duration-150 cursor-pointer"
                    >
                      Live Demo
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </>
              )}
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
