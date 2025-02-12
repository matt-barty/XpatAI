"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const docs = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "#introduction" },
      { name: "Quick Start Guide", href: "#quick-start" },
      { name: "Installation", href: "#installation" },
    ],
  },
  {
    title: "Features",
    items: [
      { name: "Interactive Map", href: "#map" },
      { name: "AI Chat Assistant", href: "#chat" },
      { name: "Country Insights", href: "#insights" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { name: "Authentication", href: "#auth" },
      { name: "Endpoints", href: "#endpoints" },
      { name: "Rate Limits", href: "#limits" },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
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
                <div className="sticky top-24 space-y-8">
                  {docs.map((section) => (
                    <div key={section.title}>
                      <h3 className="font-semibold mb-4">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className="text-gray-600 hover:text-gray-900"
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
                <section id="introduction">
                  <h2>Introduction</h2>
                  <p>
                    Welcome to XpatAI's documentation. Here you'll find
                    comprehensive guides and documentation to help you start
                    working with XpatAI as quickly as possible, as well as
                    support if you get stuck.
                  </p>
                </section>

                <section id="quick-start" className="mt-16">
                  <h2>Quick Start Guide</h2>
                  <p>
                    Get up and running with XpatAI in minutes. Follow these
                    simple steps to start exploring countries and getting
                    AI-powered insights.
                  </p>
                  <ol>
                    <li>Create an account</li>
                    <li>Explore the interactive map</li>
                    <li>Chat with our AI assistant</li>
                    <li>Save your favorite locations</li>
                  </ol>
                </section>

                <section id="installation" className="mt-16">
                  <h2>Installation</h2>
                  <p>
                    XpatAI is a web-based platform, so there's no installation
                    required. Simply sign up and start using our services
                    through your web browser.
                  </p>
                </section>

                {/* Add more sections as needed */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
