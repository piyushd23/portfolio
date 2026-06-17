import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Workflow from "./components/Workflow";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import About from "./components/About";
import AboutSection from "./components/AboutSection";
import ProjectsPage from "./components/ProjectsPage";
import CaseStudyModal from "./components/CaseStudyModal";
import ResumeModal from "./components/ResumeModal";
import { ProjectItem } from "./types";
import { motion, AnimatePresence } from "motion/react";
import Lenis from "lenis";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "projects">("home");
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
    }
    return false;
  });
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth scroll transitions on mount
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);



  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Prevent background scrolling when a project modal is open
  useEffect(() => {
    if (!lenisInstance) return;
    if (selectedProject) {
      lenisInstance.stop();
    } else {
      lenisInstance.start();
    }
  }, [lenisInstance, selectedProject]);

  const handleOpenResume = () => {
    window.open("https://drive.google.com/file/d/1WAQ5oWj_sf6EWVve1ycCsa7cQM5u7C3J/view?usp=drive_link", "_blank", "noopener,noreferrer");
  };

  // Helper to scroll to hash target safely with DOM retries
  const scrollToHash = (hash: string, delay = 0) => {
    if (!hash || hash === "#/" || hash === "#") return;
    
    let attempts = 0;
    const maxAttempts = 5;
    
    const scroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(el, { duration: 0.8 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(scroll, 100);
      }
    };

    if (delay > 0) {
      setTimeout(scroll, delay);
    } else {
      scroll();
    }
  };

  // Synchronize route state with URL hash (hash routing)
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash;
      const cleanHash = rawHash.split("?")[0].replace(/\/$/, "");

      if (cleanHash === "#/about-me" || cleanHash === "#/about") {
        if (cleanHash === "#/about") {
          window.location.hash = "#/about-me";
          return;
        }
        setCurrentPage("about");
      } else if (cleanHash === "#/projects") {
        setCurrentPage("projects");
      } else if (cleanHash === "#/" || cleanHash === "" || cleanHash === "#") {
        setCurrentPage((prev) => {
          if (prev === "home") {
            // Scroll back to top smoothly if already on home page
            if (lenisRef.current) {
              lenisRef.current.scrollTo(0, { duration: 1.2 });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }
          return "home";
        });
      } else if (cleanHash.startsWith("#/")) {
        // Fallback for any invalid slash subroutes -> redirect to Home
        window.location.hash = "#/";
      } else {
        // This handles section anchors on the home page (e.g. #about, #work, #experience, #contact)
        setCurrentPage((prev) => {
          if (prev === "home") {
            // Scroll immediately if already on home page
            scrollToHash(cleanHash, 0);
          }
          return "home";
        });
      }
    };

    // Run on mount to set initial page from URL
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Reset scroll to top when changing routes to detailed pages
  useEffect(() => {
    const handleScrollReset = () => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };

    if (currentPage !== "home") {
      // Delay slightly to match the AnimatePresence exit transition duration (250ms)
      const timer = setTimeout(handleScrollReset, 250);
      return () => clearTimeout(timer);
    } else {
      const hash = window.location.hash;
      if (!hash || hash === "#/" || hash === "#") {
        handleScrollReset();
      }
    }
  }, [currentPage]);

  // Handle scrolling to hashes when home page mounts
  useEffect(() => {
    if (currentPage === "home") {
      const hash = window.location.hash;
      if (hash && hash !== "#/" && hash !== "#") {
        // Wait for page transition exit and entry animations to complete (550ms) to ensure DOM is static and fully painted
        scrollToHash(hash, 550);
      }
    }
  }, [currentPage]);

  const navigateTo = (page: "home" | "about" | "projects", anchor?: string) => {
    if (page === "home") {
      window.location.hash = anchor ? anchor : "#/";
    } else if (page === "about") {
      window.location.hash = "#/about-me";
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#161618] text-[#111111] dark:text-[#FAFAFA] transition-colors duration-200" id="app-root">
      
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenResume={handleOpenResume}
        currentPage={currentPage}
        onNavigate={navigateTo}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />

      {/* Main Container: Full Width to allow backgrounds to expand */}
      <main className="w-full relative" id="app-main">
        <AnimatePresence mode="wait">
          {currentPage === "home" ? (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {/* Hero section is full-width internally */}
              <Hero 
                onOpenResume={handleOpenResume} 
                onGoToAbout={() => navigateTo("about")}
              />
              
              {/* Rest of the sections are contained in a centered container */}
              <div className="max-w-[760px] mx-auto px-5 sm:px-6 relative">
                <AboutSection onGoToDetailedAbout={() => navigateTo("about")} />

                <Work 
                  onSelectProject={(project) => setSelectedProject(project)} 
                  onViewMore={() => navigateTo("projects")}
                />
                
                <Workflow />
                
                <Experience />
                
                <Skills />
                
                <Achievements />
                
                <Contact />
              </div>
            </motion.div>
          ) : currentPage === "about" ? (
            <div key="about-page-wrapper" className="w-full max-w-[760px] mx-auto px-5 sm:px-6 relative">
              <About
                onBackToPortfolio={(anchor) => navigateTo("home", anchor)}
                onOpenResume={handleOpenResume}
              />
            </div>
          ) : (
            <div key="projects-page-wrapper" className="w-full max-w-[760px] mx-auto px-5 sm:px-6 relative">
              <ProjectsPage
                onBackToHome={() => navigateTo("home", "#work")}
                onSelectProject={(project) => setSelectedProject(project)}
              />
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Slide-over Detailed Case Study modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Print-friendly interactive Resume compiler */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal onClose={() => setIsResumeOpen(false)} />
        )}
      </AnimatePresence>

    </div>
  );
}
