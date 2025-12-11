"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend Engineering",
    skills: [
      ".NET (C#)",
      "ASP.NET Core",
      "Node.js",
      "NestJS",
      "Express.js",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Microservices",
      "RESTful APIs",
      "Clean Architecture",
      "SignalR",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "Angular (v19+)",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Sass",
      "HTML5/CSS3",
      "RxJS",
      "Redux",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Google Cloud Platform (GCP)",
      "Docker",
      "Git",
      "GitHub",
      "Postman",
      "Unit Testing",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technical Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-sm font-medium text-secondary-foreground ring-1 ring-inset ring-gray-500/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
