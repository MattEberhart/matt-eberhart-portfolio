import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Get base URL from environment variable or use placeholder
// Update this to your actual domain when deployed (e.g., https://matteberhart.com)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : "https://matteberhart.com"
const siteUrl = baseUrl.replace(/\/$/, "")

export const metadata: Metadata = {
  title: {
    default: "Matt Eberhart | Software Engineer",
    template: "%s | Matt Eberhart",
  },
  description:
    "Matt Eberhart - Software Engineer at Oracle Health specializing in AI agents, cloud infrastructure, and full-stack development. Former Microsoft engineer with experience in Azure Cost Management, Copilot Studio, and building innovative web applications. Based in Charlotte, NC.",
  generator: "Next.js",
  keywords: [
    "Matt Eberhart",
    "Software Engineer",
    "Microsoft",
    "Oracle",
    "Azure",
    "AI",
    "Full Stack Developer",
    "Portfolio",
    "Cloud Infrastructure",
    "AI Agents",
    "Copilot Studio",
    "Azure Cost Management",
    "Pharmacies AI",
    "Virginia Tech",
  ],
  authors: [{ name: "Matt Eberhart", url: siteUrl }],
  creator: "Matt Eberhart",
  publisher: "Matt Eberhart",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Matt Eberhart - Software Engineer",
    title: "Matt Eberhart | Software Engineer",
    description:
      "Matt Eberhart - Software Engineer at Oracle Health specializing in AI agents, cloud infrastructure, and full-stack development. Former Microsoft engineer with experience in Azure Cost Management, Copilot Studio, and building innovative web applications. Based in Charlotte, NC.",
    images: [
      {
        url: `${siteUrl}/images/img-7966.jpeg`,
        width: 1200,
        height: 1200,
        alt: "Matt Eberhart - Software Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matt Eberhart | Software Engineer",
    description:
      "Software Engineer at Oracle Health | AI Agents, Cloud Infrastructure, Full-Stack Development | Former Microsoft Engineer | Based in Charlotte, NC",
    images: [`${siteUrl}/images/img-7966.jpeg`],
    creator: "@MattEberhart10",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "format-detection": "telephone=no",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
}

// Structured data for Person schema (JSON-LD) - helps Google understand this is about a person
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Matt Eberhart",
  jobTitle: "Software Engineer",
  description:
    "Software Engineer specializing in cloud infrastructure, AI agents, and full-stack development. Former Microsoft & Oracle engineer.",
  url: siteUrl,
  image: `${siteUrl}/images/img-7966.jpeg`,
  sameAs: [
    "https://github.com/matteberhart",
    "https://www.linkedin.com/in/carleberhart/",
    "https://x.com/MattEberhart10",
    "https://www.instagram.com/matteberhart10/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Virginia Tech",
  },
  knowsAbout: [
    "Software Engineering",
    "Cloud Infrastructure",
    "AI Agents",
    "Full Stack Development",
    "Azure",
    "Microsoft Copilot Studio",
    "Oracle",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Oracle Health",
    jobTitle: "Software Engineer - Pharmacies AI",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    addressCountry: "US",
  },
}

// WebSite schema for better site discovery and search functionality
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Matt Eberhart - Software Engineer",
  url: siteUrl,
  description:
    "Portfolio website of Matt Eberhart, Software Engineer specializing in AI agents, cloud infrastructure, and full-stack development.",
  author: {
    "@type": "Person",
    name: "Matt Eberhart",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

// Organization schema for BNDR LLC
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BNDR LLC",
  founder: {
    "@type": "Person",
    name: "Matt Eberhart",
    url: siteUrl,
  },
  url: "https://mybndr.com",
  description: "BNDR LLC - Creator of bndr, a social app for tracking drinks and party stats with friends.",
  sameAs: [
    "https://www.instagram.com/joinbndr",
    "https://www.tiktok.com/@bndrapp",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://x.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        
        {/* Structured Data - WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
        {/* Structured Data - Organization Schema (BNDR LLC) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
