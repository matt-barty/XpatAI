"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import BlobCursor from "@/components/Blob";

const featuredPost = {
  title: "The Future of Global Mobility: AI-Powered Relocation",
  excerpt:
    "Discover how artificial intelligence is revolutionizing the way people move across borders and make informed decisions about their international transitions.",
  image: "/blog1.png",
  author: "Matthew Chen",
  date: "Jan 24, 2025",
  readTime: "5 min read",
};

const recentPosts = [
  {
    title: "Top 10 Countries for Digital Nomads in 2024",
    excerpt:
      "Explore the best destinations for remote workers, featuring high-speed internet, affordable living costs, and vibrant expat communities.",
    image: "/blog2.png",
    author: "Aisha Patel",
    date: "Jan 10, 2025",
    readTime: "4 min read",
  },
  {
    title: "Understanding Visa Requirements: A Comprehensive Guide",
    excerpt:
      "Navigate the complex world of international visas with our detailed guide to different visa types and application processes.",
    image: "/blog3.png",
    author: "Marcus Rodriguez",
    date: "Dec 15, 2024",
    readTime: "6 min read",
  },
  {
    title: "Healthcare Systems Around the World: What You Need to Know",
    excerpt:
      "Compare healthcare systems across different countries and understand what to expect when moving abroad.",
    image: "/blog4.png",
    author: "Sarah Chen",
    date: "Dec 10, 2024",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <BlobCursor fillColor="#0ea5e9" />
      <Header />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
              <p className="text-xl text-gray-600">
                Insights, guides, and stories about global mobility and
                expatriate life.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  <Link
                    href="/blog/future-of-global-mobility"
                    className="hover:text-sky-600"
                  >
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-12">Recent Posts</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {recentPosts.map((post, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-[3/2]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold mb-2">
                        <Link
                          href={`/blog/${post.title
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-")
                            .replace(/^-+|-+$/g, "")}`}
                          className="hover:text-sky-600"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
