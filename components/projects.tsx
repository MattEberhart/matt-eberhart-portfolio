import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Smartphone, Users, Camera, TrendingUp, ExternalLink, Instagram, Bot, MessageSquare, CheckCircle, DollarSign, Calendar, Shield, Mail, Github, Trophy, Database, Lock, ListOrdered, Palette, Cake, Image as ImageIcon, Search } from "lucide-react"
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
                  <a href="https://apps.apple.com/us/app/bndr/id6749908487" target="_blank" rel="noopener noreferrer">
                    <Smartphone className="mr-2 h-4 w-4" />
                    Download on App Store
                  </a>
                </Button>
                <Button variant="default" asChild>
                  <a href="https://mybndr.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
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

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-2xl">second-nature</CardTitle>
                  <CardDescription className="text-base">
                    Studio and event-rental site for a Charlotte, NC creative business
                  </CardDescription>
                </div>
                <div className="rounded-lg bg-primary/10 p-3">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm text-muted-foreground max-w-none">
                <p>
                  Second Nature Creative Studio spans two service lines: Studio, for creative and digital marketing
                  consulting, and Gatherings, for curated event rental packages. Visitors build their own rental
                  estimate and get a live delivery-cost quote, then book a consultation that&apos;s created directly
                  on the owner&apos;s Google Calendar with an auto-generated Meet link. An admin dashboard over
                  Supabase manages the catalog, settings, and incoming leads, with Resend sending confirmation and
                  notification emails. Built with Next.js, Supabase, and the Google Calendar and Routes APIs,
                  deployed on Vercel.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Build-your-own estimate tool with live delivery-cost quotes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Consultation booking synced to Google Calendar with auto-generated Meet links</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Admin dashboard over Supabase for catalog, settings, and lead management</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Resend-powered confirmation and notification emails</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="default" asChild>
                  <a href="https://www.secondnaturecreative.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Supabase</Badge>
                <Badge variant="secondary">Resend</Badge>
                <Badge variant="secondary">Google Calendar API</Badge>
                <Badge variant="secondary">Vercel</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-2xl">ebvents</CardTitle>
                  <CardDescription className="text-base">
                    Client-management platform for wedding and event venues, built into each venue&apos;s own website
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
                  ebvents replaces the rate sheets, contracts, and estimates venues trade as email attachments with one
                  place on the venue&apos;s own site. The venue, couple, and planners all work on a single live estimate
                  that locks automatically before the event, with line items generated from a versioned price book and
                  rules like staffing per seated guest. Couples sign in to a portal on the venue&apos;s domain to build
                  menus, manage guests and tables, and track contract and deposit steps. One multi-tenant Next.js app
                  serves every venue by hostname, on Neon Postgres with row-level security, Drizzle ORM, self-hosted
                  Better Auth, and Resend, deployed on Vercel.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">One shared live estimate driven by a rule-based pricing engine, auto-locked before the event</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Client portal for menus, meal counts, guests, tables, and collaborators</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Inquiries with availability, consultations, and reservation invites that hold dates</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Hostname-based multi-tenancy with Postgres row-level security and venue-branded sign-in</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Branded emails, reminders, and nightly jobs per venue</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="default" asChild>
                  <a href="https://ebvents.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Neon Postgres</Badge>
                <Badge variant="secondary">Drizzle ORM</Badge>
                <Badge variant="secondary">Better Auth</Badge>
                <Badge variant="secondary">Resend</Badge>
                <Badge variant="secondary">Vercel</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-2xl">adams-good-baker</CardTitle>
                  <CardDescription className="text-base">
                    Landing page and bake-request form for a Birmingham, AL home bakery
                  </CardDescription>
                </div>
                <div className="rounded-lg bg-primary/10 p-3">
                  <Cake className="h-8 w-8 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm text-muted-foreground max-w-none">
                <p>
                  Adams Good Baker is a home bakery in Birmingham, Alabama making celebration cakes, cupcakes,
                  decorated sugar cookies, cheesecakes, and breads. The site showcases the bakery&apos;s offerings, a
                  photo gallery, and an FAQ. Customers send bake requests with their date, occasion, and headcount
                  through a form that emails the baker via Resend, and she replies with a quote straight to the
                  customer. Built with Next.js and Tailwind CSS, deployed on Vercel.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Bake-request form (date, occasion, headcount) delivered by Resend with reply-to set to the customer</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ImageIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Offerings showcase and photo gallery of the bakery&apos;s work</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">SEO with Bakery and FAQPage JSON-LD, sitemap, and Open Graph image</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="default" asChild>
                  <a href="https://adamsgoodbaker.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Resend</Badge>
                <Badge variant="secondary">Vercel</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-2xl">clt-golf-league</CardTitle>
                  <CardDescription className="text-base">
                    Standings, schedule, and result tracking for my Charlotte net match play golf league
                  </CardDescription>
                </div>
                <div className="rounded-lg bg-primary/10 p-3">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm text-muted-foreground max-w-none">
                <p>
                  Queen City Match Play is the site I built for my six-team, twelve-player golf league — net match
                  play, one course a month, with a championship round in October. A friend runs the league and I play
                  in it, so I built the site we all use. It tracks the round-robin
                  schedule, live standings with league tiebreakers, team pages with adjusted handicaps, and a
                  password-gated form league members use to submit their own results. Next.js Server Components and
                  Server Actions over Drizzle ORM and Turso, deployed on Vercel.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Live standings with head-to-head and margin-of-victory tiebreakers</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Round-robin schedule across five rounds plus a championship</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Team pages with adjusted handicaps used for net scoring</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Password-gated result submission with HMAC-signed session cookies</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Database className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Drizzle ORM over Turso (libSQL) with Server Action mutations</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="default" asChild>
                  <a href="https://clt-golf-league.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
                <Button variant="default" asChild>
                  <a href="https://github.com/MattEberhart/clt-golf-league" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Drizzle ORM</Badge>
                <Badge variant="secondary">Turso</Badge>
                <Badge variant="secondary">Zod</Badge>
                <Badge variant="secondary">Vercel</Badge>
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

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-2xl">jacobs-sheet</CardTitle>
                  <CardDescription className="text-base">
                    Password-protected fantasy football dashboard for weekly DraftKings contest standings
                  </CardDescription>
                </div>
                <div className="rounded-lg bg-primary/10 p-3">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm text-muted-foreground max-w-none">
                <p>
                  Jacob&apos;s Sheet is the dashboard I built for my fantasy football league&apos;s weekly DraftKings
                  contests, tracking DK Points for contest scoring and Kurt Credits for the season-long ledger. I&apos;m
                  the commissioner, so I use the Submit view each week to enter all 15 scores, review the automatic
                  ranking, and copy a group-chat recap. The site also holds a reconciled 2022-2025 historical archive
                  imported from the league&apos;s original spreadsheets. Built on Next.js 16 and Turso serverless
                  SQLite, deployed on Vercel.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <ListOrdered className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Live standings ranked by Kurt Credits or average DK Points</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Weekly results view with each contest&apos;s finish and score</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Password-gated viewer access, separate from the bearer-secret ingest API</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Database className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Turso serverless SQLite with immutable, idempotency-keyed week uploads</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="default" asChild>
                  <a href="https://jacobs-sheet.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Turso</Badge>
                <Badge variant="secondary">Vercel</Badge>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
