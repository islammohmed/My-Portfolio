"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center space-y-8"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in Touch
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl">
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        
        <div className="flex gap-6">
          <a
            href="mailto:islaam.saad.info@gmail.com"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-accent"
          >
            <Mail className="w-5 h-5" />
            Say Hello
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
        </div>
      </motion.div>
    </Section>
  );
}
