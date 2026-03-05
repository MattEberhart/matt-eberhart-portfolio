import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/resume"
import { Photos } from "@/components/photos"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : "https://matteberhart.com"
const siteUrl = baseUrl.replace(/\/$/, "")

// Structured data for projects (SoftwareApplication schema)
const projectsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "bndr",
    applicationCategory: "SocialNetworkApplication",
    operatingSystem: ["iOS", "Web"],
    description: "PWA and iOS app for tracking drinks and party stats with friends. A social app that helps friends track their night out adventures, share photos, keep tabs on drinks, and create memorable stats from gatherings.",
    url: "https://mybndr.com",
    downloadUrl: "https://apps.apple.com/us/app/bndr/id6749908487",
    screenshot: `${siteUrl}/images/bndrlogo.png`,
    author: {
      "@type": "Person",
      name: "Matt Eberhart",
      url: siteUrl,
    },
    creator: {
      "@type": "Organization",
      name: "BNDR LLC",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Social features for friend groups",
      "Photo sharing and galleries",
      "Track and visualize party statistics",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "lyd-portfolio",
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    description: "Rebuilt a small business website with Next.js and Vercel to eliminate a $30/month subscription cost. Built using Claude Code for AI-assisted development.",
    url: "https://solyd-strategies.vercel.app/",
    author: {
      "@type": "Person",
      name: "Matt Eberhart",
      url: siteUrl,
    },
    featureList: [
      "Custom Next.js build replacing website builder subscription",
      "Deployed on Vercel at zero hosting cost",
      "AI-assisted development with Claude Code",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "paul-ai",
    applicationCategory: "BotApplication",
    operatingSystem: "GroupMe",
    description: "GroupMe bot for pickup basketball group chat that tracks player attendance and plus-ones. The bot receives webhook calls from GroupMe, analyzes the last week's messages using an LLM, and outputs a formatted roster showing confirmed players, guests, and withdrawals.",
    url: siteUrl,
    screenshot: `${siteUrl}/images/paul-ai.jpeg`,
    author: {
      "@type": "Person",
      name: "Matt Eberhart",
      url: siteUrl,
    },
    featureList: [
      "Automated attendance tracking via GroupMe bot",
      "LLM-powered message analysis",
      "Tracks players and plus-ones",
      "Formatted roster output with status",
    ],
    applicationSubCategory: "Chatbot",
  },
]

export default function Home() {
  return (
    <>
      {/* Structured Data for Projects */}
      {projectsSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Photos />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
