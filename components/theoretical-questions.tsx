"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { theoreticalQuestions } from "@/lib/hearing-test-data"
import { CheckCircle2, Circle } from "lucide-react"

interface TheoreticalQuestionsProps {
  onComplete: (answers: number[]) => void
}

export function TheoreticalQuestions({ onComplete }: TheoreticalQuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const question = theoreticalQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / theoreticalQuestions.length) * 100

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer]
      setAnswers(newAnswers)

      if (currentQuestion < theoreticalQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        onComplete(newAnswers)
      }
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-base font-semibold text-gray-700 dark:text-gray-300">
            Question {currentQuestion + 1} of {theoreticalQuestions.length}
          </span>
          <span className="text-base font-bold text-teal-600 dark:text-teal-400">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-3 bg-gray-100 dark:bg-gray-800" />
      </div>

      <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <CardContent className="p-10 md:p-14">
          <div className="mb-10 text-center">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 text-white text-2xl font-bold shadow-lg">
              {currentQuestion + 1}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-relaxed max-w-3xl mx-auto">
              {question.question}
            </h2>
          </div>

          <div className="grid gap-4 mb-10">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`group relative flex items-center gap-4 rounded-2xl border-2 p-5 text-left text-base md:text-lg font-medium transition-all duration-200 ${
                  selectedAnswer === index
                    ? "border-teal-500 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950 shadow-lg scale-[1.02]"
                    : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-teal-300 dark:hover:border-teal-600 hover:shadow-md hover:scale-[1.01]"
                }`}
              >
                <div className="flex-shrink-0">
                  {selectedAnswer === index ? (
                    <CheckCircle2 className="h-7 w-7 text-teal-600 dark:text-teal-400" />
                  ) : (
                    <Circle className="h-7 w-7 text-gray-300 dark:text-gray-600 group-hover:text-teal-400" />
                  )}
                </div>
                <span
                  className={
                    selectedAnswer === index ? "text-teal-900 dark:text-teal-100" : "text-gray-700 dark:text-gray-300"
                  }
                >
                  {option}
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              size="lg"
              className="px-10 py-6 text-lg font-bold h-auto bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {currentQuestion < theoreticalQuestions.length - 1 ? "Next Question" : "Continue to Hearing Test"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
