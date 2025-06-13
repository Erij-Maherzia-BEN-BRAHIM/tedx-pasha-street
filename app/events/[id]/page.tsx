import { notFound } from "next/navigation";
import { EventHeader } from "@/components/event-details/event-header";
import { EventSchedule } from "@/components/event-details/event-schedule";
import { EventSpeakers } from "@/components/event-details/event-speakers";
import { EventSponsors } from "@/components/event-details/event-sponsors";
import { EventHighlights } from "@/components/event-details/event-highlights";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Mock data - in a real app, this would come from a database
const eventsData = {
  1: {
    id: 1,
    title: "TEDxPasha Street 2024",
    date: "March 15, 2024",
    location: "Pasha Street Cultural Center",
    attendees: 200,
    status: "upcoming" as const,
    description:
      "Join us for our biggest event yet, featuring 8 inspiring speakers from diverse backgrounds.",
    theme: "Future Forward",
    heroImage: "/placeholder.svg?height=400&width=800",
  },
  2: {
    id: 2,
    title: "TEDxPasha Street 2023",
    date: "October 20, 2023",
    location: "Pasha Street Theater",
    attendees: 150,
    status: "past" as const,
    description:
      "Our inaugural event brought together innovators and thought leaders for an unforgettable experience.",
    theme: "Breaking Boundaries",
    heroImage: "/placeholder.svg?height=400&width=800",
  },
  3: {
    id: 3,
    title: "TEDxPasha Street 2022",
    date: "June 10, 2022",
    location: "Pasha Street Community Hall",
    attendees: 100,
    status: "past" as const,
    description:
      "A smaller, intimate gathering that laid the foundation for our growing community.",
    theme: "Seeds of Change",
    heroImage: "/placeholder.svg?height=400&width=800",
  },
};

interface EventPageProps {
  params: {
    id: string;
  };
}

export default function EventPage({ params }: EventPageProps) {
  const eventId = Number.parseInt(params.id);
  const event = eventsData[eventId as keyof typeof eventsData];

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <EventHeader event={event} />
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
          <EventSpeakers eventId={eventId} />
          <EventSchedule eventId={eventId} />
          <EventSponsors eventId={eventId} />
          {event.status === "past" && <EventHighlights eventId={eventId} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
