"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2, Headphones, MapPin, Clock } from "lucide-react"

interface HearingTestInstructionsProps {
  onStart: () => void
}

export function HearingTestInstructions({ onStart }: HearingTestInstructionsProps) {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold leading-tight lg:text-5xl">Take a 3-minute hearing test online</h1>
        <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
          Do you think that you or a loved one might have hearing loss? Taking an easy online hearing test is the first
          step in your or your loved one's hearing journey.
        </p>
        <p className="text-sm text-muted-foreground">
          This Hearing Screener is not a substitute for a professional hearing test.
        </p>
      </div>

      <Card className="mb-8 border-2">
        <CardContent className="p-8 lg:p-10">
          <h2 className="mb-8 text-3xl font-bold text-center">How to prepare for the test</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Headphones className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Use Headphones</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For accurate results, please use headphones or earbuds. Make sure they are properly connected and
                  working.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Volume2 className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Adjust Volume</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Set your device volume to a comfortable level (around 50-70%). You'll be able to adjust during the
                  test.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Find a Quiet Place</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Take the test in a quiet environment without background noise for the most accurate results.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Takes 3 Minutes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The test consists of 8 questions and takes approximately 3 minutes to complete.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
        <CardContent className="p-6">
          <h3 className="mb-2 font-semibold text-amber-900 dark:text-amber-100">Important Note</h3>
          <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
            This online test provides a general indication of your hearing health. For a comprehensive and accurate
            assessment, please visit one of our branches for a professional hearing evaluation with our certified
            audiologists.
          </p>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button size="lg" onClick={onStart} className="px-12 py-6 text-lg h-auto">
          Let's start!
        </Button>
      </div>
    </div>
  )
}
