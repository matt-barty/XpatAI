"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Brain, Sparkles, Coins, Users } from "lucide-react";
import BlobCursor from "@/components/Blob";
import BetaNotice from "@/components/beta-notice";
import { useState } from "react";

const benefits = [
  "Interactive world map access",
  "AI chat assistance",
  "Community access",
  "AI predictions and insights",
  "Advanced country insights",
  "Priority support",
  "Governance voting rights",
  "Token holder rewards",
];

export default function PricingPage() {
  const [showBetaNotice, setShowBetaNotice] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <BlobCursor fillColor="#0ea5e9" />
      <Header />
      {showBetaNotice && <BetaNotice />}
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join the XpatAI Community
              </h1>
              <p className="text-xl text-gray-600">
                Hold XPAT tokens to unlock all features and become part of our
                global community
              </p>
            </div>
          </div>
        </section>

        {/* Token Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Brain className="h-6 w-6 text-sky-600" />
                    <Sparkles className="h-6 w-6 text-purple-500" />
                    <Coins className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">XPAT Token Holder</h2>
                  <p className="text-gray-600">
                    Access all features with XPAT tokens
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-sky-600" />
                    <h3 className="text-lg font-semibold">
                      Community Benefits
                    </h3>
                  </div>
                  <p className="text-center text-gray-600">
                    Join our community of global citizens. The more tokens you
                    hold, the more voting power and rewards you receive.
                  </p>
                </div>

                <Button
                  className="w-full rounded-full"
                  onClick={() => setShowBetaNotice(true)}
                >
                  Get XPAT Tokens
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                  <h3 className="text-xl font-semibold mb-3">
                    How do XPAT tokens work?
                  </h3>
                  <p className="text-gray-600">
                    XPAT tokens give you access to all platform features. The
                    more tokens you hold, the more voting power and rewards you
                    receive. Your tokens are your membership - no monthly fees
                    required.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-left">
                  <h3 className="text-xl font-semibold mb-3">
                    What benefits do token holders get?
                  </h3>
                  <p className="text-gray-600">
                    Token holders get access to all platform features, including
                    AI predictions, advanced insights, governance voting, and
                    community rewards. Your influence and rewards scale with
                    your token holdings.
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
