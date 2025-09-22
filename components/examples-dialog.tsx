"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"

interface ExamplesDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  planName: string
  price: string
  videoIds: string[]
}

export function ExamplesDialog({ open, onOpenChange, planName, price, videoIds }: ExamplesDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl liquid-glass border-white/10">
        <div className="p-6">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-white">{planName} Examples</h3>
            <p className="text-neutral-400">Starting at {price}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoIds.map((videoId, index) => (
              <div key={videoId} className="aspect-video rounded-lg overflow-hidden bg-black/50">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`${planName} Example ${index + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}