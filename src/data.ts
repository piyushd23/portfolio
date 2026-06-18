import { ExperienceItem, ProjectItem, EducationItem } from "./types";

export const EDUCATIONS: EducationItem[] = [
  {
    institution: "Marathwada Mitra Mandal's College of Engineering (MMCOE)",
    degree: "Bachelor of Engineering - Computer Engineering",
    duration: "Aug 2022 – Jun 2026",
    location: "Pune, India",
    description: "Focusing on Human-Computer Interaction, Software Engineering, and Database Management Systems.",
    bulletPoints: [
      "Core courses: Object-Oriented Design, Data Structures & Algorithms, Web Technologies, Software Engineering, Human-Computer Interaction.",
      "President / Lead Role at college technical chapters, pioneering student UI/UX workshops and full-stack coding sprints."
    ]
  },
  {
    institution: "Dnyanganga Junior College",
    degree: "Senior Secondary School Certificate (Class 12th) — Science",
    duration: "Sep 2020 – Jun 2022",
    location: "Pune, India",
    description: "Rigorous focus on Physics, Chemistry, Mathematics, and Computer Science fundamentals."
  },
  {
    institution: "Silver Crest School",
    degree: "Secondary School Certificate (Class 10th)",
    duration: "Graduated Jun 2020",
    location: "Pune, India",
    description: "Foundational academic training with consistent academic excellence and excellence awards."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Wyreflow Technologies",
    role: "Product Management Intern",
    duration: "Jun 2026 – Present",
    location: "Pune, India",
    description: "Spearheading product lifecycle management and UX strategy for an AI-backed hiring platform.",
    bulletPoints: [
      "Driving end-to-end product workflows for a hiring platform, conducting user research and synthesizing insights into prioritized feature roadmaps and go-to-market strategies.",
      "Owning UX design for key recruiter and candidate flows, translating research findings into wireframes and prototypes that align user needs with business objectives."
    ],
    technologies: ["Figma", "Jira", "Mixpanel", "UX Strategy", "Agile"]
  },
  {
    company: "I-Hub QTF, IISER Pune",
    role: "Project Intern, Quantum Control Systems",
    duration: "Dec 2025 – Mar 2026",
    location: "Pune, India",
    description: "Architected automated instrument controllers and nanosecond-precision FPGA timing frameworks for quantum physics sweeps.",
    bulletPoints: [
      "Designed and deployed an FPGA control framework using ARTIQ and SINARA, automating quantum experiments (spectroscopy, Rabi scans) and significantly reducing manual setup overhead.",
      "Engineered nanosecond-precision timing synchronization modules, eliminating drift errors and improving cross-run reproducibility of quantum measurements.",
      "Translated complex research requirements into structured, scalable system architectures in direct collaboration with scientists."
    ],
    technologies: ["FPGA", "Hardware Layouts", "C++", "Duralink Protocol"]
  },
  {
    company: "ioGenies Solutions",
    role: "UI/UX Designer & SDE Intern",
    duration: "Jan 2025 – May 2026",
    location: "Pune, India",
    description: "Led UI/UX architectures and mobile SDE feature shipments for a SaaS B2B IoT platform.",
    bulletPoints: [
      "Redesigned core UX flows for a SaaS IoT platform, improving onboarding clarity and reducing user friction across web and mobile surfaces.",
      "Developed and shipped production features in a Flutter IoT mobile app, owning the full cycle from Figma mockups to tested, deployed code.",
      "Collaborated in sprint planning and feature prioritization with product and engineering teams, driving iterative improvements in performance and UX quality."
    ],
    technologies: ["Flutter", "Figma", "Dart", "Bluetooth BLE", "UX Research"]
  },
  {
    company: "Sustainfy Energy Pvt Ltd",
    role: "UI/UX Designer & Development Intern",
    duration: "Jul 2024 – Sep 2024",
    location: "Pune, India",
    description: "Spearheaded clean-energy solar panel configuration user research and modular front-end component engineering.",
    bulletPoints: [
      "Conducted UX research and designed user flows for web and mobile platforms, aligning design decisions with business objectives and technical constraints.",
      "Built a reusable UI component library, standardizing visual design across product surfaces and accelerating developer handoff.",
      "Worked with cross-functional stakeholders to validate feature requirements and ensure smooth design-to-engineering integration."
    ],
    technologies: ["React.js", "Tailwind CSS", "Figma", "Accessibility Testing"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "chomp-ai",
    name: "Chomp AI",
    description: "Defined product vision and UX strategy for an AI-powered food discovery app — from competitive benchmarking to interactive Figma prototype.",
    longDescription: "Meal selection is burdened with choice paralysis. Chomp AI solves this by introducing a highly intuitive voice and interest-driven curation engine. Instead of endless scrolling through restaurant listings, users describe their craving ('I want something warm and spicy near me under $15') or play a fast, interactive selection game to receive personalized recommendations.",
    tags: ["UX Research", "Figma", "Product Strategy"],
    link: "https://www.behance.net/gallery/224526649/Chomp",
    timeline: "8 Weeks (Spring 2026)",
    myRole: "Lead Product & UX Researcher",
    toolsUsed: ["Figma", "FigJam", "Miro", "UserTesting", "Maze"],
    challenge: "Traditional food discovery apps are structured around list-based hierarchies that trigger cognitive overload. Data reveals users spend up to 18 minutes searching for options before placing an order. The goal was to reduce search-time-to-decision by 60% through an AI curation system that respects user intent and context.",
    solution: "I designed a conversation-first visual interface featuring card stacks (Tinder-like gestures for group restaurant decisions) and natural language prompt inputs. Our usability audits with 15 participants showed that rapid-swipe voting decreased choice latency from 18 minutes to just 4 minutes. I crafted a high-fidelity interactive prototype, conducted testing on Maze, and specified exact engineering handoffs.",
    keyInsights: [
      "Decision fatigue is highly correlated with the number of visible choices. Limiting options to three hyper-curated cards increased user conversion by 42%.",
      "Shared decision-making ('where should we eat tonight?') is a major user friction point. Multi-user swipe lobby flows solved group dining debates.",
      "Muted micro-interactions and tactile swipe animations increased retention and completed sessions."
    ],
    isCaseStudy: true
  },
  {
    id: "payments-app",
    name: "Payments App Design",
    description: "Reimagined the mobile peer-to-peer (P2P) payments experience, focusing on multi-currency transfers, financial dashboards, and secure biometric authentication.",
    longDescription: "Payments App Design is an end-to-end product design case study aiming to simplify international P2P transactions. It introduces a modular financial dashboard, custom virtual card configuration, and contextual transaction flows to eliminate user anxiety during money transfers.",
    tags: ["UX/UI Design", "Fintech", "Mobile App Design"],
    link: "https://www.behance.net/gallery/214443569/Payments-App-Design",
    timeline: "6 Weeks (Winter 2025)",
    myRole: "Product Designer",
    toolsUsed: ["Figma", "Adobe Photoshop", "Prototyping", "User Research"],
    challenge: "Existing banking and payment applications trigger transaction anxiety due to hidden fees, complex multi-step forms, and rigid navigation menus. Peer-to-peer transfers, especially across international currencies, suffer from high conversion dropouts.",
    solution: "Designed a conversational-style payment flow with automatic currency conversion preview. Built a card-based home layout with rapid quick-transfer options that reduced transfer time by 50%.",
    keyInsights: [
      "Conversational Transaction Flow: Replacing rigid multi-field transfer forms with a step-by-step contextual prompt increased user trust and decreased error rates.",
      "Interactive Card Controls: Letting users configure, freeze, and customize virtual cards through clean swipe gestures improved onboarding completion by 35%.",
      "Transparent Fee Breakdowns: Displaying currency conversions, intermediary fees, and landing times explicitly on the confirmation screen minimized drop-offs."
    ],
    isCaseStudy: true
  },
  {
    id: "fitlife-hub",
    name: "Fitlife Hub",
    description: "Designed a holistic health and wellness web application integrating fitness tracking, personalized workout planning, and community engagement.",
    longDescription: "Fitlife Hub is a comprehensive wellness dashboard designed to bridge the gap between workout tracking and community support. By offering users personalized workout recommendation cards, biometric telemetry graphs, and shared motivation loops, it increases routine adherence.",
    tags: ["Product Design", "Web Design", "UI/UX", "Figma"],
    link: "https://fitlife-hub.netlify.app/",
    timeline: "8 Weeks (Spring 2025)",
    myRole: "UX/UI Designer",
    toolsUsed: ["Figma", "Framer", "User Testing", "Interactive Prototyping"],
    challenge: "Fitness platforms are often fragmented, forcing users to switch between separate apps for calorie tracking, workout logs, and social coordination. This friction leads to high churn rates, with over 60% of users stopping tracking within 30 days.",
    solution: "Designed a centralized health dashboard featuring personalized daily planner recommendations, responsive fitness graphs, and interactive workout routines. The design focuses on clean data visualization and seamless transitions.",
    keyInsights: [
      "Centralized Telemetry Dashboard: Aggregating activity logs, sleep metrics, and nutrition tracking into a single unified view reduced app-switching fatigue by 45%.",
      "Gamified Motivation Loops: Introducing social challenge cards and streaks boosted weekly user activity by 30% in mock usability tests.",
      "Interactive Workout Cards: Step-by-step workout guides with visual timers kept users focused on their routines without distraction."
    ],
    isCaseStudy: true
  },
  {
    id: "routewise",
    name: "Routewise",
    description: "Designed a micro-transit spatial logistics map interface for route optimization, real-time fleet balancing, and dispatcher efficiency.",
    longDescription: "Routewise is an intelligent, dispatcher-focused spatial routing console designed to simplify path overlaps and high-stress delivery logistics. By leveraging smart GIS-centric layout prioritization, it lowers the cognitive strain on fleet controllers and scales driver-response loops seamlessly.",
    tags: ["UX Strategy", "Figma Design", "Spatial Analytics"],
    link: "https://behance.net/piyushdeshmukh",
    timeline: "10 Weeks (Autumn 2025)",
    myRole: "Lead UX & Product Designer",
    toolsUsed: ["Figma", "GIS Mapping", "Miro", "UserTesting"],
    challenge: "Fleet dispatchers deal with complex, multi-route layouts with constant disruptions. Standard tools trigger cognitive strain by displaying overwhelming path overlays without clear operational priority.",
    solution: "I designed a geographic dashboard focusing on task-specific route highlighting and real-time transit alerts. Tested with 8 active dispatchers, the design cut critical reaction-to-rerouting loops by 45%.",
    keyInsights: [
      "Spatial contrast and contextual path-isolation reduced dispatcher error rates significantly.",
      "Live color-coded route alerts improved dispatcher-to-driver coordination latency.",
      "Minimalist GIS layering lets dispatchers focus on anomalies without visual clutter."
    ],
    isCaseStudy: true
  },
  {
    id: "biopay",
    name: "BioPay",
    description: "A wireless fingerprint-based POS payment system linking biometrics to an in-app wallet for frictionless checkout.",
    longDescription: "BioPay is a cloud-based biometric payment system that enables users to complete retail transactions using only their fingerprint linked to a preloaded in-app wallet. The system completely eliminates the need for QR codes, mobile phones, OTPs, or PINs at checkout, providing a seamless and device-free payment experience.",
    tags: ["Flutter", "React.js", "Node.js", "IoT"],
    link: "https://github.com/piyushd23",
    timeline: "12 Weeks (Winter 2025)",
    myRole: "Full-Stack Developer & Hardware Lead",
    toolsUsed: ["Flutter", "React.js", "Node.js", "ESP32 (XIAO-C3)", "AS608 Fingerprint Sensor", "Express"],
    challenge: "In-store retail checkouts often depend heavily on physical cards, phones, network signals, or OTPs. If a customer's phone battery is dead or signal is low, checkout fails. The challenge was to design a secure, cloud-backed biometric-only verification system that completes hardware-to-cloud handshakes under 3 seconds.",
    solution: "I built the end-to-end hardware-software pipeline. I integrated an AS608 fingerprint sensor with a Seeed Studio XIAO-C3 ESP32 module, connected to a Node.js backend. I developed the customer enrollment flow in a Flutter app, the retailer payment interface in React.js, and a secure verification system that processes and verifies biometrics to deduct wallet balances instantly.",
    keyInsights: [
      "Biometric-Only Checkout: Completely removes the need for devices, cash, or cards in-store, lowering transaction friction.",
      "Synchronized Flow: Retailer sets amount in the React web app -> user scans fingerprint on the ESP32 sensor -> Node.js backend verifies print and updates both screens.",
      "Secure Cloud-Based Verification: Fingerprint templates are verified securely in the cloud, keeping local terminal footprints minimal."
    ],
    isCaseStudy: false
  },
  {
    id: "accentify",
    name: "Accentify",
    description: "An AI-powered pronunciation platform using Google TTS and Whisper AI for real-time recitation feedback.",
    longDescription: "Accentify is an AI-powered multilingual pronunciation learning platform where users listen to correct pronunciations via Google Text-to-Speech (TTS), record their own recitation, and receive real-time feedback through Whisper AI-based speech-to-text similarity evaluation. It includes progress tracking enabling users to resume, reset, and complete shloks across sessions.",
    tags: ["FastAPI", "Whisper AI", "Google TTS", "Python"],
    link: "https://github.com/piyushd23",
    timeline: "6 Weeks (Summer 2025)",
    myRole: "Backend & AI Engineer",
    toolsUsed: ["FastAPI", "Python", "Whisper AI", "Google TTS", "React.js", "REST APIs"],
    challenge: "Language reciters need dynamic, phrase-level feedback on their pronunciation. Conventional platforms offer generic scorecards (e.g. '80% Match') without highlighting exact pronunciation mismatches or tracking user progress across specific shlok learning modules and sessions.",
    solution: "I engineered the full backend in FastAPI with REST endpoints for session management, pronunciation evaluation, and progress tracking. Google TTS provides reference audio guidelines, while a Whisper AI integration transcribes and compares user recordings, delivering detailed text similarity metrics and allowing users to resume, reset, or complete shloks across sessions.",
    keyInsights: [
      "Real-Time Evaluation: Google TTS reference audios paired with Whisper AI transcribing client recordings for instant phonetic similarity feedback.",
      "Stateful Shlok Learning: Implemented backend session tracking, allowing users to seamlessly resume, reset, and complete shloks over time.",
      "Granular Evaluation: Shifting from flat speech scoring to word-level text similarity matching for actionable language metrics."
    ],
    isCaseStudy: false
  },
  {
    id: "dynamo-ai",
    name: "Dynamo AI",
    description: "Designed a conversational generative-AI document parser and workflow automation console for enterprise configurations.",
    longDescription: "Dynamo AI is a generative-AI automation platform designed to simplify complex data extraction streams and workflow triggers. (Detailed content is being finalized and will be updated soon).",
    tags: ["Product Design", "AI Automation", "Figma Prototyping"],
    link: "https://behance.net/piyushdeshmukh",
    timeline: "8 Weeks (Spring 2026)",
    myRole: "Lead UX & Product Designer",
    toolsUsed: ["Figma", "AI Workflows", "Miro", "User Testing"],
    challenge: "Manual document extraction and custom workflow configuration are error-prone and have steep learning curves. The objective was to design a node-based editor that lets users build document parsing recipes without code.",
    solution: "I designed a visual recipe builder featuring node flow charts, instant extractions preview, and natural language instruction prompts. Tested with 12 enterprise users, it cut custom pipeline setups by 50%.",
    keyInsights: [
      "Visual Node Mapping: Representing multi-step pipelines as interactive connected blocks lowered cognitive load by 35%.",
      "Conversational Setup Guides: AI-powered instruction sheets helped users create logic rules without syntactical errors.",
      "Immediate Curation Preview: Displaying parser output dynamically in real-time kept configuration workflows transparent."
    ],
    isCaseStudy: false
  }
];

export const SKILLS_DESIGN = [
  "User Research", "UX Strategy", "Wireframing", "Prototyping", "Design Systems", 
  "Usability Testing", "Information Architecture", "Accessibility (WCAG 2.1)"
];

export const SKILLS_PRODUCT = [
  "Product Lifecycle", "Roadmapping", "Feature Prioritization (RICE/MoSCoW)", 
  "Competitive Analysis", "Stakeholder Management", "Agile"
];

export const SKILLS_ENGINEERING = [
  "React.js", "Flutter", "Python", "FastAPI", "Node.js", "Firebase", 
  "Figma", "Framer", "Webflow", "SQL", "MongoDB", "REST APIs"
];

export const ACHIEVEMENTS = [
  {
    title: "Top 50 Rank",
    event: "Designare Online Design Hackathon",
    desc: "Created a full end-to-end UX case study under strict competition constraints.",
    category: "UX Design",
    highlight: "Top 50 National Rank"
  },
  {
    title: "Runner-Up",
    event: "CyberMeru AI Innovation Hackathon",
    desc: "Built an AI-based face proctoring and real-time speech analysis system in 24 hours.",
    category: "AI & Development",
    highlight: "Secured ₹10,000 Cash Prize"
  }
];
