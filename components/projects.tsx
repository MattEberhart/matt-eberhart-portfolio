import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Users, Camera, TrendingUp, ExternalLink, Instagram, Bot, MessageSquare, CheckCircle } from "lucide-react"
import Image from "next/image"

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
        <p className="text-muted-foreground mb-12 text-balance">
          {"Personal projects I've built to solve real problems and explore new technologies."}
        </p>

        <div className="grid gap-6">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-2xl">bndr</CardTitle>
                  <CardDescription className="text-base">
                    PWA and iOS app for tracking drinks and party stats with friends
                  </CardDescription>
                </div>
                <div className="rounded-lg bg-[#6c4fb3] p-3">
                  <Image src="/images/bndrlogo.png" alt="BNDR app logo - Social app for tracking drinks and party stats" width={32} height={32} className="h-8 w-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm text-muted-foreground max-w-none">
                <p>
                  A social app that helps friends track their night out adventures. Share photos, keep tabs on drinks,
                  and create memorable stats from your gatherings.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Social features for friend groups</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Camera className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Photo sharing and galleries</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Track and visualize party statistics</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="default" asChild>
                  <a href="https://mybndr.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://apps.apple.com/us/app/bndr/id6749908487" target="_blank" rel="noopener noreferrer">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Download on App Store
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://www.instagram.com/joinbndr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://www.tiktok.com/@bndrapp?_r=1&_t=ZP-92H6QFRepDS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    TikTok
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Progressive Web App</Badge>
                <Badge variant="secondary">iOS</Badge>
                <Badge variant="secondary">Social</Badge>
                <Badge variant="secondary">Photo Sharing</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow relative">
            <CardHeader>
              <div className="space-y-2 pr-[220px]">
                <CardTitle className="text-2xl">paul-ai</CardTitle>
                <CardDescription className="text-base">
                  GroupMe bot for pickup basketball group chat that tracks player attendance and plus-ones
                </CardDescription>
              </div>
            </CardHeader>
            <div className="absolute top-[3.5rem] right-6 w-[200px] hidden md:block">
              <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/paul-ai.jpeg"
                    alt="paul-ai GroupMe bot roster example showing player attendance tracking for pickup basketball games"
                    width={200}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg"
                  />
              </div>
            </div>
            <CardContent className="space-y-4">
              <div className="md:pr-[220px]">
                <div className="prose prose-sm text-muted-foreground max-w-none">
                  <p>
                    A GroupMe bot that helps manage weekly pickup basketball games by counting who's in and tracking
                    plus-ones. The bot receives webhook calls from GroupMe, analyzes the last week's messages using an
                    LLM, and outputs a formatted roster showing confirmed players, guests, and withdrawals.
                  </p>
                </div>

                <div className="space-y-3 mt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Bot className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Automated attendance tracking via GroupMe bot</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">LLM-powered message analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Tracks players and plus-ones</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Formatted roster output with status</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="secondary">Bot</Badge>
                  <Badge variant="secondary">GroupMe</Badge>
                  <Badge variant="secondary">LLM</Badge>
                  <Badge variant="secondary">Webhook</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                </div>
              </div>
              <div className="block md:hidden mt-4">
                <div className="relative w-full rounded-lg overflow-hidden">
                  <Image
                    src="/images/paul-ai.jpeg"
                    alt="paul-ai GroupMe bot roster example showing player attendance tracking for pickup basketball games"
                    width={200}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
