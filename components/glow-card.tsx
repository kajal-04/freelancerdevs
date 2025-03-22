import type React from "react"
import { cn } from "@/lib/utils"

interface GlowCardProps {
  className?: string
  children: React.ReactNode
}

export default function GlowCard({ className, children }: GlowCardProps) {
  return (
    <div className={cn("group relative rounded-xl overflow-hidden", className)}>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      {/* Border glow */}
      <div className="absolute inset-px rounded-xl bg-gradient-to-r from-primary/20 to-primary-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative rounded-xl bg-card p-6 h-full z-10 border">{children}</div>
    </div>
  )
}

