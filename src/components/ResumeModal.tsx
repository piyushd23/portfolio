import { useEffect } from "react";
import { X, Printer, Download, MapPin, Mail, ExternalLink, Calendar, GraduationCap } from "lucide-react";
import { EXPERIENCES, PROJECTS, SKILLS_DESIGN, SKILLS_ENGINEERING, SKILLS_PRODUCT } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Handle escape press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-black/45 backdrop-blur-xs flex items-center justify-center p-4"
        id="resume-modal-overlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Animated container */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white dark:bg-[#212124] w-full max-w-3xl rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden border border-[#E5E5E5] dark:border-[#222222] relative print:absolute print:inset-0 print:max-h-none print:shadow-none print:border-0 print:rounded-none"
        >
          {/* Action Header bar - Hidden in Print */}
          <div className="flex items-center justify-between p-4 px-6 border-b border-[#E5E5E5] dark:border-[#222222] bg-[#FAFAFA] dark:bg-[#1C1C1F] shrink-0 print:hidden">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#FF4B00]" />
              <span className="text-sm font-medium text-[#111111] dark:text-[#FAFAFA]">Piyush Deshmukh — Interactive Resume</span>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 p-1.5 px-3 rounded-md bg-[#FF4B00] hover:bg-[#E54100] text-white text-xs font-medium transition duration-150 shadow-xs"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / PDF
              </button>
              
              <button
                onClick={onClose}
                className="p-1.5 text-xs text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] hover:bg-[#F3F4F6] dark:hover:bg-[#2B2B30] rounded-md transition duration-100 border border-[#E5E5E5] dark:border-[#2E2E30]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content (Scrollable Container in UI, standard blocks in print) */}
          <div className="flex-1 overflow-y-auto p-8 sm:p-12 print:p-0 print:overflow-visible">
            
            {/* Main resume document layout */}
            <article className="max-w-[700px] mx-auto text-[#111111] dark:text-[#FAFAFA] leading-relaxed">
              
              {/* Header */}
              <div className="border-b-2 border-[#111111] dark:border-[#FAFAFA] pb-6 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight text-[#111111] dark:text-[#FAFAFA] mb-1">
                    Piyush Deshmukh
                  </h1>
                  <p className="text-sm font-medium text-[#FF4B00] uppercase tracking-wider font-mono">
                    Product Designer · UX Architect · Associate Product Manager
                  </p>
                </div>
                
                {/* Contact Coordinates */}
                <div className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] space-y-1.5 sm:text-right font-mono">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#111111]/80 dark:text-[#FAFAFA]/80" />
                    <span>Pune, India · Open to travel/relocation</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#111111]/80 dark:text-[#FAFAFA]/80" />
                    <a href="mailto:piyushd.works@gmail.com" className="hover:text-[#FF4B00] hover:underline">
                      piyushd.works@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center sm:justify-end gap-3 pt-1">
                    <a href="https://linkedin.com/in/piyush-deshmukh-54bb92265" target="_blank" rel="noreferrer" className="hover:text-[#FF4B00] hover:underline inline-flex items-center gap-0.5">
                      LinkedIn <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <span>·</span>
                    <a href="https://github.com/piyushd23" target="_blank" rel="noreferrer" className="hover:text-[#FF4B00] hover:underline inline-flex items-center gap-0.5">
                      GitHub <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <span>·</span>
                    <a href="https://behance.net/piyushdeshmukh" target="_blank" rel="noreferrer" className="hover:text-[#FF4B00] hover:underline inline-flex items-center gap-0.5">
                      Behance <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Profile */}
              <section className="mb-6">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#111111] dark:text-[#FAFAFA] uppercase border-b border-[#E5E5E5] dark:border-[#2E2E30] pb-1 mb-2.5">
                  Professional Profile
                </h2>
                <p className="text-sm text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                  Product Designer & APM with a Computer Engineering background from Marathwada Mitra Mandal's College of Engineering (MMCOE), Pune. 
                  Bridges the gap between user experience, product strategy, and engineering. Extensive background in end-to-end user research, 
                  product roadmaps, and full-stack implementation. Direct experience implementing B2B IoT solutions, designing 
                  cohesive multi-platform UI libraries, and compiling automated hardware interface workflows.
                </p>
              </section>

              {/* Education */}
              <section className="mb-6">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#111111] dark:text-[#FAFAFA] uppercase border-b border-[#E5E5E5] dark:border-[#2E2E30] pb-1 mb-2.5">
                  Education
                </h2>
                <div className="flex justify-between items-start text-sm">
                  <div>
                    <h3 className="font-semibold text-[#111111] dark:text-[#FAFAFA]">
                      Marathwada Mitra Mandal's College of Engineering (MMCOE)
                    </h3>
                    <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA]">
                      Bachelor of Engineering - Computer Engineering
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA]">Pune, India</span>
                    <p className="text-xs font-mono text-[#FF4B00]">Jul 2022 - Jun 2026</p>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section className="mb-6">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#111111] dark:text-[#FAFAFA] uppercase border-b border-[#E5E5E5] dark:border-[#2E2E30] pb-1 mb-2.5">
                  Professional Experience
                </h2>
                <div className="space-y-4">
                  {EXPERIENCES.map((exp, idx) => (
                    <div key={idx} className="text-sm">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <span className="font-semibold text-[#111111] dark:text-[#FAFAFA]">{exp.company}</span>
                          <span className="text-[#6B6B6B] dark:text-[#A1A1AA] mx-2">·</span>
                          <span className="text-[#374151] dark:text-[#D1D5DB] font-medium">{exp.role}</span>
                        </div>
                        <div className="text-right text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA]">
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] mb-1.5 italic">Pune, India</p>
                      <p className="text-xs text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Selected Projects */}
              <section className="mb-6">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#111111] dark:text-[#FAFAFA] uppercase border-b border-[#E5E5E5] dark:border-[#2E2E30] pb-1 mb-2.5">
                  Project Highlights
                </h2>
                <div className="space-y-4">
                  {PROJECTS.slice(0, 4).map((proj, idx) => (
                    <div key={idx} className="text-sm">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <span className="font-semibold text-[#111111] dark:text-[#FAFAFA]">{proj.name}</span>
                          <span className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] font-mono ml-2">({proj.tags.join(", ")})</span>
                        </div>
                        <span className="text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA]">{proj.timeline}</span>
                      </div>
                      <p className="text-xs text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                        <strong>Challenge:</strong> {proj.challenge}
                      </p>
                      <p className="text-xs text-[#374151] dark:text-[#D1D5DB] leading-relaxed mt-0.5">
                        <strong>Outcome:</strong> {proj.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills Matrix */}
              <section className="mb-4">
                <h2 className="text-xs font-mono font-bold tracking-widest text-[#111111] dark:text-[#FAFAFA] uppercase border-b border-[#E5E5E5] dark:border-[#2E2E30] pb-1 mb-2.5">
                  Core Skills & Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <h4 className="font-semibold font-mono text-[#111111] dark:text-[#FAFAFA] mb-1 uppercase tracking-wider text-[10px]">
                      Design & UX
                    </h4>
                    <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed">{SKILLS_DESIGN.join(", ")}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold font-mono text-[#111111] dark:text-[#FAFAFA] mb-1 uppercase tracking-wider text-[10px]">
                      Product & Strategy
                    </h4>
                    <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed">{SKILLS_PRODUCT.join(", ")}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold font-mono text-[#111111] dark:text-[#FAFAFA] mb-1 uppercase tracking-wider text-[10px]">
                      Engineering & Tools
                    </h4>
                    <p className="text-[#374151] dark:text-[#D1D5DB] leading-relaxed">{SKILLS_ENGINEERING.join(", ")}</p>
                  </div>
                </div>
              </section>

            </article>
          </div>
          
          {/* Mobile close reminder */}
          <div className="text-center pb-4 text-[10px] text-[#6B6B6B] dark:text-[#A1A1AA] font-mono block sm:hidden print:hidden shrink-0">
            Swipe up or click backdrop to exit
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
