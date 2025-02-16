"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ChevronLeft, Calendar, Star, Bug, Sparkles, Zap } from "lucide-react";
import BlobCursor from "@/components/Blob";

interface ChangelogEntry {
  date: string;
  version: string;
  changes: {
    type: "feature" | "improvement" | "fix" | "announcement";
    title: string;
    description: string;
  }[];
}

const changelog: ChangelogEntry[] = [
  {
    date: "January 24, 2024",
    version: "Beta 0.2.0",
    changes: [
      {
        type: "feature",
        title: "AI Chat Assistant",
        description:
          "Launched advanced AI chat capabilities for personalized country insights and recommendations.",
      },
      {
        type: "feature",
        title: "Interactive World Map",
        description:
          "Added interactive map interface with detailed country information and comparison tools.",
      },
      {
        type: "improvement",
        title: "Enhanced Data Coverage",
        description:
          "Expanded database to cover over 200 countries with comprehensive relocation insights.",
      },
      {
        type: "improvement",
        title: "UI/UX Enhancements",
        description:
          "Redesigned interface with improved navigation and responsive design for all devices.",
      },
      {
        type: "feature",
        title: "Country Comparison Tool",
        description:
          "New feature allowing users to compare multiple countries side by side across various metrics.",
      },
    ],
  },
  {
    date: "January 20, 2024",
    version: "Beta 0.1.5",
    changes: [
      {
        type: "improvement",
        title: "Performance Optimization",
        description:
          "Improved application loading speed and overall performance.",
      },
      {
        type: "fix",
        title: "Mobile Responsiveness",
        description: "Fixed various UI issues on mobile devices and tablets.",
      },
      {
        type: "feature",
        title: "Cost Calculator",
        description:
          "Added preliminary version of cost of living calculator for major cities.",
      },
    ],
  },
  {
    date: "January 18, 2024",
    version: "Beta 0.1.2",
    changes: [
      {
        type: "fix",
        title: "Wallet Integration",
        description:
          "Fixed issues with Phantom wallet connection and token distribution.",
      },
      {
        type: "improvement",
        title: "Data Accuracy",
        description:
          "Updated country database with more accurate and recent information.",
      },
      {
        type: "feature",
        title: "Search Functionality",
        description:
          "Implemented advanced search with filters for countries and cities.",
      },
    ],
  },
  {
    date: "January 15, 2024",
    version: "Beta 0.1.0",
    changes: [
      {
        type: "announcement",
        title: "Beta Launch",
        description:
          "Initial release of XpatAI platform with core features and XPAT token integration.",
      },
      {
        type: "feature",
        title: "XPAT Token Integration",
        description:
          "Implemented token-based access system and rewards for early adopters.",
      },
      {
        type: "feature",
        title: "Basic Country Insights",
        description:
          "Released initial version of country database with essential information.",
      },
      {
        type: "feature",
        title: "User Authentication",
        description:
          "Implemented secure login system with multiple authentication options.",
      },
    ],
  },
  {
    date: "January 10, 2024",
    version: "Alpha 0.3.0",
    changes: [
      {
        type: "announcement",
        title: "Private Alpha",
        description: "Launched private alpha testing with selected users.",
      },
      {
        type: "feature",
        title: "Basic Map Interface",
        description: "Implemented first version of the interactive world map.",
      },
      {
        type: "feature",
        title: "Documentation",
        description: "Added initial documentation and API references.",
      },
    ],
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "feature":
      return <Star className="w-4 h-4 text-yellow-500" />;
    case "improvement":
      return <Zap className="w-4 h-4 text-purple-500" />;
    case "fix":
      return <Bug className="w-4 h-4 text-green-500" />;
    case "announcement":
      return <Sparkles className="w-4 h-4 text-sky-500" />;
    default:
      return null;
  }
};

export default function ChangelogPage() {
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
              <h1 className="text-4xl font-bold mb-6">Changelog</h1>
              <p className="text-xl text-gray-600">
                Track the latest updates and improvements to the XpatAI
                platform.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {changelog.map((entry, index) => (
                  <div key={index} className="relative">
                    {index !== changelog.length - 1 && (
                      <div className="absolute top-8 bottom-0 left-4 w-px bg-gray-200" />
                    )}
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-4 h-4 text-sky-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {entry.date}
                          </div>
                          <div className="text-sm text-gray-500">
                            Version {entry.version}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {entry.changes.map((change, changeIndex) => (
                          <div
                            key={changeIndex}
                            className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm"
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-1">{getIcon(change.type)}</div>
                              <div>
                                <h3 className="font-semibold text-gray-900 mb-1">
                                  {change.title}
                                </h3>
                                <p className="text-gray-600">
                                  {change.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
