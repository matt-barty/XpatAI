import { Button } from "@/components/ui/button";
import { Globe } from "@/components/magicui/globe";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-left lg:pr-8">
            <h1 className="text-6xl font-bold tracking-tight mb-8">
              Your world,
              <br />
              explored.
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              XpatAI is an intelligent platform that helps you explore and
              understand different countries for expatriation and immigration
              through AI-powered insights.
            </p>
            <div className="flex gap-4">
              <Link href="/explore">
                <Button size="lg" className="rounded-full">
                  Get started
                </Button>
              </Link>
            </div>
          </div>

          {/* Globe */}
          <div className="relative h-[500px] lg:h-[600px] order-first lg:order-last">
            <Globe className="scale-125" />
          </div>
        </div>
      </div>
    </section>
  );
}
