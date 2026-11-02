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
    text: "Owns the Agent Appointment module, developing six core services with 40+ RESTful endpoints using ASP.NET Core for appointment and center operations, including day open/close workflows, slot configuration, agent documents, and sub-user management. Optimized appointment date-closing workflows, reducing database round trips from approximately five to two per date and lowering P95/P99 latency by 33%. Also delivered re-biometrics, notification and SLA reporting APIs, Track & Trace, and VSC device-management workflows.",
  },
  {
    date: "SEP 2025 – NOV 2025",
    title: "Associate DevOps Engineer Intern",
    place: "Biz2Credit (Biz2X) · Noida",
    text: "Developed a React and Flask DevOps dashboard and deployed it on scalable AWS EC2 instances to improve infrastructure visibility and reduce incident response time. Automated 100% of SSL/TLS certificate lifecycles with AWS ACM and Boto3, eliminating manual validation errors across internal and external domains. Engineered a serverless AWS Lambda workflow to monitor certificate expiry and auto-generate Jira tickets, helping ensure zero downtime.",
  },
  {
    date: "FEB 2025 – MAY 2025",
    title: "Trainee Software Engineer",
    place: "Mphasis · Mumbai",
    text: "Engineered a full-stack employee onboarding portal using Spring Boot and Angular, reducing onboarding time by over 95% and increasing adoption across internal teams. Developed automated notifications, workflow dashboards, and responsive API-driven UIs that improved data processing speed by 30%. Collaborated in Agile sprints to deliver iteratively and coordinate across teams.",
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
