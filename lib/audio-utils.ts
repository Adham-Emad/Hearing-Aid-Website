export class ToneGenerator {
  private audioContext: AudioContext | null = null
  private oscillator: OscillatorNode | null = null
  private gainNode: GainNode | null = null
  private volume = 0.3
  private isPlaying = false

  constructor() {
    if (typeof window !== "undefined") {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
  }

  setVolume(volume: number): void {
    this.volume = Math.max(0.1, Math.min(1, volume))
    if (this.gainNode && this.isPlaying && this.audioContext) {
      this.gainNode.gain.cancelScheduledValues(this.audioContext.currentTime)
      this.gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime)
    }
  }

  getVolume(): number {
    return this.volume
  }

  async playTone(frequency: number, duration = 2000): Promise<void> {
    if (!this.audioContext) {
      console.error("[v0] AudioContext not available")
      return
    }

    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume()
    }

    this.stopTone()

    this.isPlaying = true

    this.oscillator = this.audioContext.createOscillator()
    this.gainNode = this.audioContext.createGain()

    this.oscillator.type = "sine"
    this.oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime)

    this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
    this.gainNode.gain.linearRampToValueAtTime(this.volume, this.audioContext.currentTime + 0.1)

    this.oscillator.connect(this.gainNode)
    this.gainNode.connect(this.audioContext.destination)

    this.oscillator.start(this.audioContext.currentTime)
    this.oscillator.stop(this.audioContext.currentTime + duration / 1000)

    return new Promise((resolve) => {
      setTimeout(() => {
        this.stopTone()
        resolve()
      }, duration)
    })
  }

  stopTone(): void {
    this.isPlaying = false

    if (this.oscillator) {
      try {
        this.oscillator.stop()
      } catch (e) {}
      this.oscillator.disconnect()
      this.oscillator = null
    }
    if (this.gainNode) {
      this.gainNode.disconnect()
      this.gainNode = null
    }
  }

  cleanup(): void {
    this.stopTone()
    if (this.audioContext) {
      this.audioContext.close()
      this.audioContext = null
    }
  }
}

export async function playAudioFile(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const audio = new Audio(url)
    audio.addEventListener("ended", () => resolve())
    audio.addEventListener("error", (e) => reject(e))
    audio.play().catch(reject)
  })
}

let currentUtterance: SpeechSynthesisUtterance | null = null

export async function speakText(text: string, volume = 1.0): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!("speechSynthesis" in window)) {
      console.error("[v0] Speech synthesis not available")
      reject(new Error("Speech synthesis not supported"))
      return
    }

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.9
    utterance.pitch = 1.0
    utterance.volume = Math.max(0, Math.min(1, volume))

    currentUtterance = utterance

    utterance.onend = () => {
      currentUtterance = null
      resolve()
    }
    utterance.onerror = (event) => {
      console.error("[v0] Speech synthesis error:", event)
      currentUtterance = null
      reject(event)
    }

    window.speechSynthesis.speak(utterance)
  })
}

export function stopSpeech(): void {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel()
    currentUtterance = null
  }
}

export function updateSpeechVolume(volume: number): void {
  if (currentUtterance) {
    currentUtterance.volume = Math.max(0, Math.min(1, volume))
  }
}
