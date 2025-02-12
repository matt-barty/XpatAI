import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring and getting started",
    features: [
      "Access to interactive world map",
      "Basic country information",
      "Limited AI chat interactions",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    description: "For serious expats and digital nomads",
    features: [
      "Everything in Free",
      "Unlimited AI chat interactions",
      "Detailed country insights",
      "Cost of living calculator",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations and businesses",
    features: [
      "Everything in Pro",
      "Custom API access",
      "Team collaboration",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include access
            to our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">{plan.price}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full rounded-full"
                variant={plan.name === "Pro" ? "default" : "outline"}
              >
                Get started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
