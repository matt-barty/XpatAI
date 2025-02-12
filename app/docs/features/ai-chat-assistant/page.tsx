"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  MessageSquare,
  Sparkles,
  Brain,
  History,
  Settings,
} from "lucide-react";
import BlobCursor from "@/components/Blob";

export default function AIChatAssistantDocs() {
  return (
    <div className="min-h-screen bg-white">
      <BlobCursor fillColor="#0ea5e9" />
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/docs"
                className="inline-flex items-center text-sky-600 hover:text-sky-700 mb-6"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Documentation
              </Link>
              <h1 className="text-4xl font-bold mb-6">AI Chat Assistant</h1>
              <p className="text-xl text-gray-600">
                Your personal guide for navigating global relocation, powered by
                advanced AI technology.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Overview */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The AI Chat Assistant is your intelligent companion throughout
                  your relocation journey. Powered by advanced language models,
                  it provides personalized advice, answers questions, and helps
                  you make informed decisions about moving abroad.
                </p>
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/chat-preview.png"
                    alt="AI Chat Assistant Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Smart Responses
                      </h3>
                      <p className="text-gray-600">
                        Get intelligent, context-aware answers to your questions
                        about relocation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Personalized Advice
                      </h3>
                      <p className="text-gray-600">
                        Receive tailored recommendations based on your
                        preferences and needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <History className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Conversation History
                      </h3>
                      <p className="text-gray-600">
                        Access past conversations and insights for future
                        reference.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Customization
                      </h3>
                      <p className="text-gray-600">
                        Adjust the AI's responses to match your knowledge level
                        and preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What You Can Ask
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Visa & Immigration
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Visa requirements for specific countries</li>
                      <li>Application processes and timelines</li>
                      <li>Required documentation</li>
                      <li>Immigration policies and regulations</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Living Costs & Lifestyle
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Cost of living comparisons</li>
                      <li>Housing market insights</li>
                      <li>Healthcare systems</li>
                      <li>Local culture and customs</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Work & Business
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Job market conditions</li>
                      <li>Business regulations</li>
                      <li>Work permit requirements</li>
                      <li>Tax implications</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Best Practices
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Be Specific
                      </h3>
                      <p className="text-gray-600">
                        The more specific your questions, the more accurate and
                        helpful the responses will be.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Provide Context
                      </h3>
                      <p className="text-gray-600">
                        Include relevant details about your situation for more
                        personalized advice.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Follow Up
                      </h3>
                      <p className="text-gray-600">
                        Don't hesitate to ask follow-up questions for
                        clarification or more details.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Save Important Information
                      </h3>
                      <p className="text-gray-600">
                        Use the bookmark feature to save important insights for
                        future reference.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
