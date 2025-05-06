import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AboutMeProps {
  about: string
}

export default function AboutMe({ about }: AboutMeProps) {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
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
    </section>
  )
}
