import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Cooking preparation"
          width={1920}
          height={600}
          className="object-cover w-full h-full opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Your Digital Recipe Book</h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Create, organize, and share your favorite recipes with ease.
          </p>
          <Button size="lg" className="text-lg py-6 px-8">
            Get Started for Free
          </Button>
        </div>
      </div>
    </section>
  );
}
