import React, { useState } from "react";
import { Mail, Linkedin, Github, Compass, ArrowUpRight, MessageSquareCode, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Copy the email to clipboard without preventing the default mailto behavior
    navigator.clipboard.writeText("piyushd.works@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2500);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="pt-14 pb-12 sm:pt-20 sm:pb-16" id="contact">
      
      {/* Section label */}
      <div className="relative">
        <div className="absolute -top-[76px] sm:-top-[96px] left-0 pointer-events-none scroll-snap-target" />
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-1.5" 
          id="contact-header"
        >
          <MessageSquareCode className="w-4 h-4 text-[#FF4B00]" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#FAFAFA]" id="contact-title">
            Let's Connect
          </h2>
        </motion.div>
      </div>

      {/* Subheading text directly below header with a clean spacing */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed max-w-lg mb-8"
        id="contact-subheading"
      >
        Open to Product Design, UX, and APM roles. I'd love to chat.
      </motion.p>
 
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10px" }}
        className="space-y-6" 
        id="contact-content"
      >
        
        {/* Large confident email */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-3">
          <a
            href="mailto:piyushd.works@gmail.com"
            onClick={handleEmailClick}
            className="group inline-block text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#FAFAFA] hover:text-[#FF4B00] transition-colors duration-150 relative pb-1 overflow-hidden"
            id="contact-email-link"
            title="Click to copy and send email"
          >
            piyushd.works@gmail.com
            {/* Animated expand-out border line on hover */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E5E5E5] dark:bg-[#2E2E30] group-hover:bg-[#FF4B00] transition-colors duration-150"></span>
          </a>

          {/* Micro indicator next to email */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              navigator.clipboard.writeText("piyushd.works@gmail.com").then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
              });
            }}
            className="p-1 rounded-md text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#FF4B00] hover:bg-[#F3F4F6] dark:hover:bg-[#1E1E20] transition-colors cursor-pointer"
            title="Copy to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          </motion.button>
        </motion.div>
 
        {/* Row of interactive social links */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 sm:gap-6" id="contact-socials-row">
          
          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://linkedin.com/in/piyush-deshmukh-54bb92265"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#FF4B00] border border-[#E5E5E5] dark:border-[#222222] hover:border-[#FF4B00]/40 dark:hover:border-[#FF4B00]/40 rounded-lg p-2.5 px-3.5 bg-transparent hover:bg-[#FF4B00]/5 dark:hover:bg-[#FF4B00]/5 transition-colors duration-150"
            id="social-linkedin"
          >
            <Linkedin className="w-4 h-4 text-[#6B6B6B]/80 group-hover:text-[#FF4B00] transition-colors shrink-0" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
          </motion.a>

          {/* Github */}
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/piyushd23"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#FF4B00] border border-[#E5E5E5] dark:border-[#222222] hover:border-[#FF4B00]/40 dark:hover:border-[#FF4B00]/40 rounded-lg p-2.5 px-3.5 bg-transparent hover:bg-[#FF4B00]/5 dark:hover:bg-[#FF4B00]/5 transition-colors duration-150"
            id="social-github"
          >
            <Github className="w-4 h-4 text-[#6B6B6B]/80 group-hover:text-[#FF4B00] transition-colors shrink-0" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
          </motion.a>

          {/* Behance */}
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="https://behance.net/piyushdeshmukh"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#FF4B00] border border-[#E5E5E5] dark:border-[#222222] hover:border-[#FF4B00]/40 dark:hover:border-[#FF4B00]/40 rounded-lg p-2.5 px-3.5 bg-transparent hover:bg-[#FF4B00]/5 dark:hover:bg-[#FF4B00]/5 transition-colors duration-150"
            id="social-behance"
          >
            <Compass className="w-4 h-4 text-[#6B6B6B]/80 group-hover:text-[#FF4B00] transition-colors shrink-0" />
            <span>Behance</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
          </motion.a>

        </motion.div>

        {/* Footer division bar */}
        <motion.div variants={itemVariants} className="pt-8 sm:pt-12 border-t border-[#E5E5E5] dark:border-[#222222] flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3">
          <p className="text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA]" id="footer-copyright">
            © 2026 Piyush Deshmukh · Pune, India
          </p>
          <span className="text-[11px] font-mono text-[#6B6B6B]/75 dark:text-[#A1A1AA]/75" id="footer-stamp">
            Designed for impact · Engineered for scale
          </span>
        </motion.div>

      </motion.div>

      {/* Floating Elegant Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#111111] text-[#FAFAFA] border border-[#FF4B00]/30 px-4 py-3 rounded-xl shadow-lg font-sans text-xs tracking-wide"
            id="copied-toast"
          >
            <div className="w-4 h-4 rounded-full bg-[#FF4B00] flex items-center justify-center">
              <Check className="w-2.5 h-2.5 text-white" />
            </div>
            <span>Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
