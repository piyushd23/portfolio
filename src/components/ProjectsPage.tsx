import { useState } from "react";
import { ProjectItem } from "../types";
import { PROJECTS } from "../data";
import { 
  ArrowLeft, Search, FolderKanban, ArrowUpRight, ArrowRight, Github, 
  Sparkles, CreditCard, Activity 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Import logos
import chompLogo from "../assets/images/chomp_logo.png";
import routewiseLogo from "../assets/images/routewise_logo.png";
import biopayLogo from "../assets/images/biopay_logo.png";
import accentifyLogo from "../assets/images/accentify_logo.png";
import fitlifeLogo from "../assets/images/fitlife_logo.png";
import dynamoLogo from "../assets/images/dynamo_logo.png";
import paymentsLogo from "../assets/images/payments_logo.png";

interface ProjectsPageProps {
  onBackToHome: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export default function ProjectsPage({ onBackToHome, onSelectProject }: ProjectsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "case-studies" | "interactive">("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  // Helper to get visual logo/gradient for each project
  const getProjectVisual = (id: string, name: string) => {
    switch (id) {
      case "chomp-ai":
        return (
          <div className="w-full bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none p-4 h-[160px]">
            <img 
              src={chompLogo} 
              alt={name} 
              className="h-full w-full object-contain max-h-[110px] scale-[1.1] transition-transform duration-300 group-hover:scale-[1.16]" 
            />
          </div>
        );
      case "routewise":
        return (
          <div className="w-full bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none p-4 h-[160px]">
            <img 
              src={routewiseLogo} 
              alt={name} 
              className="h-full w-full object-contain max-h-[100px] opacity-90 blur-[0.5px]" 
            />
            <div className="absolute inset-0 bg-white/5 dark:bg-black/5 flex items-center justify-center z-10 pointer-events-none">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF4B00] bg-white dark:bg-[#1E1E21] px-3 py-1.5 rounded-lg border border-[#FF4B00] shadow-[0_4px_15px_rgba(255,75,0,0.15)] select-none">
                Coming Soon
              </span>
            </div>
          </div>
        );
      case "biopay":
        return (
          <div className="w-full bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none p-4 h-[160px]">
            <img 
              src={biopayLogo} 
              alt={name} 
              className="h-full w-full object-contain max-h-[110px] scale-[1.1] transition-transform duration-300 group-hover:scale-[1.16]" 
            />
          </div>
        );
      case "accentify":
        return (
          <div className="w-full bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none p-4 h-[160px]">
            <img 
              src={accentifyLogo} 
              alt={name} 
              className="h-full w-full object-contain max-h-[95px] transition-transform duration-300 group-hover:scale-[1.04]" 
            />
          </div>
        );
      case "dynamo-ai":
        return (
          <div className="w-full bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none p-4 h-[160px]">
            <img 
              src={dynamoLogo} 
              alt={name} 
              className="h-full w-full object-contain max-h-[110px] scale-[1.1] transition-transform duration-300 group-hover:scale-[1.16]" 
            />
          </div>
        );
      case "payments-app":
        return (
          <div className="w-full bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none p-4 h-[160px]">
            <img 
              src={paymentsLogo} 
              alt={name} 
              className="h-full w-full object-contain max-h-[110px] scale-[1.1] transition-transform duration-300 group-hover:scale-[1.16]" 
            />
          </div>
        );
      case "fitlife-hub":
        return (
          <div className="w-full bg-white dark:bg-[#1C1C1E] flex items-center justify-center shrink-0 relative overflow-hidden select-none p-4 h-[160px]">
            <img 
              src={fitlifeLogo} 
              alt={name} 
              className="h-full w-full object-contain max-h-[110px] scale-[1.1] transition-transform duration-300 group-hover:scale-[1.16]" 
            />
          </div>
        );
      default:
        return (
          <div className="w-full bg-gradient-to-br from-gray-500/10 to-zinc-500/5 flex items-center justify-center shrink-0 relative overflow-hidden select-none p-4 h-[160px] border-b border-black/[0.03] dark:border-white/[0.04]">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#1E1E21] shadow-md border border-zinc-200/50 dark:border-zinc-800 transition-transform duration-300 group-hover:scale-110">
              <FolderKanban className="w-9 h-9 text-zinc-500" />
            </div>
          </div>
        );
    }
  };

  // Filter projects based on tabs and search query
  const filteredProjects = PROJECTS.filter((project) => {
    // 1. Filter by tab
    if (activeTab === "case-studies" && !project.isCaseStudy) return false;
    if (activeTab === "interactive" && project.isCaseStudy) return false;

    // 2. Filter by search query
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      project.name.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      project.toolsUsed.some((tool) => tool.toLowerCase().includes(query))
    );
  });

  return (
    <div className="py-24 sm:py-32" id="projects-page-root">
      
      {/* Back to Home Button */}
      <div className="mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#FF4B00] dark:hover:text-[#FF4B00] transition-colors cursor-pointer bg-transparent border-0"
          id="btn-back-to-home"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </button>
      </div>

      {/* Header Info */}
      <div className="mb-12">
        <h1 
          className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-[#FAFAFA] mb-4 flex items-center gap-2"
          style={{ fontFamily: "'Syne', sans-serif" }}
          id="projects-page-heading"
        >
          <FolderKanban className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF4B00]" />
          All Projects & Case Studies
        </h1>
        <p className="text-sm sm:text-base text-[#6B6B6B] dark:text-[#A1A1AA] max-w-[620px] leading-relaxed">
          A collection of product case studies, UX design audits, and full-stack software developments showcasing end-to-end product design lifecycle execution.
        </p>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10 pb-6 border-b border-[#E5E5E5] dark:border-[#222222]">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-[#202022] p-1.5 rounded-xl self-start" id="projects-filter-tabs">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
              activeTab === "all"
                ? "bg-white dark:bg-[#2C2C2F] text-[#FF4B00] shadow-2xs font-semibold"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            All ({PROJECTS.length})
          </button>
          <button
            onClick={() => setActiveTab("case-studies")}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
              activeTab === "case-studies"
                ? "bg-white dark:bg-[#2C2C2F] text-[#FF4B00] shadow-2xs font-semibold"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            Case Studies ({PROJECTS.filter(p => p.isCaseStudy).length})
          </button>
          <button
            onClick={() => setActiveTab("interactive")}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
              activeTab === "interactive"
                ? "bg-white dark:bg-[#2C2C2F] text-[#FF4B00] shadow-2xs font-semibold"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            Interactive Projects ({PROJECTS.filter(p => !p.isCaseStudy).length})
          </button>
        </div>

        {/* Sleek Search Input */}
        <div className="relative w-full md:max-w-[300px]" id="projects-search-container">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tech, tool or keyword..."
            className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 sm:py-3 bg-zinc-50 dark:bg-[#1B1B1E] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-350 dark:hover:border-zinc-700 focus:border-[#FF4B00] dark:focus:border-[#FF4B00] rounded-xl outline-none transition-all duration-200 placeholder-zinc-400 dark:placeholder-zinc-500 text-zinc-800 dark:text-zinc-200"
            id="projects-search-input"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        id="projects-grid-container"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              layout
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.06)" }}
              className="group flex flex-col bg-[#FAF9F6]/40 dark:bg-[#1E1E21]/60 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 min-h-[360px]"
              id={`projects-page-card-${project.id}`}
            >
              {/* Graphic Logo Header */}
              {getProjectVisual(project.id, project.name)}

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  {/* Badges / Header details */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                      project.isCaseStudy
                        ? "bg-[#FF4B00]/5 text-[#FF4B00] border-[#FF4B00]/15"
                        : "bg-zinc-100 dark:bg-[#252528] text-zinc-500 dark:text-zinc-400 border-zinc-200/60 dark:border-zinc-850"
                    }`}>
                      {project.isCaseStudy ? "Product Case Study" : "Interactive Project"}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                      {project.timeline}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#111111] dark:text-[#FAFAFA] leading-snug mb-2 group-hover:text-[#FF4B00] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags and CTAs */}
                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-850/60">
                  {/* Tech tags preview (top 3) */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[9px] font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-[#1A1A1C] px-2 py-0.5 rounded border border-zinc-200/50 dark:border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[9px] font-mono text-zinc-400">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-2.5">
                    {project.id === "routewise" ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-gray-400 dark:text-zinc-500 border border-gray-200 dark:border-zinc-850 px-3 py-1.5 rounded-lg select-none">
                        Case Study Coming Soon
                      </span>
                    ) : project.isCaseStudy ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#FF4B00] hover:bg-[#FF4B00]/5 border border-[#FF4B00] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        View Case Study
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <>
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#FF4B00] hover:bg-[#FF4B00]/5 border border-[#FF4B00] px-3 py-1.5 rounded-lg transition-colors cursor-pointer bg-transparent"
                        >
                          View Details
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-gray-700 dark:text-zinc-300 hover:text-[#FF4B00] hover:bg-[#FF4B00]/5 border border-gray-300 dark:border-zinc-700 hover:border-[#FF4B00] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5" />
                          GitHub
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-16 text-center"
            id="projects-empty-state"
          >
            <Sparkles className="w-8 h-8 text-zinc-300 dark:text-zinc-600 mx-auto mb-3" />
            <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1">No projects found</h4>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              Try adjusting your filters or search terms.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
