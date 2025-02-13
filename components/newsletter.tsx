import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the email to your backend
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Join Our Beta Waitlist</h2>
            <p className="text-gray-600">
              Be among the first to experience XpatAI and get exclusive benefits
            </p>
          </div>

          {!submitted ? (
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-gray-50"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="whitespace-nowrap"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-xl border border-green-100 shadow-sm">
              <div className="text-center">
                <p className="font-medium text-gray-900 mb-1">
                  Thanks for joining! 🎉
                </p>
                <p className="text-sm text-gray-600">
                  We'll be in touch with your beta access soon.
                </p>
              </div>
            </div>
          )}

          <p className="text-sm text-gray-500 text-center mt-4">
            Join our community of future global citizens. No spam, just updates
            about our beta program.
          </p>
        </div>
      </div>
    </section>
  );
}
