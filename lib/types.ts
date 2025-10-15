export interface Product {
  id: string
  name: string
  category: string
  description: string
  price: string
  image: string
  features: string[]
  is3D?: boolean
}

export interface SiteContent {
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  about: {
    title: string
    description: string
    features: Array<{
      title: string
      description: string
    }>
  }
  products: {
    title: string
    subtitle: string
  }
  contact: {
    title: string
    subtitle: string
    phone: string
    email: string
    address: string
  }
  footer: {
    brandName: string
    tagline: string
    copyright: string
  }
  purchaseModal: {
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
}

export interface HearingTestQuestion {
  id: string
  question: string
  audioUrl?: string
  options: string[]
  correctAnswer: number
}

export interface HearingTestResult {
  score: number
  totalQuestions: number
  recommendations: string[]
  date: Date
}

export interface Branch {
  id: string
  name: string
  address: string
  phone: string
  email: string
  hours: string
  mapUrl?: string
}

export interface ProductCategory {
  id: string
  name: string
  description: string
  image: string
}
