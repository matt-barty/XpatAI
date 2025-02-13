"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Brain, Coins, Lock, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Web3Button from "./web3-button";

export default function BetaNotice() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-xl">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">
            Join XpatAI Beta & Earn XPAT Tokens
          </h2>
          <p className="text-gray-600">
            Access AI-powered insights and earn rewards
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">
              AI-Powered Benefits:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Brain className="w-4 h-4 text-purple-500" />
                Personalized relocation predictions
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Coins className="w-4 h-4 text-purple-500" />
                Cost of living forecasts
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Lock className="w-4 h-4 text-purple-500" />
                Premium AI features access
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Users className="w-4 h-4 text-purple-500" />
                Community contribution rewards
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">
              XPAT Token Utilities:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                Stake for premium features
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                Earn from AI predictions
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                Governance voting power
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                Data contribution rewards
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <Web3Button />
            <p className="text-xs text-gray-500 text-center">
              Connect wallet to participate in token launch
            </p>
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
                Get early access to AI features and token allocation
              </p>
            </div>
            <Button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Join AI Beta Program"}
            </Button>
            <Link href="/">
              <Button variant="ghost" className="w-full rounded-lg">
                Learn More
              </Button>
            </Link>
          </form>
        ) : (
          <div className="text-center space-y-4">
            <div className="bg-green-50 text-green-800 p-4 rounded-lg">
              <p className="font-medium">Welcome to XpatAI! 🎉</p>
              <p className="text-sm mt-1">
                You're on the whitelist for our AI beta and token launch.
              </p>
            </div>
            <Link href="/">
              <Button variant="outline" className="w-full rounded-lg">
                Explore Platform
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
