import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/resume"
import { Photos } from "@/components/photos"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Photos />
      <Footer />
    </main>
  )
}
