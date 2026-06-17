import { useState } from "react";
import { SKILLS_DESIGN, SKILLS_ENGINEERING, SKILLS_PRODUCT } from "../data";
import { 
  Sliders, Atom, Smartphone, FileCode, Zap, Server, Database, 
  Palette, Eye, GitFork, Accessibility, Clock, Kanban, Layers, 
  Milestone, Users, Compass, Layout, Cpu, Flame, Globe, Sparkles
} from "lucide-react";
import { motion } from "motion/react";

// Map each skill name to its corresponding icon with custom colors
const SKILL_ICONS: Record<string, { icon: any; color: string }> = {
  "React.js": { icon: Atom, color: "text-[#61DAFB]" },
  "Flutter": { icon: Smartphone, color: "text-[#02569B]" },
  "Python": { icon: FileCode, color: "text-[#3776AB]" },
  "FastAPI": { icon: Zap, color: "text-[#009688]" },
  "Node.js": { icon: Server, color: "text-[#339933]" },
  "Firebase": { icon: Database, color: "text-[#FFCA28]" },
  "Figma": { icon: Layers, color: "text-[#F24E1E]" }, // fallback if Figma icon is missing or custom
  "Framer": { icon: Flame, color: "text-[#0055FF]" },
  "Webflow": { icon: Globe, color: "text-[#4353FF]" },
  "SQL": { icon: Database, color: "text-[#47A248]" },
  "MongoDB": { icon: Database, color: "text-[#47A248]" },
  "REST APIs": { icon: Zap, color: "text-[#FF4B00]" },
  
  "User Research": { icon: Users, color: "text-[#FF4B00]" },
  "UX Strategy": { icon: Compass, color: "text-[#D97706]" },
  "Wireframing": { icon: Layout, color: "text-[#10B981]" },
  "Prototyping": { icon: Cpu, color: "text-[#8B5CF6]" },
  "Design Systems": { icon: Palette, color: "text-[#EC4899]" },
  "Usability Testing": { icon: Eye, color: "text-[#F59E0B]" },
  "Information Architecture": { icon: GitFork, color: "text-[#6B7280]" },
  "Accessibility (WCAG 2.1)": { icon: Accessibility, color: "text-[#06B6D4]" },
  
  "Product Lifecycle": { icon: Clock, color: "text-[#4B5563]" },
  "Roadmapping": { icon: Milestone, color: "text-[#8B5CF6]" },
  "Feature Prioritization (RICE/MoSCoW)": { icon: Layers, color: "text-[#10B981]" },
  "Competitive Analysis": { icon: Milestone, color: "text-[#8B5CF6]" },
  "Stakeholder Management": { icon: Users, color: "text-[#FF4B00]" },
  "Agile": { icon: Kanban, color: "text-[#EF4444]" }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "design" | "product" | "engineering">("all");

  const getIconElement = (skill: string) => {
    const matched = SKILL_ICONS[skill];
    if (matched) {
      const IconComponent = matched.icon;
      return <IconComponent className={`w-3.5 h-3.5 ${matched.color} shrink-0`} />;
    }
    return <Sparkles className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />;
  };

  // Combine rows for the marquees
  const marqueeRow1 = [
    "Figma", "User Research", "UX Strategy", "Roadmapping", "Agile", 
    "Design Systems", "Usability Testing", "Information Architecture"
  ];

  const marqueeRow2 = [
    "React.js", "Flutter", "Python", "FastAPI", "Node.js", 
    "Firebase", "Framer", "Webflow", "SQL", "MongoDB", "REST APIs"
  ];

  // Double list arrays to create zero-gap continuous sliding
  const list1 = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1];
  const list2 = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2];

  // Grid Stagger configuration
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 14 }
    }
  };

  return (
    <section className="py-14 sm:py-20 border-b border-[#E5E5E5] dark:border-[#222222] overflow-hidden" id="skills">
      
      {/* Styles injected for marquee animations */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 28s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 28s linear infinite;
        }
        .hover-pause:hover {
          animation-play-state: paused;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>
      
      {/* Section label */}
      <div className="relative">
        <div className="absolute -top-[76px] sm:-top-[96px] left-0 pointer-events-none scroll-snap-target" />
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8" 
          id="skills-header"
        >
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#FF4B00]" />
            <h2 className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#FAFAFA]" id="skills-title">
              Skills & Tools
            </h2>
          </div>
          <p className="text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA]">Hover to pause sliding</p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Ribbon Zone */}
      <div className="space-y-4 mb-12 select-none" id="skills-marquees-wrapper">
        
        {/* Ribbon Row 1: Sliding Left */}
        <div className="relative w-full overflow-hidden mask-gradient py-1" id="skills-marquee-row-1">
          <div className="flex gap-3 w-max animate-scroll-left hover-pause cursor-pointer">
            {list1.map((skill, idx) => (
              <div 
                key={`r1-${skill}-${idx}`}
                className="flex items-center gap-2 px-3.5 py-2 bg-[#FAFAFA] dark:bg-[#212124] border border-[#E5E5E5]/75 dark:border-[#222222]/80 rounded-xl hover:border-[#FF4B00]/40 dark:hover:border-[#FF4B00]/40 hover:bg-white dark:hover:bg-[#2B2B30] transition-all duration-200 shadow-3xs"
              >
                {getIconElement(skill)}
                <span className="text-xs sm:text-[13px] font-medium text-[#374151] dark:text-[#D1D5DB]">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ribbon Row 2: Sliding Right */}
        <div className="relative w-full overflow-hidden mask-gradient py-1" id="skills-marquee-row-2">
          <div className="flex gap-3 w-max animate-scroll-right hover-pause cursor-pointer">
            {list2.map((skill, idx) => (
              <div 
                key={`r2-${skill}-${idx}`}
                className="flex items-center gap-2 px-3.5 py-2 bg-[#FAFAFA] dark:bg-[#212124] border border-[#E5E5E5]/75 dark:border-[#222222]/80 rounded-xl hover:border-[#FF4B00]/40 dark:hover:border-[#FF4B00]/40 hover:bg-white dark:hover:bg-[#2B2B30] transition-all duration-200 shadow-3xs"
              >
                {getIconElement(skill)}
                <span className="text-xs sm:text-[13px] font-medium text-[#374151] dark:text-[#D1D5DB]">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Detailed Structured Categorization Grid */}
      <motion.div 
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6" 
        id="skills-grid"
      >
        
        {/* Category Card 1: Design  */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -4, shadow: "0 8px 24px -6px rgba(0,0,0,0.06)" }}
          className="border border-[#E5E5E5] dark:border-[#222222] rounded-2xl p-5 bg-[#FAFAFA]/40 dark:bg-[#212124]/40 hover:bg-white dark:hover:bg-[#2B2B30] transition-all duration-300 group" 
          id="skills-col-design"
        >
          <div className="flex items-center gap-2 border-b border-[#E5E5E5] dark:border-[#222222] pb-3 mb-4">
            <Palette className="w-4.5 h-4.5 text-[#FF4B00] group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold tracking-tight text-[#111111] dark:text-[#FAFAFA]">
              Design & User Experience
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS_DESIGN.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05, y: -1 }}
                className="inline-flex items-center gap-1.5 text-xs text-[#4B5563] dark:text-[#D1D5DB] bg-white dark:bg-[#161618] border border-[#E5E5E5] dark:border-[#2E2E30] px-2.5 py-1 rounded-lg hover:border-[#FF4B00] dark:hover:border-[#FF4B00] hover:text-[#FF4B00] dark:hover:text-[#FF4B00] transition-all duration-150 cursor-pointer"
              >
                {getIconElement(skill)}
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Card 2: Product */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -4, shadow: "0 8px 24px -6px rgba(0,0,0,0.06)" }}
          className="border border-[#E5E5E5] dark:border-[#222222] rounded-2xl p-5 bg-[#FAFAFA]/40 dark:bg-[#212124]/40 hover:bg-white dark:hover:bg-[#2B2B30] transition-all duration-300 group" 
          id="skills-col-product"
        >
          <div className="flex items-center gap-2 border-b border-[#E5E5E5] dark:border-[#222222] pb-3 mb-4">
            <Clock className="w-4.5 h-4.5 text-[#D97706] group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold tracking-tight text-[#111111] dark:text-[#FAFAFA]">
              Product Management
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS_PRODUCT.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05, y: -1 }}
                className="inline-flex items-center gap-1.5 text-xs text-[#4B5563] dark:text-[#D1D5DB] bg-white dark:bg-[#161618] border border-[#E5E5E5] dark:border-[#2E2E30] px-2.5 py-1 rounded-lg hover:border-[#FF4B00] dark:hover:border-[#FF4B00] hover:text-[#FF4B00] dark:hover:text-[#FF4B00] transition-all duration-150 cursor-pointer"
              >
                {getIconElement(skill)}
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Card 3: Engineering */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -4, shadow: "0 8px 24px -6px rgba(0,0,0,0.06)" }}
          className="border border-[#E5E5E5] dark:border-[#222222] rounded-2xl p-5 bg-[#FAFAFA]/40 dark:bg-[#212124]/40 hover:bg-white dark:hover:bg-[#2B2B30] transition-all duration-300 group" 
          id="skills-col-engineering"
        >
          <div className="flex items-center gap-2 border-b border-[#E5E5E5] dark:border-[#222222] pb-3 mb-4">
            <Cpu className="w-4.5 h-4.5 text-[#10B981] group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-semibold tracking-tight text-[#111111] dark:text-[#FAFAFA]">
              Engineering & Stack
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS_ENGINEERING.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05, y: -1 }}
                className="inline-flex items-center gap-1.5 text-xs text-[#4B5563] dark:text-[#D1D5DB] bg-white dark:bg-[#161618] border border-[#E5E5E5] dark:border-[#2E2E30] px-2.5 py-1 rounded-lg hover:border-[#FF4B00] dark:hover:border-[#FF4B00] hover:text-[#FF4B00] dark:hover:text-[#FF4B00] transition-all duration-150 cursor-pointer"
              >
                {getIconElement(skill)}
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
}
