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
      <BlobCursor />
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
        <Features />
        <DarkFeatures />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
