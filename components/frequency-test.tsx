"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Volume2, Minus, Plus } from "lucide-react"
import { AudiometryToneGenerator } from "@/lib/audio-generator"
import { testFrequencies } from "@/lib/hearing-test-data"

interface FrequencyTestProps {
  ear: "left" | "right"
  onComplete: (results: { frequency: number; threshold: number }[]) => void
}

export function FrequencyTest({ ear, onComplete }: FrequencyTestProps) {
  const [currentFrequencyIndex, setCurrentFrequencyIndex] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const [isPlaying, setIsPlaying] = useState(false)
  const [results, setResults] = useState<{ frequency: number; threshold: number }[]>([])
  const toneGeneratorRef = useRef<AudiometryToneGenerator | null>(null)

  const currentFrequency = testFrequencies[currentFrequencyIndex]
  const progress = ((currentFrequencyIndex + 1) / testFrequencies.length) * 100

  useEffect(() => {
    toneGeneratorRef.current = new AudiometryToneGenerator()
    return () => {
      if (toneGeneratorRef.current) {
        toneGeneratorRef.current.cleanup()
      }
    }
  }, [])

  useEffect(() => {
    if (toneGeneratorRef.current && !isPlaying) {
      handlePlayTone()
    }
  }, [currentFrequencyIndex])

  const handlePlayTone = () => {
    if (!toneGeneratorRef.current) return

    if (isPlaying) {
      toneGeneratorRef.current.stopTone()
      setIsPlaying(false)
      return
    }

    setIsPlaying(true)
    toneGeneratorRef.current.startLoopingTone(currentFrequency, volume, ear)
  }

  const handleVolumeChange = (newVolume: number[]) => {
    const vol = newVolume[0]
    setVolume(vol)
    if (toneGeneratorRef.current && isPlaying) {
      toneGeneratorRef.current.setVolume(vol)
    }
  }

  const handleVolumeDown = () => {
    const newVolume = Math.max(0.05, volume - 0.05)
    setVolume(newVolume)
    if (toneGeneratorRef.current && isPlaying) {
      toneGeneratorRef.current.setVolume(newVolume)
    }
  }

  const handleVolumeUp = () => {
    const newVolume = Math.min(1.0, volume + 0.05)
    setVolume(newVolume)
    if (toneGeneratorRef.current && isPlaying) {
      toneGeneratorRef.current.setVolume(newVolume)
    }
  }

  const handleNext = () => {
    if (toneGeneratorRef.current) {
      toneGeneratorRef.current.stopTone()
      setIsPlaying(false)
    }

    const newResults = [...results, { frequency: currentFrequency, threshold: volume }]
    setResults(newResults)

    if (currentFrequencyIndex < testFrequencies.length - 1) {
      setCurrentFrequencyIndex(currentFrequencyIndex + 1)
      setVolume(0.5) // Reset volume for next frequency
    } else {
      onComplete(newResults)
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-sm font-medium">
          <span className="text-muted-foreground">
            {currentFrequencyIndex + 1} OF {testFrequencies.length}
          </span>
          <span className="text-primary">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-200" />
      </div>

      <Card className="border-2">
        <CardContent className="p-12">
          <div className="mb-8 text-center">
            <div className="inline-block rounded-full bg-primary/10 px-6 py-2 mb-4">
              <span className="text-lg font-bold text-primary uppercase">
                {ear === "left" ? "Left Ear" : "Right Ear"}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2">HEARING CHECK</h2>
            <p className="text-muted-foreground">Testing frequency: {currentFrequency} Hz</p>
          </div>

          <div className="mb-12 text-center">
            <h3 className="text-xl font-semibold mb-8">Click the +/- buttons until you can barely hear the sound.</h3>

            {/* Waveform visualization */}
            <div className="mb-8 flex justify-center">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M 10 50 Q 30 20, 50 50 T 90 50"
                    stroke="#FFD700"
                    strokeWidth="3"
                    fill="none"
                    className={isPlaying ? "animate-pulse" : ""}
                  />
                  <path
                    d="M 10 50 Q 30 80, 50 50 T 90 50"
                    stroke="#FFA500"
                    strokeWidth="3"
                    fill="none"
                    className={isPlaying ? "animate-pulse" : ""}
                  />
                </svg>
              </div>
            </div>

            {/* Volume slider */}
            <div className="mb-8 flex items-center gap-6 justify-center">
              <Volume2 className="h-6 w-6 text-muted-foreground" />
              <Slider
                value={[volume]}
                onValueChange={handleVolumeChange}
                max={1}
                min={0.05}
                step={0.05}
                className="w-64"
              />
              <Volume2 className="h-8 w-8 text-primary" />
            </div>

            {/* Control buttons */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <Button
                size="lg"
                variant="outline"
                onClick={handleVolumeDown}
                className="h-20 w-20 rounded-full border-3 border-[#FFD700] bg-[#FFFEF0] hover:bg-[#FFF9E6] text-2xl font-bold"
              >
                <Minus className="h-8 w-8" />
              </Button>

              <Button
                onClick={handlePlayTone}
                size="lg"
                className="h-24 w-24 rounded-full bg-[#FFD700] hover:bg-[#FFC700] text-black text-2xl font-bold"
              >
                {isPlaying ? "⏸" : "▶"}
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleVolumeUp}
                className="h-20 w-20 rounded-full border-3 border-[#FFD700] bg-[#FFFEF0] hover:bg-[#FFF9E6] text-2xl font-bold"
              >
                <Plus className="h-8 w-8" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              Adjust the volume until you can just barely hear the tone, then click Next.
            </p>

            <Button
              onClick={handleNext}
              size="lg"
              variant="outline"
              className="px-12 py-6 text-lg h-auto border-2 bg-transparent"
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 rounded-lg bg-blue-50 dark:bg-blue-950 border-2 border-blue-200 dark:border-blue-900 p-6">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          <strong>Important:</strong> Make sure you're wearing your headphones/earphones correctly. The audio will only
          play in your <strong>{ear === "left" ? "LEFT" : "RIGHT"}</strong> ear. If you can't hear anything, check that
          your {ear === "left" ? "left" : "right"} earpiece is properly positioned.
        </p>
      </div>
    </div>
  )
}
