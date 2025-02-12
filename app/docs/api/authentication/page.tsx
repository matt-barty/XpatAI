"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ChevronLeft, Key, Shield, AlertTriangle } from "lucide-react";
import BlobCursor from "@/components/Blob";
import { Button } from "@/components/ui/button";

export default function AuthenticationDocs() {
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
              <h1 className="text-4xl font-bold mb-6">Authentication</h1>
              <p className="text-xl text-gray-600">
                Learn how to authenticate your requests to the XpatAI API.
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
                  XpatAI uses API keys to authenticate requests. You can view
                  and manage your API keys in your dashboard. Your API keys
                  carry many privileges, so be sure to keep them secure.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <p className="text-sm text-amber-800">
                      Never share your API keys in publicly accessible areas
                      such as GitHub, client-side code, or blog posts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Authentication Methods */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Authentication Methods
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Key className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Bearer Authentication
                      </h3>
                      <p className="text-gray-600 mb-4">
                        The recommended way to authenticate requests is using
                        Bearer authentication with your API key.
                      </p>
                      <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm mb-2">
                        Authorization: Bearer YOUR_API_KEY
                      </div>
                      <p className="text-sm text-gray-500">
                        Replace YOUR_API_KEY with your actual API key
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Query Parameter
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Alternatively, you can authenticate by including your
                        API key as a query parameter.
                      </p>
                      <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm mb-2">
                        https://api.xpatai.xyz/v1/endpoint?api_key=YOUR_API_KEY
                      </div>
                      <p className="text-sm text-gray-500">
                        Note: Query parameter authentication is less secure and
                        should only be used for testing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Examples */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Code Examples
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">
                      JavaScript/Node.js
                    </h3>
                    <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm">
                      {`const response = await fetch('https://api.xpatai.xyz/v1/countries', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});`}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Python</h3>
                    <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm">
                      {`import requests

response = requests.get(
    'https://api.xpatai.xyz/v1/countries',
    headers={'Authorization': 'Bearer YOUR_API_KEY'}
)`}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">cURL</h3>
                    <div className="bg-gray-900 text-gray-200 rounded-lg p-4 font-mono text-sm">
                      {`curl -X GET 'https://api.xpatai.xyz/v1/countries' \\
  -H 'Authorization: Bearer YOUR_API_KEY'`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Getting API Keys */}
              <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Getting API Keys
                </h2>
                <p className="text-gray-700 mb-6">
                  To get your API key, you need to:
                </p>
                <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-8">
                  <li>Sign up for an XpatAI account</li>
                  <li>Navigate to the API section in your dashboard</li>
                  <li>Generate a new API key</li>
                  <li>Copy and securely store your API key</li>
                </ol>
                <Link href="/signup">
                  <Button className="rounded-full">Get Started →</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
