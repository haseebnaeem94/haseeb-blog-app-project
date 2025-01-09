"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const posts = {
  1: {
    title: "Spring Fashion Trends 2024",
    content: `As we step into spring 2024, the fashion world is blooming with exciting new trends. This season brings a fresh perspective on style, combining comfort with sophistication.

    Key trends include:
    - Pastel color palettes
    - Sustainable materials
    - Statement accessories
    - Minimalist designs

    The fashion industry continues to evolve, with a stronger focus on sustainability and ethical production methods.`,
    category: "fashion",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    date: "December 25, 2024"
  },
  2: {
    title: "Mindful Living: A Guide to Better Life",
    content: `In today's fast-paced world, it's easy to get caught up in the hustle and bustle of everyday life. Mindful living offers a way to slow down, be present, and find peace in the moment.

    Tips for mindful living:
    - Practice meditation
    - Spend time in nature
    - Disconnect from technology
    - Cultivate gratitude

    By incorporating mindfulness into your daily routine, you can reduce stress, improve mental clarity, and enhance overall well-being.`,
    category: "lifestyle",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    date: "December 26, 2024"
  },
  3: {
    title: "The Future of AI in 2024",
    content: `Artificial intelligence (AI) continues to be a driving force in technological advancements, with new developments shaping the future of AI in 2024.

    Key areas of focus include:
    - Machine learning
    - Natural language processing
    - Robotics
    - Autonomous vehicles

    As AI technologies become more sophisticated, they have the potential to revolutionize industries and improve our daily lives.`,
    category: "tech",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    date: "December 27, 2024"
  
},
}

interface Comment {
  id: number
  username: string
  content: string
  timestamp: string
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts[params.id as unknown as keyof typeof posts]
  const [comments, setComments] = useState<Comment[]>([])
  const [username, setUsername] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim() || !comment.trim()) return

    const newComment: Comment = {
      id: comments.length + 1,
      username,
      content: comment,
      timestamp: new Date().toLocaleString()
    }

    setComments([...comments, newComment])
    setComment("")
  }

  if (!post) return <div>Post not found</div>

  return (
    <div className="container py-8">
      <article className="prose prose-stone mx-auto dark:prose-invert">
        <div className="aspect-video relative mb-6">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center gap-4 mb-6">
          <Badge>{post.category}</Badge>
          <span className="text-sm text-muted-foreground">{post.date}</span>
        </div>
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <div className="whitespace-pre-wrap">{post.content}</div>
      </article>

      <div className="max-w-2xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">Comments</h2>
        
        <Card className="p-6">
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div>
              <Input
                placeholder="Your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Post Comment</Button>
          </form>
        </Card>

        <div className="space-y-4 mt-8">
          {comments.map((comment) => (
            <Card key={comment.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{comment.username}</h3>
                <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
              </div>
              <p className="text-muted-foreground">{comment.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}