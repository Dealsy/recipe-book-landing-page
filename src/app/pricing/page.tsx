"use client";

import { useState } from "react";
import { Check, ChefHat, Book, Users, Bell, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PricingPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-primary/[0.03] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[40rem] h-[40rem] bg-primary/30 rounded-full blur-3xl opacity-20 animate-blob" />
      </div>

      <div className="text-center relative">
        <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl">
          Choose Your Perfect Recipe Journey
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Unlock the full potential of your culinary creativity with our
          flexible plans.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <Card
            key={plan.title}
            className={`flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
              ${
                index === 1
                  ? "border-primary bg-primary/5"
                  : "border-muted hover:border-primary"
              }
              relative overflow-hidden group`}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Popular badge */}
            {index === 1 && (
              <div className="absolute -right-12 top-8 bg-primary px-12 py-1 rotate-45 text-primary-foreground text-sm font-medium">
                Most Popular
              </div>
            )}

            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold">
                  {plan.title}
                </CardTitle>
              </div>
              <CardDescription className="text-base">
                {plan.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="mb-6">
                <p className="text-5xl font-bold">
                  ${plan.price}
                  <span className="text-lg font-normal text-muted-foreground">
                    /month
                  </span>
                </p>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <PricingItem key={idx}>{feature}</PricingItem>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                className="w-full relative group/button h-12 text-lg"
                variant={index === 1 ? "default" : "outline"}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-primary/10 scale-x-0 group-hover/button:scale-x-100 transition-transform duration-300 origin-left" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PricingItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center">
      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

const pricingPlans = [
  {
    title: "Free",
    description: "Perfect for casual cooks",
    price: 0,
    icon: <ChefHat className="h-6 w-6" />,
    features: [
      "Invite up to one friend to a Book",
      "Create One Recipe Book",
      "Create up to 10 recipes",
    ],
  },
  {
    title: "Basic",
    description: "For the dedicated home chef",
    price: 9.99,
    icon: <Book className="h-6 w-6" />,
    features: [
      "Everything in the Free plan",
      "Invite up to 5 friends",
      "Create multiple Recipe Books",
      "Unlimited Recipes",
    ],
  },
  {
    title: "Premium",
    description: "For the culinary connoisseur",
    price: 19.99,
    icon: <Users className="h-6 w-6" />,
    features: [
      "Everything in the Basic plan",
      "Notifications",
      "Set permissions for invited users",
      "Unlimited friend invites",
    ],
  },
];
