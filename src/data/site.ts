import type { LineId } from "@/lib/lines";

import fhirImage from "@/assets/projects/fhir-image.png?format=webp";
import ttcImage from "@/assets/projects/TTCTransitVisualizer.png?w=960&format=webp";
import buoyImage from "@/assets/projects/right_1741317589892.jpg?w=960&format=webp";
import catanImage from "@/assets/projects/Screenshot 2025-09-15 171401.png?w=960&format=webp";
import neuroneckImage from "@/assets/projects/IMG_9137.jpg?w=960&format=webp";
import malariaImage from "@/assets/projects/Picture176875.png?w=960&format=webp";

import doomRug from "@/assets/Rugs/doom-rug.png?w=640&format=webp";
import doomRugLarge from "@/assets/Rugs/doom-rug.png?format=webp";
import speakerRug from "@/assets/Rugs/speaker-rug.png?w=640&format=webp";
import speakerRugLarge from "@/assets/Rugs/speaker-rug.png?format=webp";
import mountainRug from "@/assets/Rugs/mountain-rug.png?w=640&format=webp";
import mountainRugLarge from "@/assets/Rugs/mountain-rug.png?format=webp";
import okejRug from "@/assets/Rugs/bathroom-rug.png?w=640&format=webp";
import okejRugLarge from "@/assets/Rugs/bathroom-rug.png?format=webp";
import strawberryRug from "@/assets/Rugs/strawberry-rug.png?w=640&format=webp";
import strawberryRugLarge from "@/assets/Rugs/strawberry-rug.png?format=webp";
import dogRug from "@/assets/Rugs/dog-rug.png?w=640&format=webp";
import dogRugLarge from "@/assets/Rugs/dog-rug.png?format=webp";

import batOverhang from "@/assets/Climbing-thumbnail/bat-overhang.jpg?w=960&format=webp";
import redDyno from "@/assets/Climbing-thumbnail/red-dyno.jpg?w=960&format=webp";
import pinkDyno from "@/assets/Climbing-thumbnail/pink-dyno.jpg?w=960&format=webp";
import redSwing from "@/assets/Climbing-thumbnail/red-swing.jpg?w=960&format=webp";

import resumePdf from "@/assets/Resume2026.pdf";

export const CONTACT = {
  email: "spencer.osborn@queensu.ca",
  linkedin: "https://www.linkedin.com/in/spencer-osborn/",
  github: "https://github.com/Splendero",
  resumePdf,
};

export const LINES: { line: LineId; label: string; path: string }[] = [
  { line: 1, label: "Projects", path: "/projects" },
  { line: 2, label: "Rugs", path: "/rugs" },
  { line: 3, label: "Climbing", path: "/climbing" },
  { line: 4, label: "Resume", path: "/resume" },
];

export const DEPARTURES: { line: LineId; destination: string; via: string; status: string; minutes: number }[] = [
  { line: 1, destination: "PROJECTS", via: "7 BUILDS", status: "ON TIME", minutes: 2 },
  { line: 2, destination: "RUGS", via: "HAND-TUFTED", status: "BOARDING", minutes: 5 },
  { line: 3, destination: "CLIMBING", via: "UP TO V6", status: "ON TIME", minutes: 9 },
  { line: 4, destination: "RESUME", via: "REV 2026", status: "UPDATED", minutes: 14 },
];

export const NOW_LINE = "AI Data Engineer (part-time) at Exiger · Math & Engineering at Queen's, class of 2027";

export const SERVICE_NOTICE =
  "Since September 2026, Spencer runs part-time as an AI Data Engineer at Exiger after his summer internship. Regular service on all other lines.";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  /** Logos and diagrams should be shown whole rather than cropped to fill. */
  imageFit?: "contain";
  route?: string[];
  fromResume?: boolean;
}

export const PROJECTS_INTRO =
  "A collection of web applications, tools, and creative coding projects that showcase my development skills and passion for creating meaningful digital experiences.";

