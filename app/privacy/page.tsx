"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-12">Last updated: January 15, 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                At XpatAI, we take your privacy seriously. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our website and services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Personal Information
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Name and email address</li>
                        <li>Account credentials</li>
                        <li>Profile information</li>
                        <li>Payment information</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Usage Information
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Device and browser information</li>
                        <li>IP address and location data</li>
                        <li>Usage patterns and preferences</li>
                        <li>Interaction with our services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How We Use Your Information
              </h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>To provide and maintain our services</li>
                  <li>To personalize your experience</li>
                  <li>To improve our platform</li>
                  <li>To communicate with you</li>
                  <li>To process payments</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Data Security
              </h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">
                      We implement appropriate technical and organizational
                      security measures to protect your personal information,
                      including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security assessments</li>
                      <li>Access controls and authentication</li>
                      <li>Secure data storage practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Rights
              </h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">You have the right to:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Object to data processing</li>
                      <li>Data portability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">Email: privacy@xpatai.xyz</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
