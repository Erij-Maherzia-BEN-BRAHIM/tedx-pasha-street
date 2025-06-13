"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Download, Share2 } from "lucide-react";
import Image from "next/image";

interface Highlight {
  id: number;
  type: "video" | "photo" | "article";
  title: string;
  description: string;
  thumbnail: string;
  url?: string;
}

// Mock highlights data
const highlightsData: Record<number, Highlight[]> = {
  2: [
    {
      id: 1,
      type: "video",
      title: "Breaking Digital Barriers - Full Talk",
      description:
        "Prof. Elena Kowalski's inspiring talk about overcoming digital transformation challenges.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      url: "#",
    },
    {
      id: 2,
      type: "video",
      title: "From Idea to Impact - Full Talk",
      description:
        "David Park shares his entrepreneurial journey and lessons learned.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      url: "#",
    },
    {
      id: 3,
      type: "photo",
      title: "Event Photo Gallery",
      description:
        "Highlights from TEDxPasha Street 2023 - speakers, audience, and memorable moments.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      url: "#",
    },
    {
      id: 4,
      type: "article",
      title: "Event Recap Article",
      description:
        "Read about the key takeaways and insights from our 2023 event.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      url: "#",
    },
  ],
  3: [
    {
      id: 5,
      type: "video",
      title: "Seeds of Transformation - Full Talk",
      description:
        "Maria Santos discusses how small actions create big changes in communities.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      url: "#",
    },
    {
      id: 6,
      type: "photo",
      title: "Community Moments",
      description:
        "Photos from our intimate first gathering that started it all.",
      thumbnail: "/placeholder.svg?height=200&width=300",
      url: "#",
    },
  ],
};

interface EventHighlightsProps {
  eventId: number;
}

export function EventHighlights({ eventId }: EventHighlightsProps) {
  const highlights = highlightsData[eventId] || [];

  if (highlights.length === 0) {
    return null;
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-5 w-5" />;
      case "photo":
        return <Download className="h-5 w-5" />;
      case "article":
        return <Share2 className="h-5 w-5" />;
      default:
        return <Play className="h-5 w-5" />;
    }
  };

  const getButtonText = (type: string) => {
    switch (type) {
      case "video":
        return "Watch Video";
      case "photo":
        return "View Gallery";
      case "article":
        return "Read Article";
      default:
        return "View";
    }
  };

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Event <span className="text-[#e62b1e]">Highlights</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Relive the best moments from this inspiring event.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((highlight) => (
          <Card
            key={highlight.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-video">
              <Image
                src={highlight.thumbnail || "/placeholder.svg"}
                alt={highlight.title}
                fill
                className="object-cover"
              />
              {highlight.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-16 h-16 bg-[#e62b1e] rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              )}
            </div>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-black mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {highlight.description}
              </p>
              <Button
                className="w-full bg-[#e62b1e] hover:bg-[#c41e1a]"
                onClick={() =>
                  highlight.url && window.open(highlight.url, "_blank")
                }
              >
                {getIcon(highlight.type)}
                <span className="ml-2">{getButtonText(highlight.type)}</span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
