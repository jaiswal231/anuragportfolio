/**
 * ============================================================================
 * ANURAG.DEV - CENTRAL PORTFOLIO CONFIGURATION DATA
 * ============================================================================
 * Easily edit personal information, links, education, skills, and learning goals here.
 * All updates here automatically reflect across the entire website!
 */

const PORTFOLIO_DATA = {
  personal: {
    fullName: "Anurag Prasad Sah",
    brandName: "ANURAG.DEV",
    professionalTitle: "Aspiring Software Developer",
    secondaryTitle: "Computer Science Student | Aspiring Developer",
    university: "Shoolini University",
    degree: "B.Tech in Computer Science and Engineering",
    academicYear: "First Year (2024 – 2028)",
    location: "Solan, Himachal Pradesh, India",
    statusBadge: "Available for Collaborations & Learning",
    heroIntro: "I'm a first-year B.Tech CSE student at Shoolini University, exploring programming, software development, and innovative technology. I'm learning, experimenting, and building the foundation for my future in tech.",
    aboutNarrative: [
      "My passion for computer science stems from an insatiable curiosity about how software shapes our daily realities. Rather than just using digital technology, I am driven by the ambition to understand its inner workings — from low-level memory mechanics to elegant, scalable user experiences.",
      "As a first-year student, I believe that building a great developer career requires mastering fundamental computer science principles first: clean code syntax, algorithmic problem solving, structured thinking, and disciplined daily practice.",
      "I don't claim to know everything, nor do I hide behind inflated buzzwords. I am honest about where I stand today: at the exciting threshold of my journey, learning every single day, and preparing to build meaningful software solutions."
    ],
    philosophyQuote: "Every complex system began as a simple idea. Master the fundamentals, stay humble, and write code every day."
  },

  contact: {
    email: "anuragprasadsah.dev@gmail.com", // Editable placeholder
    emailDisplay: "anuragprasadsah.dev@gmail.com",
    github: "https://github.com/anuragsah-dev", // Editable placeholder
    githubUsername: "github.com/anuragsah-dev",
    linkedin: "https://linkedin.com/in/anurag-prasad-sah", // Editable placeholder
    linkedinUsername: "linkedin.com/in/anurag-prasad-sah",
    discord: "anurag#0001",
    locationDisplay: "Shoolini University, Solan, HP"
  },

  education: [
    {
      institution: "Shoolini University",
      qualification: "B.Tech in Computer Science and Engineering",
      status: "Currently Pursuing (First Year)",
      period: "2024 – 2028",
      isActive: true,
      description: "Immersed in foundational computer science coursework, engineering mathematics, structured programming, and hands-on laboratory workshops.",
      tags: ["C / C++ Programming", "Computational Thinking", "Engineering Mathematics", "Web Basics"]
    },
    {
      institution: "Om National Academy",
      qualification: "Class 12 (+2) — Senior Secondary",
      status: "Completed",
      period: "Graduated",
      isActive: false,
      description: "Completed higher secondary education in Science stream with deep focus on Physics, Chemistry, and Advanced Mathematics.",
      tags: ["Science Stream", "Advanced Mathematics", "Analytical Foundations", "Physics"]
    },
    {
      institution: "Shubha Tara Secondary School",
      qualification: "Class 10 — Secondary Education",
      status: "Completed",
      period: "Graduated",
      isActive: false,
      description: "Built strong academic grounding in general sciences, logical reasoning, mathematics, and English communication.",
      tags: ["Secondary School Certificate", "Core Sciences", "Mathematics Foundation"]
    }
  ],

  skills: [
    {
      name: "C Programming",
      category: "programming",
      status: "Actively Learning",
      icon: "code",
      description: "Understanding pointers, memory allocation, structures, and procedural programming.",
      concepts: ["Syntax", "Pointers", "Arrays", "Control Flow"]
    },
    {
      name: "C++ Programming",
      category: "programming",
      status: "Actively Learning",
      icon: "cpu",
      description: "Exploring object-oriented principles, classes, standard template library basics.",
      concepts: ["OOP Basics", "Functions", "STL Foundations"]
    },
    {
      name: "Python",
      category: "programming",
      status: "Practicing",
      icon: "terminal",
      description: "Scripting, syntax clarity, list comprehensions, and computational problem solving.",
      concepts: ["Data Types", "Conditionals", "Automation Basics"]
    },
    {
      name: "HTML5 & Semantic Markup",
      category: "web",
      status: "Foundational",
      icon: "layout",
      description: "Structuring accessible, SEO-friendly, and modern semantic web pages.",
      concepts: ["Semantic Tags", "Accessibility (a11y)", "Forms"]
    },
    {
      name: "Modern CSS3",
      category: "web",
      status: "Actively Learning",
      icon: "palette",
      description: "Styling layouts using Flexbox, CSS Grid, media queries, and glassmorphism.",
      concepts: ["Flexbox", "CSS Grid", "Animations", "Variables"]
    },
    {
      name: "JavaScript (ES6+)",
      category: "web",
      status: "Actively Learning",
      icon: "file-code",
      description: "DOM manipulation, event listeners, functions, arrays, and modern ES6 features.",
      concepts: ["DOM APIs", "Event Handling", "ES6 Basics"]
    },
    {
      name: "Git & Version Control",
      category: "tools",
      status: "Practicing",
      icon: "git-branch",
      description: "Managing code revisions, commits, branching, merging, and remote syncing.",
      concepts: ["git init", "commit & push", "Branching"]
    },
    {
      name: "GitHub",
      category: "tools",
      status: "Active",
      icon: "github",
      description: "Hosting repositories, collaborating on code, and tracking project issues.",
      concepts: ["Repositories", "README Docs", "Open Source"]
    },
    {
      name: "VS Code & Dev Environment",
      category: "tools",
      status: "Configured",
      icon: "monitor",
      description: "Configuring development setups, extensions, debuggers, and terminal shortcuts.",
      concepts: ["Linters", "Terminal", "Workspaces"]
    },
    {
      name: "Data Structures Foundations",
      category: "cs",
      status: "Actively Learning",
      icon: "layers",
      description: "Learning arrays, linked lists, stacks, queues, and memory representations.",
      concepts: ["Arrays", "Time Complexity O(n)", "Basic Searching"]
    },
    {
      name: "Algorithms & Logic Building",
      category: "cs",
      status: "Exploring",
      icon: "zap",
      description: "Breaking down problems into step-by-step algorithms, dry-running edge cases.",
      concepts: ["Sorting Basics", "Recursion Concept", "Dry Running"]
    },
    {
      name: "Linux & Bash Terminal",
      category: "tools",
      status: "Exploring",
      icon: "command",
      description: "Navigating directory structures, managing files, and executing shell commands.",
      concepts: ["CLI Navigation", "File Permissions", "Shell Scripts"]
    }
  ],

  projectsStatus: {
    count: 0,
    headline: "Great Things Start With One Idea.",
    badge: "0 Completed Projects • In Inception",
    description: "I'm currently learning and preparing to build my first project. This space will soon showcase my experiments, ideas, and real-world applications.",
    quote: "True craftsmanship begins with understanding before building.",
    upcomingRoadmap: [
      {
        step: "01",
        title: "CLI Utility / Terminal Tool",
        tech: "C++ / Python",
        desc: "A lightweight terminal application for student productivity and algorithmic testing."
      },
      {
        step: "02",
        title: "Personal Responsive Web App",
        tech: "Vanilla JS / DOM APIs",
        desc: "An interactive, accessible web tool solving a daily student workflow challenge."
      },
      {
        step: "03",
        title: "Data Structure Visualizer",
        tech: "HTML5 Canvas / JavaScript",
        desc: "An educational sandbox to visualize how sorting algorithms and arrays execute in real-time."
      }
    ]
  },

  learningJourney: [
    {
      title: "Programming Fundamentals",
      icon: "code",
      focus: "C & C++ Mechanics",
      desc: "Delving into low-level computer architecture, pointer arithmetic, memory structures, and rigorous code organization.",
      progressPercent: 35,
      currentMilestone: "Pointers & Dynamic Memory"
    },
    {
      title: "Modern Web Development",
      icon: "globe",
      focus: "Responsive UI & JavaScript",
      desc: "Creating responsive, interactive web interfaces with semantic HTML, fluid CSS layouts, and modern vanilla JavaScript.",
      progressPercent: 40,
      currentMilestone: "Async JavaScript & Fetch APIs"
    },
    {
      title: "Problem Solving & DSA",
      icon: "brain",
      focus: "Algorithmic Intuition",
      desc: "Practicing problem breakdown, analytical reasoning, and foundational data structures on platforms like LeetCode and HackerRank.",
      progressPercent: 25,
      currentMilestone: "Array Manipulation & Two Pointers"
    },
    {
      title: "Developer Tools & Workflow",
      icon: "terminal",
      focus: "Git, Linux & Automation",
      desc: "Adopting industry-standard developer workflows, command-line mastery, version control branching, and clean repository hygiene.",
      progressPercent: 45,
      currentMilestone: "Git Collaborative Branching"
    }
  ]
};

// Export to window
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
