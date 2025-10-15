"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Calendar, CheckCircle2, AlertCircle, TrendingDown, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { HearingTestResult } from "@/lib/hearing-test-data"

interface HearingTestResultsNewProps {
  result: HearingTestResult
  onDownloadPDF: () => void
  onRetake: () => void
}

export function HearingTestResultsNew({ result, onDownloadPDF, onRetake }: HearingTestResultsNewProps) {
  const getAssessmentInfo = () => {
    switch (result.overallAssessment) {
      case "normal":
        return {
          title: "You likely have good hearing.",
          color: "text-green-600",
          bgColor: "bg-green-50 dark:bg-green-950",
          borderColor: "border-green-200 dark:border-green-900",
          icon: CheckCircle2,
        }
      case "mild-loss":
        return {
          title: "You may have mild hearing loss.",
          color: "text-blue-600",
          bgColor: "bg-blue-50 dark:bg-blue-950",
          borderColor: "border-blue-200 dark:border-blue-900",
          icon: TrendingDown,
        }
      case "moderate-loss":
        return {
          title: "You may have moderate hearing loss.",
          color: "text-amber-600",
          bgColor: "bg-amber-50 dark:bg-amber-950",
          borderColor: "border-amber-200 dark:border-amber-900",
          icon: AlertCircle,
        }
      case "severe-loss":
        return {
          title: "You may have significant hearing loss.",
          color: "text-red-600",
          bgColor: "bg-red-50 dark:bg-red-950",
          borderColor: "border-red-200 dark:border-red-900",
          icon: AlertCircle,
        }
    }
  }

  const assessmentInfo = getAssessmentInfo()
  const Icon = assessmentInfo.icon

  // Calculate average threshold for each ear
  const leftEarAvg = result.leftEarResults.reduce((sum, r) => sum + r.threshold, 0) / result.leftEarResults.length
  const rightEarAvg = result.rightEarResults.reduce((sum, r) => sum + r.threshold, 0) / result.rightEarResults.length

  const getHearingLevel = (threshold: number) => {
    if (threshold > 0.75) return "Good"
    if (threshold > 0.6) return "Fair"
    if (threshold > 0.4) return "Loss"
    return "Significant Loss"
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8 text-center">
        <div className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">RESULTS</div>
        <h1 className="text-4xl font-bold mb-4">{assessmentInfo.title}</h1>
        <p className="text-muted-foreground">
          Test completed on{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <Button
          onClick={onDownloadPDF}
          variant="outline"
          className="mt-4 bg-[#FFD700] hover:bg-[#FFC700] text-black border-0 font-semibold"
        >
          Follow us on Instagram
        </Button>
      </div>

      {/* Audiogram-style results */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Left Ear */}
        <Card className="border-2">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Left Ear</h3>
            <p className="text-center text-lg mb-6">
              May have <span className="font-bold">{getHearingLevel(leftEarAvg)}</span> hearing.
            </p>

            {/* Hearing scale visualization */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Significant Loss</span>
                <span>Loss</span>
                <span>Good</span>
              </div>
              <div className="relative h-12 rounded-full overflow-hidden bg-gradient-to-r from-red-500 via-amber-500 to-green-500">
                <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: `${leftEarAvg * 100}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl">↓</div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap">
                    Your hearing ability
                  </div>
                </div>
              </div>
            </div>

            {/* Frequency breakdown */}
            <div className="space-y-2">
              {result.leftEarResults.map((r) => (
                <div key={r.frequency} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{r.frequency} Hz</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${r.threshold * 100}%` }} />
                    </div>
                    <span className="text-xs font-medium w-12">{Math.round(r.threshold * 100)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Ear */}
        <Card className="border-2">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Right Ear</h3>
            <p className="text-center text-lg mb-6">
              May have <span className="font-bold">{getHearingLevel(rightEarAvg)}</span> hearing.
            </p>

            {/* Hearing scale visualization */}
            <div className="mb-6">
              <div className="flex justify-between text-xs text-muted-foreground mb-2">
                <span>Significant Loss</span>
                <span>Loss</span>
                <span>Good</span>
              </div>
              <div className="relative h-12 rounded-full overflow-hidden bg-gradient-to-r from-red-500 via-amber-500 to-green-500">
                <div className="absolute top-0 bottom-0 w-1 bg-black" style={{ left: `${rightEarAvg * 100}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl">↓</div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap">
                    Your hearing ability
                  </div>
                </div>
              </div>
            </div>

            {/* Frequency breakdown */}
            <div className="space-y-2">
              {result.rightEarResults.map((r) => (
                <div key={r.frequency} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{r.frequency} Hz</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${r.threshold * 100}%` }} />
                    </div>
                    <span className="text-xs font-medium w-12">{Math.round(r.threshold * 100)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className={`mb-6 border-2 ${assessmentInfo.borderColor} ${assessmentInfo.bgColor}`}>
        <CardContent className="p-8">
          <div className="flex items-start gap-4 mb-4">
            <Icon className={`h-8 w-8 ${assessmentInfo.color} flex-shrink-0`} />
            <div>
              <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
              <ul className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary font-bold">{index + 1}.</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hearing Health Tips */}
      <Card className="mb-6 border-2">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Tips to Improve & Protect Your Hearing
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {result.hearingTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Button onClick={onDownloadPDF} size="lg" className="w-full">
          <Download className="mr-2 h-5 w-5" />
          Download PDF Report
        </Button>
        <Button asChild size="lg" variant="outline" className="w-full bg-transparent">
          <Link href="/booking">
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </Link>
        </Button>
        <Button onClick={onRetake} size="lg" variant="outline" className="w-full bg-transparent">
          Retake Test
        </Button>
      </div>

      {/* Important disclaimer */}
      <Card className="border-2 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
        <CardContent className="p-6">
          <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Important Medical Disclaimer</h3>
          <p className="text-sm text-amber-800 dark:text-amber-200">
            This online hearing test is a screening tool and does not replace a comprehensive audiological evaluation by
            a licensed audiologist. The results are estimates based on your responses and equipment used. For an
            accurate diagnosis and personalized treatment plan, please schedule an appointment with our certified
            audiologists at one of our branches.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
