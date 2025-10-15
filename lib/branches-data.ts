export interface Branch {
  id: string
  name: string
  address: string
  city: string
  phone: string
  email: string
  hours: string
  mapUrl: string
}

export const branches: Branch[] = [
  {
    id: "riyadh-main",
    name: "Al-Barakat Hearing Care - Riyadh Main Branch",
    address: "King Fahd Road, Al Olaya District",
    city: "Riyadh",
    phone: "+966 11 234 5678",
    email: "riyadh@albarakat-hearing.com",
    hours: "Sun-Thu: 9:00 AM - 8:00 PM, Sat: 10:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "jeddah",
    name: "Al-Barakat Hearing Care - Jeddah",
    address: "Prince Mohammed Bin Abdulaziz Road, Al Andalus District",
    city: "Jeddah",
    phone: "+966 12 345 6789",
    email: "jeddah@albarakat-hearing.com",
    hours: "Sun-Thu: 9:00 AM - 8:00 PM, Sat: 10:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "dammam",
    name: "Al-Barakat Hearing Care - Dammam",
    address: "King Saud Road, Al Faisaliyah District",
    city: "Dammam",
    phone: "+966 13 456 7890",
    email: "dammam@albarakat-hearing.com",
    hours: "Sun-Thu: 9:00 AM - 8:00 PM, Sat: 10:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com",
  },
  {
    id: "makkah",
    name: "Al-Barakat Hearing Care - Makkah",
    address: "Ibrahim Al Khalil Street, Al Aziziyah District",
    city: "Makkah",
    phone: "+966 12 567 8901",
    email: "makkah@albarakat-hearing.com",
    hours: "Sun-Thu: 9:00 AM - 8:00 PM, Sat: 10:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com",
  },
]
