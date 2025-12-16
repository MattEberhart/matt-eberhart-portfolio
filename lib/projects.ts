// Project data structure - easily extensible for future projects
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  features: {
    icon: string
    text: string
  }[]
  link?: string
  github?: string
  image?: string
  status: "active" | "upcoming" | "completed"
}

export const projects: Project[] = [
  {
    id: "bndr",
    title: "bndr",
    description: "PWA and iOS app for tracking drinks and party stats with friends",
    longDescription:
      "A social app that helps friends track their night out adventures. Share photos, keep tabs on drinks, and create memorable stats from your gatherings. Built with Vercel V0, Supabase, and React Native, now available on the App Store.",
    tags: ["Progressive Web App", "iOS", "Social", "Photo Sharing", "React Native"],
    features: [
      { icon: "users", text: "Social features for friend groups" },
      { icon: "camera", text: "Photo sharing and galleries" },
      { icon: "trending-up", text: "Track and visualize party statistics" },
      { icon: "smartphone", text: "Available on iOS App Store" },
    ],
    link: "https://mybndr.com",
    github: "https://apps.apple.com/us/app/bndr/id6749908487",
    status: "active",
  },
  // Add more projects here as you build them
]
