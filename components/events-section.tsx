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
      title: "TEDxPasha Street 2024",
      date: "March 15, 2024",
      location: "Pasha Street Cultural Center",
      attendees: 200,
      status: "upcoming",
      description:
        "Join us for our biggest event yet, featuring 8 inspiring speakers from diverse backgrounds.",
    },
    {
      id: 2,
      title: "TEDxPasha Street 2023",
      date: "October 20, 2023",
      location: "Pasha Street Theater",
      attendees: 150,
      status: "past",
      description:
        "Our inaugural event brought together innovators and thought leaders for an unforgettable experience.",
    },
    {
      id: 3,
      title: "TEDxPasha Street 2022",
      date: "June 10, 2022",
      location: "Pasha Street Community Hall",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold">
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
