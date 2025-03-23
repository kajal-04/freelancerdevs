import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  text: string
  className?: string
}

export default function AnimatedGradientText({ text, className }: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-foreground to-primary bg-[length:200%_auto] animate-gradient",
        className,
      )}
    >
      {text}
    </span>
  )
}

