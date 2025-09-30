'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const roles = [
  "AI Engineer",
  "GenAI Expert",
  "ML Systems Architect",
  "Computer Vision Engineer",
  "Agent Developer",
  "Automation Expert",
  "Low-Code/No-Code Specialist"
];

const achievements = [
  { label: "Years of AI Experience", value: "2+", icon: "🎯" },
  { label: "AI Systems Built", value: "8+", icon: "🚀" },
  { label: "Solo Projects", value: "100%", icon: "💪" },
  { label: "Tech Stack", value: "Full", icon: "⚡" }
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="block mb-2">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-neutral-600 dark:text-neutral-400">
              specializing in LLM Orchestration & No-Code AI
            </span>
          </h1>

          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            AI Engineer with 2+ years of experience in machine learning and production systems.
            Specializing in NLP, audio agents, and low-code/no-code automation with n8n.
            Active Omdena AI contributor, creator of Tapat AI, and passionate about building open-source demos.
          </p>

          {/* Achievement Metrics */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-2xl mb-1">{achievement.icon}</div>
                <div className="text-2xl font-bold text-black dark:text-white">
                  {achievement.value}
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-medium hover:opacity-90 transition-opacity"
            >
              View My Projects
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="/documents/resume.pdf"
              download="Jacob_Rafal_Resume.pdf"
              className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              aria-label="Download resume as PDF"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-neutral-300 dark:border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Right Content - Portrait */}
        <div className="relative order-first lg:order-last">
          <div className="relative w-full max-w-md mx-auto">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

            {/* Geometric decorations */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-blue-500/20 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-4 border-purple-500/20 rounded-full"></div>

            {/* Portrait container */}
            <div className="relative rounded-full aspect-square overflow-hidden shadow-2xl ring-8 ring-white/10 dark:ring-black/10">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950"></div>

              {/* Your portrait with background removed */}
              <Image
                src="/avatars/avatar_retro.png"
                alt="Jacob Rafal - AI Engineer"
                fill
                className="object-contain object-center hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 300px, 400px"
              />

              {/* Subtle overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-black rounded-lg shadow-lg px-4 py-2 flex items-center space-x-2">
              <span className="text-2xl">🤖</span>
              <span className="text-sm font-medium">AI/ML Expert</span>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-black rounded-lg shadow-lg px-4 py-2 flex items-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span className="text-sm font-medium">n8n Expert</span>
            </div>

            <div className="absolute bottom-8 -right-6 bg-white dark:bg-black rounded-lg shadow-lg px-3 py-1.5 flex items-center space-x-2">
              <span className="text-xl">🔧</span>
              <span className="text-xs font-medium">Low-Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


