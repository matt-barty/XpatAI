"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ChevronLeft, AlertCircle, Clock, Zap, Shield } from "lucide-react";
import BlobCursor from "@/components/Blob";

export default function RateLimitsDocs() {
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
              <h1 className="text-4xl font-bold mb-6">Rate Limits</h1>
              <p className="text-xl text-gray-600">
                Learn about our API rate limits and how to handle them
                effectively.
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
                  To ensure fair usage and maintain service quality, we
                  implement rate limiting on our API endpoints. Rate limits are
                  applied on a per-API key basis and vary by subscription tier.
                </p>
              </div>

              {/* Rate Limit Tiers */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Rate Limit Tiers
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Free Tier */}
                  <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Free Tier
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 100 requests per hour</li>
                      <li>• 1,000 requests per day</li>
                      <li>• Maximum of 10 concurrent requests</li>
                    </ul>
                  </div>

                  {/* Pro Tier */}
                  <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Pro Tier
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 1,000 requests per hour</li>
                      <li>• 10,000 requests per day</li>
                      <li>• Maximum of 50 concurrent requests</li>
                    </ul>
                  </div>

                  {/* Enterprise Tier */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Enterprise Tier
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Custom request limits</li>
                      <li>• Unlimited daily requests</li>
                      <li>• Custom concurrent request limits</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Rate Limit Headers */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Rate Limit Headers
                  </h2>
                </div>

                <p className="text-gray-700 mb-6">
                  Each API response includes headers to help you track your rate
                  limit usage:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="block text-gray-900 font-mono mb-2">
                      X-RateLimit-Limit
                    </code>
                    <p className="text-gray-600">
                      The maximum number of requests you&apos;re permitted to
                      make per hour
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="block text-gray-900 font-mono mb-2">
                      X-RateLimit-Remaining
                    </code>
                    <p className="text-gray-600">
                      The number of requests remaining in the current time
                      window
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="block text-gray-900 font-mono mb-2">
                      X-RateLimit-Reset
                    </code>
                    <p className="text-gray-600">
                      The time at which the current rate limit window resets in
                      UTC epoch seconds
                    </p>
                  </div>
                </div>
              </div>

              {/* Handling Rate Limits */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-6 w-6 text-sky-600" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Handling Rate Limits
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700">
                    When you exceed your rate limit, the API will return a 429
                    Too Many Requests response. We recommend implementing
                    exponential backoff in your applications.
                  </p>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <h4 className="text-amber-800 font-medium mb-1">
                          Best Practices
                        </h4>
                        <ul className="space-y-2 text-amber-700">
                          <li>
                            • Monitor the rate limit headers in API responses
                          </li>
                          <li>
                            • Implement request queuing in your application
                          </li>
                          <li>
                            • Use exponential backoff when retrying requests
                          </li>
                          <li>
                            • Consider upgrading your plan if you consistently
                            hit limits
                          </li>
                        </ul>
                      </div>
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
