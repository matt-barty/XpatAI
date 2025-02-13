import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl">
          <Image
            src="/earth-logo.png"
            alt="XpatAI Logo"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          XpatAI
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          <Link
            href="/#features"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/docs"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden md:block"
          >
            Docs →
          </Link>
          <Link href="/login">
            <Button variant="outline" className="rounded-full">
              Log in
            </Button>
          </Link>
          <Link href="/explore">
            <Button className="rounded-full hidden md:flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Join Beta
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
