import { Globe2, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About XpatAI</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We&apos;re on a mission to make global relocation easier and more
            accessible for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe2 className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower individuals and organizations with AI-driven insights
              for successful international transitions.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Team</h3>
            <p className="text-gray-600">
              A diverse group of experts passionate about technology, travel,
              and making the world more connected.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-600">
              We believe in transparency, accessibility, and using technology to
              create positive global impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
