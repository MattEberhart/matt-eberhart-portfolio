import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Briefcase, GraduationCap, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">About</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg">Experience</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">2025 - Present:</span> Oracle Health / Pharmacies AI
                    </p>
                    <p>
                      <span className="font-medium text-foreground">2024 - Present:</span> BNDR LLC / Founder
                    </p>
                    <p>
                      <span className="font-medium text-foreground">2024 - 2025:</span> Microsoft / Copilot Studio
                    </p>
                    <p>
                      <span className="font-medium text-foreground">2021 - 2024:</span> Microsoft / Azure Cost
                      Management
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-3">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg">Location</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">2025 - Present:</span> Charlotte, NC
                    </p>
                    <p>
                      <span className="font-medium text-foreground">2021 - 2025:</span> Seattle, WA
                    </p>
                    <p>
                      <span className="font-medium text-foreground">2016 - 2021:</span> Blacksburg, VA
                    </p>
                    <p>
                      <span className="font-medium text-foreground">1998 - 2016:</span> Hamilton, VA
                    </p>
                    <p className="pt-2">Dual Peruvian-American citizen</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg">Education</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">Virginia Tech</p>
                      <p>Bachelor of Arts in Spanish (2016 - 2021)</p>
                      <p>Minors: Computer Science & Mathematics</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Loudoun Valley High School</p>
                      <p>2012 - 2016</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-3">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg">Personal</h3>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    <p>
                      At 27, I share my life with my fiancé Lydia and our cat Millie in Charlotte. When I'm not coding,
                      you'll find me on the basketball court or golf course. I spent four years in Seattle where I
                      picked up skiing and snowboarding. Growing up in Virginia, I played baseball and the viola, and I
                      still enjoy cycling whenever I get the chance.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
