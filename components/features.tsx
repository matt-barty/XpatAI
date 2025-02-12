import { Card } from "@/components/ui/card"
import { MapPin, MessageCircle, Briefcase, Heart, Users } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Interactive World Map",
    description: "Visually explore countries and get instant insights about any location with just a click.",
  },
  {
    icon: MessageCircle,
    title: "AI Chat Assistant",
    description: "Natural conversations powered by AI to answer all your questions about living abroad.",
  },
  {
    icon: Heart,
    title: "Healthcare & Quality of Life",
    description: "Make informed decisions with comprehensive data on healthcare and living standards.",
  },
  {
    icon: Briefcase,
    title: "Work & Business",
    description: "Explore job markets, business opportunities, and understand the local economy.",
  },
  {
    icon: Users,
    title: "Cultural Insights",
    description: "Dive deep into local customs, social norms, and cultural nuances of your destination.",
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Gradient Orb Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl transform rotate-12 opacity-30" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-500/10 to-purple-500/10 blur-3xl transform -rotate-12 opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400 mb-6">
            Key Features
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to make informed decisions about your international journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6">
                <div className="mb-4 p-3 bg-gray-800/50 rounded-lg w-fit">
                  <feature.icon className="h-6 w-6 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

