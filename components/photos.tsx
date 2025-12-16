"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Camera } from "lucide-react"

const photos: { id: number; src: string; alt: string }[] = []

export function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  if (photos.length === 0) {
    return null
  }

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
      </div>
    </section>
  )
}
