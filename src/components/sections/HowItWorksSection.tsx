import Image from "next/image";

const steps = [
  {
    number: 1,
    title: "Create Your Recipe Collection",
    description:
      "Start building your digital cookbook by adding your favorite recipes. Include detailed ingredients, step-by-step instructions, and beautiful food photos to make your recipes come alive.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Recipe creation illustration",
    align: "right",
  },
  {
    number: 2,
    title: "Organize and Categorize",
    description:
      "Sort your recipes into categories, set difficulty levels, and add custom tags. Make it easy to find exactly what you're looking for, whether it's breakfast ideas or dinner party showstoppers.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Recipe organization illustration",
    align: "left",
  },
  {
    number: 3,
    title: "Share with Your Community",
    description:
      "Invite family members, friends, or your kitchen team to collaborate. Share recipes, cooking tips, and create multiple recipe books for different occasions or projects.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Recipe sharing illustration",
    align: "right",
  },
  {
    number: 4,
    title: "Cook and Enjoy",
    description:
      "Access your recipes from any device, scale serving sizes automatically, and use the cooking mode for a clean, easy-to-follow format while you're in the kitchen.",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Cooking illustration",
    align: "left",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">How It Works</h2>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px h-full w-0.5 border-l border-dashed border-border" />
            {steps.map((step, index) => (
              <div key={index} className="mb-16 relative">
                <div
                  className={`flex items-center gap-8 ${
                    step.align === "left" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-1/2">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <Image
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
