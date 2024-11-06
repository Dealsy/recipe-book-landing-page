import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-20 bg-secondary relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=400&width=1920"
          alt="Beautiful finished dishes"
          width={1920}
          height={400}
          className="object-cover w-full h-full opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-8">Ready to start cooking?</h2>
        <Button size="lg" className="text-lg py-6 px-8">
          Sign Up Now
        </Button>
      </div>
    </section>
  );
}