export const PROJECTS: Project[] = [
  {
    title: "FHIR Goal Tracker",
    description: "A backend system that stores patients, goals, and observations using the FHIR health-data standard.",
    technologies: ["Go", "PostgreSQL", "FHIR"],
    liveUrl: "https://fhir-goals-project-production.up.railway.app/",
    githubUrl: "https://github.com/Splendero/FHIR-goals-project",
    imageUrl: fhirImage,
    imageFit: "contain",
    route: ["Client", "Go API", "FHIR resources", "PostgreSQL"],
  },
  {
    title: "TTC Transit Visualizer",
    description:
      "A webpage showing real-time data from TTC buses and streetcars, backed by a database that has logged 1M+ vehicle positions to show prior days.",
    technologies: ["HTML", "CSS", "Python", "SQL"],
    liveUrl: "https://ttc-transit-visualizer.vercel.app/",
    githubUrl: "https://github.com/Splendero/TTCTransitVisualizer",
    imageUrl: ttcImage,
    route: ["TTC public API", "Python backend", "SQL, 1M+ rows", "Live map", "Prior days"],
  },
  {
    title: "Buoy Detection System",
    description:
      "Real-time buoy detection for aQuatonomous's RoboBoat 2025 vessel, running OpenCV and ROS 2 on a Jetson Nano at 15 FPS.",
    technologies: ["ROS 2", "Python", "Linux", "Computer Vision"],
    githubUrl: "https://github.com/aQuatonomous",
    imageUrl: buoyImage,
    route: ["Camera", "OpenCV detector", "ROS 2 topic", "Boat autonomy"],
  },
  {
    title: "Catan Map Generator",
    description: "Catan map generator for competitive Catan, with custom rules.",
    technologies: ["JavaScript", "Python"],
    liveUrl: "https://catan-map-maker-frontend.vercel.app/",
    imageUrl: catanImage,
  },
  {
    title: "Neuroneck",
    description: "A real-time neck brace training system for medical use. It won a hackathon and a $2,000 prize.",
    technologies: ["Arduino", "Microcontroller", "Hackathon"],
    githubUrl: "https://github.com/Splendero/hackathon1medsim",
    imageUrl: neuroneckImage,
  },
  {
    title: "Malaria Simulation",
    description: "A simulation of malaria spread in a population, using a Loyds agents model.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS Grid"],
    githubUrl: "https://github.com/Splendero/osiris",
    imageUrl: malariaImage,
    imageFit: "contain",
  },
  {
    title: "Automatic Triage Agent",
    description:
      "An AI-driven medical triage backend: LLM-based symptom analysis on AWS Lambda, Bedrock and EC2, with event-driven S3 and DynamoDB pipelines.",
    technologies: ["AWS Lambda", "Bedrock", "EC2", "S3", "DynamoDB"],
    route: ["API trigger", "AWS Lambda", "Bedrock LLM", "S3 + DynamoDB"],
    fromResume: true,
  },
];

