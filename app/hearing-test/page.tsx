"use client"

import { useState } from "react"
import { MainNavigation } from "@/components/main-navigation"
import { EquipmentSetup } from "@/components/equipment-setup"
import { TheoreticalQuestions } from "@/components/theoretical-questions"
import { FrequencyTest } from "@/components/frequency-test"
import { HearingTestResultsNew } from "@/components/hearing-test-results-new"
import {
  calculateTheoreticalScore,
  calculateOverallAssessment,
  generateRecommendations,
  generateHearingTips,
  calculateHearingPercentages,
  calculateOverallPercentage,
  type HearingTestResult,
} from "@/lib/hearing-test-data"
import jsPDF from "jspdf"

type TestStage = "equipment" | "theoretical" | "left-ear" | "right-ear" | "results"

export default function HearingTestPage() {
  const [stage, setStage] = useState<TestStage>("equipment")
  const [equipmentData, setEquipmentData] = useState<any>(null)
  const [theoreticalAnswers, setTheoreticalAnswers] = useState<number[]>([])
  const [leftEarResults, setLeftEarResults] = useState<{ frequency: number; threshold: number }[]>([])
  const [rightEarResults, setRightEarResults] = useState<{ frequency: number; threshold: number }[]>([])
  const [finalResults, setFinalResults] = useState<HearingTestResult | null>(null)

  const handleEquipmentComplete = (equipment: any) => {
    setEquipmentData(equipment)
    setStage("theoretical")
  }

  const handleTheoreticalComplete = (answers: number[]) => {
    setTheoreticalAnswers(answers)
    setStage("left-ear")
  }

  const handleLeftEarComplete = (results: { frequency: number; threshold: number }[]) => {
    setLeftEarResults(results)
    setStage("right-ear")
  }

  const handleRightEarComplete = (results: { frequency: number; threshold: number }[]) => {
    setRightEarResults(results)

    // Calculate final results
    const theoreticalScore = calculateTheoreticalScore(theoreticalAnswers)
    const assessment = calculateOverallAssessment(theoreticalScore, results, leftEarResults)
    const recommendations = generateRecommendations(assessment)
    const hearingTips = generateHearingTips()

    const testResults: HearingTestResult = {
      theoreticalScore,
      leftEarResults,
      rightEarResults: results,
      overallAssessment: assessment,
      recommendations,
      hearingTips,
    }

    setFinalResults(testResults)
    setStage("results")
  }

  const handleDownloadPDF = () => {
    if (!finalResults) return

    const leftEarPercentage = calculateHearingPercentages(finalResults.leftEarResults)
    const rightEarPercentage = calculateHearingPercentages(finalResults.rightEarResults)
    const overallPercentage = calculateOverallPercentage(finalResults.leftEarResults, finalResults.rightEarResults)

    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 15

    doc.setFillColor(20, 184, 166)
    doc.rect(0, 0, pageWidth, 50, "F")

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont("helvetica", "bold")
    doc.text("Hearing Test Report", pageWidth / 2, 20, { align: "center" })

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text("Al-Barakat Hearing Care Centers", pageWidth / 2, 30, { align: "center" })
    doc.text("Comprehensive Audiometric Assessment", pageWidth / 2, 38, { align: "center" })

    doc.setTextColor(0, 0, 0)
    let yPos = 60

    const scoreBoxWidth = (pageWidth - 3 * margin) / 3

    // Overall Score
    doc.setFillColor(240, 253, 250)
    doc.roundedRect(margin, yPos, scoreBoxWidth, 28, 2, 2, "F")
    doc.setDrawColor(20, 184, 166)
    doc.setLineWidth(0.5)
    doc.roundedRect(margin, yPos, scoreBoxWidth, 28, 2, 2, "S")

    doc.setFontSize(9)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(20, 184, 166)
    doc.text("OVERALL", margin + scoreBoxWidth / 2, yPos + 8, { align: "center" })
    doc.setFontSize(20)
    doc.text(`${overallPercentage}%`, margin + scoreBoxWidth / 2, yPos + 22, { align: "center" })

    // Left Ear Score
    doc.setFillColor(239, 246, 255)
    doc.roundedRect(margin + scoreBoxWidth + 5, yPos, scoreBoxWidth, 28, 2, 2, "F")
    doc.setDrawColor(59, 130, 246)
    doc.roundedRect(margin + scoreBoxWidth + 5, yPos, scoreBoxWidth, 28, 2, 2, "S")

    doc.setFontSize(9)
    doc.setTextColor(59, 130, 246)
    doc.text("LEFT EAR", margin + scoreBoxWidth + 5 + scoreBoxWidth / 2, yPos + 8, { align: "center" })
    doc.setFontSize(20)
    doc.text(`${leftEarPercentage}%`, margin + scoreBoxWidth + 5 + scoreBoxWidth / 2, yPos + 22, { align: "center" })

    // Right Ear Score
    doc.setFillColor(254, 242, 242)
    doc.roundedRect(margin + 2 * scoreBoxWidth + 10, yPos, scoreBoxWidth, 28, 2, 2, "F")
    doc.setDrawColor(239, 68, 68)
    doc.roundedRect(margin + 2 * scoreBoxWidth + 10, yPos, scoreBoxWidth, 28, 2, 2, "S")

    doc.setFontSize(9)
    doc.setTextColor(239, 68, 68)
    doc.text("RIGHT EAR", margin + 2 * scoreBoxWidth + 10 + scoreBoxWidth / 2, yPos + 8, { align: "center" })
    doc.setFontSize(20)
    doc.text(`${rightEarPercentage}%`, margin + 2 * scoreBoxWidth + 10 + scoreBoxWidth / 2, yPos + 22, {
      align: "center",
    })

    doc.setTextColor(0, 0, 0)
    yPos += 38

    doc.setFillColor(249, 250, 251)
    doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 18, 2, 2, "F")

    doc.setFontSize(8)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(75, 85, 99)
    const testDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
    doc.text(`Test Date: ${testDate}`, margin + 5, yPos + 6)
    doc.text(`Equipment: ${equipmentData?.type} (${equipmentData?.connection})`, margin + 5, yPos + 12)
    doc.text(`Age: ${equipmentData?.ageCategory}`, pageWidth - margin - 5, yPos + 6, { align: "right" })
    doc.text(`Report ID: ${Date.now().toString(36).toUpperCase()}`, pageWidth - margin - 5, yPos + 12, {
      align: "right",
    })

    doc.setTextColor(0, 0, 0)
    yPos += 26

    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("Assessment Result", margin, yPos)

    const assessmentText = finalResults.overallAssessment.replace("-", " ").toUpperCase()
    let assessmentColor: [number, number, number] = [34, 197, 94]
    if (finalResults.overallAssessment === "mild-loss") assessmentColor = [234, 179, 8]
    if (finalResults.overallAssessment === "moderate-loss") assessmentColor = [249, 115, 22]
    if (finalResults.overallAssessment === "severe-loss") assessmentColor = [239, 68, 68]

    yPos += 8
    doc.setFillColor(...assessmentColor)
    const badgeWidth = doc.getTextWidth(assessmentText) + 10
    doc.roundedRect(margin, yPos - 5, badgeWidth, 10, 2, 2, "F")
    doc.setFontSize(10)
    doc.setTextColor(255, 255, 255)
    doc.setFont("helvetica", "bold")
    doc.text(assessmentText, margin + 5, yPos + 2)

    doc.setTextColor(0, 0, 0)
    yPos += 14

    doc.setFontSize(11)
    doc.setFont("helvetica", "bold")
    doc.text("Frequency Analysis", margin, yPos)
    yPos += 8

    // Table header
    doc.setFillColor(243, 244, 246)
    doc.rect(margin, yPos, pageWidth - 2 * margin, 8, "F")
    doc.setFontSize(8)
    doc.setFont("helvetica", "bold")
    doc.text("Frequency", margin + 3, yPos + 5)
    doc.text("Left Ear", margin + 50, yPos + 5)
    doc.text("Right Ear", margin + 90, yPos + 5)
    doc.text("Status", margin + 130, yPos + 5)
    yPos += 8

    // Table rows
    doc.setFont("helvetica", "normal")
    const maxRows = Math.max(finalResults.leftEarResults.length, finalResults.rightEarResults.length)
    for (let i = 0; i < maxRows; i++) {
      if (i % 2 === 0) {
        doc.setFillColor(249, 250, 251)
        doc.rect(margin, yPos, pageWidth - 2 * margin, 7, "F")
      }

      if (finalResults.leftEarResults[i]) {
        const leftResult = finalResults.leftEarResults[i]
        const rightResult = finalResults.rightEarResults[i]

        doc.setTextColor(0, 0, 0)
        doc.text(`${leftResult.frequency} Hz`, margin + 3, yPos + 5)
        doc.text(`${Math.round(leftResult.threshold * 100)}%`, margin + 50, yPos + 5)
        doc.text(`${Math.round(rightResult.threshold * 100)}%`, margin + 90, yPos + 5)

        const avgThreshold = (leftResult.threshold + rightResult.threshold) / 2
        let status = "Good"
        let statusColor: [number, number, number] = [34, 197, 94]
        if (avgThreshold < 0.7) {
          status = "Fair"
          statusColor = [234, 179, 8]
        }
        if (avgThreshold < 0.5) {
          status = "Poor"
          statusColor = [239, 68, 68]
        }

        doc.setTextColor(...statusColor)
        doc.text(status, margin + 130, yPos + 5)
      }
      yPos += 7
    }

    doc.setTextColor(0, 0, 0)
    yPos += 8

    doc.setFontSize(11)
    doc.setFont("helvetica", "bold")
    doc.text("Recommendations", margin, yPos)
    yPos += 7

    doc.setFontSize(8)
    doc.setFont("helvetica", "normal")
    finalResults.recommendations.slice(0, 3).forEach((rec, index) => {
      const lines = doc.splitTextToSize(`${index + 1}. ${rec}`, pageWidth - 2 * margin - 5)
      doc.text(lines, margin + 3, yPos)
      yPos += lines.length * 4 + 2
    })

    doc.addPage()
    yPos = 20

    doc.setFillColor(20, 184, 166)
    doc.rect(0, 0, pageWidth, 30, "F")
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(16)
    doc.setFont("helvetica", "bold")
    doc.text("10 Essential Hearing Health Tips", pageWidth / 2, 19, { align: "center" })

    doc.setTextColor(0, 0, 0)
    yPos = 40

    doc.setFontSize(8)
    doc.setFont("helvetica", "normal")
    const columnWidth = (pageWidth - 3 * margin) / 2
    let currentColumn = 0
    let columnYPos = yPos

    finalResults.hearingTips.forEach((tip, index) => {
      const xPos = margin + currentColumn * (columnWidth + margin)

      // Icon circle
      doc.setFillColor(20, 184, 166)
      doc.circle(xPos + 3, columnYPos - 1, 2.5, "F")
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(7)
      doc.setFont("helvetica", "bold")
      doc.text(`${index + 1}`, xPos + 3, columnYPos + 1, { align: "center" })

      // Tip text
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(7)
      doc.setFont("helvetica", "normal")
      const lines = doc.splitTextToSize(tip, columnWidth - 10)
      doc.text(lines, xPos + 8, columnYPos)

      columnYPos += lines.length * 3.5 + 4

      // Switch to second column after 5 tips
      if (index === 4) {
        currentColumn = 1
        columnYPos = yPos
      }
    })

    yPos = pageHeight - 35
    doc.setFillColor(255, 243, 205)
    doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 25, 2, 2, "F")

    doc.setFontSize(9)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(146, 64, 14)
    doc.text("⚠ Medical Disclaimer", margin + 3, yPos + 6)

    doc.setFontSize(7)
    doc.setFont("helvetica", "normal")
    doc.setTextColor(120, 53, 15)
    const disclaimerText = doc.splitTextToSize(
      "This online hearing test is a screening tool and does not replace a comprehensive audiological evaluation by a licensed audiologist. For an accurate diagnosis and personalized treatment plan, please schedule an appointment with our certified audiologists.",
      pageWidth - 2 * margin - 6,
    )
    doc.text(disclaimerText, margin + 3, yPos + 12)

    // Footer
    doc.setFontSize(7)
    doc.setTextColor(128, 128, 128)
    doc.text("© 2025 Al-Barakat Hearing Care Centers", pageWidth / 2, pageHeight - 5, { align: "center" })

    doc.save(`hearing-test-report-${new Date().toISOString().split("T")[0]}.pdf`)
  }

  const handleRetake = () => {
    setStage("equipment")
    setEquipmentData(null)
    setTheoreticalAnswers([])
    setLeftEarResults([])
    setRightEarResults([])
    setFinalResults(null)
  }

  return (
    <div className="min-h-screen">
      <MainNavigation />

      <div className="container mx-auto max-w-7xl px-4 py-12">
        {stage === "equipment" && <EquipmentSetup onComplete={handleEquipmentComplete} />}

        {stage === "theoretical" && <TheoreticalQuestions onComplete={handleTheoreticalComplete} />}

        {stage === "left-ear" && <FrequencyTest ear="left" onComplete={handleLeftEarComplete} />}

        {stage === "right-ear" && <FrequencyTest ear="right" onComplete={handleRightEarComplete} />}

        {stage === "results" && finalResults && (
          <HearingTestResultsNew result={finalResults} onDownloadPDF={handleDownloadPDF} onRetake={handleRetake} />
        )}
      </div>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Al-Barakat Hearing Care</h3>
              <p className="text-sm text-muted-foreground">Your trusted partner in hearing health and wellness.</p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-muted-foreground hover:text-foreground">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-muted-foreground hover:text-foreground">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/hearing-test" className="text-muted-foreground hover:text-foreground">
                    Hearing Test
                  </a>
                </li>
                <li>
                  <a href="/hearing-health" className="text-muted-foreground hover:text-foreground">
                    Hearing Health
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+966 12 345 6789</li>
                <li>info@albarakat-hearing.com</li>
                <li>Sun-Thu: 9AM-8PM</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Al-Barakat Hearing Care Centers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
