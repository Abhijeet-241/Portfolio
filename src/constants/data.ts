import type { ExperienceItem, Project, SkillGroup } from "@/types";

export const experience: ExperienceItem[] = [
  {
    company: "Paytm Money",
    role: "Software Developer Intern",
    location: "Noida, IN",
    period: "Jan 2026 — Jun 2026",
    current: true,
    problem:
      "On a live trading app that moves real money, customer-lifecycle journeys were blocked by missing analytics events, and a set of production defects quietly eroded trust — a dual-listed stock reported as unavailable, a duplicate alert failing with a generic error, dead-end navigation states.",
    responsibility:
      "Own analytics instrumentation and production-defect resolution across the Mutual Funds, Equity, Onboarding, Portfolio, and MTF flows, working inside the pml-flutter codebase and the Android mono-repo.",
    solution:
      "Defined consistent event contracts across five core flows — including Fund Transfer, Order Initiation, MTF Activation, and MTF upsell on Android — then root-caused and fixed the NSE/BSE exchange-toggle logic, the duplicate Price Alert error, the Company Page back-navigation gap, and the Fund Details redirects. Delivered WCAG-aligned screen-reader support across trading screens.",
    outcomes: [
      "Unblocked customer-journey tracking across five core investment flows",
      "Restored reliable navigation and order flows on high-traffic screens",
      "Shipped accessible trading screens with TalkBack / VoiceOver support",
    ],
    stack: ["Flutter", "Dart", "Android", "Firebase", "REST APIs", "Analytics"],
  },
  {
    company: "The APEX Solutions",
    role: "Flutter Developer Intern",
    location: "Faridabad, IN",
    period: "Jun 2025 — Oct 2025",
    problem:
      "Early-stage product work needed cross-platform mobile features shipped quickly without sacrificing a clean client–server contract.",
    responsibility:
      "Build and ship cross-platform mobile features end to end within an Agile team.",
    solution:
      "Developed Flutter/Dart applications integrating REST APIs and Firebase — authentication, Firestore, and real-time sync — collaborating through Git and GitHub.",
    outcomes: [
      "Delivered production mobile features across Android and iOS",
      "Integrated real-time data sync and authentication with Firebase",
    ],
    stack: ["Flutter", "Dart", "Firebase", "REST APIs", "Git"],
  },
];

