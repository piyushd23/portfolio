import { ProjectItem } from "../types";
import { PROJECTS } from "../data";
import { ArrowRight, ArrowUpRight, FolderKanban, Github, Fingerprint, Activity, Sparkles, CreditCard } from "lucide-react";
import { motion } from "motion/react";
import chompLogo from "../assets/images/chomp_logo.png";
import routewiseLogo from "../assets/images/routewise_logo.png";
import biopayLogo from "../assets/images/biopay_logo.png";
import accentifyLogo from "../assets/images/accentify_logo.png";
import fitlifeLogo from "../assets/images/fitlife_logo.png";
import dynamoLogo from "../assets/images/dynamo_logo.png";

interface WorkProps {
  onSelectProject: (project: ProjectItem) => void;
  onViewMore: () => void;
}

export default function Work({ onSelectProject, onViewMore }: WorkProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 85, damping: 15 },
    },
  };

  const chompAi = PROJECTS.find((p) => p.id === "chomp-ai");
  const routewise = PROJECTS.find((p) => p.id === "routewise");
  const biopay = PROJECTS.find((p) => p.id === "biopay");
  const accentify = PROJECTS.find((p) => p.id === "accentify");
  const dynamoAi = PROJECTS.find((p) => p.id === "dynamo-ai");
  const paymentsApp = PROJECTS.find((p) => p.id === "payments-app");
  const fitlifeHub = PROJECTS.find((p) => p.id === "fitlife-hub");

  return (
    <section className="py-14 sm:py-20 border-b border-[#E5E5E5] dark:border-[#222222]" id="work">
      {/* Section label */}
      <div className="relative">
        <div className="absolute -top-[76px] sm:-top-[96px] left-0 pointer-events-none scroll-snap-target" />
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-8"
          id="work-header"
        >
          <FolderKanban className="w-4 h-4 text-[#FF4B00]" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#FAFAFA]" id="work-title">
            Selected Work
          </h2>
        </motion.div>
      </div>

      {/* Stack of Horizontal Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col gap-6"
        id="work-projects-list"
      >
        {/* CARD 1: Chomp AI (UX Food Curation - with imported logo) */}
        {chompAi && (
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 10px 25px -8px rgba(0,0,0,0.04)" }}
            className="group flex flex-col md:flex-row bg-[#FAF9F6]/40 dark:bg-[#1E1E21]/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 w-full min-h-[180px]"
            id="project-card-chomp-ai"
          >
            {/* Visual Graphic Left: Chomp Logo Image */}
            <div className="w-full md:w-[35%] bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none border-b md:border-b-0 md:border-r border-black/[0.03] dark:border-white/[0.04] p-4 min-h-[160px] md:min-h-0">
              <img 
                src={chompLogo} 
                alt="Chomp Logo" 
                className="w-full h-full object-contain max-h-[120px] scale-[1.12] transition-transform duration-300 group-hover:scale-[1.18]"
              />
            </div>

            {/* Content Details Right */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                {/* Differentiator Badge */}
                <div className="mb-2">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FF4B00]/5 text-[#FF4B00] border border-[#FF4B00]/15">
                    Product Case Study
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-[#111111] dark:text-[#FAFAFA] leading-tight mb-1">
                  {chompAi.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed font-normal">
                  {chompAi.description}
                </p>
              </div>
              
              {/* Simplified CTA Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={chompAi.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#FF4B00] hover:bg-[#FF4B00]/5 border border-[#FF4B00] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  View Case Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* CARD 2: Payments App Design */}
        {paymentsApp && (
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 10px 25px -8px rgba(0,0,0,0.04)" }}
            className="group flex flex-col md:flex-row bg-[#FAF9F6]/40 dark:bg-[#1E1E21]/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 w-full min-h-[180px]"
            id="project-card-payments-app"
          >
            {/* Visual Graphic Left: Payments App Gradient and Icon */}
            <div className="w-full md:w-[35%] bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-violet-500/5 dark:from-blue-500/20 dark:to-violet-500/10 flex items-center justify-center shrink-0 relative overflow-hidden select-none border-b md:border-b-0 md:border-r border-black/[0.03] dark:border-white/[0.04] p-4 min-h-[160px] md:min-h-0">
              <div className="p-4 rounded-2xl bg-white dark:bg-[#1E1E21] shadow-md shadow-[#4B49FF]/5 border border-zinc-200/50 dark:border-zinc-800 transition-transform duration-300 group-hover:scale-110">
                <CreditCard className="w-9 h-9 text-indigo-500 dark:text-indigo-400" />
              </div>
            </div>

            {/* Content Details Right */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                {/* Differentiator Badge */}
                <div className="mb-2">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FF4B00]/5 text-[#FF4B00] border border-[#FF4B00]/15">
                    Product Case Study
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-[#111111] dark:text-[#FAFAFA] leading-tight mb-1">
                  {paymentsApp.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed font-normal">
                  {paymentsApp.description}
                </p>
              </div>
              
              {/* Simplified CTA Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={paymentsApp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#FF4B00] hover:bg-[#FF4B00]/5 border border-[#FF4B00] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  View Case Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* CARD 3: Fitlife Hub */}
        {fitlifeHub && (
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 10px 25px -8px rgba(0,0,0,0.04)" }}
            className="group flex flex-col md:flex-row bg-[#FAF9F6]/40 dark:bg-[#1E1E21]/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 w-full min-h-[180px]"
            id="project-card-fitlife-hub"
          >
            {/* Visual Graphic Left: Fitlife Hub Logo Image */}
            <div className="w-full md:w-[35%] bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none border-b md:border-b-0 md:border-r border-black/[0.03] dark:border-white/[0.04] p-4 min-h-[160px] md:min-h-0">
              <img 
                src={fitlifeLogo} 
                alt="Fitlife Hub Logo" 
                className="w-full h-full object-contain max-h-[110px] scale-[1.1] transition-transform duration-300 group-hover:scale-[1.16]"
              />
            </div>

            {/* Content Details Right */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                {/* Differentiator Badge */}
                <div className="mb-2">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FF4B00]/5 text-[#FF4B00] border border-[#FF4B00]/15">
                    Product Case Study
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-[#111111] dark:text-[#FAFAFA] leading-tight mb-1">
                  {fitlifeHub.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed font-normal">
                  {fitlifeHub.description}
                </p>
              </div>
              
              {/* Simplified CTA Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={fitlifeHub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#FF4B00] hover:bg-[#FF4B00]/5 border border-[#FF4B00] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  View Case Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* CARD 4: BioPay (Biometric Payment) */}
        {biopay && (
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 10px 25px -8px rgba(0,0,0,0.04)" }}
            className="group flex flex-col md:flex-row bg-[#FAF9F6]/40 dark:bg-[#1E1E21]/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 w-full min-h-[180px]"
            id="project-card-biopay"
          >
            {/* Visual Graphic Left: BioPay Logo Image */}
            <div className="w-full md:w-[35%] bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none border-b md:border-b-0 md:border-r border-black/[0.03] dark:border-white/[0.04] p-4 min-h-[160px] md:min-h-0">
              <img 
                src={biopayLogo} 
                alt="BioPay Logo" 
                className="w-full h-full object-contain max-h-[120px] scale-[1.15] transition-transform duration-300 group-hover:scale-[1.22]"
              />
            </div>

            {/* Content Details Right */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                {/* Differentiator Badge */}
                <div className="mb-2">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 dark:bg-[#252528] text-gray-600 dark:text-zinc-400 border border-gray-200/60 dark:border-zinc-850">
                    Interactive Project
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-[#111111] dark:text-[#FAFAFA] leading-tight mb-1">
                  {biopay.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed font-normal">
                  {biopay.description}
                </p>
              </div>

              {/* Simplified CTA Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => onSelectProject(biopay)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#FF4B00] hover:bg-[#FF4B00]/5 border border-[#FF4B00] px-3 py-1.5 rounded-lg transition-colors cursor-pointer bg-transparent"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={biopay.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-gray-700 dark:text-zinc-300 hover:text-[#FF4B00] hover:bg-[#FF4B00]/5 border border-gray-300 dark:border-zinc-700 hover:border-[#FF4B00] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* CARD 3: Accentify (AI Speech Recitations) */}
        {accentify && (
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 10px 25px -8px rgba(0,0,0,0.04)" }}
            className="group flex flex-col md:flex-row bg-[#FAF9F6]/40 dark:bg-[#1E1E21]/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 w-full min-h-[180px]"
            id="project-card-accentify"
          >
            {/* Visual Graphic Left: Accentify Logo Image */}
            <div className="w-full md:w-[35%] bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none border-b md:border-b-0 md:border-r border-black/[0.03] dark:border-white/[0.04] p-4 min-h-[160px] md:min-h-0">
              <img 
                src={accentifyLogo} 
                alt="Accentify Logo" 
                className="w-full h-full object-contain max-h-[105px] transition-transform duration-300 group-hover:scale-103"
              />
            </div>

            {/* Content Details Right */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                {/* Differentiator Badge */}
                <div className="mb-2">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 dark:bg-[#252528] text-gray-600 dark:text-zinc-400 border border-gray-200/60 dark:border-zinc-850">
                    Interactive Project
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-[#111111] dark:text-[#FAFAFA] leading-tight mb-1">
                  {accentify.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed font-normal">
                  {accentify.description}
                </p>
              </div>

              {/* Simplified CTA Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => onSelectProject(accentify)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#FF4B00] hover:bg-[#FF4B00]/5 border border-[#FF4B00] px-3 py-1.5 rounded-lg transition-colors cursor-pointer bg-transparent"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={accentify.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-gray-700 dark:text-zinc-300 hover:text-[#FF4B00] hover:bg-[#FF4B00]/5 border border-gray-300 dark:border-zinc-700 hover:border-[#FF4B00] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* CARD 4: Routewise (Logistics / GIS Map - Coming Soon) */}
        {routewise && (
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -1, boxShadow: "0 4px 15px -8px rgba(0,0,0,0.02)" }}
            className="group relative flex flex-col md:flex-row bg-[#FAF9F6]/30 dark:bg-[#1E1E21]/40 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl overflow-hidden transition-all duration-300 w-full min-h-[180px] select-none"
            id="project-card-routewise"
          >
            {/* Blurred Content Wrapper */}
            <div className="flex flex-col md:flex-row w-full blur-[0.8px] select-none pointer-events-none">
              {/* Visual Graphic Left: Routewise Logo Image */}
              <div className="w-full md:w-[35%] bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden border-b md:border-b-0 md:border-r border-black/[0.03] dark:border-white/[0.04] p-4 min-h-[160px] md:min-h-0">
                <img 
                  src={routewiseLogo} 
                  alt="Routewise Logo" 
                  className="w-full h-full object-contain max-h-[105px] opacity-90"
                />
              </div>

              {/* Content Details Right */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  {/* Differentiator Badge */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FF4B00]/5 text-[#FF4B00] border border-[#FF4B00]/15 opacity-70">
                      Product Case Study
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-100 dark:bg-[#252528] text-zinc-500 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800">
                      Coming Soon
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#111111]/70 dark:text-[#FAFAFA]/75 leading-tight mb-1">
                    {routewise.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B6B6B]/80 dark:text-[#A1A1AA]/80 leading-relaxed font-normal">
                    {routewise.description}
                  </p>
                </div>

                {/* Disabled CTA Button */}
                <div className="flex items-center gap-3 mt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-gray-400 dark:text-zinc-500 border border-gray-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg select-none">
                    Case Study Coming Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Coming Soon Centered Badge Overlay - covering the ENTIRE card */}
            <div className="absolute inset-0 bg-white/5 dark:bg-black/5 flex items-center justify-center z-30 pointer-events-none">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF4B00] bg-white dark:bg-[#1E1E21] px-4 py-2 rounded-xl border-2 border-[#FF4B00] shadow-[0_4px_25px_rgba(255,75,0,0.22)] select-none">
                Coming Soon
              </span>
            </div>
          </motion.div>
        )}

        {/* CARD 5: Dynamo AI (AI Automation Platform) */}
        {dynamoAi && (
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, boxShadow: "0 10px 25px -8px rgba(0,0,0,0.04)" }}
            className="group flex flex-col md:flex-row bg-[#FAF9F6]/40 dark:bg-[#1E1E21]/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 w-full min-h-[180px]"
            id="project-card-dynamo-ai"
          >
            {/* Visual Graphic Left: Dynamo AI Logo Image */}
            <div className="w-full md:w-[35%] bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none border-b md:border-b-0 md:border-r border-black/[0.03] dark:border-white/[0.04] p-4 min-h-[160px] md:min-h-0">
              <img 
                src={dynamoLogo} 
                alt="Dynamo AI Logo" 
                className="w-full h-full object-contain max-h-[110px] scale-[1.1] transition-transform duration-300 group-hover:scale-[1.16]"
              />
            </div>

            {/* Content Details Right */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                {/* Differentiator Badge */}
                <div className="mb-2">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FF4B00]/5 text-[#FF4B00] border border-[#FF4B00]/15">
                    Product Case Study
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-[#111111] dark:text-[#FAFAFA] leading-tight mb-1">
                  {dynamoAi.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed font-normal">
                  {dynamoAi.description}
                </p>
              </div>
              
              {/* Simplified CTA Buttons */}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={dynamoAi.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#FF4B00] hover:bg-[#FF4B00]/5 border border-[#FF4B00] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  View Case Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* View More Button */}
      <div className="flex justify-center mt-12" id="view-more-container">
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          onClick={onViewMore}
          className="group inline-flex items-center gap-2 text-sm font-mono font-medium text-[#FF4B00] hover:text-white hover:bg-[#FF4B00] border border-[#FF4B00] px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer shadow-sm shadow-[#FF4B00]/10 hover:shadow-lg hover:shadow-[#FF4B00]/25"
          id="btn-view-more-projects"
        >
          View More Projects
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>
    </section>
  );
}
