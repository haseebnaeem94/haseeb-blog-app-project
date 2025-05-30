import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const featuredPosts = [
  {
    id: 1,
    title: "Spring Fashion Trends 2024",
    excerpt: "Discover the latest trends that will dominate the fashion scene this spring.",
    category: "fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    date: "December 25, 2024"
  },
  {
    id: 2,
    title: "Mindful Living: A Guide to Better Life",
    excerpt: "Learn how to incorporate mindfulness into your daily routine.",
    category: "lifestyle",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    date: "December 26, 2024"
  },
  {
    id: 3,
    title: "The Future of AI in 2024",
    excerpt: "Exploring the latest developments in artificial intelligence.",
    category: "tech",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    date: "December 27, 2024"
  }
]

export default function Home() {
  return (
    <div className="container py-8">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to Haseeb-Tech Blogs
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Discover trending topics in fashion, lifestyle, and technology
          </p>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge>{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  )
}
