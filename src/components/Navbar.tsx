import React, { useState, useEffect } from "react";
import { Download, Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenResume: () => void;
  currentPage: "home" | "about" | "projects";
  onNavigate: (page: "home" | "about" | "projects", anchor?: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ onOpenResume, currentPage, onNavigate, isDark, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section as the user scrolls
  useEffect(() => {
    if (currentPage !== "home") return;

    const sectionIds = ["hero", "about", "work", "experience", "contact"];
    const elements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -55% 0px", // Focus on the upper-middle region of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [currentPage]);

  // Automatically close mobile menu on screen resize to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-[720px] rounded-2xl border backdrop-blur-xl ${
        isScrolled
          ? "bg-white/[0.35] dark:bg-[#161618]/35 border-black/[0.06] dark:border-white/[0.08] py-2.5 sm:py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.25)]"
          : "bg-white/[0.15] dark:bg-[#161618]/15 border-black/[0.03] dark:border-white/[0.04] py-3.5 sm:py-4 shadow-3xs"
      }`}
    >
      <div className="px-4 sm:px-5 flex flex-col w-full">
        
        {/* Main Row */}
        <div className="flex items-center justify-between w-full">
          {/* Left Side: Brand Clickable Name */}
          <button
            onClick={() => {
              setIsOpen(false);
              if (currentPage === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.location.hash = "#/";
              } else {
                onNavigate("home");
              }
            }}
            className="text-sm font-bold tracking-[0.12em] uppercase text-[#FF4B00] dark:text-[#FF4B00] hover:opacity-80 transition-opacity cursor-pointer"
            style={{ fontFamily: "'Syne', sans-serif" }}
            id="navbar-brand-name"
          >
            Piyush
          </button>

          {/* Right Side: Navigation Links & Controls */}
          <div className="flex items-center space-x-3.5 sm:space-x-5">
            {/* Desktop Links (Hidden below md/768px) */}
            <div className="hidden md:flex items-center space-x-3.5 sm:space-x-5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigate("home", "#about");
                }}
                className={`text-sm duration-150 font-normal relative py-1 hover:text-[#111111] dark:hover:text-[#FAFAFA] hover:underline cursor-pointer ${
                  currentPage === "about" || (currentPage === "home" && activeSection === "about")
                    ? "text-[#FF4B00] font-medium"
                    : "text-[#6B6B6B] dark:text-[#A1A1AA]"
                }`}
                id="nav-link-about"
              >
                About
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigate("home", "#work");
                }}
                className={`text-sm duration-150 font-normal relative py-1 hover:text-[#111111] dark:hover:text-[#FAFAFA] hover:underline cursor-pointer ${
                  currentPage === "projects" || (currentPage === "home" && activeSection === "work")
                    ? "text-[#FF4B00] font-medium"
                    : "text-[#6B6B6B] dark:text-[#A1A1AA]"
                }`}
                id="nav-link-work"
              >
                Work
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigate("home", "#experience");
                }}
                className={`text-sm duration-150 font-normal relative py-1 hover:text-[#111111] dark:hover:text-[#FAFAFA] hover:underline cursor-pointer ${
                  currentPage === "home" && activeSection === "experience"
                    ? "text-[#FF4B00] font-medium"
                    : "text-[#6B6B6B] dark:text-[#A1A1AA]"
                }`}
                id="nav-link-experience"
              >
                Experience
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigate("home", "#contact");
                }}
                className={`text-sm duration-150 font-normal relative py-1 hover:text-[#111111] dark:hover:text-[#FAFAFA] hover:underline cursor-pointer ${
                  currentPage === "home" && activeSection === "contact"
                    ? "text-[#FF4B00] font-medium"
                    : "text-[#6B6B6B] dark:text-[#A1A1AA]"
                }`}
                id="nav-link-contact"
              >
                Contact
              </button>

              {/* Clean minimal action button inside navigation */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#FF4B00] border border-[#FF4B00]/30 hover:border-[#FF4B00] rounded-lg px-2.5 py-1.5 bg-[#FF4B00]/5 hover:bg-[#FF4B00]/10 transition-colors duration-150 cursor-pointer"
                id="nav-btn-cv"
              >
                <Download className="w-3 h-3 text-[#FF4B00] shrink-0" />
                Resume
              </button>
            </div>

            {/* Theme Switcher Toggle Switch - Always Visible */}
            <button
              onClick={onToggleTheme}
              className="w-10 h-5.5 rounded-full bg-[#E5E5E5] dark:bg-[#2D2D30] relative p-0.5 transition-colors duration-200 cursor-pointer flex items-center shrink-0"
              id="nav-theme-toggle"
              aria-label="Toggle theme color"
              title={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
            >
              <div
                className={`w-4.5 h-4.5 rounded-full bg-white dark:bg-[#FF4B00] shadow-sm transition-transform duration-200 flex items-center justify-center ${
                  isDark ? "translate-x-4.5" : "translate-x-0"
                }`}
              >
                {isDark ? (
                  <Sun className="w-2.5 h-2.5 text-white" />
                ) : (
                  <Moon className="w-2.5 h-2.5 text-[#6B6B6B]" />
                )}
              </div>
            </button>

            {/* Mobile Menu Icon Toggle (Visible only below md/768px) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1 text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel (Animates expand downwards inside glassmorphic capsule) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-black/[0.06] dark:border-white/[0.08] mt-3 pt-3"
            >
              <div className="flex flex-col space-y-3 pb-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate("home", "#about");
                  }}
                  className={`text-sm py-1.5 px-1 hover:text-[#111111] dark:hover:text-[#FAFAFA] text-left cursor-pointer transition-colors ${
                    currentPage === "about" || (currentPage === "home" && activeSection === "about")
                      ? "text-[#FF4B00] font-semibold"
                      : "text-[#6B6B6B] dark:text-[#A1A1AA] font-normal"
                  }`}
                  id="mobile-nav-link-about"
                >
                  About
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate("home", "#work");
                  }}
                  className={`text-sm py-1.5 px-1 hover:text-[#111111] dark:hover:text-[#FAFAFA] text-left cursor-pointer transition-colors ${
                    currentPage === "projects" || (currentPage === "home" && activeSection === "work")
                      ? "text-[#FF4B00] font-semibold"
                      : "text-[#6B6B6B] dark:text-[#A1A1AA] font-normal"
                  }`}
                  id="mobile-nav-link-work"
                >
                  Work
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate("home", "#experience");
                  }}
                  className={`text-sm py-1.5 px-1 hover:text-[#111111] dark:hover:text-[#FAFAFA] text-left cursor-pointer transition-colors ${
                    currentPage === "home" && activeSection === "experience"
                      ? "text-[#FF4B00] font-semibold"
                      : "text-[#6B6B6B] dark:text-[#A1A1AA] font-normal"
                  }`}
                  id="mobile-nav-link-experience"
                >
                  Experience
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate("home", "#contact");
                  }}
                  className={`text-sm py-1.5 px-1 hover:text-[#111111] dark:hover:text-[#FAFAFA] text-left cursor-pointer transition-colors ${
                    currentPage === "home" && activeSection === "contact"
                      ? "text-[#FF4B00] font-semibold"
                      : "text-[#6B6B6B] dark:text-[#A1A1AA] font-normal"
                  }`}
                  id="mobile-nav-link-contact"
                >
                  Contact
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-[#FF4B00] border border-[#FF4B00]/30 hover:border-[#FF4B00] rounded-xl py-2.5 bg-[#FF4B00]/5 hover:bg-[#FF4B00]/10 transition-colors duration-150 cursor-pointer w-full mt-1"
                  id="mobile-nav-btn-cv"
                >
                  <Download className="w-3.5 h-3.5 text-[#FF4B00] shrink-0" />
                  Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

