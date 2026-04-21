import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Smartphone, Users, Camera, TrendingUp, ExternalLink, Instagram, Bot, MessageSquare, CheckCircle, Globe, DollarSign, Cpu, FileText, Sparkles, Calendar, Filter, Shield, Mail, FileCheck2, Github } from "lucide-react"
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
                <Button variant="default" asChild>
                  <a href="https://apps.apple.com/us/app/bndr/id6749908487" target="_blank" rel="noopener noreferrer">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Download on App Store
                  </a>
                </Button>
                <Button variant="default" asChild>
                  <a
                    href="https://www.instagram.com/joinbndr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                <Button variant="default" asChild>
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
                <CardTitle className="text-2xl">cape-epoxy</CardTitle>
                <CardDescription className="text-base">
                  Bespoke CRM and bid-management platform for a real epoxy sub-contractor
                </CardDescription>
              </div>
            </CardHeader>
            <div className="absolute top-[3.5rem] right-6 w-[200px] hidden md:block">
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="block w-full cursor-zoom-in rounded-lg overflow-hidden hover:opacity-90 transition">
                    <Image
                      src="/images/cape-epoxy.png"
                      alt="cape-epoxy CRM and bid-management dashboard screenshot"
                      width={200}
                      height={600}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] sm:max-w-6xl p-2">
                  <Image
                    src="/images/cape-epoxy.png"
                    alt="cape-epoxy CRM and bid-management dashboard screenshot"
                    width={1920}
                    height={1440}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg mx-auto"
                  />
                </DialogContent>
              </Dialog>
            </div>
            <CardContent className="space-y-4">
              <div className="md:pr-[220px] space-y-4">
                <div className="prose prose-sm text-muted-foreground max-w-none">
                  <p>
                    A custom-built CRM that replaces a fragmented stack (BuildingConnected, Stack CT, Housecall Pro,
                    Asana, Google Sheets) with a single unified system. Automates a three-stage pipeline: ITB intake
                    via Gmail label watch, multi-revision bid creation with PDF delivery, and job tracking. My friend
                    Louis and I are building a business around bespoke contractor software, with Cape Epoxy as our
                    first client.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Automatic ITB ingestion via Gmail label watch + Pub/Sub</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileCheck2 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Multi-revision bid workflow (Draft → Review → Approve → PDF)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Role-based review with RLS-backed auth</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Three-stage pipeline: ITBs → Bids → Jobs</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">Gmail API</Badge>
                  <Badge variant="secondary">Cloudflare R2</Badge>
                  <Badge variant="secondary">Resend</Badge>
                  <Badge variant="secondary">TanStack Query</Badge>
                </div>
              </div>
              <div className="block md:hidden mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <button type="button" className="block w-full cursor-zoom-in rounded-lg overflow-hidden hover:opacity-90 transition">
                      <Image
                        src="/images/cape-epoxy.png"
                        alt="cape-epoxy CRM and bid-management dashboard screenshot"
                        width={200}
                        height={600}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-2">
                    <Image
                      src="/images/cape-epoxy.png"
                      alt="cape-epoxy CRM and bid-management dashboard screenshot"
                      width={1600}
                      height={1200}
                      className="w-full h-auto max-h-[85vh] object-contain rounded-lg mx-auto"
                    />
                  </DialogContent>
                </Dialog>
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
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="block w-full cursor-zoom-in rounded-lg overflow-hidden hover:opacity-90 transition">
                    <Image
                      src="/images/paul-ai.jpeg"
                      alt="paul-ai GroupMe bot roster example showing player attendance tracking for pickup basketball games"
                      width={200}
                      height={600}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-2">
                  <Image
                    src="/images/paul-ai.jpeg"
                    alt="paul-ai GroupMe bot roster example showing player attendance tracking for pickup basketball games"
                    width={1200}
                    height={1800}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg mx-auto"
                  />
                </DialogContent>
              </Dialog>
            </div>
            <CardContent className="space-y-4">
              <div className="md:pr-[220px] space-y-4">
                <div className="prose prose-sm text-muted-foreground max-w-none">
                  <p>
                    A GroupMe bot that helps manage weekly pickup basketball games by counting who's in and tracking
                    plus-ones. The bot receives webhook calls from GroupMe, analyzes the last week's messages using an
                    LLM, and outputs a formatted roster showing confirmed players, guests, and withdrawals.
                  </p>
                </div>

                <div className="space-y-3">
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

                <div className="flex flex-wrap gap-3">
                  <Button variant="default" asChild>
                    <a href="https://github.com/MattEberhart/paul-ai" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Bot</Badge>
                  <Badge variant="secondary">GroupMe</Badge>
                  <Badge variant="secondary">LLM</Badge>
                  <Badge variant="secondary">Webhook</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                </div>
              </div>
              <div className="block md:hidden mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <button type="button" className="block w-full cursor-zoom-in rounded-lg overflow-hidden hover:opacity-90 transition">
                      <Image
                        src="/images/paul-ai.jpeg"
                        alt="paul-ai GroupMe bot roster example showing player attendance tracking for pickup basketball games"
                        width={200}
                        height={600}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-2">
                    <Image
                      src="/images/paul-ai.jpeg"
                      alt="paul-ai GroupMe bot roster example showing player attendance tracking for pickup basketball games"
                      width={1200}
                      height={1800}
                      className="w-full h-auto max-h-[85vh] object-contain rounded-lg mx-auto"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow relative">
            <CardHeader>
              <div className="space-y-2 pr-[220px]">
                <CardTitle className="text-2xl">aspen-takehome</CardTitle>
                <CardDescription className="text-base">
                  Take-home interview project for Aspen — AI-powered PDF generator for financial advisors
                </CardDescription>
              </div>
            </CardHeader>
            <div className="absolute top-[3.5rem] right-6 w-[200px] hidden md:block">
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="block w-full cursor-zoom-in rounded-lg overflow-hidden hover:opacity-90 transition">
                    <Image
                      src="/images/aspen-takehome.png"
                      alt="aspen-takehome sample PDF output for financial advisor client deliverable"
                      width={200}
                      height={600}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] sm:max-w-6xl p-2">
                  <Image
                    src="/images/aspen-takehome.png"
                    alt="aspen-takehome sample PDF output for financial advisor client deliverable"
                    width={1920}
                    height={1440}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg mx-auto"
                  />
                </DialogContent>
              </Dialog>
            </div>
            <CardContent className="space-y-4">
              <div className="md:pr-[220px] space-y-4">
                <div className="prose prose-sm text-muted-foreground max-w-none">
                  <p>
                    Natural-language prompts like &quot;create a retirement plan review for Susie&quot; produce branded,
                    multi-page PDF client deliverables. Uses multi-phase agentic orchestration with the Claude API to
                    drive a research → content → render pipeline, with Puppeteer rendering live React components
                    straight to PDF.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Sparkles className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Multi-phase agentic orchestration with Claude API</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Puppeteer renders live React components to branded PDFs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Content personalized to client profile (age, goals, assets)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Cpu className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Server-side streaming (SSE) for real-time generation progress</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="default" asChild>
                    <a href="https://github.com/MattEberhart/aspen-takehome" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Claude API</Badge>
                  <Badge variant="secondary">Puppeteer</Badge>
                  <Badge variant="secondary">Take-Home</Badge>
                </div>
              </div>
              <div className="block md:hidden mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <button type="button" className="block w-full cursor-zoom-in rounded-lg overflow-hidden hover:opacity-90 transition">
                      <Image
                        src="/images/aspen-takehome.png"
                        alt="aspen-takehome sample PDF output for financial advisor client deliverable"
                        width={200}
                        height={600}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-2">
                    <Image
                      src="/images/aspen-takehome.png"
                      alt="aspen-takehome sample PDF output for financial advisor client deliverable"
                      width={1600}
                      height={1200}
                      className="w-full h-auto max-h-[85vh] object-contain rounded-lg mx-auto"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-2xl">lyd-portfolio</CardTitle>
                  <CardDescription className="text-base">
                    Cloned and rebuilt my fiancée{"'"}s business website to eliminate a $30/month subscription cost
                  </CardDescription>
                </div>
                <div className="rounded-lg bg-primary/10 p-3">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm text-muted-foreground max-w-none">
                <p>
                  Used Claude Code to clone and rebuild the website my fiancée Lydia was paying $30/month for —
                  saving her the recurring cost entirely. The original site (solydstrategies.com) is a social media
                  management and graphic design business based in Charlotte, NC. Rebuilt with Next.js and deployed on
                  Vercel.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Eliminated $30/month website builder subscription</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Cpu className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Built with Claude Code — AI-assisted development</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Deployed on Vercel with zero hosting cost</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="default" asChild>
                  <a href="https://solyd-strategies.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Site
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Vercel</Badge>
                <Badge variant="secondary">Claude Code</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-2xl">ebvents</CardTitle>
                  <CardDescription className="text-base">
                    Take-home interview project for Fastbreak AI — sporting event management dashboard
                  </CardDescription>
                </div>
                <div className="rounded-lg bg-primary/10 p-3">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm text-muted-foreground max-w-none">
                <p>
                  A full-stack event management platform with multi-venue scheduling, dual card/table dashboard views,
                  and multi-auth support. Built with Next.js 16, Supabase (with RLS), Cloudflare Images, and shadcn/ui.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Multi-venue event scheduling with card & table dashboard views</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Advanced filtering, search, and sorting</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Multi-auth: email/password, OTP, Google OAuth (Supabase + RLS)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Camera className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Image uploads via Cloudflare CDN</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="default" asChild>
                  <a href="https://github.com/MattEberhart/ebvents" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Supabase</Badge>
                <Badge variant="secondary">Cloudflare Images</Badge>
                <Badge variant="secondary">shadcn/ui</Badge>
                <Badge variant="secondary">Take-Home</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
