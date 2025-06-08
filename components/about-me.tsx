"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Code, Zap, Trophy, Coffee, Gamepad2, BookOpen } from "lucide-react"

interface AboutMeProps {
  about: string
}

export default function AboutMe({ about }: AboutMeProps) {
  const resumeURL = "https://drive.google.com/file/d/1Iopr-MZdNGWdHOlpAhOkyixZKGsC7EXn/preview" // Replace with actual hosted resume link

  const personalInterests = [
    { icon: Code, text: "Building side projects", color: "bg-blue-500" },
    { icon: BookOpen, text: "Reading tech blogs", color: "bg-green-500" },
    { icon: Gamepad2, text: "Gaming", color: "bg-purple-500" },
    { icon: Coffee, text: "Coffee enthusiast", color: "bg-amber-600" }
  ]

  const currentFocus = [
    "Exploring advanced Web3 development",
    "Learning system design patterns",
    "Exploring AI",
    "Building scalable applications"
  ]

  const achievements = [
    "8.54 CGPA in Information Science",
    "Multiple full-stack projects deployed",
    "Experience with blockchain development",
    "Proficient in modern tech stacks"
  ]

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main About Card */}
        <Card className="rose-glow-sm lg:col-span-2 hover:shadow-[0_0_30px_rgba(225,29,72,0.3)] transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-rose-500/50 to-transparent animate-pulse-slow" />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 animate-float hover:scale-110 transition-transform duration-500" />
              Who I Am
            </CardTitle>
            <CardDescription>A bit about my background and what drives me</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Uttam Seervi, a passionate and focused developer currently in my 6th semester at BMS College of
              Engineering, pursuing Information Science. My CGPA till the 5th semester stands at 8.54. I'm driven by a
              deep interest in development and Web3, and I'm actively looking for opportunities to intern, contribute, and
              grow in real-world tech environments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From crafting end-to-end MERN stacks to deploying blockchain-based DApps, I enjoy solving problems and
              building systems that matter. I believe in learning by doing and love to experiment with new technologies
              that push the boundaries of what's possible on the web.
            </p>
          </CardContent>
        </Card>

        {/* Current Focus */}
        <Card className="hover:shadow-[0_0_25px_rgba(225,29,72,0.25)] transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-rose-500/5 animate-ripple" />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-rose-500 animate-pulse-slow hover:rotate-12 transition-transform duration-500" />
              Currently Exploring
            </CardTitle>
            <CardDescription>What I'm learning and working on right now</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {currentFocus.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 animate-pulse-slow" style={{ animationDelay: `${index * 0.2}s` }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="hover:shadow-[0_0_25px_rgba(225,29,72,0.25)] transition-shadow duration-300 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-rose-500/5 rounded-full animate-water-drop" />
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-rose-500/5 rounded-full animate-water-drop" style={{ animationDelay: '0.5s' }} />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-rose-500 animate-float hover:scale-110 transition-transform duration-500" />
              Key Highlights
            </CardTitle>
            <CardDescription>Some of my notable achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0 animate-pulse-slow" style={{ animationDelay: `${index * 0.2}s` }} />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Personal Interests */}
        <Card className="hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] transition-shadow duration-300 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-amber-600 animate-float hover:scale-110 transition-transform duration-500" />
              Beyond Code
            </CardTitle>
            <CardDescription>What I enjoy doing when I'm not programming</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {personalInterests.map((interest, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-2 px-3 py-2 text-sm hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-shadow duration-500 group"
                >
                  <interest.icon className="h-4 w-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  {interest.text}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              When I'm not coding, you'll find me exploring the latest tech trends, contributing to open source,
              or unwinding with a good game. I believe in maintaining a healthy work-life balance while staying
              curious about emerging technologies.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Resume Preview Drawer */}
      <div className="mt-6">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="default" className="flex items-center gap-2 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-shadow duration-500">
              <ExternalLink className="h-4 w-4 hover:rotate-12 transition-transform duration-500" />
              Preview Resume
            </Button>
          </DrawerTrigger>

          <DrawerContent className="h-[100vh] flex flex-col items-center p-4">
            <DrawerHeader>
              <DrawerTitle className="text-xl font-semibold">Resume Preview</DrawerTitle>
              <DrawerDescription>Take a quick look at my detailed resume</DrawerDescription>
            </DrawerHeader>

            <div className="w-full h-full overflow-hidden flex justify-center items-center">
              <iframe
                src={resumeURL}
                className="w-[90%] h-[90%] border rounded-lg shadow-sm"
                title="Resume Preview"
              ></iframe>
            </div>

            <DrawerFooter className="w-full flex justify-between mt-4">
              <DrawerClose asChild className="w-16">
                <Button variant="outline">Close</Button>
              </DrawerClose>
              <a href={resumeURL} target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="flex items-center gap-2 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-shadow duration-500">
                  View Full Resume <ExternalLink size={16} className="hover:rotate-12 transition-transform duration-500" />
                </Button>
              </a>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  )
}