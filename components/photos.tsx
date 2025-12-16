"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Camera } from "lucide-react"

// Placeholder photos - replace with actual images from /public/photos folder
const photos = [
  { id: 1, src: "/basketball-court-action.jpg", alt: "Playing basketball" },
  { id: 2, src: "/golf-course-scenic.jpg", alt: "Golf course" },
  { id: 3, src: "/cat-portrait-cute.jpg", alt: "Millie the cat" },
  { id: 4, src: "/couple-portrait-happy.jpg", alt: "With Lydia" },
  { id: 5, src: "/seattle-skyline.png", alt: "Seattle skyline" },
  { id: 6, src: "/charlotte-city-view.jpg", alt: "Charlotte, NC" },
  { id: 7, src: "/bicycle-outdoor-trail.jpg", alt: "Cycling" },
  { id: 8, src: "/virginia-tech-campus.jpg", alt: "Virginia Tech" },
]

export function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <section id="photos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Photos</h2>
            <p className="text-muted-foreground">Moments from life, travel, and hobbies</p>
          </div>
          <div className="rounded-lg bg-primary/10 p-3">
            <Camera className="h-6 w-6 text-primary" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <Dialog key={photo.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all">
                  <div className="relative aspect-square">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="relative aspect-video">
                  <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-contain" />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <Card className="mt-8 border-dashed">
          <div className="p-8 text-center space-y-2">
            <p className="text-sm text-muted-foreground">{"Add your own photos to the /public/photos folder"}</p>
            <p className="text-xs text-muted-foreground">
              {"Update the photos array in components/photos.tsx to display your images"}
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
