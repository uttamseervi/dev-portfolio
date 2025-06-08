"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function Spotlight() {
    const { theme } = useTheme()
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = React.useState(0)

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseEnter = () => {
            setOpacity(1)
        }

        const handleMouseLeave = () => {
            setOpacity(0)
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseenter", handleMouseEnter)
        window.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseenter", handleMouseEnter)
            window.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    if (theme !== "dark") return null

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
            style={{ opacity }}
        >
            <div
                className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-3xl"
                style={{
                    left: position.x,
                    top: position.y,
                }}
            />
        </div>
    )
} 