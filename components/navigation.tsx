"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { PenLine } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

const categories = [
  { name: 'Fashion', href: '/category/fashion' },
  { name: 'Lifestyle', href: '/category/lifestyle' },
  { name: 'Tech', href: '/category/tech' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <PenLine className="h-6 w-6" />
          <span className="font-bold">H-Tech Blogs</span>
        </Link>
        <nav className="flex items-center space-x-6 ml-6">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === category.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {category.name}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}