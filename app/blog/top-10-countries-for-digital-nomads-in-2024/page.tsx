"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  Wifi,
  DollarSign,
  Sun,
  Globe2,
} from "lucide-react";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-16">
        <article className="max-w-3xl mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-8">
              <Image
                src="/blog2.png"
                alt="Digital Nomad Destinations"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Aisha Patel
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Jan 10, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />4 min read
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Top 10 Countries for Digital Nomads in 2024
            </h1>

            {/* Article Summary */}
            <div className="bg-gray-50 border-l-4 border-sky-500 p-6 rounded-r-lg mb-12">
              <p className="text-lg text-gray-700 italic">
                As remote work continues to reshape the global workforce, more
                professionals are embracing the digital nomad lifestyle.
                We&apos;ve analyzed factors like internet speed, cost of living,
                visa policies, and quality of life to bring you the top
                destinations for remote workers in 2024.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Makes a Great Digital Nomad Destination?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                  <Wifi className="w-5 h-5 text-sky-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Fast Internet
                    </h3>
                    <p className="text-sm text-gray-600">
                      Reliable high-speed connectivity for seamless remote work
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-sky-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Cost of Living
                    </h3>
                    <p className="text-sm text-gray-600">
                      Affordable housing, food, and daily expenses
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-sky-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Visa Policies
                    </h3>
                    <p className="text-sm text-gray-600">
                      Digital nomad visas and friendly immigration policies
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                  <Sun className="w-5 h-5 text-sky-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Quality of Life
                    </h3>
                    <p className="text-sm text-gray-600">
                      Climate, safety, healthcare, and social life
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-12">
              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sky-600 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Portugal
                    </h2>
                    <p className="text-gray-600">
                      The Digital Nomad&apos;s Paradise in Europe
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Portugal continues to lead the pack with its dedicated D7
                    visa and digital nomad-friendly infrastructure. With
                    high-speed internet, affordable living costs, and a vibrant
                    expat community, cities like Lisbon and Porto offer the
                    perfect blend of modern amenities and historic charm.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p className="font-semibold">Highlights:</p>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Digital Nomad Visa available</li>
                        <li>High-speed internet (avg. 100 Mbps)</li>
                        <li>Rich cultural experience</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">Monthly Costs:</p>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Rent: $800-1,200</li>
                        <li>Living Expenses: $1,000-1,500</li>
                        <li>Coworking: $150-250</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sky-600 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Thailand
                    </h2>
                    <p className="text-gray-600">
                      Southeast Asia&apos;s Remote Work Hub
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Thailand&apos;s new Smart Visa program, combined with its
                    legendary low cost of living and tropical lifestyle, makes
                    it an irresistible destination for digital nomads. Cities
                    like Chiang Mai and Bangkok offer modern coworking spaces
                    and a thriving digital nomad community.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p className="font-semibold">Highlights:</p>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Smart Visa for digital professionals</li>
                        <li>Abundant coworking spaces</li>
                        <li>Tropical climate year-round</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">Monthly Costs:</p>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Rent: $400-800</li>
                        <li>Living Expenses: $600-1,000</li>
                        <li>Coworking: $100-200</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue with other countries in the same format */}
            </section>

            <section className="mt-12 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tips for Choosing Your Digital Nomad Destination
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  When selecting your next destination as a digital nomad,
                  consider these key factors:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    Research visa requirements and length of stay restrictions
                  </li>
                  <li>
                    Check the reliability and speed of internet connections
                  </li>
                  <li>
                    Calculate the total cost of living including accommodation
                  </li>
                  <li>
                    Consider the local digital nomad community and networking
                    opportunities
                  </li>
                  <li>
                    Evaluate healthcare options and insurance requirements
                  </li>
                </ul>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Looking Ahead
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As more countries develop specific visas and infrastructure for
                digital nomads, the landscape of remote work continues to
                evolve. Stay informed about new opportunities and changing
                regulations to make the most of your digital nomad journey.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
