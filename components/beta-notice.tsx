"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Globe, MessageCircle, Map } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BetaNotice() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the email to your backend
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call

    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-xl">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-sky-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Join Our Beta</h2>
          <p className="text-gray-600">
            Get early access to revolutionary features
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <Globe className="w-5 h-5 text-sky-600 mb-2" />
            <p className="text-sm text-gray-600">
              Interactive world exploration
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <MessageCircle className="w-5 h-5 text-sky-600 mb-2" />
            <p className="text-sm text-gray-600">AI-powered chat assistant</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <Map className="w-5 h-5 text-sky-600 mb-2" />
            <p className="text-sm text-gray-600">Country insights</p>
          </div>
          <div className="bg-sky-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-sky-900">🎁 Beta perks:</p>
            <p className="text-xs text-sky-700 mt-1">Lifetime discount</p>
          </div>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-lg"
              />
              <p className="text-xs text-gray-500 mt-2">
                We&apos;ll notify you when your access is ready.
              </p>
            </div>
            <Button
              type="submit"
              className="w-full rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Apply for Beta Access"}
            </Button>
            <Link href="/">
              <Button variant="ghost" className="w-full rounded-lg">
                Return to Home
              </Button>
            </Link>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="bg-green-50 text-green-800 p-4 rounded-lg">
              <p className="font-medium">Thanks for joining! 🎉</p>
              <p className="text-sm mt-1">
                We&apos;ll be in touch with your beta access soon.
              </p>
            </div>
            <Link href="/">
              <Button variant="outline" className="w-full rounded-lg">
                Return to Home
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
