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
import { ExternalLink } from "lucide-react"

interface AboutMeProps {
  about: string
}

export default function AboutMe({ about }: AboutMeProps) {
  const resumeURL = "https://drive.google.com/file/d/1Iopr-MZdNGWdHOlpAhOkyixZKGsC7EXn/preview" // Replace with actual hosted resume link

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      {/* About Card */}
      <Card className="orange-glow-sm">
        <CardHeader>
          <CardTitle>Who I Am</CardTitle>
          <CardDescription>A bit about my background and interests</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            I'm Uttam Seervi, a passionate and focused developer currently in my 6th semester at BMS College of
            Engineering, pursuing Information Science. My CGPA till the 5th semester stands at 8.54. I'm driven by a
            deep interest in development and Web3, and I'm actively looking for opportunities to intern, contribute, and
            grow in real-world tech environments. From crafting end-to-end MERN stacks to deploying blockchain-based
            DApps, I enjoy solving problems and building systems that matter.
          </p>
        </CardContent>
      </Card>

      {/* Resume Preview Drawer */}
      <div className="mt-6">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="default">Preview Resume</Button>
          </DrawerTrigger>

          <DrawerContent className="h-[100vh] flex flex-col items-center p-4">
            <DrawerHeader>
              <DrawerTitle className="text-xl font-semibold">Resume Preview</DrawerTitle>
              <DrawerDescription>This is a quick preview of my resume.</DrawerDescription>
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
                <Button variant="default">Close</Button>
              </DrawerClose>
              <a href={resumeURL} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="flex items-center gap-2">
                  View Full Resume <ExternalLink size={16} />
                </Button>
              </a>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  )
}
