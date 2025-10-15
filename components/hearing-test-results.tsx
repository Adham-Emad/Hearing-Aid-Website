"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Download, Calendar, Phone, CheckCircle2, AlertCircle } from "lucide-react"
import { branches } from "@/lib/hearing-data"

interface HearingTestResultsProps {
  score: number
  totalQuestions: number
  percentage: number
  level: "excellent" | "good" | "fair" | "poor"
  recommendations: string[]
  onDownloadPDF: () => void
  onRetake: () => void
}

export function HearingTestResults({
  score,
  totalQuestions,
  percentage,
  level,
  recommendations,
  onDownloadPDF,
  onRetake,
}: HearingTestResultsProps) {
  const getLevelColor = () => {
    switch (level) {
      case "excellent":
        return "bg-green-500"
      case "good":
        return "bg-blue-500"
      case "fair":
        return "bg-amber-500"
      case "poor":
        return "bg-red-500"
    }
  }

  const getLevelBadgeVariant = () => {
    switch (level) {
      case "excellent":
        return "default"
      case "good":
        return "secondary"
      case "fair":
        return "outline"
      case "poor":
        return "destructive"
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Your Hearing Test Results</h1>
        <p className="text-lg text-muted-foreground">
          Test completed on{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Score Card */}
      <Card className="mb-6">
        <CardContent className="p-8">
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <div className="mb-2 text-sm font-medium text-muted-foreground">Your Score</div>
              <div className="mb-2 text-5xl font-bold">
                {score}/{totalQuestions}
              </div>
              <div className="text-2xl font-semibold text-muted-foreground">{percentage}%</div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className={`flex h-32 w-32 items-center justify-center rounded-full ${getLevelColor()}`}>
                <span className="text-3xl font-bold text-white">{percentage}%</span>
              </div>
              <Badge variant={getLevelBadgeVariant()} className="text-base px-4 py-1">
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="mb-6">
        <CardContent className="p-8">
          <h2 className="mb-4 text-2xl font-semibold">Recommendations</h2>
          <ul className="space-y-3">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-3">
                {level === "excellent" || level === "good" ? (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                ) : (
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                )}
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <Button onClick={onDownloadPDF} size="lg" className="w-full">
          <Download className="mr-2 h-5 w-5" />
          Download PDF Report
        </Button>
        <Button asChild size="lg" variant="outline" className="w-full bg-transparent">
          <Link href="/booking">
            <Calendar className="mr-2 h-5 w-5" />
            Book Professional Test
          </Link>
        </Button>
      </div>

      {/* Branch Information */}
      {(level === "fair" || level === "poor") && (
        <Card className="mb-6 border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950">
          <CardContent className="p-6">
            <h3 className="mb-4 text-xl font-semibold text-amber-900 dark:text-amber-100">
              Visit Us for a Professional Evaluation
            </h3>
            <p className="mb-4 text-sm text-amber-800 dark:text-amber-200">
              Based on your results, we strongly recommend scheduling a comprehensive hearing evaluation at one of our
              branches:
            </p>
            <div className="space-y-3">
              {branches.map((branch) => (
                <div key={branch.id} className="rounded-lg bg-white p-4 dark:bg-amber-900/20">
                  <h4 className="mb-1 font-semibold text-amber-900 dark:text-amber-100">{branch.name}</h4>
                  <p className="mb-1 text-sm text-amber-800 dark:text-amber-200">{branch.address}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-amber-700 dark:text-amber-300">
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {branch.phone}
                    </span>
                    <span>{branch.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Additional Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button onClick={onRetake} variant="outline" size="lg" className="bg-transparent">
          Retake Test
        </Button>
        <Button asChild variant="outline" size="lg" className="bg-transparent">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
