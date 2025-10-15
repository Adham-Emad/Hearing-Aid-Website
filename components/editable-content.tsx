"use client"

import { useState, useEffect } from "react"
import { checkAdminAuth, getContent, updateContent } from "@/lib/content-store"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Pencil, Check, X } from "lucide-react"

interface EditableContentProps {
  id: string
  defaultContent: string
  type?: "text" | "title" | "subtitle"
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function EditableContent({
  id,
  defaultContent,
  type = "text",
  className = "",
  as: Component = "p",
}: EditableContentProps) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [content, setContent] = useState(defaultContent)
  const [editValue, setEditValue] = useState(defaultContent)

  useEffect(() => {
    setIsAdmin(checkAdminAuth())
    const storedContent = getContent(id, defaultContent)
    setContent(storedContent)
    setEditValue(storedContent)
  }, [id, defaultContent])

  const handleSave = () => {
    updateContent(id, editValue)
    setContent(editValue)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditValue(content)
    setIsEditing(false)
  }

  if (!isAdmin) {
    return <Component className={className}>{content}</Component>
  }

  if (isEditing) {
    return (
      <div className="relative group">
        {type === "text" ? (
          <Textarea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className={`${className} min-h-[100px]`}
            autoFocus
          />
        ) : (
          <Input value={editValue} onChange={(e) => setEditValue(e.target.value)} className={className} autoFocus />
        )}
        <div className="mt-2 flex gap-2">
          <Button size="sm" onClick={handleSave}>
            <Check className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel}>
            <X className="h-4 w-4 mr-1" />
            Cancel
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative group inline-block w-full">
      <Component className={className}>{content}</Component>
      <Button
        size="sm"
        variant="outline"
        className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-transparent"
        onClick={() => setIsEditing(true)}
      >
        <Pencil className="h-3 w-3" />
      </Button>
    </div>
  )
}
