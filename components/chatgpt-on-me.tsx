import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ChatGPTOnMeProps {
  review: string
}

export default function ChatGPTOnMe({ review }: ChatGPTOnMeProps) {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-6">ChatGPT on Me</h2>
      <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 border-rose-500/20 rose-glow">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-rose-500/20 animate-bubble" />
          <div className="absolute top-1/4 -right-4 w-6 h-6 rounded-full bg-rose-500/20 animate-bubble" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 -left-4 w-4 h-4 rounded-full bg-rose-500/20 animate-bubble" style={{ animationDelay: '1s' }} />
        </div>

        <CardHeader>
          <CardTitle className="text-white relative z-10">AI's Perspective</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 leading-relaxed italic relative z-10">{review}</p>
        </CardContent>
      </Card>
    </section>
  )
}
