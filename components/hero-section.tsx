import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpeg"
          alt="TEDx Event"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl max-w-3xl">
          <span className="text-[#e62b1e]">Ideas</span> Worth Spreading at TED
          <sup>x</sup>
          Pasha Street
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-300">
          Join us for a day of inspiring talks, meaningful connections, and
          ideas that will change your perspective.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href={"#about"}>
            <Button
              size="lg"
              className="bg-[#e62b1e] hover:bg-[#c41e1a] text-white"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-black hover:opacity-90 transition ease-in-out duration-200"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Previous Talks
          </Button>
        </div>
      </div>
    </section>
  );
}
