import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Matt Eberhart</h3>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Software engineer passionate about building intelligent systems, cloud infrastructure, and creating
              meaningful digital experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/matteberhart" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/carleberhart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" size="icon" asChild>
                <a href="https://x.com/MattEberhart10" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.instagram.com/matteberhart10/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Matt Eberhart. Built with Next.js and v0.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {"Made with"} <Heart className="h-3 w-3 fill-current text-accent" /> {"in Charlotte, NC"}
          </p>
        </div>
      </div>
    </footer>
  )
}
