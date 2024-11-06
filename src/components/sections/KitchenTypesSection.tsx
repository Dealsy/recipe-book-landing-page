import Image from "next/image";
import { ChefHat, Filter, Search, Users } from "lucide-react";

const sections = [
  {
    title: "For Home Cooks",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "Home cooking scene",
    items: [
      {
        icon: <ChefHat className="w-5 h-5" />,
        text: "Organize family recipes in one place",
      },
      {
        icon: <Users className="w-5 h-5" />,
        text: "Share recipes with friends and family",
      },
      {
        icon: <Search className="w-5 h-5" />,
        text: "Access your recipes from any device",
      },
    ],
  },
  {
    title: "For Professional Kitchens",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "Professional kitchen scene",
    items: [
      {
        icon: <Filter className="w-5 h-5" />,
        text: "Standardize recipes across your organization",
      },
      {
        icon: <Users className="w-5 h-5" />,
        text: "Collaborate with your team in real-time",
      },
      {
        icon: <ChefHat className="w-5 h-5" />,
        text: "Scale recipes for different serving sizes",
      },
    ],
  },
];

export function KitchenTypesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Perfect for Every Kitchen
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {sections.map((section, index) => (
            <div key={index} className="relative">
              <Image
                src={section.image}
                alt={section.imageAlt}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <span className="text-primary">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
