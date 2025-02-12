import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay updated with XpatAI</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Get the latest updates about new countries info, features, and expat resources.
        </p>
        <form className="flex gap-2 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="rounded-full" />
          <Button type="submit" className="rounded-full px-8">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}

