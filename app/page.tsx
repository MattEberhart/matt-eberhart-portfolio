import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/resume"
import { Photos } from "@/components/photos"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://matteberhart.com")
const siteUrl = baseUrl.replace(/\/$/, "")

// Structured data for projects (SoftwareApplication schema).
// Order mirrors the card order in components/projects.tsx.
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
    sameAs: [
      "https://apps.apple.com/us/app/bndr/id6749908487",
      "https://www.instagram.com/joinbndr",
      "https://www.tiktok.com/@bndrapp",
    ],
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
    name: "cape-epoxy",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "A custom-built CRM and bid-management platform for a real epoxy sub-contractor. Replaces a fragmented stack (BuildingConnected, Stack CT, Housecall Pro, Asana, Google Sheets) with a unified system that automates a three-stage pipeline: ITB intake via Gmail label watch, multi-revision bid creation with PDF delivery, and job tracking.",
    url: siteUrl,
    screenshot: `${siteUrl}/images/cape-epoxy.png`,
    author: {
      "@type": "Person",
      name: "Matt Eberhart",
      url: siteUrl,
    },
    featureList: [
      "Automatic ITB ingestion via Gmail label watch + Pub/Sub",
      "Multi-revision bid workflow (Draft → Review → Approve → PDF)",
      "Role-based review with RLS-backed auth",
      "Three-stage pipeline: ITBs → Bids → Jobs",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "paul-ai",
    applicationCategory: "BotApplication",
    applicationSubCategory: "Chatbot",
    operatingSystem: "Web",
    description: "GroupMe bot for pickup basketball group chat that tracks player attendance and plus-ones. The bot receives webhook calls from GroupMe, analyzes the last week's messages using an LLM, and outputs a formatted roster showing confirmed players, guests, and withdrawals.",
    url: siteUrl,
    screenshot: `${siteUrl}/images/paul-ai.jpeg`,
    codeRepository: "https://github.com/MattEberhart/paul-ai",
    sameAs: ["https://github.com/MattEberhart/paul-ai"],
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
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "aspen-takehome",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Take-home interview project for Aspen (AI agents for financial advisors). An AI-powered PDF generator that turns natural-language prompts into branded, personalized multi-page client deliverables using multi-phase agentic orchestration with the Claude API and Puppeteer-based rendering of live React components.",
    url: siteUrl,
    screenshot: `${siteUrl}/images/aspen-takehome.png`,
    codeRepository: "https://github.com/MattEberhart/aspen-takehome",
    sameAs: ["https://github.com/MattEberhart/aspen-takehome"],
    author: {
      "@type": "Person",
      name: "Matt Eberhart",
      url: siteUrl,
    },
    featureList: [
      "Multi-phase agentic orchestration with Claude API",
      "Puppeteer renders live React components to branded PDFs",
      "Content personalized to client profile (age, goals, assets)",
      "Server-side streaming (SSE) for real-time generation progress",
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
    sameAs: ["https://solyd-strategies.vercel.app/"],
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
    name: "ebvents",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Take-home interview project for Fastbreak AI. A full-stack sporting event management dashboard with multi-venue scheduling, dual card/table views, advanced filtering, image uploads via Cloudflare CDN, and multi-auth (email/password, OTP, Google OAuth) backed by Supabase with RLS.",
    url: siteUrl,
    codeRepository: "https://github.com/MattEberhart/ebvents",
    sameAs: ["https://github.com/MattEberhart/ebvents"],
    author: {
      "@type": "Person",
      name: "Matt Eberhart",
      url: siteUrl,
    },
    featureList: [
      "Multi-venue event scheduling with card & table dashboard views",
      "Advanced filtering, search, and sorting",
      "Multi-auth: email/password, OTP, Google OAuth (Supabase + RLS)",
      "Image uploads via Cloudflare CDN",
    ],
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
