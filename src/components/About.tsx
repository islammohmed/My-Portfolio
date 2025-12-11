"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h2>
        <div className="prose prose-invert max-w-none text-muted-foreground">
          <p className="text-lg leading-relaxed">
            I am a results-driven <strong className="text-foreground">Full Stack Software Engineer</strong> with a deep focus on{" "}
            <strong className="text-foreground">Scalable Architecture</strong> and{" "}
            <strong className="text-foreground">Modern Web Development</strong>. My expertise lies in building robust,
            scalable systems using <strong className="text-foreground">.NET (ASP.NET Core)</strong> and{" "}
            <strong className="text-foreground">Node.js</strong>, complemented by modern frontend frameworks like{" "}
            <strong className="text-foreground">Angular</strong> and <strong className="text-foreground">React</strong>.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            With a strong foundation in Computer Science and a background in{" "}
            <strong className="text-foreground">competitive programming</strong> (500+ problems solved), I approach
            development with an optimization-first mindset. Whether I&apos;m architecting microservices for e-commerce,
            building custom database engines from scratch, or optimizing AIoT data pipelines, I am passionate about
            writing clean, maintainable code that solves complex technical challenges.
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
