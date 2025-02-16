"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import DarkFeatures from "@/components/dark-features";
import Stats from "@/components/stats";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import BlobCursor from "@/components/Blob";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <BlobCursor fillColor="#0ea5e9" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M20 20l-4-4 4 4-4 4 4-4 4 4-4-4 4-4-4 4z' stroke='%23FAD3D1' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />
      <Header />
      <main>
        <Hero />

        {/* Video Demo Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                See XpatAI in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Watch how our AI-powered platform helps you explore and
                understand different countries
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/hackathon.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            </div>
          </div>
        </section>

        <Features />
        <DarkFeatures />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
