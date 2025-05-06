"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import axios from "axios"

interface ContactInfo {
  email: string
  github: string
  linkedin: string
}

interface ContactProps {
  contact: ContactInfo
}

export default function Contact({ contact }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setResponseMessage("") 

    try {
      const response = await axios.post("/api/contact", formData)

      if (response.status === 200) {
        setResponseMessage("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" }) // Reset form
      } else {
        setResponseMessage("Failed to send the message.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setResponseMessage("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <Card className="orange-glow-sm">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Let's build something great together.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Button
              variant="outline"
              className="flex items-center gap-2 hover:orange-glow-sm"
              onClick={() => (window.location.href = `mailto:${contact.email}`)}
            >
              <Mail className="h-4 w-4" />
              Email
            </Button>

            <Button
              variant="outline"
              className="flex items-center gap-2 hover:orange-glow-sm"
              onClick={() => window.open(contact.github, "_blank")}
            >
              <Github className="h-4 w-4" />
              GitHub
            </Button>

            <Button
              variant="outline"
              className="flex items-center gap-2 hover:orange-glow-sm"
              onClick={() => window.open(contact.linkedin, "_blank")}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:orange-glow">
                  Send Message
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Contact Me</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to send me a message. I'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {responseMessage && (
                  <p className="mt-4 text-center text-sm text-muted-foreground">{responseMessage}</p>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
