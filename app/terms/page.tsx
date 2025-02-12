"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Scale, AlertCircle, FileCheck, Clock } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-12">Last updated: January 15, 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Agreement to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing or using XpatAI's website and services, you agree
                to be bound by these Terms of Service. If you disagree with any
                part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Use of Services
              </h2>
              <div className="space-y-6">
                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Acceptable Use
                      </h3>
                      <p className="text-gray-700 mb-4">
                        You agree to use our services only for lawful purposes
                        and in accordance with these Terms. You agree not to:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Use the services in any way that violates laws</li>
                        <li>Impersonate or attempt to impersonate others</li>
                        <li>Engage in any automated use of the system</li>
                        <li>Attempt to bypass any security measures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        User Responsibilities
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Maintain accurate account information</li>
                        <li>Protect account credentials</li>
                        <li>Report unauthorized access</li>
                        <li>Comply with all applicable laws</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Intellectual Property
              </h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  The service and its original content, features, and
                  functionality are owned by XpatAI and are protected by
                  international copyright, trademark, and other intellectual
                  property laws.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Subscription and Payments
              </h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">
                      Subscription terms and payment conditions:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Automatic renewal unless cancelled</li>
                      <li>Prorated refunds for cancellations</li>
                      <li>Price changes with 30 days notice</li>
                      <li>Taxes may apply based on location</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Limitation of Liability
              </h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">
                      XpatAI shall not be liable for any indirect, incidental,
                      special, consequential, or punitive damages resulting
                      from:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Use or inability to use the service</li>
                      <li>Any content obtained from the service</li>
                      <li>Unauthorized access to your data</li>
                      <li>Interruption or cessation of service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Changes to Terms
              </h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <p className="text-gray-700">
                  We reserve the right to modify or replace these Terms at any
                  time. We will provide notice of any changes by posting the new
                  Terms on this page and updating the "last updated" date. Your
                  continued use of the service after such changes constitutes
                  acceptance of the new Terms.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-gray-700">Email: legal@xpatai.xyz</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
