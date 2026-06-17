import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Compass, Lightbulb, PenTool, Rocket, MessageSquareDot } from "lucide-react";

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  glowColor: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understanding users, business goals, and opportunities.",
    icon: Compass,
    color: "#FF4B00",
    glowColor: "rgba(255, 75, 0, 0.12)"
  },
  {
    number: "02",
    title: "DEFINE",
    description: "Framing problems and establishing clear product direction.",
    icon: Lightbulb,
    color: "#D97706",
    glowColor: "rgba(217, 119, 6, 0.12)"
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Crafting intuitive experiences through wireframes and prototypes.",
    icon: PenTool,
    color: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.12)"
  },
  {
    number: "04",
    title: "DELIVER",
    description: "Launching impactful solutions and iterating from feedback.",
    icon: Rocket,
    color: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.12)"
  }
];

export default function Workflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-14 sm:py-20 border-b border-[#E5E5E5] dark:border-[#222222]" id="workflow">
      
      {/* Section label */}
      <div className="relative">
        <div className="absolute -top-[76px] sm:-top-[96px] left-0 pointer-events-none scroll-snap-target" />
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-8" 
          id="workflow-header"
        >
          <MessageSquareDot className="w-4.5 h-4.5 text-[#FF4B00]" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#FAFAFA]" id="workflow-title">
            My Product Workflow
          </h2>
        </motion.div>
      </div>

      {/* Static 4-Column Square Grid with auto-highlighting */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10px" }}
        className="grid grid-cols-1 sm:grid-cols-4 gap-4" 
        id="workflow-grid"
        onMouseLeave={() => setIsHovered(false)}
      >
        {WORKFLOW_STEPS.map((step, idx) => {
          const IconComponent = step.icon;
          const isActive = activeIndex === idx;
          return (
            <div 
              key={step.number} 
              className="relative w-full"
              onMouseEnter={() => {
                setActiveIndex(idx);
                setIsHovered(true);
              }}
            >
              {/* Card */}
              <motion.div
                variants={itemVariants}
                className={`relative w-full aspect-square flex flex-col justify-between border rounded-2xl p-4 sm:p-5 transition-all duration-500 cursor-pointer group ${
                  isActive 
                    ? "bg-white dark:bg-[#1E1E20] scale-[1.03] z-10 opacity-100" 
                    : "bg-[#FAFAFA]/20 dark:bg-[#212124]/10 border-[#E5E5E5]/50 dark:border-[#222222]/50 opacity-40 scale-100"
                }`}
                style={{
                  borderColor: isActive ? step.color : undefined,
                  boxShadow: isActive ? `0 10px 30px -5px ${step.glowColor}, 0 4px 12px -5px ${step.glowColor}` : undefined
                }}
                id={`workflow-item-${step.number}`}
              >
                {/* Top Row: Index and Icon */}
                <div className="flex justify-between items-center w-full">
                  <span 
                    className="text-[11px] font-mono font-semibold transition-colors duration-500"
                    style={{ color: isActive ? step.color : "#9CA3AF" }}
                  >
                    // 0{idx + 1}
                  </span>
                  <div 
                    className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500"
                    style={{
                      borderColor: isActive ? `${step.color}40` : "transparent",
                      backgroundColor: isActive ? `${step.color}15` : "rgba(128,128,128,0.05)"
                    }}
                  >
                    <IconComponent 
                      className="w-4 h-4 transition-all duration-500" 
                      style={{ color: isActive ? step.color : "#9CA3AF" }}
                    />
                  </div>
                </div>

                {/* Middle/Bottom Row: Title & Description */}
                <div className="flex flex-col items-start w-full mt-auto">
                  <h3 
                    className="text-xs sm:text-[13px] font-bold mb-1.5 tracking-wider uppercase transition-colors duration-500"
                    style={{ color: isActive ? step.color : undefined }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[10.5px] sm:text-[11px] text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Horizontal line connector in gap (desktop only, gap-4 is 16px) */}
              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden sm:block absolute left-full w-4 h-0 top-1/2 -translate-y-1/2 z-0 pointer-events-none">
                  <div 
                    className="w-full border-t border-dashed transition-all duration-500"
                    style={{
                      borderColor: activeIndex > idx ? WORKFLOW_STEPS[idx].color : undefined,
                      borderWidth: activeIndex > idx ? "1.5px" : "1px"
                    }}
                  />
                </div>
              )}
              
              {/* Vertical line connector in gap (mobile only, gap-4 is 16px) */}
              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="sm:hidden absolute top-full h-4 w-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
                  <div 
                    className="h-full border-l border-dashed transition-all duration-500"
                    style={{
                      borderColor: activeIndex > idx ? WORKFLOW_STEPS[idx].color : undefined,
                      borderWidth: activeIndex > idx ? "1.5px" : "1px"
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </motion.div>

    </section>
  );
}
