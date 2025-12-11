"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Freelance Software Engineer",
    role: "Full-Stack Developer",
    period: "Jul 2025 – Present",
    location: "Remote",
    description: [
      "Architected and delivered custom full-stack web applications for diverse clients, leveraging .NET, Node.js, and Angular.",
      "Managed the complete software development lifecycle (SDLC) from requirements gathering to deployment, ensuring scalable architecture and maintainable codebases.",
      "Switched seamlessly between technology stacks to meet specific client infrastructure needs and performance requirements.",
    ],
  },
  {
    company: "Vultara Inc.",
    role: "Software Engineer (Intern)",
    period: "Sep 2025 – Nov 2025",
    location: "Remote",
    description: [
      "Spearheaded the development and maintenance of Vultara's flagship cybersecurity management application using Angular and Node.js.",
      "Designed and implemented new features while optimizing application performance, achieving a significant reduction in load times and enhancing the user experience for enterprise security tools.",
      "Collaborated with cross-functional teams to integrate backend APIs, ensuring secure, scalable, and reliable solutions that meet strict industry security standards.",
    ],
  },
  {
    company: "EyeGo",
    role: "Backend Developer (Intern)",
    period: "Aug 2024 – Oct 2024",
    location: "Remote",
    description: [
      "Engineered backend services using Node.js and Express.js for an advanced AIoT platform integrating computer vision and Generative AI.",
      "Architected secure RESTful APIs enabling real-time monitoring, automated QA inspection, and productivity analytics for manufacturing clients.",
      "Deployed and managed scalable infrastructure on Google Cloud Platform (GCP), improving system reliability and performance under high-load conditions (99.9% uptime).",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Professional Experience
        </h2>
        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.role}
                </h3>
                <span className="text-sm text-muted-foreground font-medium flex items-center gap-1 mt-1 sm:mt-0">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
                <span>{exp.company}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground list-disc ml-4">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
