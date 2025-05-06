import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ChatGPTOnMeProps {
  review: string
}

export default function ChatGPTOnMe({ review }: ChatGPTOnMeProps) {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">ChatGPT on Me</h2>
      <Card className="bg-gradient-to-br from-black to-gray-900 dark:from-gray-900 dark:to-black border-orange-500/20 orange-glow">
        <CardHeader>
          <CardTitle className="text-white">AI's Perspective</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 leading-relaxed italic">{review}</p>
        </CardContent>
      </Card>
    </section>
  )
}
