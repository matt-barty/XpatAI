"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Globe2, Users, Heart, Building2, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import BlobCursor from "@/components/Blob";

const values = [
  {
    icon: Globe2,
    title: "Global Impact",
    description:
      "Making international transitions accessible and seamless for everyone.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive network of global citizens and expats.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description:
      "Putting our users' needs and experiences at the heart of everything we do.",
  },
];

const team = [
  {
    name: "Matthew Chen",
    role: "CEO & Founder",
    image: "/matthew.jpg",
    bio: "Tech innovator with a passion for solving global mobility challenges through AI.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Technology",
    image: "/marcus.jpg",
    bio: "AI expert specializing in natural language processing and data analytics.",
  },
  {
    name: "Aisha Patel",
    role: "Head of Operations",
    image: "/sarahchen.jpeg",
    bio: "Global operations specialist with experience in 5 different countries.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <BlobCursor fillColor="#0ea5e9" />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From a 48-hour hackathon to a global mission: transforming how
                people navigate their international adventures.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  It all began at a hackathon in late 2024, where our founder
                  Matthew Chen and a small team of developers had 48 hours to
                  build something innovative. The challenge? Create a solution
                  that could make a real difference in people&apos;s lives.
                  Drawing from his own experiences helping friends navigate
                  international moves, Matthew had an idea: what if AI could
                  make the complex process of moving abroad simple and
                  accessible?
                </p>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  What started as a hackathon project quickly evolved into
                  something bigger. The prototype caught the attention of
                  expats, digital nomads, and immigration experts who all shared
                  the same frustration – the lack of reliable, comprehensive
                  information about moving abroad. The team discovered that
                  millions of people face these challenges every year, from
                  professionals seeking new opportunities to families looking
                  for better lives.
                </p>

                <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg mb-8">
                  <Image
                    src="/llama-impact.webp"
                    alt="XpatAI Team"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The hackathon project transformed into XpatAI. Matthew decided
                  to turn this proof-of-concept into a full-fledged platform,
                  combining cutting-edge AI technology with real-world data and
                  human expertise. The goal was ambitious but clear: create a
                  revolutionary platform that not only provides accurate,
                  up-to-date information but truly understands and adapts to
                  each person&apos;s unique journey.
                </p>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The team grew quickly. Marcus Rodriguez, impressed by the
                  hackathon demo, joined as Head of Technology, bringing his
                  expertise in AI and natural language processing. Aisha Patel,
                  who had experienced firsthand the challenges of relocating
                  across five different countries, came on board as Head of
                  Operations to ensure the platform addressed real-world
                  challenges effectively.
                </p>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Today, XpatAI has evolved far beyond its hackathon origins to
                  become a trusted companion for international journeys.
                  We&apos;re proud to help thousands of people make informed
                  decisions about their global transitions, but we&apos;re just
                  getting started. Our vision remains as ambitious as it was
                  during those initial 48 hours – to make international
                  relocation accessible and seamless for everyone, breaking down
                  barriers and bringing the world closer together.
                </p>

                <div className="text-center mt-12 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Promise
                  </h3>
                  <p className="text-lg text-gray-600 italic">
                    &quot;We&apos;re committed to being the bridge that connects
                    people to their global aspirations, making the journey of
                    international transition as enriching as the destination
                    itself.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-32 h-32 relative mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-sky-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
              <Link
                href="mailto:hello@xpatai.xyz"
                className="flex items-center gap-3"
              >
                <Mail className="h-5 w-5 text-sky-600" />
                <span>hello@xpatai.xyz</span>
              </Link>
              <Link href="/contact" className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-sky-600" />
                <span>London, United Kingdom</span>
              </Link>
            </div>
            <div className="mt-8">
              <Link href="/contact">
                <Button className="rounded-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
