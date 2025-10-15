"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"
import { useAuth } from "@/lib/auth-context"
import { EditableText } from "./editable-text"

interface PurchaseContactModalProps {
  product: Product | null
  open: boolean
  onClose: () => void
  content?: {
    title: string
    subtitle: string
    nameLabel: string
    emailLabel: string
    phoneLabel: string
    messageLabel: string
    namePlaceholder: string
    emailPlaceholder: string
    phonePlaceholder: string
    messagePlaceholder: string
    cancelButton: string
    submitButton: string
  }
  onContentChange?: (field: string, value: string) => void
}

export function PurchaseContactModal({
  product,
  open,
  onClose,
  content = {
    title: "Contact for Purchase",
    subtitle: "Fill out the form below and we'll contact you soon.",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    messageLabel: "Additional Message (Optional)",
    namePlaceholder: "Your full name",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "+1 (555) 123-4567",
    messagePlaceholder: "Any questions or special requirements?",
    cancelButton: "Cancel",
    submitButton: "Submit Request",
  },
  onContentChange,
}: PurchaseContactModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { isAdmin } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name || !email || !phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Request Submitted!",
        description: "Thank you! We'll contact you soon to discuss your purchase.",
      })

      // Clear form and close
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
      onClose()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!product) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            <EditableText
              value={content.title}
              onChange={(value) => onContentChange?.("title", value)}
              isEditable={isAdmin}
            />
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            <EditableText
              value={`Interested in ${product.name}? ${content.subtitle}`}
              onChange={(value) => {
                const newSubtitle = value.replace(`Interested in ${product.name}? `, "")
                onContentChange?.("subtitle", newSubtitle)
              }}
              isEditable={isAdmin}
            />
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              <EditableText
                value={content.nameLabel}
                onChange={(value) => onContentChange?.("nameLabel", value)}
                isEditable={isAdmin}
              />{" "}
              <span className="text-destructive">*</span>
            </label>
            <Input
              placeholder={content.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              <EditableText
                value={content.emailLabel}
                onChange={(value) => onContentChange?.("emailLabel", value)}
                isEditable={isAdmin}
              />{" "}
              <span className="text-destructive">*</span>
            </label>
            <Input
              type="email"
              placeholder={content.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              <EditableText
                value={content.phoneLabel}
                onChange={(value) => onContentChange?.("phoneLabel", value)}
                isEditable={isAdmin}
              />{" "}
              <span className="text-destructive">*</span>
            </label>
            <Input
              type="tel"
              placeholder={content.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              <EditableText
                value={content.messageLabel}
                onChange={(value) => onContentChange?.("messageLabel", value)}
                isEditable={isAdmin}
              />
            </label>
            <Textarea
              placeholder={content.messagePlaceholder}
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              <EditableText
                value={content.cancelButton}
                onChange={(value) => onContentChange?.("cancelButton", value)}
                isEditable={isAdmin}
              />
            </Button>
            <Button type="submit" className="flex-1" disabled={isSubmitting}>
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <EditableText
                  value={content.submitButton}
                  onChange={(value) => onContentChange?.("submitButton", value)}
                  isEditable={isAdmin}
                />
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
