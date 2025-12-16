import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Work Experience</h2>
          <Button size="sm" variant="outline" asChild>
            <a href="/resume.pdf" download="Matt_Eberhart_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="space-y-6">
          <div className="border-l-2 border-primary pl-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h4 className="font-semibold">Senior Member of Technical Staff</h4>
                <p className="text-muted-foreground">Oracle Health - Pharmacies</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">April 2025 - Present</span>
            </div>
            <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 list-disc list-inside">
              <li>
                Prototyped RAG solution for pharmaceutical researchers to retrieve information from medical journals
              </li>
              <li>
                Implementing agents to extract relevant data from medical journals and propose changes for researcher
                review
              </li>
              <li>First member of the Oracle Health Pharmacies org to get access to OpenAI APIs</li>
            </ul>
          </div>

          <div className="border-l-2 border-primary pl-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h4 className="font-semibold">Founder and Solo Developer</h4>
                <p className="text-muted-foreground">BNDR LLC</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">June 2024 - Present</span>
            </div>
            <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 list-disc list-inside">
              <li>Built MVP as a PWA using Vercel V0 and Supabase</li>
              <li>Published to iOS App Store, migrated to React Native for RevenueCat and Google AdMob</li>
              <li>Scaled to 125 users and 2 paying subscribers</li>
            </ul>
          </div>

          <div className="border-l-2 border-muted pl-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h4 className="font-semibold">Software Engineer II</h4>
                <p className="text-muted-foreground">Microsoft - Copilot Studio</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">June 2024 - March 2025</span>
            </div>
            <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 list-disc list-inside">
              <li>
                Implemented slot filling for AI Plugins utilizing conversation context to construct connector requests
              </li>
              <li>
                Led initiative that reduced active CRIs by 20% and created processes for prioritization and triaging
              </li>
            </ul>
          </div>

          <div className="border-l-2 border-muted pl-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h4 className="font-semibold">Software Engineer II</h4>
                <p className="text-muted-foreground">Microsoft - Azure Cost Management</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Sept 2023 - June 2024</span>
            </div>
            <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 list-disc list-inside">
              <li>
                Implemented a service to queue jobs and maintain their status with Azure Functions and Service Bus
                messaging
              </li>
              <li>Improved reliability by migrating from SQL based shard map to microservice based shard map</li>
              <li>Acted as primary contact and reviewer for co-development efforts by teams in India</li>
            </ul>
          </div>

          <div className="border-l-2 border-muted pl-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h4 className="font-semibold">Software Engineer</h4>
                <p className="text-muted-foreground">Microsoft - Azure Cost Management</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">May 2021 - Sept 2023</span>
            </div>
            <ul className="text-sm text-muted-foreground leading-relaxed space-y-1 list-disc list-inside">
              <li>Automated service build outs and releases across test, canary, and production environments</li>
              <li>Drove package development to build consistent authorization and rate limiting experiences</li>
              <li>Designed and implemented an asynchronous API powered by Azure Durable Functions and Blob Storage</li>
              <li>Championed reliability investigations, BCDR reviews, repair items, and release freshness</li>
            </ul>
          </div>

          <div className="border-l-2 border-muted pl-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h4 className="font-semibold">Internships</h4>
                <p className="text-muted-foreground">Microsoft</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">2018 - 2020</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software Engineer Intern roles on Azure Cost Management (2020), Azure Marketplace (2019), and Windows
              (2018)
            </p>
          </div>

          <div className="border-l-2 border-muted pl-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h4 className="font-semibold">Software Engineering Intern</h4>
                <p className="text-muted-foreground">TwinThread</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Summer 2017</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built web applications using React and modern JavaScript frameworks for IoT analytics platform
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="border-l-2 border-accent pl-4">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h4 className="font-semibold">Virginia Polytechnic Institute and State University</h4>
                  <p className="text-muted-foreground">Bachelor of Arts in Spanish</p>
                </div>
                <span className="text-sm text-muted-foreground whitespace-nowrap">2016 - 2021</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Minors in Computer Science and Mathematics
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Vercel",
                "Next.js",
                "React Native",
                "Cursor",
                "Supabase",
                "AI Agents",
                "RAG",
                "Python",
                "iOS / App Store Connect",
                "Azure",
                "C#",
                "Microservices",
                "Release Management",
                "Spanish (Fluent)",
              ].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-muted rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
