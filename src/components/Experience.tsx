import { useState } from "react";
import { EXPERIENCES, EDUCATIONS } from "../data";
import { Briefcase, GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  return (
    <section className="py-14 sm:py-20 border-b border-[#E5E5E5] dark:border-[#222222]" id="experience">
      
      {/* Header and Controls */}
      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10" id="experience-header-container">
        <div className="absolute -top-[76px] sm:-top-[96px] left-0 pointer-events-none scroll-snap-target" />
        {/* Section label */}
        <div className="flex items-center gap-2" id="experience-header">
          {activeTab === "work" ? (
            <Briefcase className="w-5 h-5 text-[#FF4B00]" />
          ) : (
            <GraduationCap className="w-5 h-5 text-[#FF4B00]" />
          )}
          <h2 className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#FAFAFA]" id="experience-title">
            {activeTab === "work" ? "Experience" : "Education"}
          </h2>
        </div>

        {/* Sliding Tab Toggle slider */}
        <div className="relative flex p-1 bg-[#F3F4F6] dark:bg-[#1A1A1C] rounded-xl border border-[#E5E5E5] dark:border-[#2E2E30] w-full sm:w-[340px]" id="experience-toggle-root">
          <button
            onClick={() => setActiveTab("work")}
            className={`relative z-10 flex-1 px-4 py-2 text-xs font-mono font-medium tracking-tight duration-200 flex items-center justify-center gap-1.5 rounded-lg cursor-pointer transition-colors ${
              activeTab === "work" ? "text-[#111111] dark:text-[#FAFAFA]" : "text-[#6B6B6B] dark:text-[#A1A1AA]"
            }`}
            id="toggle-work-tab"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Professional
          </button>
          
          <button
            onClick={() => setActiveTab("education")}
            className={`relative z-10 flex-1 px-4 py-2 text-xs font-mono font-medium tracking-tight duration-200 flex items-center justify-center gap-1.5 rounded-lg cursor-pointer transition-colors ${
              activeTab === "education" ? "text-[#111111] dark:text-[#FAFAFA]" : "text-[#6B6B6B] dark:text-[#A1A1AA]"
            }`}
            id="toggle-education-tab"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Education
          </button>

          {/* Animated Slider Tracker overlay */}
          <motion.div
            className="absolute top-1 bottom-1 bg-white dark:bg-[#2C2C2E] rounded-lg shadow-xs border border-black/[0.04] dark:border-white/[0.04]"
            initial={false}
            animate={{
              left: activeTab === "work" ? "4px" : "calc(50% - 2px)",
              width: "calc(50% - 2px)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ width: "calc(50% - 2px)" }}
          />
        </div>
      </div>

      {/* Main Container Timeline */}
      <div className="relative" id="experience-timeline-container">
        
        {/* Animated Slide container */}
        <AnimatePresence mode="wait">
          {activeTab === "work" ? (
            <motion.div
              key="work-biography"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative border-l border-[#E5E5E5] dark:border-[#2E2E30] ml-3 pl-6 sm:pl-8 space-y-12"
              id="work-timeline"
            >
              {EXPERIENCES.map((exp, idx) => {
                const isOngoing = exp.company === "Wyreflow Technologies";
                return (
                  <div key={idx} className="relative group transition-all duration-200" id={`experience-entry-${idx}`}>
                    {/* Bullet node dot */}
                    {isOngoing ? (
                      <div className="absolute -left-[32px] sm:-left-[40px] top-1 w-3.5 h-3.5 rounded-full bg-[#FF4B00] border border-[#FF4B00] z-10 flex items-center justify-center">
                        <span className="absolute w-full h-full rounded-full bg-[#FF4B00]/40 animate-ping pointer-events-none" />
                      </div>
                    ) : (
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-[#161618] border border-[#E5E5E5] dark:border-[#2E2E30] group-hover:border-[#FF4B00] group-hover:bg-[#FF4B00] transition-colors duration-250 z-10"></div>
                    )}

                    {/* Header Title Information */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <div className="flex flex-wrap items-center gap-1.5 text-[15px]">
                        <span 
                          className={`font-semibold text-[16px] transition-colors duration-150 ${
                            isOngoing ? "text-[#FF4B00]" : "text-[#111111] dark:text-[#FAFAFA] group-hover:text-[#FF4B00]"
                          }`} 
                          id={`exp-company-${idx}`}
                        >
                          {exp.company}
                        </span>
                        
                        <span className="text-[#6B6B6B] dark:text-[#A1A1AA] text-xs">·</span>
                        <span className="text-[#374151] dark:text-[#E5E7EB] font-medium" id={`exp-role-${idx}`}>
                          {exp.role}
                        </span>
                      </div>
                    
                    {/* Duration */}
                    <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B] dark:text-[#A1A1AA] font-mono shrink-0" id={`exp-duration-${idx}`}>
                      <Calendar className="w-3.5 h-3.5 text-[#6B6B6B]/75 dark:text-[#A1A1AA]/75" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Subtitle Information (Location) */}
                  <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B] dark:text-[#A1A1AA] font-mono mb-3">
                    <MapPin className="w-3 h-3 text-[#6B6B6B]/70 dark:text-[#A1A1AA]/70" />
                    <span>{exp.location}</span>
                  </div>

                  {/* Main description paragraph */}
                  <p className="text-[#6B6B6B] dark:text-[#A1A1AA] text-sm sm:text-[14.5px] leading-relaxed font-normal mb-3 max-w-2xl">
                    {exp.description}
                  </p>

                  {/* Bullet details */}
                  {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                    <ul className="space-y-2 mb-4 max-w-2xl" id={`exp-bullets-${idx}`}>
                      {exp.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#374151] dark:text-[#E5E7EB] leading-relaxed">
                          <span className="text-[#FF4B00] font-serif font-black select-none mt-0.5">•</span>
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5" id={`exp-tech-${idx}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] sm:text-[11px] font-mono text-[#374151] dark:text-[#D1D5DB] bg-[#F3F4F6] dark:bg-[#1A1A1C] border border-[#E5E5E5]/40 dark:border-[#2E2E30] px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="education-history"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative border-l border-[#E5E5E5] dark:border-[#2E2E30] ml-3 pl-6 sm:pl-8 space-y-12"
              id="education-timeline"
            >
              {EDUCATIONS.map((edu, idx) => (
                <div key={idx} className="relative group transition-all duration-200" id={`education-entry-${idx}`}>
                  {/* Bullet node dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-[#161618] border border-[#E5E5E5] dark:border-[#2E2E30] group-hover:border-[#FF4B00] group-hover:bg-[#FF4B00] transition-colors duration-250"></div>

                  {/* Header Title Information */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <div className="flex flex-wrap items-baseline gap-1.5 text-[15px]">
                      <span className="font-semibold text-[#111111] dark:text-[#FAFAFA] text-[16px] group-hover:text-[#FF4B00] transition-colors duration-150" id={`edu-inst-${idx}`}>
                        {edu.institution}
                      </span>
                    </div>
                    
                    {/* Duration */}
                    <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B] dark:text-[#A1A1AA] font-mono shrink-0" id={`edu-duration-${idx}`}>
                      <Calendar className="w-3.5 h-3.5 text-[#6B6B6B]/75 dark:text-[#A1A1AA]/75" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Degree/Subject line */}
                  <div className="flex flex-wrap items-center gap-2 mb-2 text-sm text-[#374151] dark:text-[#E5E7EB] font-medium" id={`edu-degree-${idx}`}>
                    <span>{edu.degree}</span>
                    {edu.grade && (
                      <>
                        <span className="text-[#6B6B6B] dark:text-[#A1A1AA] text-xs">·</span>
                        <span className="text-xs font-mono bg-[#FF4B00]/5 dark:bg-[#FF4B00]/10 text-[#FF4B00] px-2 py-0.5 rounded-full font-semibold">
                          {edu.grade}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B] dark:text-[#A1A1AA] font-mono mb-3">
                    <MapPin className="w-3 h-3 text-[#6B6B6B]/70 dark:text-[#A1A1AA]/70" />
                    <span>{edu.location}</span>
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-[#6B6B6B] dark:text-[#A1A1AA] text-sm sm:text-[14.5px] leading-relaxed font-normal mb-3 max-w-2xl">
                      {edu.description}
                    </p>
                  )}

                  {/* Bullet details */}
                  {edu.bulletPoints && edu.bulletPoints.length > 0 && (
                    <ul className="space-y-2 max-w-2xl" id={`edu-bullets-${idx}`}>
                      {edu.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#374151] dark:text-[#E5E7EB] leading-relaxed">
                          <span className="text-[#FF4B00] font-serif font-black select-none mt-0.5">•</span>
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}
