"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
    children: React.ReactNode
    animation?: "bounce" | "spin" | "pulse" | "shake" | "wiggle"
    duration?: number
    delay?: number
}

const animations = {
    bounce: {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    },
    spin: {
        animate: {
            rotate: 360,
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "linear",
            },
        },
    },
    pulse: {
        animate: {
            scale: [1, 1.2, 1],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    },
    shake: {
        animate: {
            x: [0, -5, 5, -5, 5, 0],
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2,
            },
        },
    },
    wiggle: {
        animate: {
            rotate: [-10, 10, -10, 10, 0],
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2,
            },
        },
    },
}

export function AnimatedIcon({
    children,
    animation = "bounce",
    duration,
    delay,
    className,
    ...props
}: AnimatedIconProps) {
    const selectedAnimation = animations[animation]
    const customAnimation = {
        ...selectedAnimation,
        animate: {
            ...selectedAnimation.animate,
            transition: {
                ...selectedAnimation.animate.transition,
                duration: duration || selectedAnimation.animate.transition.duration,
                delay: delay || 0,
            },
        },
    }

    return (
        <motion.div
            className={cn("inline-flex", className)}
            {...customAnimation}
            {...props}
        >
            {children}
        </motion.div>
    )
} 