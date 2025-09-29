export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Jacob Rafal",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "AI Engineer specializing in DevTools & Productivity SaaS, agents-first development, NLP, and MLOps.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: {
    name: "Jacob Rafal",
    email: "rafaljacobmatthew@gmail.com",
    title: "AI Engineer",
    location: "Your Location",
    bio: "AI Engineer specializing in building agent-first applications and productivity tools.",
  },
  links: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/JakeCob",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/jacob-matthew-rafal-b94399217/",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
    calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/rafaljacobmatthew/30min",
    email: "rafaljacobmatthew@gmail.com",
  },
  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
    comments: process.env.NEXT_PUBLIC_ENABLE_COMMENTS === "true",
    newsletter: process.env.NEXT_PUBLIC_ENABLE_NEWSLETTER === "true",
  },
  analytics: {
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "",
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
  },
  seo: {
    keywords: [
      "AI Engineer",
      "Machine Learning",
      "NLP",
      "MLOps",
      "AI Agents",
      "DevTools",
      "Productivity SaaS",
      "Full Stack Development",
      "LLM",
      "Agent Development",
    ],
    openGraph: {
      type: "website" as const,
      locale: "en_US",
      siteName: "Jacob Rafal - AI Engineer Portfolio",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@yourusername",
    },
  },
};