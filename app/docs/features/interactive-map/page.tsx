"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  Globe2,
  MousePointer,
  Search,
  Bookmark,
  Share2,
} from "lucide-react";
import BlobCursor from "@/components/Blob";

export default function InteractiveMapDocs() {
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
              <h1 className="text-4xl font-bold mb-6">Interactive Map</h1>
              <p className="text-xl text-gray-600">
                Explore our interactive world map with detailed country
                information and real-time insights.
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
                  Our interactive map is the core feature of XpatAI, providing a
                  visual and intuitive way to explore countries and gather
                  information about potential destinations. With real-time data
                  updates and AI-powered insights, you can make informed
                  decisions about your next move.
                </p>
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                  <Image
                    src="/map-preview.png"
                    alt="Interactive Map Preview"
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
                      <Globe2 className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Interactive Navigation
                      </h3>
                      <p className="text-gray-600">
                        Zoom, pan, and explore countries with smooth controls
                        and responsive design.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Quick Search
                      </h3>
                      <p className="text-gray-600">
                        Find countries instantly with our smart search
                        functionality.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MousePointer className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Country Details
                      </h3>
                      <p className="text-gray-600">
                        Click on any country to view comprehensive information
                        and insights.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bookmark className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Bookmarks
                      </h3>
                      <p className="text-gray-600">
                        Save countries of interest for quick access later.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Guide */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  How to Use
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Navigate the Map
                      </h3>
                      <p className="text-gray-600">
                        Use your mouse or touchpad to zoom in/out and pan across
                        the map. Double-click to zoom in on a specific area.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Select a Country
                      </h3>
                      <p className="text-gray-600">
                        Click on any country to view its detailed information
                        card, including key statistics and insights.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Explore Data
                      </h3>
                      <p className="text-gray-600">
                        Browse through different categories of information
                        including visa requirements, cost of living, and quality
                        of life metrics.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Save and Share
                      </h3>
                      <p className="text-gray-600">
                        Bookmark countries of interest and share insights with
                        others using the share button.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips and Tricks */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Pro Tips
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">🎯 Quick Navigation:</span>{" "}
                    Use the search bar to quickly jump to any country.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">🔍 Detailed View:</span>{" "}
                    Double-click the country card to expand and see more
                    detailed information.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">📱 Mobile Usage:</span> Use
                    pinch gestures to zoom in and out on mobile devices.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">💾 Data Updates:</span>{" "}
                    Information is updated in real-time, so you always have the
                    latest data.
                  </p>
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
