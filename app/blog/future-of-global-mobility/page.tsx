"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { Calendar, Clock, User } from "lucide-react";

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
                src="/blog1.png"
                alt="The Future of Global Mobility"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Matthew Chen
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Jan 24, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />5 min read
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The Future of Global Mobility: AI-Powered Relocation
            </h1>

            {/* Article Summary */}
            <div className="bg-gray-50 border-l-4 border-sky-500 p-6 rounded-r-lg mb-12">
              <p className="text-lg text-gray-700 italic">
                The landscape of international relocation is undergoing a
                revolutionary transformation, driven by the integration of
                artificial intelligence. As we step into 2025, the traditional
                challenges of moving abroad are being systematically dismantled
                by innovative AI solutions that promise to make global mobility
                more accessible and efficient than ever before.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Evolution of Global Mobility
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For decades, the process of relocating to a new country has been
                fraught with complexity. From visa applications to housing
                searches, from cultural adaptation to healthcare systems
                understanding – each aspect presented its own set of challenges.
                However, the emergence of AI-powered platforms is changing this
                narrative dramatically.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How AI is Transforming Relocation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                AI technology is revolutionizing several key aspects of the
                relocation process:
              </p>
              <div className="bg-white shadow-sm rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sky-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Personalized Recommendations
                    </h3>
                    <p className="text-gray-700">
                      AI algorithms analyze individual preferences, professional
                      backgrounds, and lifestyle choices to suggest the most
                      suitable destinations and neighborhoods.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sky-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Document Processing
                    </h3>
                    <p className="text-gray-700">
                      Advanced OCR and natural language processing capabilities
                      streamline visa applications and document verification
                      processes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sky-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Cultural Integration
                    </h3>
                    <p className="text-gray-700">
                      AI-powered tools provide personalized cultural training
                      and language learning programs tailored to specific
                      destinations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sky-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Cost Prediction
                    </h3>
                    <p className="text-gray-700">
                      Machine learning models accurately forecast living costs
                      and help in financial planning for different locations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Role of XpatAI
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At XpatAI, we're at the forefront of this transformation. Our
                platform combines cutting-edge AI technology with deep expertise
                in global mobility to provide:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    ✓ Real-time visa requirement updates and application
                    assistance
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    ✓ AI-powered property matching based on personal preferences
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    ✓ Automated cost of living calculations and budget planning
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    ✓ Intelligent cultural adaptation recommendations
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Looking Ahead
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The future of global mobility is bright, with AI continuing to
                break down barriers and make international relocation more
                accessible. As technology evolves, we can expect even more
                sophisticated solutions that will further simplify the process
                of moving abroad.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The integration of AI in global mobility represents more than
                just technological advancement – it's a fundamental shift in how
                we approach international relocation. As we continue to develop
                and refine these technologies, the dream of seamless global
                mobility comes closer to reality.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
