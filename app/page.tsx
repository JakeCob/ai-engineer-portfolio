'use client';

import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import VoiceAgentV2 from "@/components/VoiceAgentV2";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  // Prevent auto-scroll on page load
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Prevent any hash-based scrolling
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedProjects />
        <SkillsSection />
        {/* AI Voice Agent Section - End of Page */}
        <section className="py-20 px-4 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-black border-t border-neutral-200 dark:border-neutral-800">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Chat with My AI Assistant
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Have questions about my experience? Let my AI assistant help you learn more about my skills, projects, and background.
              </p>
            </div>
            <VoiceAgentV2 />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
