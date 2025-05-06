'use client'
import AboutMe from "@/components/about-me"
import ChatGPTOnMe from "@/components/chatgpt-on-me"
import Contact from "@/components/contact"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import ThemeToggle from "@/components/theme-toggle"
import data from "@/data/data.json"
import { useEffect } from "react"

export default function Home() {

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl" autoFocus>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Hero name={data.name} status={data.status} availability={data.availability} />
      <AboutMe about={data.about} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <ChatGPTOnMe review={data.chatgptReview} />
      <Contact contact={data.contact} />
    </main>
  )
}