export const SKILL_GROUPS: { name: string; items: string[] }[] = [
  { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { name: "Backend", items: ["Node.js", "Python", "C#", "C++"] },
  { name: "Database", items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase"] },
  { name: "Tools", items: ["Git", "Docker", "AWS", "Azure"] },
];

export interface Rug {
  name: string;
  image: string;
  imageLarge: string;
  width: number;
  height: number;
  note: string;
}

export const RUGS_INTRO =
  "Each rug is tufted with a rug tufting gun and simple materials from the local craft store, using patterns and designs I hand-draw from inspiration I find online, for my friends and family.";

export const RUGS: Rug[] = [
  { name: "MF DOOM logo", image: doomRug, imageLarge: doomRugLarge, width: 2, height: 1, note: "From MF DOOM's famous logo." },
  { name: "blonded speaker", image: speakerRug, imageLarge: speakerRugLarge, width: 4, height: 1.5, note: "Inspired by covers from blonded radio." },
  { name: "mountain sunset", image: mountainRug, imageLarge: mountainRugLarge, width: 3, height: 3, note: "Hand-drawn for the homie Pe Stew." },
  { name: "okej dye", image: okejRug, imageLarge: okejRugLarge, width: 2, height: 3, note: "Inspired by an okej design, tufted then dyed." },
  { name: "strawberry", image: strawberryRug, imageLarge: strawberryRugLarge, width: 2, height: 2, note: "Hand-drawn strawberry rug." },
  { name: "dog wig", image: dogRug, imageLarge: dogRugLarge, width: 3, height: 2, note: "Dog wig for the homie Daveo." },
];

export interface JourneyLeg {
  mode: string;
  title: string;
  body: string;
  duration?: string;
  line?: LineId;
}

export const RUG_PROCESS: JourneyLeg[] = [
  {
    mode: "Draw",
    title: "Design",
    body: "Every rug begins with careful planning: drawing the design, selecting color palettes, and projecting the design onto the cloth.",
  },
  {
    mode: "Tuft",
    title: "Tuft",
    body: "Rugs are tufted with a rug tufting gun, a long and tedious process that can take tens of hours of tufting alone for each rug.",
    duration: "Tens of hours",
    line: 2,
  },
  {
    mode: "Finish",
    title: "Finish",
    body: "I tuft into a monk's cloth backing, then secure it with super glue, cut the excess, and finish the back with felt.",
    line: 3,
  },
];

export interface Climb {
  id: string;
  title: string;
  grade: string;
  gradeValue: number;
  location: string;
  date: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  project?: boolean;
}

export const CLIMBING_INTRO = "A few of my favourite climbs, from the few videos I have taken.";

export const CLIMBS: Climb[] = [
  {
    id: "bat-hang",
    title: "Bat Hang Project",
    grade: "V6",
    gradeValue: 6,
    location: "Climber's Rock, Oakville",
    date: "August 2024",
    description: "Couldn't finish the climb, but easily my favourite move I've ever done.",
    videoUrl: "https://youtube.com/shorts/ZAV8beX5H6Q?feature=share",
    thumbnail: batOverhang,
    project: true,
  },
  {
    id: "v5-dyno",
    title: "Dyno",
    grade: "V5",
    gradeValue: 5,
    location: "Boiler Room, Kingston",
    date: "June 2025",
    description: "Fun first move and then exhausting finish.",
    videoUrl: "https://youtube.com/shorts/X19vW2NU_6o",
    thumbnail: redDyno,
  },
  {
    id: "pink-dyno",
    title: "Pink Dyno",
    grade: "V4",
    gradeValue: 4,
    location: "Climber's Rock, Oakville",
    date: "August 2024",
    description: "One of my first big dynos I landed.",
    videoUrl: "https://youtube.com/shorts/fm4jfa9Vd80",
    thumbnail: pinkDyno,
  },
  {
    id: "swing-dyno",
    title: "Swing Dyno",
    grade: "V4–5",
    gradeValue: 4.5,
    location: "Boiler Room, Kingston",
    date: "July 2025",
    description: "I like the corner climbing, always have fun angles.",
    videoUrl: "https://youtube.com/shorts/M9BkvwK0nCk",
    thumbnail: redSwing,
  },
];

export interface GradeMilestone {
  grade: number;
  date: string;
  pending?: boolean;
}

export const GRADE_MILESTONES: GradeMilestone[] = [
  { grade: 4, date: "June 2024" },
  { grade: 5, date: "August 2024" },
  { grade: 6, date: "October 2025" },
  { grade: 7, date: "Pending", pending: true },
];

export const CLIMB_STATS: { value: string; label: string }[] = [
  { value: "V6", label: "Highest boulder grade" },
  { value: "5.11b", label: "Highest route grade" },
  { value: "2", label: "Years climbing" },
  { value: "5", label: "Gyms visited" },
];

export type CareerLine = "school" | "team" | "work";

export const CAREER_LINES: Record<CareerLine, { label: string; line: LineId }> = {
  school: { label: "University", line: 2 },
  work: { label: "Work", line: 1 },
  team: { label: "Design Teams", line: 3 },
};

export interface CareerStation {
  id: string;
  x: number;
  y: number;
  line: CareerLine;
  name: string;
  sub: string;
  detail: string;
  labelAbove?: boolean;
  anchor?: "start" | "middle" | "end";
  terminus?: boolean;
  current?: boolean;
}

export const CAREER_STATIONS: CareerStation[] = [
  {
    id: "general-engineering",
    x: 40,
    y: 130,
    line: "school",
    name: "General Engineering",
    sub: "Year 1 · Sep 2022",
    anchor: "start",
    terminus: true,
    detail: "First year of general engineering at Queen's University.",
  },
  {
    id: "apple-math",
    x: 320,
    y: 130,
    line: "school",
    name: "Apple Math",
    sub: "Years 2–3",
    detail:
      "Mathematics and Engineering (Communications and Computing): computer engineering and applied math in one degree. Coursework includes Real Analysis II, Algorithms, Control Systems, Probability II, Databases and Complex Analysis.",
  },
  {
    id: "internship-year",
    x: 440,
    y: 130,
    line: "school",
    name: "Internship Year",
    sub: "Year 4",
    detail: "A year of full-time industry work before finishing the degree.",
  },
  {
    id: "5th-year",
    x: 550,
    y: 130,
    line: "school",
    name: "Apple Math",
    sub: "5th Year",
    current: true,
    detail: "Mathematics and Engineering (Communications and Computing): computer engineering and applied math in one degree. Coursework includes Control Theory, Information Theory, Stochastic Processes, Computer Graphics, and more.",
  },
  {
    id: "graduation",
    x: 650,
    y: 130,
    line: "school",
    name: "Graduation",
    sub: "2027",
    anchor: "end",
    terminus: true,
    detail: "Class of 2027.",
  },
  {
    id: "perception-member",
    x: 320,
    y: 70,
    line: "team",
    name: "Perception Member",
    sub: "2023-2024",
    labelAbove: true,
    detail: "Joined aQuatonomous's perception team, working on computer vision for the autonomous boat.",
  },
  {
    id: "perception-lead",
    x: 440,
    y: 70,
    line: "team",
    name: "Perception Lead",
    sub: "204-2025",
    labelAbove: true,
    detail:
      "Led a team of 6 building an autonomous surface vessel for RoboBoat 2025, with real-time object detection in OpenCV and ROS 2 on a Jetson Nano at 15 FPS without slowing the boat's other systems.",
  },
  {
    id: "co-captain",
    x: 550,
    y: 70,
    line: "team",
    name: "Co-Captain",
    sub: "Current",
    labelAbove: true,
    current: true,
    detail:
      "Co-Captain and software lead: administration, sponsorships and operations, with a focus on computer–hardware integration.",
  },
  {
    id: "limestone",
    x: 320,
    y: 190,
    line: "work",
    name: "Limestone Analytics",
    sub: "Nov 2024-Feb 2025",
    detail:
      "Software Engineering Intern, Nov 2024 – May 2025. Python scripts that filter, sort, analyze and update millions of rows through Google APIs, plus a lightweight repository system for analysis tools.",
  },
  {
    id: "novari",
    x: 440,
    y: 190,
    line: "work",
    name: "Novari Health",
    sub: "May 2025-2026",
    detail:
      "AI Software Engineering Intern, May 2025 – May 2026. Put intelligent document processing into production with C#, Azure and LLMs; an OpenCV + Tesseract classifier raised accuracy 50%; built monitoring and alerting.",
  },
  {
    id: "exiger",
    x: 550,
    y: 190,
    line: "work",
    name: "Exiger",
    sub: "Jun 2026-now",
    current: true,
    detail:
      "AI Data Engineer: intern from June to September 2026, part-time since. Highlights: an agentic workflow that drafts due-diligence reports for 200+ researchers (40% less writing time, about 30,000 analyst hours a year), search and scraping pipelines with SerpApi and Firecrawl, and Kubernetes deploys through Argo CD.",
  },
];

export interface ResumeEntry {
  org: string;
  role: string;
  dates: string;
  note?: string;
  url?: string;
  bullets: string[];
}

export const RESUME = {
  headline: "B.A.Sc. (Mathematics and Engineering) Candidate, Queen's University",
  experience: [
    {
      org: "Exiger",
      role: "AI Data Engineer, Part-Time",
      dates: "Sep 2026 – Present",
      note: "Previously AI Data Engineer Intern, Jun 2026 – Sep 2026",
      bullets: [
        "Designed, implemented, and launched an agentic workflow that automates due diligence report drafting for 200+ researchers, reducing report writing time by 40% and freeing ~30,000 analyst hours annually.",
        "Developed multi-stream web search and scraping pipelines using SerpApi, Firecrawl, and in-house tools to collect difficult-to-access due diligence data, navigating paywalls, CAPTCHAs, and site searches.",
        "Contributed to production Kubernetes deployments through Argo CD and implemented a Jira-based ticketing system, collaborating closely with domain experts to translate research workflows and requirements into reliable technical solutions.",
      ],
    },
    {
      org: "Novari Health",
      role: "Artificial Intelligence Software Engineering Intern",
      dates: "May 2025 – May 2026",
      bullets: [
        "Designed, developed, and implemented an intelligent document processing (IDP) into production, used by internal and external clients, using C#, Azure, and open-source frameworks to integrate AI features.",
        "Developed NLP solutions for IDP including: semantic matching, classification, and text extraction using LLMs.",
        "Designed and developed a document classification system using OpenCV and Tesseract, integrated into an internal library that supports large-scale document workflows, increasing classification accuracy by 50%.",
        "Built and maintained internal metrics and monitoring tools for real-time performance analysis of IDP and Auto-Protocolling systems, with outage and underperformance alerting, leveraging data pipelines and SQL databases.",
      ],
    },
    {
      org: "Limestone Analytics",
      role: "Software Engineering Intern",
      dates: "Nov 2024 – May 2025",
      bullets: [
        "Built Python scripts to efficiently filter, sort, analyze, and update millions of rows of data, streamlining workflows and enabling timely, data-driven insights, using Google API integration.",
        "Developed a lightweight repository system to organize and manage data analysis tools, enabling better software reuse and version control for backend development workflows.",
      ],
    },
  ] satisfies ResumeEntry[],
  designTeam: [
    {
      org: "aQuatonomous",
      role: "Co-Captain",
      dates: "Sep 2024 – Present",
      url: "https://aquatonomous.vercel.app/",
      bullets: [
        "Leading administration, sponsorships, and operations while serving as the software lead, with a focus on computer–hardware integration to address computational efficiencies.",
        "Led a team of 6 building an Autonomous Surface Vessel for 2025 RoboBoat; delivered real-time object detection with OpenCV/ROS2 on a Jetson Nano at 15 FPS without impacting backend or external systems.",
      ],
    },
  ] satisfies ResumeEntry[],
  education: {
    school: "Queen's University",
    degree: "Bachelor of Applied Science in Mathematics and Engineering (Communications and Computing)",
    dates: "2022 – 2027",
    note: "Core concepts from both Computer Engineering and Applied Mathematics taught within the Faculty of Engineering.",
  },
  projects: [
    {
      name: "Automatic Triage Agent",
      bullets: [
        "Built an AI-driven medical triage backend using AWS Lambda, Bedrock, and EC2, enabling real-time patient prioritization through LLM-based symptom analysis and API-triggered workflows.",
        "Designed event-driven data pipelines with S3 and DynamoDB for asynchronous request handling.",
      ],
    },
    {
      name: "TTC Visualizer",
      url: "https://ttc-transit-visualizer.vercel.app/",
      bullets: [
        "Built a visualization webpage using HTML to display every TTC vehicle in Toronto using a public API.",
        "Created a backend that logs 1M+ vehicle locations in an SQL database and displays prior days' transit data.",
      ],
    },
  ] as { name: string; url?: string; bullets: string[] }[],
  skills: [
    { label: "Languages", value: "Java, Python, C/C++, C#, Go, HTML, JavaScript, PHP, LaTeX, SQL" },
    { label: "Libraries / frameworks", value: "NumPy, OpenCV, Pandas, TensorFlow, Tesseract, React" },
    { label: "Software", value: "Azure, AWS, Docker, MS Office, GitHub, Linux, Kubernetes" },
    {
      label: "Relevant coursework",
      value:
        "Real Analysis II, Algorithms, Control Systems, Probability II, Databases, Object-Oriented Programming, Complex Analysis, Linear Algebra II",
    },
    { label: "Interests", value: "Climbing, Volleyball, Cycling, Designing & Creating Rugs, Squash" },
  ],
};
