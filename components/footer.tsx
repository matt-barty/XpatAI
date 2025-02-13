import Link from "next/link";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const footerLinks = {
  Product: [
    { name: "Features", href: "/#features" },
    { name: "Explore", href: "/explore" },
    { name: "Pricing", href: "/pricing" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Docs", href: "/docs" },
    { name: "Blog", href: "/blog" },
  ],
  Legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl mb-4"
            >
              <Image
                src="/earth-logo.png"
                alt="XpatAI Logo"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              XpatAI
            </Link>
            <p className="text-gray-600 max-w-xs">
              Your AI-powered companion for global relocation. Making
              international transitions seamless and accessible.
            </p>
            <div className="mt-6 space-x-4">
              <Link
                href="https://twitter.com/xpat_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2"
              >
                <BsTwitterX className="h-5 w-5" />
              </Link>
              <Link
                href="https://t.me/xpat_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2"
              >
                <FaTelegramPlane className="h-5 w-5" />
              </Link>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} XpatAI. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with ❤️ for global citizens
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
