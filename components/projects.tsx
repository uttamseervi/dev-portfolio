"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  image?: string
  github?: string
  link?: string
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const [openDrawer, setOpenDrawer] = useState<string | null>(null)

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-fr gap-4 md:gap-6">
        {projects.map((project, index) => {
          // Define different sizes for the bento grid
          const sizes = [
            "md:col-span-3 md:row-span-2", // Large
            "md:col-span-3", // Medium horizontal
            "md:col-span-2", // Medium
            "md:col-span-2", // Medium
            "md:col-span-4", // Wide
            "md:col-span-2", // Medium
          ]

          // Get size for this project
          const size = sizes[index % sizes.length]

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={size}
            >
              <Drawer open={openDrawer === project.id} onOpenChange={(open) => setOpenDrawer(open ? project.id : null)}>
                <DrawerTrigger asChild>
                  <Card className="h-full cursor-pointer hover:border-primary/50 transition-all duration-300 hover:orange-glow orange-glow-sm">
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.stack.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.stack.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </DrawerTrigger>
                <DrawerContent className="max-w-full mx-auto sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] h-[95%]">
                  <div className="p-4 max-w-3xl mx-auto">
                    <DrawerHeader className="text-left p-0">
                      <div className="flex items-center justify-between">
                        <DrawerTitle className="text-xl">{project.title}</DrawerTitle>
                        <DrawerClose asChild>
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </DrawerClose>
                      </div>
                      <DrawerDescription>{project.description}</DrawerDescription>
                    </DrawerHeader>

                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {project.image && (
                        <div className="my-4 rounded-lg overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="md:w-[850px] md:h-[400px] object-contain"
                          />
                        </div>
                      )}
                    </div>

                    <DrawerFooter className="px-0 pt-2">
                      <div className="flex gap-2">
                        {project.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </Button>
                        )}
                        {project.link && (
                          <Button
                            size="sm"
                            className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                            onClick={() => window.open(project.link, "_blank")}
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
