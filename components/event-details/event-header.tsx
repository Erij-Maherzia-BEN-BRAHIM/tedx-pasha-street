import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  attendees: number;
  status: "upcoming" | "past";
  description: string;
  theme: string;
  heroImage: string;
}

interface EventHeaderProps {
  event: Event;
}

export function EventHeader({ event }: EventHeaderProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-[#e62b1e] text-white">
      <div className="absolute inset-0">
        <Image
          src={event.heroImage || "/placeholder.svg"}
          alt={event.title}
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <Link
          href="/"
          className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-[#e62b1e] text-white text-sm font-medium rounded-full mb-4">
            {event.theme}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-[#e62b1e]">TEDx</span>
          <span className="text-white">Pasha Street</span>
        </h1>

        <h2 className="text-2xl md:text-3xl mb-4 text-gray-200">
          {event.title.replace("TEDxPasha Street ", "")}
        </h2>

        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          {event.description}
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            <span>{event.attendees} attendees</span>
          </div>
        </div>

        {event.status === "upcoming" && (
          <Button
            size="lg"
            className="bg-[#e62b1e] hover:bg-[#c41e1a] text-white"
          >
            Get Tickets
          </Button>
        )}
      </div>
    </section>
  );
}
