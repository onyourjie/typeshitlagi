import React from "react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiGithub,
  SiDocker,
  SiSupabase,
  SiLaravel,
  SiGo
} from "react-icons/si";

export const techIcons: { [key: string]: React.ReactElement } = {
  "Next.js": <SiNextdotjs className="w-5 h-5" />,
  "React": <SiReact className="w-5 h-5" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5" />,
  "Zustand": <SiReact className="w-5 h-5" />, // Zustand tidak ada icon resmi
  "TypeScript": <SiTypescript className="w-5 h-5" />,
  "JavaScript": <SiJavascript className="w-5 h-5" />,
  "Node.js": <SiNodedotjs className="w-5 h-5" />,
  "MongoDB": <SiMongodb className="w-5 h-5" />,
  "PostgreSQL": <SiPostgresql className="w-5 h-5" />,
  "Prisma": <SiPrisma className="w-5 h-5" />,
  "Express": <SiExpress className="w-5 h-5" />,
  "Firebase": <SiFirebase className="w-5 h-5" />,
  "Vercel": <SiVercel className="w-5 h-5" />,
  "GitHub": <SiGithub className="w-5 h-5" />,
  "Docker": <SiDocker className="w-5 h-5" />,
  "Supabase": <SiSupabase className="w-5 h-5" />,
  "Laravel": <SiLaravel className="w-5 h-5" />,
  "Golang": <SiGo className="w-5 h-5" />,
  "Go": <SiGo className="w-5 h-5" />, 
};

export const getTechIcon = (techName: string) => {
  return techIcons[techName] || null;
};
