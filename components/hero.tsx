import { Button } from "@/components/ui/button"
import { Globe } from "@/components/magicui/globe"

export default function Hero() {
  return (
    <section className="pt-32 pb-16 text-center relative">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Your world,
          <br />
          explored.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          XpatAI is an intelligent platform that helps you explore and understand different countries for expatriation
          and immigration through AI-powered insights.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button className="rounded-full px-8">Get started</Button>
          <Button variant="outline" className="rounded-full px-8">
            Try Demo →
          </Button>
        </div>
        <div className="mt-16 relative h-[400px]">
          <Globe />
        </div>
      </div>
    </section>
  )
}

