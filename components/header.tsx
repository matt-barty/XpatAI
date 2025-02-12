import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Image
            src="/earth-logo.png"
            alt="XpatAI Logo"
            width={24}
            height={24}
            className="h-6 w-6"
          />
          XpatAI
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-gray-600"
          >
            Features
          </Link>
          <Link
            href="#explore"
            className="text-sm font-medium hover:text-gray-600"
          >
            Explore
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-gray-600"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-gray-600"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/docs"
            className="text-sm font-medium hover:text-gray-600 hidden md:block"
          >
            Docs →
          </Link>
          <Link
            href="/demo"
            className="text-sm font-medium hover:text-gray-600 hidden md:block"
          >
            Demo →
          </Link>
          <Button variant="outline" className="rounded-full">
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}
