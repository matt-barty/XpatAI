"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BlobCursor from "@/components/Blob";
import { Book, Map, MessageSquare, Database } from "lucide-react";

const docs = [
  {
    title: "Getting Started",
    icon: Book,
    items: [
      { name: "Introduction", href: "#introduction" },
      { name: "Quick Start Guide", href: "#quick-start" },
      { name: "Installation", href: "#installation" },
    ],
  },
  {
    title: "Features",
    icon: Map,
    items: [
      { name: "Interactive Map", href: "/docs/features/interactive-map" },
      { name: "AI Chat Assistant", href: "/docs/features/ai-chat-assistant" },
      { name: "Country Insights", href: "/docs/features/country-insights" },
    ],
  },
  {
    title: "API Reference",
    icon: Database,
    items: [
      { name: "Authentication", href: "/docs/api/authentication" },
      { name: "Endpoints", href: "/docs/api/endpoints" },
      { name: "Rate Limits", href: "/docs/api/rate-limits" },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BlobCursor fillColor="#0ea5e9" />
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Documentation
              </h1>
              <p className="text-xl text-gray-600">
                Everything you need to know about using XpatAI's features and
                APIs.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Sidebar Navigation */}
              <div className="md:col-span-1">
                <div className="sticky top-24 space-y-8 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  {docs.map((section) => (
                    <div key={section.title}>
                      <div className="flex items-center gap-2 mb-4">
                        <section.icon className="h-5 w-5 text-sky-600" />
                        <h3 className="font-semibold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {section.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-gray-600 hover:text-sky-600 transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-3 prose prose-lg max-w-none">
                <section
                  id="introduction"
                  className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to XpatAI's documentation. Here you'll find
                    comprehensive guides and documentation to help you start
                    working with XpatAI as quickly as possible, as well as
                    support if you get stuck.
                  </p>
                </section>

                <section
                  id="quick-start"
                  className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Quick Start Guide
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Get up and running with XpatAI in minutes. Follow these
                    simple steps to start exploring countries and getting
                    AI-powered insights.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <span className="text-sky-600 font-semibold">1</span>
                        </div>
                        <h3 className="font-semibold">Create an account</h3>
                      </div>
                      <p className="text-gray-600 ml-10">
                        Sign up for free and set up your profile
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <span className="text-sky-600 font-semibold">2</span>
                        </div>
                        <h3 className="font-semibold">Explore the map</h3>
                      </div>
                      <p className="text-gray-600 ml-10">
                        Browse our interactive world map
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <span className="text-sky-600 font-semibold">3</span>
                        </div>
                        <h3 className="font-semibold">Chat with AI</h3>
                      </div>
                      <p className="text-gray-600 ml-10">
                        Get personalized insights and answers
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                          <span className="text-sky-600 font-semibold">4</span>
                        </div>
                        <h3 className="font-semibold">Save locations</h3>
                      </div>
                      <p className="text-gray-600 ml-10">
                        Bookmark your favorite destinations
                      </p>
                    </div>
                  </div>
                </section>

                <section
                  id="installation"
                  className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Installation
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      XpatAI is a web-based platform, so there's no installation
                      required. Simply sign up and start using our services
                      through your web browser.
                    </p>
                    <div className="mt-6">
                      <Link href="/signup">
                        <Button className="rounded-full">Get Started →</Button>
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
