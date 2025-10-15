"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Pencil } from "lucide-react"
import { useAdminMode } from "@/lib/admin-mode-context"
import { getEditableContent, saveEditableContent } from "@/lib/inline-content-store"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EditableTextProps {
  contentKey: string
  defaultValue: string
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  className?: string
  multiline?: boolean
}

export function EditableText({
  contentKey,
  defaultValue,
  as: Component = "span",
  className = "",
  multiline = false,
}: EditableTextProps) {
  const { isAdminMode } = useAdminMode()
  const [content, setContent] = useState(defaultValue)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editValue, setEditValue] = useState(defaultValue)

  useEffect(() => {
    // Load content from localStorage
    const storedContent = getEditableContent(contentKey, defaultValue)
    setContent(storedContent)
    setEditValue(storedContent)
  }, [contentKey, defaultValue])

  const handleEdit = (e: React.MouseEvent) => {
    if (isAdminMode) {
      e.preventDefault()
      e.stopPropagation()
      setIsDialogOpen(true)
    }
  }

  const handleSave = () => {
    saveEditableContent(contentKey, editValue)
    setContent(editValue)
    setIsDialogOpen(false)

    // Trigger a custom event to notify other components
    window.dispatchEvent(new Event("contentUpdated"))
  }

  const handleCancel = () => {
    setEditValue(content)
    setIsDialogOpen(false)
  }

  if (!isAdminMode) {
    return <Component className={className}>{content}</Component>
  }

  return (
    <>
      <span className="relative inline-block group">
        <Component className={className}>{content}</Component>
        <button
          onClick={handleEdit}
          className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary/20"
          title={`Edit: ${contentKey}`}
        >
          <Pencil className="w-3 h-3" />
        </button>
      </span>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Edit Content</DialogTitle>
            <DialogDescription>
              Editing: <code className="text-xs bg-muted px-1 py-0.5 rounded">{contentKey}</code>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="content">Content</Label>
              {multiline ? (
                <Textarea
                  id="content"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  rows={5}
                  className="resize-none"
                />
              ) : (
                <Input id="content" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
