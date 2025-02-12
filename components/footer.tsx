import Link from "next/link"
import { Globe } from "lucide-react"

const footerLinks = {
  Product: ["Features", "Security", "Team", "Enterprise"],
  Resources: ["Docs", "Learn", "Blog", "Support"],
  Company: ["About", "Careers", "Contact", "Partners"],
  Legal: ["Privacy", "Terms", "Security"],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Globe className="h-6 w-6" />
              XpatAI
            </Link>
            <p className="text-gray-600 max-w-xs">Helping you navigate your global journey with AI-powered insights.</p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} XpatAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

