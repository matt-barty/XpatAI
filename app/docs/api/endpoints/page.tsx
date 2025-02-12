"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ChevronLeft, Globe, Users, Building2, Map } from "lucide-react";
import BlobCursor from "@/components/Blob";

export default function EndpointsDocs() {
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
              <h1 className="text-4xl font-bold mb-6">API Endpoints</h1>
              <p className="text-xl text-gray-600">
                Explore all available endpoints in the XpatAI API.
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
                  The XpatAI API is organized around REST. Our API accepts
                  JSON-encoded request bodies, returns JSON-encoded responses,
                  and uses standard HTTP response codes, authentication, and
                  verbs.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">Base URL:</p>
                  <code className="bg-gray-900 text-gray-200 rounded px-2 py-1">
                    https://api.xpatai.xyz/v1
                  </code>
                </div>
              </div>

              {/* Countries Endpoints */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Countries
                  </h2>
                </div>

                <div className="space-y-8">
                  {/* List Countries */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-gray-900 font-mono">
                        /countries
                      </code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Returns a list of all available countries with basic
                      information.
                    </p>
                    <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm mb-4">
                      GET /v1/countries
                    </div>
                  </div>

                  {/* Get Country */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-gray-900 font-mono">
                        /countries/:id
                      </code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Returns detailed information about a specific country.
                    </p>
                    <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm mb-4">
                      GET /v1/countries/japan
                    </div>
                  </div>
                </div>
              </div>

              {/* Cities Endpoints */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Cities</h2>
                </div>

                <div className="space-y-8">
                  {/* List Cities */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-gray-900 font-mono">/cities</code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Returns a list of cities with basic information.
                    </p>
                    <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm mb-4">
                      GET /v1/cities?country=japan
                    </div>
                  </div>

                  {/* Get City */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-gray-900 font-mono">
                        /cities/:id
                      </code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Returns detailed information about a specific city.
                    </p>
                    <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm mb-4">
                      GET /v1/cities/tokyo
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Endpoints */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Map className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Data</h2>
                </div>

                <div className="space-y-8">
                  {/* Get Cost of Living */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-gray-900 font-mono">
                        /data/cost-of-living/:city
                      </code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Returns detailed cost of living data for a specific city.
                    </p>
                    <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm mb-4">
                      GET /v1/data/cost-of-living/tokyo
                    </div>
                  </div>

                  {/* Get Quality of Life */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                        GET
                      </span>
                      <code className="text-gray-900 font-mono">
                        /data/quality-of-life/:city
                      </code>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Returns quality of life metrics for a specific city.
                    </p>
                    <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm mb-4">
                      GET /v1/data/quality-of-life/tokyo
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
