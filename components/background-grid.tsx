"use client"

import { useEffect, useRef } from "react"

export default function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid()
    }

    const drawGrid = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid settings
      const gridSize = 40
      const gridOpacity = 0.07

      ctx.strokeStyle = `rgba(var(--primary-rgb), ${gridOpacity})`
      ctx.lineWidth = 0.5

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Add some glowing dots at intersections
      ctx.fillStyle = `rgba(var(--primary-rgb), 0.4)`

      for (let x = 0; x <= canvas.width; x += gridSize * 4) {
        for (let y = 0; y <= canvas.height; y += gridSize * 4) {
          const randomSize = Math.random() * 2 + 1
          ctx.beginPath()
          ctx.arc(x, y, randomSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-70" style={{ pointerEvents: "none" }} />
}

