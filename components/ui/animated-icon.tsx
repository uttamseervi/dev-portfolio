"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedIconProps extends Omit<HTMLMotionProps<"div">, "animate"> {
    children: React.ReactNode
    className?: string
}

export function AnimatedIcon({
    children,
    className,
    ...props
}: AnimatedIconProps) {
    return (
        <motion.div
            className={cn("inline-flex", className)}
            {...props}
        >
            {children}
        </motion.div>
    )
} 