import { ACHIEVEMENTS } from "../data";
import { Award, Trophy } from "lucide-react";
import { motion } from "motion/react";

export default function Achievements() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="py-14 sm:py-20 border-b border-[#E5E5E5] dark:border-[#222222]" id="recognition">
      
      {/* Section label */}
      <div className="relative">
        <div className="absolute -top-[76px] sm:-top-[96px] left-0 pointer-events-none scroll-snap-target" />
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-8" 
          id="recognition-header"
        >
          <Award className="w-4 h-4 text-[#FF4B00]" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#FAFAFA]" id="recognition-title">
            Recognition
          </h2>
        </motion.div>
      </div>

      {/* Clean list-style layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        className="space-y-6" 
        id="recognition-list"
      >
        {ACHIEVEMENTS.map((item, idx) => {
          const isTrophy = item.title.includes("Runner-Up");
          return (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              className="border-b border-gray-100 dark:border-[#222222]/60 pb-6 last:border-0 last:pb-0 flex items-start gap-4 transition-all duration-200"
              id={`recognition-item-${idx}`}
            >
              {/* Left: Icon in a clean circle outline */}
              <div className="w-9 h-9 rounded-full border border-gray-100 dark:border-gray-800 bg-[#FAFAFA]/40 dark:bg-[#1A1A1C]/20 flex items-center justify-center text-[#FF4B00] shrink-0">
                {isTrophy ? <Trophy className="w-4.5 h-4.5" /> : <Award className="w-4.5 h-4.5" />}
              </div>

              {/* Right: Detailed Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-[15px] sm:text-base text-[#111111] dark:text-[#FAFAFA] leading-none">
                      {item.title}
                    </h3>
                    <span className="text-gray-300 dark:text-gray-700 text-xs select-none">·</span>
                    <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-[#1A1A1C]/50 px-2 py-0.5 rounded border border-gray-100/50 dark:border-[#2D2D30]">
                      {item.event}
                    </span>
                  </div>
                  {item.highlight && (
                    <span className="inline-flex items-center text-xs font-mono font-bold text-[#FF4B00] bg-[#FF4B00]/5 dark:bg-[#FF4B00]/10 px-2.5 py-0.5 rounded-full shrink-0">
                      {item.highlight}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}
