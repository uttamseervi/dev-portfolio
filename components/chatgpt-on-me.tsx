import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ChatGPTOnMeProps {
  review: string
}

export default function ChatGPTOnMe({ review }: ChatGPTOnMeProps) {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">ChatGPT on Me</h2>
      <Card className="relative overflow-hidden bg-transparent backdrop-blur-sm border-2 border-primary/20 glow hover:shadow-lg transition-all duration-300">
        <div className="absolute " />
        <CardHeader>
          <CardTitle className="text-slate-900 dark:text-white relative z-10 font-semibold">AI's Perspective</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-800 dark:text-slate-200 leading-relaxed italic relative z-10">{review}</p>
        </CardContent>
      </Card>
    </section>
  )
}
