import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              About{" "}
              <span className="text-[#e62b1e]">
                TED<sup>x</sup>
              </span>{" "}
              Pasha Street
            </h2>
            <p className="mt-4 text-muted-foreground">
              TEDx Pasha Street is an independently organized TED event that
              brings together innovators, thinkers, and doers from our community
              to share ideas worth spreading.
            </p>
            <p className="mt-4 text-muted-foreground">
              In the spirit of ideas worth spreading, TEDx is a program of
              local, self-organized events that bring people together to share a
              TED-like experience. At a TEDx event, TED Talks video and live
              speakers combine to spark deep discussion and connection.
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
