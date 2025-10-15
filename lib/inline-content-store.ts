"use client"

// Store for inline editable content
const CONTENT_STORAGE_KEY = "inline_editable_content"

export interface EditableContent {
  [key: string]: string
}

export function getEditableContent(key: string, defaultValue: string): string {
  if (typeof window === "undefined") return defaultValue

  try {
    const stored = localStorage.getItem(CONTENT_STORAGE_KEY)
    if (!stored) return defaultValue

    const content: EditableContent = JSON.parse(stored)
    return content[key] ?? defaultValue
  } catch (error) {
    console.error("Error reading editable content:", error)
    return defaultValue
  }
}

export function saveEditableContent(key: string, value: string): void {
  if (typeof window === "undefined") return

  try {
    const stored = localStorage.getItem(CONTENT_STORAGE_KEY)
    const content: EditableContent = stored ? JSON.parse(stored) : {}

    content[key] = value
    localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content))
  } catch (error) {
    console.error("Error saving editable content:", error)
  }
}

export function getAllEditableContent(): EditableContent {
  if (typeof window === "undefined") return {}

  try {
    const stored = localStorage.getItem(CONTENT_STORAGE_KEY)
    return stored ? JSON.parse(stored) : {}
  } catch (error) {
    console.error("Error reading all editable content:", error)
    return {}
  }
}

export function clearAllEditableContent(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(CONTENT_STORAGE_KEY)
}
