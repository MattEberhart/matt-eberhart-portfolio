import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <img src="/images/img-7966.jpeg" alt="Matt Eberhart" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6 flex-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">Matt Eberhart</h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">Software Engineer</p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Building intelligent systems and cloud infrastructure. Currently developing AI agents at Oracle,
              previously worked on Azure Cost Management and Copilot Studio at Microsoft.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Button variant="default" size="lg" asChild>
                <a href="https://github.com/matteberhart" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/carleberhart/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="https://x.com/MattEberhart10" target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="https://www.instagram.com/matteberhart10/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
