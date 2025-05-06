"use client"

import { useState } from "react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Skill {
  category: string
  items: string[]
}

interface SkillsProps {
  skills: Skill[]
}

export default function Skills({ skills }: SkillsProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter out deep learning references
  const filteredSkills = skills.map((category) => ({
    ...category,
    items: category.items.filter((item) => !["TensorFlow", "PyTorch"].includes(item)),
  }))

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <Card className="orange-glow-sm">
        <CardHeader>
          <CardTitle>My Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Search skills..." value={searchQuery} onValueChange={setSearchQuery} />
            <CommandList>
              <CommandEmpty>No skills found.</CommandEmpty>
              {filteredSkills.map((category) => (
                <CommandGroup key={category.category} heading={category.category}>
                  {category.items
                    .filter((item) => searchQuery === "" || item.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((item) => (
                      <CommandItem key={item} value={item} className="cursor-default">
                        {item}
                      </CommandItem>
                    ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </CardContent>
      </Card>
    </section>
  )
}
