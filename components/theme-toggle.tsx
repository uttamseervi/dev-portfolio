"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full hover:rose-glow-sm relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-rose-500/20 to-rose-500/0 animate-pulse-slow" />
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 animate-float" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 animate-float" style={{ animationDelay: '0.5s' }} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