export const projects: Project[] = [
  {
    slug: "agentos",
    name: "AgentOS",
    tagline: "A coding-agent capability portfolio that carries its own evidence.",
    year: "2025",
    kind: "Applied AI · Platform",
    problem:
      "How far can a coding agent be trusted across the real software lifecycle — and how do you prove it rather than claim it?",
    approach:
      "A graded portfolio of 24 tasks spanning understand → build → verify → harden → optimize → operate, executed for real in Python, Node.js, and Rust with Docker, Kubernetes, and Terraform. Specialist agents are cross-checked by an independent adversarial verifier before any result counts, and a deployed Next.js platform serves each agent's definition alongside its verified output.",
    decisions: [
      "Evidence-based verification: every claim is backed by a captured run — tests, builds, healthy containers.",
      "An explicit agent-generated vs. verified split, so nothing is taken on faith.",
      "An adversarial verifier whose job is to catch over-claiming, not to agree.",
    ],
    highlights: [
      { label: "Tests passing", value: "85 on clean bootstrap" },
      { label: "Latency win", value: "278ms to 20ms (-92.7%)" },
      { label: "Security", value: "Repro'd path-traversal + auth bypass" },
      { label: "Surface", value: "24 tasks · 4 tiers · 40 commits" },
    ],
    stack: [
      "Python",
      "Node.js",
      "Rust",
      "Next.js",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
    ],
    links: {
      github: "https://github.com/Abhijeet-241/Agentic_development",
      live: "https://agent-platform-teal-three.vercel.app/",
    },
  },
  {
    slug: "equity-sdk-assistant",
    name: "Equity SDK Developer Assistant",
    tagline: "A local-first assistant that answers from the docs — with citations, not guesses.",
    year: "2025",
    kind: "Applied AI · Developer Tooling",
    problem:
      "Developers onboarding to an equity SDK lose hours hunting through documentation, and an ungrounded answer is worse than no answer at all.",
    approach:
      "Retrieval-augmented generation over the SDK's documentation corpus: chunks are indexed into a ChromaDB vector store with Ollama embeddings, and responses are grounded with cited sources. Two modes share one core — a generative Ask mode and an agentic Do mode built on a LangGraph ReAct agent with search/grep/read/draft tools, human-in-the-loop approval, and a SQLite audit log.",
    decisions: [
      "100% local models — privacy and zero per-call cost.",
      "A golden-question evaluation harness to measure retrieval quality, not vibes.",
      "Human-in-the-loop approval gating every action the agent takes.",
    ],
    highlights: [
      { label: "Grounding", value: "Cited RAG over doc corpus" },
      { label: "Modes", value: "Generative Ask + agentic Do" },
      { label: "Safety", value: "Human approval + audit log" },
      { label: "Quality", value: "Golden-question eval harness" },
    ],
    stack: ["Python", "LangChain", "LangGraph", "ChromaDB", "Ollama"],
    links: {
      github: "https://github.com/Abhijeet-241/EQUITY_SDK_DEVELOPER_ASSISTANT",
    },
  },
  {
    slug: "dairy-khata",
    name: "Dairy Khata",
    tagline: "Replacing the milk vendor's paper ledger — and the disputes that come with it.",
    year: "2025",
    kind: "Mobile · Offline-first",
    problem:
      "Dairy vendors track daily milk delivery on paper, which means manual month-end math and recurring billing disputes with customers.",
    approach:
      "A cross-platform Flutter app that records per-customer daily entries, month-end totals, and day-wise history. Data is persisted offline-first in SQLite so the app works without connectivity, with Provider managing state across the flows.",
    decisions: [
      "Offline-first by default — the field has no reliable network.",
      "Local SQLite as the source of truth, kept simple and durable.",
      "A data model built around the dispute it is meant to prevent.",
    ],
    highlights: [
      { label: "Works offline", value: "SQLite source of truth" },
      { label: "Solves", value: "Month-end totals + disputes" },
      { label: "Platforms", value: "Android · iOS" },
      { label: "State", value: "Provider" },
    ],
    stack: ["Flutter", "Dart", "SQLite", "Provider", "Firebase"],
    links: {
      github: "https://github.com/Abhijeet-241/Dairy_khata_App",
    },
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Dart", "Python", "TypeScript", "JavaScript", "Kotlin", "C++", "SQL"] },
  { label: "Mobile", items: ["Flutter", "Android (mono-repo)", "Accessibility (WCAG)", "TalkBack / VoiceOver"] },
  { label: "Applied AI", items: ["LLMs", "RAG", "LangChain", "LangGraph", "Vector DBs", "Embeddings", "Multi-agent Orchestration", "Agent Evaluation"] },
  { label: "Backend", items: ["FastAPI", "Node.js", "Express", "REST APIs"] },
  { label: "DevOps & Cloud", items: ["Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Terraform", "AWS"] },
  { label: "Testing", items: ["Maestro (E2E)", "pytest", "Jest", "Flutter Test"] },
  { label: "Architecture", items: ["Clean Architecture", "State Management", "Offline-first", "Modularization"] },
  { label: "Databases", items: ["SQLite", "Firebase / Firestore", "ChromaDB", "PostgreSQL"] },
  { label: "Tools", items: ["Git", "GitHub", "Postman", "Android Studio", "VS Code"] },
];

export const credentials = [
  { label: "B.Tech, CSIT", detail: "KIET Group of Institutions · CGPA 8.32 · 2022–2026" },
  { label: "AWS Certified Cloud Practitioner", detail: "CLF-C02 · 2025" },
  { label: "Innotech Hackathon Finalist", detail: "Top 9 of 120+ teams · 2024" },
];
