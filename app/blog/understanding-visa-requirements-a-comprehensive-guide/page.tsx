"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  FileCheck,
  Globe2,
  Clock4,
  AlertCircle,
  Briefcase,
} from "lucide-react";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-16">
        <article className="max-w-3xl mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-8">
              <Image
                src="/blog3.png"
                alt="Visa Requirements Guide"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Marcus Rodriguez
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Dec 15, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />6 min read
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Understanding Visa Requirements: A Comprehensive Guide
            </h1>

            {/* Article Summary */}
            <div className="bg-gray-50 border-l-4 border-sky-500 p-6 rounded-r-lg mb-12">
              <p className="text-lg text-gray-700 italic">
                Navigating the complex world of international visas can be
                overwhelming. This comprehensive guide breaks down different
                visa types, application processes, and essential requirements to
                help you plan your global journey with confidence.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common Types of Visas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Work Visas
                      </h3>
                      <p className="text-sm text-gray-600">
                        Permits for employment in a foreign country. Usually
                        requires employer sponsorship and proof of
                        qualifications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe2 className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Digital Nomad Visas
                      </h3>
                      <p className="text-sm text-gray-600">
                        Special permits for remote workers and digital
                        professionals. Often requires proof of stable income.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock4 className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Tourist Visas
                      </h3>
                      <p className="text-sm text-gray-600">
                        Short-term permits for leisure travel. Requirements vary
                        by country and length of stay.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Residence Permits
                      </h3>
                      <p className="text-sm text-gray-600">
                        Long-term authorization for extended stays. Often
                        requires proof of financial stability and accommodation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Essential Documentation
              </h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Standard Requirements
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Valid passport (usually with 6+ months validity)</li>
                      <li>Completed visa application form</li>
                      <li>Passport-sized photographs</li>
                      <li>Proof of financial means</li>
                      <li>Travel insurance documentation</li>
                    </ul>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Additional Documents
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Employment contract or job offer letter</li>
                      <li>Bank statements (usually last 3-6 months)</li>
                      <li>Proof of accommodation</li>
                      <li>Criminal record check</li>
                      <li>Educational certificates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Common Challenges and Solutions
              </h2>
              <div className="space-y-6">
                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Processing Times
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Visa processing can take anywhere from a few days to
                        several months. Plan ahead and apply well in advance of
                        your intended travel date. Consider expedited processing
                        options where available.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          Pro Tip: Many countries offer premium processing
                          services for an additional fee. This can significantly
                          reduce waiting times.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Document Authentication
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Many countries require documents to be authenticated or
                        apostilled. This process can be time-consuming and may
                        involve multiple government agencies.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          Pro Tip: Keep digital copies of all your important
                          documents and get them translated if required by the
                          destination country.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tips for a Successful Application
              </h2>
              <div className="space-y-4">
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Double-check all requirements before submitting</li>
                  <li>Ensure all documents are current and valid</li>
                  <li>Provide clear and accurate information</li>
                  <li>Keep copies of all submitted documents</li>
                  <li>Follow up regularly on your application status</li>
                </ul>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Looking Ahead
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As global mobility continues to evolve, visa requirements and
                processes may change. Stay informed about the latest updates and
                consider using professional assistance for complex applications.
                Remember that thorough preparation and attention to detail are
                key to a successful visa application.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
