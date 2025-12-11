"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-4xl"
      >
        <div className="space-y-2">
          <h2 className="text-primary text-lg font-medium tracking-wide">
            Hi, my name is
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Islam Saad.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-muted-foreground">
            I build scalable full-stack solutions.
          </h2>
        </div>

        <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
          I am a <span className="text-foreground font-medium">Full Stack Engineer</span> specializing in{" "}
          <span className="text-primary font-medium">.NET</span>,{" "}
          <span className="text-primary font-medium">Node.js</span>,{" "}
          <span className="text-primary font-medium">React</span>,{" "}
          <span className="text-primary font-medium">Angular</span>, and{" "}
          <span className="text-primary font-medium">Next.js</span>. I architect
          high-performance digital solutions with algorithmic precision, from
          microservices to full-stack applications.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="/Islam_Saad_software_Engineer.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        <div className="flex gap-6 pt-8 text-muted-foreground">
          <a
            href="https://github.com/islammohmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/islaamsaad"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:islaam.saad.info@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
