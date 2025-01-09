import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"

const categoryPosts = {
  fashion: [
    {
      id: 1,
      title: "Spring Fashion Trends 2024",
      excerpt: "Discover the latest trends that will dominate the fashion scene this spring.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      date: "December 25, 2024"
    },
    
  ],
  lifestyle: [
    {
      id: 2,
      title: "Mindful Living: A Guide to Better Life",
      excerpt: "Learn how to incorporate mindfulness into your daily routine.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      date: "December 26, 2024"
    },
    
  ],
  tech: [
    {
      id: 3,
      title: "The Future of AI in 2024",
      excerpt: "Exploring the latest developments in artificial intelligence.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      date: "December 27, 2024"
    },
    
  ],
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const posts = categoryPosts[params.slug as keyof typeof categoryPosts] || []
  const categoryTitle = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">{categoryTitle}</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
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
                  <Badge>{params.slug}</Badge>
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
      </div>
    </div>
  )
}