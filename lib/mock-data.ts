import type { Product, SiteContent } from "./types"

export const initialProducts: Product[] = [
  {
    id: "1",
    name: "ClearSound Pro",
    category: "Premium",
    description: "Our flagship hearing aid with advanced noise cancellation and crystal-clear sound quality.",
    price: "$2,999",
    image: "/modern-premium-behind-ear-hearing-aid-silver-metal.jpg",
    features: ["AI Noise Reduction", "Bluetooth Connectivity", "Rechargeable Battery", "360° Sound"],
    is3D: true,
  },
  {
    id: "2",
    name: "ComfortFit Mini",
    category: "Compact",
    description: "Discreet and comfortable, perfect for everyday wear with exceptional sound clarity.",
    price: "$1,899",
    image: "/small-in-ear-hearing-aid-beige-skin-tone.jpg",
    features: ["Ultra-Compact Design", "All-Day Comfort", "Water Resistant", "Easy Controls"],
  },
  {
    id: "3",
    name: "ActiveLife Sport",
    category: "Active",
    description: "Designed for active lifestyles with sweat resistance and secure fit technology.",
    price: "$2,499",
    image: "/sporty-waterproof-hearing-aid-black-rugged.jpg",
    features: ["Sweat & Water Resistant", "Secure Fit", "Wind Noise Reduction", "Long Battery Life"],
    is3D: true,
  },
  {
    id: "4",
    name: "EconoHear Basic",
    category: "Essential",
    description: "Affordable quality hearing solution with essential features for daily use.",
    price: "$999",
    image: "/basic-affordable-hearing-aid-tan-simple.jpg",
    features: ["Clear Sound Quality", "Easy to Use", "Reliable Performance", "Affordable"],
  },
  {
    id: "5",
    name: "SmartConnect Plus",
    category: "Premium",
    description: "Smart hearing aid with app control and personalized sound profiles.",
    price: "$3,299",
    image: "/smart-hearing-aid-with-bluetooth-modern-white.jpg",
    features: ["App Control", "Custom Sound Profiles", "Health Tracking", "Voice Assistant"],
    is3D: true,
  },
  {
    id: "6",
    name: "SilverCare Senior",
    category: "Senior",
    description: "Specially designed for seniors with large controls and enhanced clarity.",
    price: "$1,599",
    image: "/senior-friendly-hearing-aid-large-buttons-beige.jpg",
    features: ["Large Controls", "Enhanced Speech Clarity", "Simple Operation", "Comfortable Fit"],
  },
  {
    id: "7",
    name: "InvisiFit Nano",
    category: "Premium",
    description: "Nearly invisible in-canal hearing aid with premium sound processing technology.",
    price: "$3,499",
    image: "/invisible-in-canal-hearing-aid-tiny-discreet.jpg",
    features: ["Virtually Invisible", "Custom Fit", "Advanced DSP", "Automatic Adjustments"],
    is3D: true,
  },
]

export const initialContent: SiteContent = {
  hero: {
    title: "Hear Life Clearly",
    subtitle: "Experience the world in perfect sound with our advanced hearing solutions",
    cta: "Explore Products",
  },
  about: {
    title: "Why Choose Us",
    description:
      "We combine cutting-edge technology with compassionate care to deliver hearing solutions that transform lives. Our products are designed with you in mind.",
    features: [
      {
        title: "Patient-Centered Care",
        description: "Your comfort and satisfaction are our top priorities",
      },
      {
        title: "Advanced Technology",
        description: "Cutting-edge hearing solutions with AI-powered features",
      },
      {
        title: "Quality Guaranteed",
        description: "Premium products backed by comprehensive warranties",
      },
      {
        title: "Expert Support",
        description: "Professional guidance every step of your journey",
      },
    ],
  },
  products: {
    title: "Our Products",
    subtitle: "Discover our range of advanced hearing solutions designed for every lifestyle",
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Have questions? We're here to help you find the perfect hearing solution",
    phone: "+1 (555) 123-4567",
    email: "support@hearclear.com",
    address: "123 Healthcare Ave\nMedical District, CA 90210",
  },
  footer: {
    brandName: "HearClear",
    tagline: "Advanced hearing solutions for a better life",
    copyright: "© 2025 HearClear. All rights reserved.",
  },
  purchaseModal: {
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
}
