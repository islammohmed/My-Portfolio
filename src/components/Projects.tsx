"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Virtual SQL Engine",
    description:
      "A lightweight in-memory SQL database engine featuring a fully custom SQL parser and fixed-length binary record storage system. Supports core DDL & DML operations including CREATE, INSERT, SELECT, UPDATE, and DELETE.",
    tags: ["NestJS", "TypeScript", "Custom Parser", "Binary Storage"],
    links: {
      github: "https://github.com/islammohmed/Virtual-SQL-Engine",
    },
    featured: true,
  },
  {
    title: "AIoT Platform Backend (EyeGo)",
    description:
      "High-performance backend infrastructure for an industrial AI/Computer Vision platform. Architected secure RESTful APIs and implemented Redis caching for real-time monitoring.",
    tags: ["Node.js", "Express.js", "GCP", "Redis"],
    links: {},
    featured: true,
  },
  {
    title: "Car Pooling & Delivery Platform",
    description:
      "Full-stack platform connecting drivers and users for ride-sharing. Supports real-time trip tracking, dynamic routing, and multi-role onboarding.",
    tags: ["ASP.NET Core", "Angular", "SQL Server"],
    links: {
      github: "https://github.com/islammohmed/Car-Pooling-Backend",
    },
    featured: true,
  },
  {
    title: "E-Commerce Microservices",
    description:
      "Distributed backend architecture using API Gateway to manage routing, authentication, and service scalability across distinct microservices.",
    tags: [".NET Core", "API Gateway", "Ocelot", "Microservices"],
    links: {
      github: "https://github.com/islammohmed/ECommerceApi.NETCore",
    },
  },
  {
    title: "Alex Home Food API",
    description:
      "Backend service powering a food delivery system with user management, menu catalog, and secure JWT authentication.",
    tags: ["ASP.NET Core 9", "EF Core", "SQL Server"],
    links: {
      github: "https://github.com/islammohmed/Alex-Home-Food",
    },
  },
  {
    title: "Bus Ticket Booking SPA",
    description:
      "Single-page application allowing travelers to select seats interactively and book tickets in real-time using RxJS for state management.",
    tags: ["Angular 19", "TypeScript", "RxJS"],
    links: {
      github: "https://github.com/islammohmed/Buss-Ticket-App",
    },
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of projects demonstrating my expertise in backend architecture and full-stack development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:border-primary/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-2">
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="sr-only">Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
