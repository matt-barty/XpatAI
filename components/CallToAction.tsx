import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Your Next Destination?</h2>
        <p className="text-xl mb-8 text-gray-300">
          Start your journey with XpatAI today and discover a world of possibilities.
        </p>
        <Button size="lg">Get Started for Free</Button>
      </div>
    </section>
  )
}

