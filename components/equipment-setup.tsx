"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Headphones, Volume2, Wifi, Cable, User, Calendar } from "lucide-react"

interface EquipmentSetupProps {
  onComplete: (equipment: { type: string; connection: string; gender: string; ageCategory: string }) => void
}

export function EquipmentSetup({ onComplete }: EquipmentSetupProps) {
  const [equipmentType, setEquipmentType] = useState<string>("")
  const [connectionType, setConnectionType] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  const [ageCategory, setAgeCategory] = useState<string>("")

  const canProceed = equipmentType && connectionType && gender && ageCategory

  const handleContinue = () => {
    if (canProceed) {
      onComplete({
        type: equipmentType,
        connection: connectionType,
        gender,
        ageCategory,
      })
    }
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
          Check Your Hearing in 5 Minutes
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
          Prepare your headphones for an accurate assessment
        </p>
      </div>

      <div className="mb-12 flex justify-center">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-teal-500 max-w-2xl">
          <img src="/person-wearing-headphones-taking-hearing-test.jpg" alt="Person with headphones" className="w-full h-auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

      <Card className="mb-8 border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <CardContent className="p-8 md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Setup Your Test</h2>
            <p className="text-gray-600 dark:text-gray-400">Help us calibrate the test for the most accurate results</p>
          </div>

          <div className="space-y-10">
            <div>
              <Label className="mb-5 flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white">
                <Headphones className="h-6 w-6 text-teal-600" />
                Audio Device Type
              </Label>
              <RadioGroup value={equipmentType} onValueChange={setEquipmentType}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div
                    className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all duration-200 ${
                      equipmentType === "headphones"
                        ? "border-teal-500 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950 shadow-lg"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-teal-300 hover:shadow-md"
                    }`}
                  >
                    <RadioGroupItem value="headphones" id="headphones" className="sr-only" />
                    <Label htmlFor="headphones" className="cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div
                          className={`p-4 rounded-full ${
                            equipmentType === "headphones"
                              ? "bg-teal-100 dark:bg-teal-900"
                              : "bg-gray-100 dark:bg-gray-700"
                          }`}
                        >
                          <Headphones
                            className={`h-8 w-8 ${
                              equipmentType === "headphones"
                                ? "text-teal-600 dark:text-teal-400"
                                : "text-gray-600 dark:text-gray-400"
                            }`}
                          />
                        </div>
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">Over-ear Headphones</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Best for accurate results</span>
                      </div>
                    </Label>
                  </div>
                  <div
                    className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all duration-200 ${
                      equipmentType === "earphones"
                        ? "border-teal-500 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950 shadow-lg"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-teal-300 hover:shadow-md"
                    }`}
                  >
                    <RadioGroupItem value="earphones" id="earphones" className="sr-only" />
                    <Label htmlFor="earphones" className="cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div
                          className={`p-4 rounded-full ${
                            equipmentType === "earphones"
                              ? "bg-teal-100 dark:bg-teal-900"
                              : "bg-gray-100 dark:bg-gray-700"
                          }`}
                        >
                          <Volume2
                            className={`h-8 w-8 ${
                              equipmentType === "earphones"
                                ? "text-teal-600 dark:text-teal-400"
                                : "text-gray-600 dark:text-gray-400"
                            }`}
                          />
                        </div>
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">In-ear Earphones</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Earbuds or IEMs</span>
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="mb-5 flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white">
                <Cable className="h-6 w-6 text-teal-600" />
                Connection Type
              </Label>
              <RadioGroup value={connectionType} onValueChange={setConnectionType}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div
                    className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all duration-200 ${
                      connectionType === "wired"
                        ? "border-teal-500 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950 shadow-lg"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-teal-300 hover:shadow-md"
                    }`}
                  >
                    <RadioGroupItem value="wired" id="wired" className="sr-only" />
                    <Label htmlFor="wired" className="cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div
                          className={`p-4 rounded-full ${
                            connectionType === "wired" ? "bg-teal-100 dark:bg-teal-900" : "bg-gray-100 dark:bg-gray-700"
                          }`}
                        >
                          <Cable
                            className={`h-8 w-8 ${
                              connectionType === "wired"
                                ? "text-teal-600 dark:text-teal-400"
                                : "text-gray-600 dark:text-gray-400"
                            }`}
                          />
                        </div>
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">Wired</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">3.5mm or USB connection</span>
                      </div>
                    </Label>
                  </div>
                  <div
                    className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all duration-200 ${
                      connectionType === "wireless"
                        ? "border-teal-500 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950 dark:to-blue-950 shadow-lg"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-teal-300 hover:shadow-md"
                    }`}
                  >
                    <RadioGroupItem value="wireless" id="wireless" className="sr-only" />
                    <Label htmlFor="wireless" className="cursor-pointer">
                      <div className="flex flex-col items-center text-center gap-3">
                        <div
                          className={`p-4 rounded-full ${
                            connectionType === "wireless"
                              ? "bg-teal-100 dark:bg-teal-900"
                              : "bg-gray-100 dark:bg-gray-700"
                          }`}
                        >
                          <Wifi
                            className={`h-8 w-8 ${
                              connectionType === "wireless"
                                ? "text-teal-600 dark:text-teal-400"
                                : "text-gray-600 dark:text-gray-400"
                            }`}
                          />
                        </div>
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">Wireless</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Bluetooth connection</span>
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                  <User className="h-5 w-5 text-teal-600" />
                  Gender
                </Label>
                <RadioGroup value={gender} onValueChange={setGender}>
                  <div className="space-y-2">
                    {[
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                      { value: "prefer-not-to-say", label: "Prefer not to say" },
                    ].map((option) => (
                      <div
                        key={option.value}
                        className={`flex items-center space-x-3 rounded-xl border-2 p-4 cursor-pointer transition-all ${
                          gender === option.value
                            ? "border-teal-500 bg-teal-50 dark:bg-teal-950"
                            : "border-gray-200 dark:border-gray-700 hover:border-teal-300"
                        }`}
                      >
                        <RadioGroupItem value={option.value} id={option.value} />
                        <Label htmlFor={option.value} className="cursor-pointer flex-1 font-medium">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="mb-4 flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                  <Calendar className="h-5 w-5 text-teal-600" />
                  Age Category
                </Label>
                <RadioGroup value={ageCategory} onValueChange={setAgeCategory}>
                  <div className="space-y-2">
                    {["18-29", "30-39", "40-49", "50-59", "60-69", "70+"].map((age) => (
                      <div
                        key={age}
                        className={`flex items-center space-x-3 rounded-xl border-2 p-4 cursor-pointer transition-all ${
                          ageCategory === age
                            ? "border-teal-500 bg-teal-50 dark:bg-teal-950"
                            : "border-gray-200 dark:border-gray-700 hover:border-teal-300"
                        }`}
                      >
                        <RadioGroupItem value={age} id={age} />
                        <Label htmlFor={age} className="cursor-pointer flex-1 font-medium">
                          {age}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">For ages 18 and older</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mb-8 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 border-2 border-amber-300 dark:border-amber-700 p-6">
        <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed">
          <strong>Privacy & Disclaimer:</strong> By proceeding, you agree to our Privacy Statement. This test is a
          screening tool only and does not replace professional audiological evaluation.
        </p>
      </div>

      <div className="text-center">
        <Button
          size="lg"
          onClick={handleContinue}
          disabled={!canProceed}
          className="px-12 py-7 text-xl font-bold h-auto bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-2xl disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        >
          Start My Hearing Test
        </Button>
      </div>
    </div>
  )
}
