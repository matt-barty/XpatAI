import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe2, FileText, Building2, HeartPulse, Briefcase, GraduationCap, ArrowRight } from "lucide-react"

const features = [
  {
    icon: HeartPulse,
    title: "Healthcare System",
    description: "Compare healthcare quality, insurance requirements, and medical facilities.",
    color: "from-red-500/20 to-pink-500/20",
  },
  {
    icon: FileText,
    title: "Visa & Immigration",
    description: "Navigate visa processes, residency requirements, and legal documentation.",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: Building2,
    title: "Housing & Living",
    description: "Find information about housing markets, neighborhoods, and cost of living.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description: "Explore job markets, salary expectations, and work permit requirements.",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    icon: GraduationCap,
    title: "Education System",
    description: "Learn about schools, universities, and educational standards.",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Globe2,
    title: "Local Culture",
    description: "Understand customs, traditions, and social norms of your destination.",
    color: "from-fuchsia-500/20 to-pink-500/20",
  },
]

export default function DarkFeatures() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgb(55 65 81 / 0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Everything you need to move abroad</h2>
          <p className="text-gray-400 text-lg">
            Our AI-powered platform provides comprehensive insights about every aspect of expatriate life, helping you
            make informed decisions about your international journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="group relative bg-gray-900/30 backdrop-blur-sm border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
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

        <div className="text-center">
          <Button variant="outline" className="rounded-full px-8 py-6 text-white border-gray-800 hover:bg-gray-800/50">
            Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

