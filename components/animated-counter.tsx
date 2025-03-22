"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export default function AnimatedCounter({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      const percentage = Math.min(progress / duration, 1)
      const currentCount = Math.floor(percentage * end)

      setCount(currentCount)

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(startAnimation)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isInView])

  return (
    <div ref={ref} className="text-4xl font-bold text-primary">
      {count}
      {suffix}
    </div>
  )
}

