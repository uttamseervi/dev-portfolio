import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface HeroProps {
  name: string
  status: string
  availability: boolean
}

export default function Hero({ name, status, availability }: HeroProps) {
  const roles = ["Full-Stack Developer", "AI Enthusiast", "Blockchain Developer", "Tech Explorer"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    // Scroll the window to the top when the page reloads

    const timer = setTimeout(() => {
      const i = loopNum % roles.length
      const fullText = roles[i]

      setDisplayText(
        isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1),
      )

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, roles, typingSpeed])

  return (
    <section className="py-12">
      <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 orange-glow">
        <CardContent className="p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
                  {name}
                </h1>
                {availability && (
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
                  </div>
                )}
              </div>
              <div className="h-8 mt-2">
                <p className="text-xl md:text-2xl text-muted-foreground">
                  <span className="text-gray-900 dark:text-gray-100">{displayText}</span>
                  <span className="text-gray-900 dark:text-gray-100 animate-pulse">|</span>
                </p>
              </div>
              <p className="text-md mt-2 text-muted-foreground">
                Crafting digital experiences with code and creativity
              </p>
            </div>
            <Badge variant="outline" className="px-3 py-1 text-sm border-gray-500/50 bg-gray-500/10">
              {status}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
