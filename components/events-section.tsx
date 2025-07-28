"use client";

import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useState, useEffect } from "react";

export function EventsSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second for real-time countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateTimeRemaining = (eventDate: string | number | Date) => {
    const now = currentTime;
    const target = new Date(eventDate);
    const difference = target.getTime() - now.getTime();

    if (difference <= 0) {
      return null; // Event has passed
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const formatCountdown = (timeRemaining: {
    days: any;
    hours: any;
    minutes: number;
    seconds: number;
  }) => {
    if (!timeRemaining) return null;

    const { days, hours, minutes, seconds } = timeRemaining;

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  const events = [
    {
      id: 1,
      title: "TEDxPasha Street | COUNTDOWN",
      date: "December 27, 2025",
      location: "Sainte-Croix Church of Tunis",
      attendees: 300,
      status: "upcoming",
      description:
        "The third edition of TEDxPasha Street Countdown will bring together inspiring speakers, changemakers, and bold ideas focused on climate change and climate justice. This year’s event will highlight climate solutions and share powerful stories from across Tunisia and beyond. It contributes to the global Countdown initiative, which aims to cut greenhouse gas emissions in half by 2030.",
    },
    {
      id: 2,
      title: "TEDxPasha Street | Inside In",
      date: "February 22, 2025",
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
          {events.map((event) => {
            const timeRemaining =
              event.status === "upcoming"
                ? calculateTimeRemaining(event.date)
                : null;
            const countdownText = timeRemaining
              ? formatCountdown(timeRemaining)
              : null;

            return (
              <Card
                key={event.id}
                className="hover:shadow-lg transition-shadow size-full"
              >
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
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-2 mb-4 flex-1 h-full">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    {event.status === "past" && (
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {event.attendees} attendees
                        </span>
                      </div>
                    )}
                    {event.status === "upcoming" && countdownText && (
                      <div className="flex items-center text-[#e62b1e] font-semibold">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {countdownText} remaining
                        </span>
                      </div>
                    )}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
