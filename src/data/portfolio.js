import archive from "./projects.json";

export const categories = ["All", "Full Stack", "Websites", "AI"];
export const featured = [
  "Quiz Easy",
  "File Sharing Web App",
  "3-D Portfolio Website",
]
  .map((title) => archive.find((project) => project.title === title))
  .filter(Boolean);

export const experiences = [
  {
    date: "NOV 2025 – PRESENT",
    title: "Software Engineer",
    place: "Mphasis · VFS Global Visa Processing Platform · Mumbai",
    bullets: [
      "Own the Agent Appointment module across six ASP.NET Core services and 40+ REST endpoints.",
      "Deliver appointment and center workflows for day opening and closing, slot configuration, agent documents, and sub-user management.",
      "Reduced date-closing database round trips from about five to two per date, lowering P95/P99 latency by 33%.",
      "Built re-biometrics, notification, SLA reporting, Track & Trace, and VSC device-management workflows.",
    ],
  },
  {
    date: "SEP 2025 – NOV 2025",
    title: "Associate DevOps Engineer Intern",
    place: "Biz2Credit (Biz2X) · Noida",
    bullets: [
      "Built a React and Flask DevOps dashboard and deployed it on scalable AWS EC2 instances.",
      "Automated all SSL/TLS certificate lifecycles with AWS ACM and Boto3, eliminating manual validation errors across internal and external domains.",
      "Created a serverless AWS Lambda workflow to monitor certificate expiry and generate Jira tickets, helping prevent downtime.",
    ],
  },
  {
    date: "FEB 2025 – MAY 2025",
    title: "Trainee Software Engineer",
    place: "Mphasis · Mumbai",
    bullets: [
      "Built a Spring Boot and Angular employee onboarding portal, reducing onboarding time by over 95%.",
      "Developed automated notifications, workflow dashboards, and responsive API-driven interfaces, improving data processing speed by 30%.",
      "Collaborated across teams in Agile sprints to deliver features iteratively.",
    ],
  },
];

export const awards = [
  { year: "2025", title: "GATE Computer Science", event: "Qualified" },
  {
    year: "40+",
    title: "ASP.NET Core REST endpoints",
    event: "Across six core services",
  },
  {
    year: "~5 → 2",
    title: "Database round trips",
    event: "Per date-closing workflow; P95/P99 latency reduced 33%",
  },
  {
    year: "10+",
    title: "Campus recruitment companies",
    event: "Secured for NIT Jalandhar",
  },
  {
    year: "750+",
    title: "Data Structures & Algorithms",
    event: "Problems solved",
  },
  { year: "B.Tech", title: "Information Technology", event: "NIT Jalandhar" },
];

export const processSteps = [
  [
    "01",
    "UNDERSTAND",
    "Clarify the problem, users, and requirements before choosing an implementation.",
  ],
  [
    "02",
    "DESIGN",
    "Shape APIs, data models, and workflows around the needs of the product.",
  ],
  [
    "03",
    "BUILD",
    "Develop backend services and interfaces with maintainable, testable code.",
  ],
  [
    "04",
    "INTEGRATE",
    "Connect services, databases, notifications, and external platforms.",
  ],
  [
    "05",
    "DELIVER",
    "Validate the workflow and prepare reliable software for production.",
  ],
];
