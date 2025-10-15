"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, Volume2, Minus, Plus } from "lucide-react"
import type { HearingTestQuestion } from "@/lib/hearing-test-data"
import { ToneGenerator, speakText, stopSpeech } from "@/lib/audio-utils"

interface HearingTestQuestionProps {
  question: HearingTestQuestion
  questionNumber: number
  totalQuestions: number
  onAnswer: (answer: number) => void
}

export function HearingTestQuestionComponent({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: HearingTestQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [volume, setVolume] = useState(1.0)
  const [showMaxVolumeMessage, setShowMaxVolumeMessage] = useState(false)
  const toneGeneratorRef = useRef<ToneGenerator | null>(null)

  const progress = (questionNumber / totalQuestions) * 100

  useEffect(() => {
    setSelectedAnswer(null)
    setHasPlayed(false)
    setShowMaxVolumeMessage(false)
  }, [questionNumber])

  useEffect(() => {
    toneGeneratorRef.current = new ToneGenerator()

    return () => {
      if (toneGeneratorRef.current) {
        toneGeneratorRef.current.cleanup()
      }
    }
  }, [])

  const handleVolumeDown = () => {
    if (question.type === "frequency" && toneGeneratorRef.current) {
      const currentVolume = toneGeneratorRef.current.getVolume()
      const newVolume = Math.max(0.1, currentVolume - 0.1)
      toneGeneratorRef.current.setVolume(newVolume)
      setVolume(newVolume)
    } else {
      const newVolume = Math.max(0.1, volume - 0.1)
      setVolume(newVolume)
    }
    setShowMaxVolumeMessage(false)
  }

  const handleVolumeUp = () => {
    if (question.type === "frequency" && toneGeneratorRef.current) {
      const currentVolume = toneGeneratorRef.current.getVolume()
      if (currentVolume >= 1.0) {
        setShowMaxVolumeMessage(true)
        setTimeout(() => setShowMaxVolumeMessage(false), 3000)
        return
      }
      const newVolume = Math.min(1.0, currentVolume + 0.1)
      toneGeneratorRef.current.setVolume(newVolume)
      setVolume(newVolume)
    } else {
      if (volume >= 1.0) {
        setShowMaxVolumeMessage(true)
        setTimeout(() => setShowMaxVolumeMessage(false), 3000)
        return
      }
      const newVolume = Math.min(1.0, volume + 0.1)
      setVolume(newVolume)
    }
  }

  const handlePlayAudio = async () => {
    if (isPlaying) {
      if (toneGeneratorRef.current) {
        toneGeneratorRef.current.stopTone()
      }
      stopSpeech()
      setIsPlaying(false)
      return
    }

    setIsPlaying(true)
    setHasPlayed(true)

    try {
      if (question.type === "frequency" && question.frequency && toneGeneratorRef.current) {
        const frequencyValue = Number.parseInt(question.frequency.replace(/[^0-9]/g, ""))
        await toneGeneratorRef.current.playTone(frequencyValue, 2000)
      } else if (question.type === "speech" || question.type === "noise") {
        const wordToSpeak = question.options[question.correctAnswer]
        await speakText(wordToSpeak, volume)
      } else if (question.audioUrl) {
        const audio = new Audio(question.audioUrl)
        audio.volume = volume
        await audio.play()
        await new Promise((resolve) => {
          audio.addEventListener("ended", resolve)
          audio.addEventListener("error", () => {
            console.log("[v0] Audio file not found, simulating playback")
            setTimeout(resolve, 2000)
          })
        })
      } else {
        await new Promise((resolve) => setTimeout(resolve, 2000))
      }
    } catch (error) {
      console.error("[v0] Audio playback error:", error)
    } finally {
      setIsPlaying(false)
    }
  }

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null) {
      onAnswer(selectedAnswer)
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between text-sm font-medium">
          <span className="text-muted-foreground">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-primary">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-3" />
      </div>

      <Card className="border-2">
        <CardContent className="p-8 lg:p-12">
          <div className="mb-8">
            <div className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              {question.type === "frequency" && "Frequency Test"}
              {question.type === "speech" && "Speech Recognition"}
              {question.type === "noise" && "Noise Environment"}
            </div>
            {question.frequency && (
              <div className="mb-2 text-base text-muted-foreground font-medium">Testing: {question.frequency}</div>
            )}
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight">{question.question}</h2>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">{question.instruction}</p>

          {(question.audioUrl || question.type === "frequency") && (
            <div className="mb-10">
              <Card className="bg-muted/30 border-2">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Volume2 className="h-6 w-6" />
                      <span className="text-lg font-medium">
                        {question.type === "frequency" ? "Press the play button to start the tone" : "Audio Sample"}
                      </span>
                    </div>

                    {question.frequency && (
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">{question.ear || "Right ear"}</div>
                        <div className="text-base font-semibold">{question.frequency}</div>
                      </div>
                    )}

                    <div className="flex items-center gap-6">
                      <Button
                        size="lg"
                        variant="outline"
                        className="h-16 w-16 rounded-full bg-primary/10 hover:bg-primary/20 border-2"
                        onClick={handleVolumeDown}
                      >
                        <Minus className="h-6 w-6" />
                      </Button>

                      <Button
                        onClick={handlePlayAudio}
                        size="lg"
                        className="h-20 w-20 rounded-full text-lg"
                        variant={isPlaying ? "secondary" : "default"}
                      >
                        {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="h-16 w-16 rounded-full bg-primary/10 hover:bg-primary/20 border-2"
                        onClick={handleVolumeUp}
                      >
                        <Plus className="h-6 w-6" />
                      </Button>
                    </div>

                    {showMaxVolumeMessage && (
                      <div className="rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-in fade-in slide-in-from-top-2">
                        You've reached the maximum volume
                      </div>
                    )}

                    {question.type === "frequency" && (
                      <p className="text-sm text-muted-foreground text-center max-w-md">
                        Use the +/- buttons to adjust the loudness and find the softest sound you can hear. Then press
                        Next.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="mb-10 space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`w-full rounded-xl border-2 p-5 text-left transition-all ${
                  selectedAnswer === index
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                      selectedAnswer === index ? "border-primary bg-primary" : "border-muted-foreground"
                    }`}
                  >
                    {selectedAnswer === index && <div className="h-3 w-3 rounded-full bg-primary-foreground" />}
                  </div>
                  <span className="text-lg font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <Button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            size="lg"
            className="w-full h-14 text-lg"
          >
            {questionNumber === totalQuestions ? "Finish Test" : "Next"}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
