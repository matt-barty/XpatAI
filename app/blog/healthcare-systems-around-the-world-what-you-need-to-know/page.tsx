"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  Calendar,
  Clock,
  User,
  Heart,
  Building2,
  PiggyBank,
  Shield,
  Globe2,
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
                src="/blog4.png"
                alt="Healthcare Systems Around the World"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Sarah Chen
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Dec 10, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />7 min read
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Healthcare Systems Around the World: What You Need to Know
            </h1>

            {/* Article Summary */}
            <div className="bg-gray-50 border-l-4 border-sky-500 p-6 rounded-r-lg mb-12">
              <p className="text-lg text-gray-700 italic">
                Understanding healthcare systems is crucial for anyone planning
                to live abroad. From universal public healthcare to private
                insurance models, we explore the different approaches countries
                take to provide medical care and what it means for expats.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Major Healthcare System Models
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Universal Public Healthcare
                      </h3>
                      <p className="text-sm text-gray-600">
                        Government-funded system providing coverage to all
                        citizens. Common in countries like the UK, Canada, and
                        Nordic nations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Two-Tier System
                      </h3>
                      <p className="text-sm text-gray-600">
                        Basic public coverage with optional private insurance.
                        Popular in Australia and many European countries.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PiggyBank className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Insurance Mandate System
                      </h3>
                      <p className="text-sm text-gray-600">
                        Required health insurance through private providers.
                        Examples include Germany and the Netherlands.
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
                        Out-of-Pocket System
                      </h3>
                      <p className="text-sm text-gray-600">
                        Limited public coverage with majority of costs paid
                        directly by patients. Common in developing nations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Considerations for Expats
              </h2>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Access to Healthcare
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Residency requirements for public healthcare</li>
                      <li>Waiting periods for coverage eligibility</li>
                      <li>Language barriers in medical settings</li>
                      <li>Access to specialists and specialized treatments</li>
                      <li>Emergency care provisions for non-residents</li>
                    </ul>
                  </div>

                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Cost Considerations
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Insurance premiums and coverage options</li>
                      <li>Out-of-pocket expenses and deductibles</li>
                      <li>Prescription medication costs</li>
                      <li>Coverage for pre-existing conditions</li>
                      <li>International health insurance requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Popular Expat Destinations and Their Healthcare Systems
              </h2>
              <div className="space-y-6">
                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        United Kingdom (NHS)
                      </h3>
                      <p className="text-gray-700 mb-4">
                        The National Health Service (NHS) provides universal
                        coverage. Legal residents have access to free
                        healthcare, though some services may require
                        co-payments. Private insurance is available for faster
                        access to specialists.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          Pro Tip: Register with a local GP (General
                          Practitioner) as soon as you establish residency to
                          ensure access to NHS services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Germany
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Germany requires all residents to have health insurance,
                        either through the public system (gesetzliche
                        Krankenversicherung) or private insurance. The system is
                        known for its high quality and comprehensive coverage.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          Pro Tip: Income level determines eligibility for
                          public insurance. High-income earners may need to opt
                          for private insurance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Singapore
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Singapore's system combines government subsidies with
                        personal responsibility through mandatory savings
                        accounts. Known for its efficiency and high-quality
                        care, it's often cited as a model healthcare system.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          Pro Tip: Consider supplemental private insurance to
                          cover treatments not included in the basic MediShield
                          Life plan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Insurance Considerations
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  When choosing health insurance coverage abroad, consider:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Coverage scope and limitations</li>
                  <li>Network of healthcare providers</li>
                  <li>Claims process and reimbursement</li>
                  <li>Emergency evacuation coverage</li>
                  <li>Integration with local healthcare systems</li>
                </ul>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Looking Ahead
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Healthcare systems continue to evolve with technological
                advances and changing population needs. Stay informed about
                healthcare options in your chosen destination and consider
                working with healthcare advisors who specialize in expat
                coverage to ensure you have appropriate protection for your
                specific situation.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
