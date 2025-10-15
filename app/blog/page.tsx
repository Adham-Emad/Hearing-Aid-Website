import type { Metadata } from "next"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, User, Tag, TrendingUp, Heart, Brain, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog - Hearing Health Insights | Barakat Hearing Care",
  description:
    "Expert articles, tips, and insights on hearing health, hearing aids, and living well with hearing loss.",
}

const featuredPost = {
  id: "understanding-hearing-loss-2024",
  title: "Understanding Hearing Loss: A Comprehensive Guide for 2024",
  excerpt:
    "Discover the latest insights on hearing loss types, causes, prevention strategies, and modern treatment options that can transform your quality of life.",
  image: "/person-consulting-audiologist-modern-clinic.jpg",
  category: "Hearing Health",
  categoryColor: "bg-blue-500",
  author: "Dr. Sarah Ahmed",
  date: "March 15, 2024",
  readTime: "8 min read",
  featured: true,
}

const blogPosts = [
  {
    id: "top-hearing-aids-2024",
    title: "10 Best Hearing Aids of 2024: Expert Reviews and Comparisons",
    excerpt:
      "Our comprehensive review of the latest hearing aid technology, featuring detailed comparisons of top models from leading manufacturers.",
    image: "/modern-hearing-aids-display.jpg",
    category: "Product Reviews",
    categoryColor: "bg-teal-500",
    author: "Ahmed Hassan",
    date: "March 12, 2024",
    readTime: "12 min read",
  },
  {
    id: "hearing-aid-maintenance",
    title: "Essential Hearing Aid Maintenance: Tips for Longevity",
    excerpt:
      "Learn professional cleaning techniques and daily care routines that will extend the life of your hearing aids and ensure optimal performance.",
    image: "/cleaning-hearing-aid-tools.jpg",
    category: "Care Tips",
    categoryColor: "bg-amber-500",
    author: "Fatima Ali",
    date: "March 10, 2024",
    readTime: "6 min read",
  },
  {
    id: "bluetooth-hearing-aids",
    title: "Bluetooth Hearing Aids: Connecting Your World",
    excerpt:
      "Explore how Bluetooth-enabled hearing aids are revolutionizing connectivity, allowing seamless streaming from phones, TVs, and smart devices.",
    image: "/bluetooth-hearing-aid-smartphone.jpg",
    category: "Technology",
    categoryColor: "bg-purple-500",
    author: "Mohamed Khalil",
    date: "March 8, 2024",
    readTime: "7 min read",
  },
  {
    id: "tinnitus-management",
    title: "Living with Tinnitus: Effective Management Strategies",
    excerpt:
      "Practical advice and proven techniques for managing tinnitus symptoms and improving your daily quality of life.",
    image: "/person-peaceful-meditation-quiet.jpg",
    category: "Hearing Health",
    categoryColor: "bg-blue-500",
    author: "Dr. Sarah Ahmed",
    date: "March 5, 2024",
    readTime: "9 min read",
  },
  {
    id: "hearing-loss-children",
    title: "Recognizing Hearing Loss in Children: A Parent's Guide",
    excerpt:
      "Early detection is crucial. Learn the warning signs of hearing loss in children and when to seek professional evaluation.",
    image: "/child-hearing-test-audiologist.jpg",
    category: "Family Health",
    categoryColor: "bg-pink-500",
    author: "Layla Ibrahim",
    date: "March 3, 2024",
    readTime: "8 min read",
  },
  {
    id: "workplace-hearing-protection",
    title: "Protecting Your Hearing in Noisy Work Environments",
    excerpt:
      "Essential strategies and equipment recommendations for preventing noise-induced hearing loss in industrial and construction settings.",
    image: "/worker-ear-protection-construction.jpg",
    category: "Prevention",
    categoryColor: "bg-orange-500",
    author: "Ahmed Hassan",
    date: "March 1, 2024",
    readTime: "6 min read",
  },
]

const categories = [
  { name: "All Posts", count: 24, icon: TrendingUp },
  { name: "Hearing Health", count: 8, icon: Heart },
  { name: "Technology", count: 6, icon: Brain },
  { name: "Care Tips", count: 5, icon: Shield },
  { name: "Product Reviews", count: 5, icon: Tag },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-teal-500/10 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Expert Insights</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Hearing Health Blog</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Expert articles, practical tips, and the latest insights on hearing health, technology, and living your
              best life with better hearing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">Featured Article</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-teal-500" />
          </div>

          <Card className="group overflow-hidden border-2 transition-all hover:shadow-2xl animate-fade-in-up">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className={`absolute left-4 top-4 ${featuredPost.categoryColor} text-white`}>
                  {featuredPost.category}
                </Badge>
              </div>
              <CardContent className="flex flex-col justify-center p-8 lg:p-12">
                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h3 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl">{featuredPost.title}</h3>
                <p className="mb-6 text-lg text-muted-foreground">{featuredPost.excerpt}</p>
                <Button size="lg" className="group w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="border-y bg-muted/30 py-8">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Icon className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="mb-2 text-3xl font-bold">Latest Articles</h2>
            <p className="text-muted-foreground">Stay informed with our latest insights and expert advice</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="group flex flex-col overflow-hidden transition-all hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className={`absolute left-4 top-4 ${post.categoryColor} text-white`}>{post.category}</Badge>
                </div>
                <CardHeader>
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold leading-tight transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center animate-fade-in-up">
            <Button size="lg" variant="outline">
              Load More Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t bg-gradient-to-br from-primary/5 to-teal-500/5 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="overflow-hidden border-2 animate-fade-in-up">
            <CardContent className="p-8 text-center md:p-12">
              <div className="mx-auto max-w-2xl">
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4 animate-float">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">Stay Updated on Hearing Health</h2>
                <p className="mb-8 text-lg text-muted-foreground">
                  Subscribe to our newsletter for expert tips, product updates, and exclusive insights delivered to your
                  inbox monthly.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-lg border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary sm:w-80"
                  />
                  <Button size="lg" className="group">
                    Subscribe
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  No spam. Unsubscribe anytime. Your privacy is important to us.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
