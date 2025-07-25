import { Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function EventsSection() {
  const events = [
    {
      id: 1,
      title: "TEDxPasha Street",
      date: "December 27, 2025",
      location: "Sainte-Croix Church of Tunis",
      attendees: 300,
      status: "upcoming",
      description:
        "Now in its third edition, TEDxPashaStreet continues to grow as a hub for bold ideas and powerful voices. This year, we bring together a new generation of change-makers, artists, and visionaries to spark conversations that move minds and hearts.",
    },
    {
      id: 2,
      title: "TEDxPasha Street | Inside In",
      date: "October 20, 2023",
      location: "Sainte-Croix Church of Tunis",
      attendees: 200,
      status: "past",
      description:
        "Our second TEDxPashaStreet brings together a new wave of innovators, storytellers, and visionaries for another unforgettable experience.",
    },
    {
      id: 3,
      title: "TEDxPasha Street | Brand Legacy",
      date: "October 20, 2023",
      location: "Medrassa Bir Lahjar",
      attendees: 100,
      status: "past",
      description:
        "A smaller, intimate gathering that laid the foundation for our growing community.",
    },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our <span className="text-[#e62b1e]">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our past and upcoming events that have brought together
            amazing speakers and audiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-bold">
                    {event.title}
                  </CardTitle>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      event.status === "upcoming"
                        ? "bg-[#e62b1e] text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {event.status === "upcoming" ? "Upcoming" : "Past Event"}
                  </span>
                </div>
                <CardDescription>{event.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.attendees} attendees</span>
                  </div>
                </div>
                {event.status === "upcoming" ? (
                  <Button
                    className="w-full bg-[#e62b1e] hover:bg-[#c41e1a]"
                    variant="default"
                  >
                    Get Tickets
                  </Button>
                ) : (
                  <Link href={`/events/${event.id}`}>
                    <Button className="w-full" variant="outline">
                      View Highlights
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
