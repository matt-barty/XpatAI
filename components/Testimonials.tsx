import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah L.",
    role: "Digital Nomad",
    content:
      "XpatAI made my transition to a new country seamless. The AI assistant provided invaluable insights I wouldn't have found elsewhere.",
    avatar: "/avatar1.jpg",
  },
  {
    name: "Michael R.",
    role: "International Business Consultant",
    content:
      "As someone who frequently advises on global expansion, XpatAI has become an indispensable tool in my workflow.",
    avatar: "/avatar2.jpg",
  },
  {
    name: "Elena K.",
    role: "Expat Family",
    content:
      "Moving abroad with a family is challenging, but XpatAI helped us prepare for everything from schools to healthcare. Highly recommended!",
    avatar: "/avatar3.jpg",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-700 border-gray-600">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

