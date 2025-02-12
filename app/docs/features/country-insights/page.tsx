"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  Globe2,
  LineChart,
  Building2,
  Heart,
  Briefcase,
  Coins,
} from "lucide-react";
import BlobCursor from "@/components/Blob";

export default function CountryInsightsDocs() {
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
              <h1 className="text-4xl font-bold mb-6">Country Insights</h1>
              <p className="text-xl text-gray-600">
                Comprehensive data and analysis about countries around the world
                to help you make informed decisions.
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
                  Country Insights provides detailed information and analysis
                  about countries worldwide. From cost of living to quality of
                  life metrics, get access to comprehensive data that helps you
                  understand and compare potential destinations for your global
                  journey.
                </p>
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/insights-preview.png"
                    alt="Country Insights Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Available Data */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Available Data
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Coins className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Cost of Living
                      </h3>
                      <p className="text-gray-600">
                        Detailed breakdown of living expenses including housing,
                        food, transportation, and utilities.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Quality of Life
                      </h3>
                      <p className="text-gray-600">
                        Metrics on healthcare, education, safety, and
                        environmental quality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Job Market
                      </h3>
                      <p className="text-gray-600">
                        Employment trends, popular industries, and salary
                        expectations.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Housing
                      </h3>
                      <p className="text-gray-600">
                        Real estate market analysis, rental costs, and popular
                        neighborhoods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Sources */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Data Sources
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Official Sources
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Government databases and reports</li>
                      <li>National statistics offices</li>
                      <li>International organizations</li>
                      <li>Economic indicators</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Real-time Data
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Market prices and trends</li>
                      <li>Exchange rates</li>
                      <li>Property listings</li>
                      <li>Job postings</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Community Insights
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>User reviews and ratings</li>
                      <li>Expat experiences</li>
                      <li>Local recommendations</li>
                      <li>Cultural perspectives</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Using the Data */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Using the Data
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Compare Countries
                      </h3>
                      <p className="text-gray-600">
                        Use the comparison tool to evaluate different
                        destinations side by side.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Track Changes
                      </h3>
                      <p className="text-gray-600">
                        Monitor trends and changes in key metrics over time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Customize Reports
                      </h3>
                      <p className="text-gray-600">
                        Generate custom reports focusing on the metrics that
                        matter most to you.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Export Data
                      </h3>
                      <p className="text-gray-600">
                        Download insights and reports for offline use or sharing
                        with others.
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
