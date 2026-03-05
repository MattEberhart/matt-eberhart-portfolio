"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle, AlertCircle, Zap, Wrench, Globe, Smartphone } from "lucide-react"

const inputClass =
  "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work With Me</h2>
        <p className="text-muted-foreground mb-12 text-balance max-w-2xl">
          Outside of my full-time role, I take on custom projects for small businesses — from landing pages and web
          apps to AI-powered tools. If you have something in mind, reach out below.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">AI-Powered Tools</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Practical AI integrations — chatbots, automation, and intelligent features that save time and
                    differentiate your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Web Applications</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Custom tools, dashboards, and internal apps built around your workflow. Scalable, maintainable,
                    and easy to hand off.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Mobile Apps</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    iOS and Android apps built with React Native. I{"'"}ve shipped to the App Store — I know what it
                    takes to get from idea to launch.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Websites & Landing Pages</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Clean, fast, and SEO-friendly sites built with modern frameworks — a great alternative to paying
                    $30–$100/month for a website builder subscription.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="pt-6">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
                  <CheckCircle className="h-12 w-12 text-primary" />
                  <p className="font-semibold text-lg">Message sent!</p>
                  <p className="text-sm text-muted-foreground">
                    Thanks for reaching out — I{"'"}ll get back to you soon.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setStatus("idle")} className="mt-2">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="flex min-h-[120px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-destructive">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <Button type="submit" disabled={status === "loading"} className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
