// Comprehensive site content structure
// All editable content across the entire website

export interface SiteContent {
  // Global Navigation
  navigation: {
    brandName: string
    menuItems: {
      hearingHealth: string
      products: string
      services: string
      aboutUs: string
      contact: string
      resources: string
    }
    buttons: {
      bookAppointment: string
      login: string
      admin: string
    }
  }

  // Contact Information
  contact: {
    phone: string
    whatsapp: string
    email: string
    hours: string
  }

  // Home Page
  home: {
    hero: {
      title: string
      titleHighlight: string
      subtitle: string
      ctaButton1: string
      ctaButton2: string
    }
    whyChoose: {
      title: string
      subtitle: string
      card1Title: string
      card1Description: string
      card2Title: string
      card2Description: string
      card3Title: string
      card3Description: string
      card4Title: string
      card4Description: string
    }
    products: {
      title: string
      subtitle: string
      viewAllButton: string
      learnMoreButton: string
    }
    hearingTest: {
      title: string
      subtitle: string
      feature1: string
      feature2: string
      feature3: string
      ctaButton: string
    }
    brands: {
      title: string
      subtitle: string
    }
  }

  // Footer
  footer: {
    companyName: string
    companyDescription: string
    quickLinksTitle: string
    resourcesTitle: string
    contactTitle: string
    copyright: string
  }

  // Hearing Health Pages
  hearingHealth: {
    howWeHear: {
      title: string
      subtitle: string
    }
    hearingLoss: {
      title: string
      subtitle: string
    }
    tinnitus: {
      title: string
      subtitle: string
    }
  }

  // Products Page
  products: {
    title: string
    subtitle: string
    filterByCategory: string
    filterByBrand: string
    allCategories: string
    allBrands: string
  }

  // Services Page
  services: {
    title: string
    subtitle: string
  }

  // About Page
  about: {
    title: string
    subtitle: string
  }

  // Booking Page
  booking: {
    title: string
    subtitle: string
    formLabels: {
      name: string
      email: string
      phone: string
      date: string
      time: string
      message: string
      submitButton: string
    }
  }

  // Admin
  admin: {
    dashboard: {
      title: string
      subtitle: string
    }
    manageProducts: {
      title: string
      subtitle: string
      addButton: string
      editButton: string
      deleteButton: string
    }
    editContent: {
      title: string
      subtitle: string
      saveButton: string
      resetButton: string
    }
    settings: {
      title: string
      subtitle: string
    }
  }
}

export const defaultSiteContent: SiteContent = {
  navigation: {
    brandName: "Al-Barakat Hearing Care",
    menuItems: {
      hearingHealth: "Your Hearing Health",
      products: "Products",
      services: "Services",
      aboutUs: "About Us",
      contact: "Contact",
      resources: "Resources",
    },
    buttons: {
      bookAppointment: "Book Appointment",
      login: "Login",
      admin: "Admin",
    },
  },

  contact: {
    phone: "+20 1021454545",
    whatsapp: "201021454545",
    email: "info@albarakat-hearing.com",
    hours: "Sun-Thu: 9AM-8PM",
  },

  home: {
    hero: {
      title: "Experience Life in",
      titleHighlight: "Perfect Sound",
      subtitle:
        "Advanced hearing solutions tailored to your lifestyle. Rediscover the joy of clear conversations and the sounds you love.",
      ctaButton1: "Take Free Hearing Test",
      ctaButton2: "Book Appointment",
    },
    whyChoose: {
      title: "Why Choose Al-Barakat Hearing Care",
      subtitle: "We combine cutting-edge technology with personalized care to deliver the best hearing solutions.",
      card1Title: "Expert Audiologists",
      card1Description: "Certified professionals with years of experience in hearing care.",
      card2Title: "Premium Technology",
      card2Description: "Latest hearing aid technology from world-leading brands.",
      card3Title: "Personalized Care",
      card3Description: "Custom solutions tailored to your unique hearing needs.",
      card4Title: "Ongoing Support",
      card4Description: "Lifetime support and maintenance for your hearing devices.",
    },
    products: {
      title: "Our Product Range",
      subtitle: "Explore our comprehensive selection of hearing solutions designed for every lifestyle.",
      viewAllButton: "View All Products",
      learnMoreButton: "Learn More",
    },
    hearingTest: {
      title: "Take Our Free Online Hearing Test",
      subtitle:
        "Get a quick assessment of your hearing health in just 3 minutes. Receive instant results and personalized recommendations.",
      feature1: "Quick 3-minute test",
      feature2: "Professional audio quality",
      feature3: "Instant PDF report",
      ctaButton: "Start Hearing Test Now",
    },
    brands: {
      title: "Trusted Brands",
      subtitle: "We partner with world-leading hearing aid manufacturers to bring you the best technology.",
    },
  },

  footer: {
    companyName: "Al-Barakat Hearing Care",
    companyDescription: "Your trusted partner in hearing health and wellness.",
    quickLinksTitle: "Quick Links",
    resourcesTitle: "Resources",
    contactTitle: "Contact",
    copyright: "© 2025 Al-Barakat Hearing Care Centers. All rights reserved.",
  },

  hearingHealth: {
    howWeHear: {
      title: "How We Hear",
      subtitle: "Understanding the complex process of hearing and how sound travels through your ear.",
    },
    hearingLoss: {
      title: "Understanding Hearing Loss",
      subtitle: "Learn about the types, causes, and signs of hearing loss.",
    },
    tinnitus: {
      title: "Understanding Tinnitus",
      subtitle: "Managing ringing in the ears and finding relief.",
    },
  },

  products: {
    title: "Our Hearing Solutions",
    subtitle: "Discover the perfect hearing aid for your lifestyle and needs.",
    filterByCategory: "Filter by Category",
    filterByBrand: "Filter by Brand",
    allCategories: "All Categories",
    allBrands: "All Brands",
  },

  services: {
    title: "Our Services",
    subtitle: "Comprehensive hearing care services tailored to your needs.",
  },

  about: {
    title: "About Al-Barakat Hearing Care",
    subtitle: "Your trusted partner in hearing health for over a decade.",
  },

  booking: {
    title: "Book an Appointment",
    subtitle: "Schedule your consultation with our expert audiologists.",
    formLabels: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      date: "Preferred Date",
      time: "Preferred Time",
      message: "Additional Notes",
      submitButton: "Book Appointment",
    },
  },

  admin: {
    dashboard: {
      title: "Admin Dashboard",
      subtitle: "Manage your website content, products, and settings.",
    },
    manageProducts: {
      title: "Manage Products",
      subtitle: "Add, edit, or remove products from your catalog.",
      addButton: "Add Product",
      editButton: "Edit",
      deleteButton: "Delete",
    },
    editContent: {
      title: "Edit Website Content",
      subtitle: "Edit all text content across your entire website including navigation, footer, and all pages.",
      saveButton: "Save All Changes",
      resetButton: "Reset to Defaults",
    },
    settings: {
      title: "Settings",
      subtitle: "Manage your website settings and data.",
    },
  },
}
