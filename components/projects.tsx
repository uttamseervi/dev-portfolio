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
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ExternalLink, Github, X, Lightbulb, Wrench, AlertTriangle, Star } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  detailedDescription?: string
  keyFeatures?: string[]
  technicalHighlights?: string[]
  challenges?: string[]
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
                <DrawerContent className="max-w-full mx-auto sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] h-[98%]">
                  <div className="flex flex-col h-full">
                    <DrawerHeader className="px-6 pt-6 pb-4 border-b">
                      <div className="flex items-center justify-between">
                        <DrawerTitle className="text-2xl font-bold">{project.title}</DrawerTitle>
                        <DrawerClose asChild>
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </DrawerClose>
                      </div>
                      <DrawerDescription className="text-base mt-2">
                        {project.detailedDescription || project.description}
                      </DrawerDescription>
                    </DrawerHeader>

                    <ScrollArea className="flex-1 px-6">
                      <div className="py-4 space-y-6">
                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Wrench className="h-4 w-4" />
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-sm">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Project Image */}
                        {project.image && (
                          <div className="rounded-lg overflow-hidden border">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full max-h-[400px] object-contain "
                            />
                          </div>
                        )}

                        {/* Key Features */}
                        {project.keyFeatures && project.keyFeatures.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Star className="h-4 w-4" />
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {project.keyFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technical Highlights */}
                        {project.technicalHighlights && project.technicalHighlights.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Lightbulb className="h-4 w-4" />
                              Technical Highlights
                            </h4>
                            <ul className="space-y-2">
                              {project.technicalHighlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Challenges */}
                        {project.challenges && project.challenges.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4" />
                              Challenges Solved
                            </h4>
                            <ul className="space-y-2">
                              {project.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                                  <span>{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </ScrollArea>

                    <Separator />
                    
                    <DrawerFooter className="px-6 py-4 mb-6">
                      <div className="flex gap-3 justify-center sm:justify-start">
                        {project.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="h-4 w-4" />
                            View Code
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