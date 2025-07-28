import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TedxPashaStreet } from "./common/tedx-pasha-street";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              About <TedxPashaStreet />
            </h2>
            <p className="mt-4 text-muted-foreground">
              From the vibrant heart of Tunis, <TedxPashaStreet /> is a platform
              for bold ideas, creative voices, and untold stories that reflect
              the energy, complexity, and potential of our local and global
              communities. Rooted in the spirit of{" "}
              <span className="text-[#e62b1e] font-bold">TED</span>'s
              mission—“Ideas change everything”—we curate a unique experience
              that blends inspiring talks, powerful performances, and deep human
              connection.
            </p>
            <p className="mt-4 text-muted-foreground">
              More than just an event, <TedxPashaStreet /> is a movement that
              lives beyond the stage. It's where change-makers, dreamers, and
              doers come together to explore new perspectives, spark dialogue,
              and imagine new futures. Be part of the conversation. Join us, get
              inspired, and help shape what comes next.
            </p>
            <div className="mt-8">
              <Link
                href="#events"
                className="inline-flex items-center text-[#e62b1e] hover:underline"
              >
                Discover our events{" "}
                <ChevronRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/about-tedx.jpeg"
                alt="TEDx Event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
