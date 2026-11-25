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
    name: "second-nature",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Site for Second Nature Creative Studio, a Charlotte, North Carolina business spanning creative/digital marketing consulting (Studio) and curated event rental packages (Gatherings). Visitors build their own rental estimate with a live delivery-cost quote and book a consultation that creates a Google Calendar event with an auto-generated Meet link. An admin dashboard over Supabase manages the catalog, settings, and leads, with Resend sending confirmation and notification emails.",
    url: "https://www.secondnaturecreative.com",
    sameAs: [
      "https://www.secondnaturecreative.com",
    ],
    author: {
      "@type": "Person",
      name: "Matt Eberhart",
      url: siteUrl,
    },
    featureList: [
      "Build-your-own estimate tool with live delivery-cost quotes",
      "Consultation booking synced to Google Calendar with auto-generated Meet links",
      "Admin dashboard over Supabase for catalog, settings, and lead management",
      "Resend-powered confirmation and notification emails",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ebvents",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Client-management platform for wedding and event venues, built into each venue's own website. Venue, couple, and planners share one live estimate generated from a versioned price book by a rule-based pricing engine and locked automatically before the event. Couples use a portal on the venue's domain for menus, guests, tables, and reservation steps. A multi-tenant Next.js app on Neon Postgres with row-level security, Drizzle ORM, Better Auth, and Resend, deployed on Vercel.",
    url: "https://ebvents.com",
    sameAs: ["https://ebvents.com"],
    author: {
      "@type": "Person",
      name: "Matt Eberhart",
      url: siteUrl,
    },
    featureList: [
      "One shared live estimate driven by a rule-based pricing engine, auto-locked before the event",
      "Client portal for menus, meal counts, guests, tables, and collaborators",
      "Inquiries with availability, consultations, and reservation invites that hold dates",
      "Hostname-based multi-tenancy with Postgres row-level security and venue-branded sign-in",
      "Branded emails, reminders, and nightly jobs per venue",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "adams-good-baker",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Landing page and bake-request form for Adams Good Baker, a home bakery in Birmingham, Alabama. Showcases celebration cakes, cupcakes, decorated cookies, cheesecakes, and breads with a photo gallery; bake requests are emailed to the baker via Resend with reply-to set to the customer.",
    url: "https://adamsgoodbaker.com",
    sameAs: ["https://adamsgoodbaker.com"],
    author: {
      "@type": "Person",
      name: "Matt Eberhart",
      url: siteUrl,
    },
    featureList: [
      "Bake-request form delivered by Resend with reply-to set to the customer",
      "Offerings showcase and photo gallery",
      "SEO with Bakery and FAQPage JSON-LD, sitemap, and Open Graph image",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "clt-golf-league",
    applicationCategory: "SportsApplication",
    operatingSystem: "Web",
    description: "Queen City Match Play — a standings, schedule, and result tracking site for my six-team, twelve-player net match play golf league in Charlotte, North Carolina. Tracks the round-robin schedule, live standings with league tiebreakers, team pages with adjusted handicaps, and a password-gated form league members use to submit results. Built with Next.js Server Components and Server Actions over Drizzle ORM and Turso, deployed on Vercel.",
    url: "https://clt-golf-league.vercel.app/",
    codeRepository: "https://github.com/MattEberhart/clt-golf-league",
    sameAs: [
      "https://clt-golf-league.vercel.app/",
      "https://github.com/MattEberhart/clt-golf-league",
    ],
    author: {
      "@type": "Person",
      name: "Matt Eberhart",
      url: siteUrl,
    },
    featureList: [
      "Live standings with head-to-head and margin-of-victory tiebreakers",
      "Round-robin schedule across five rounds plus a championship",
      "Team pages with adjusted handicaps used for net scoring",
      "Password-gated result submission with HMAC-signed session cookies",
      "Drizzle ORM over Turso (libSQL) with Server Action mutations",
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
    name: "jacobs-sheet",
    applicationCategory: "SportsApplication",
    operatingSystem: "Web",
    description: "Jacob's Sheet — a password-protected fantasy football dashboard for a weekly DraftKings contest league, tracking DK Points for contest scoring and Kurt Credits for the season-long ledger. The commissioner Submit view enters scores and computes rankings server-side, and the site holds a reconciled 2022-2025 historical archive. Built with Next.js 16 and Turso serverless SQLite, deployed on Vercel.",
    url: "https://jacobs-sheet.vercel.app",
    sameAs: ["https://jacobs-sheet.vercel.app"],
    author: {
      "@type": "Person",
      name: "Matt Eberhart",
      url: siteUrl,
    },
    featureList: [
      "Live standings ranked by Kurt Credits or average DK Points",
      "Weekly results view with each contest's finish and score",
      "Password-gated viewer access, separate from the bearer-secret ingest API",
      "Turso serverless SQLite with immutable, idempotency-keyed week uploads",
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
