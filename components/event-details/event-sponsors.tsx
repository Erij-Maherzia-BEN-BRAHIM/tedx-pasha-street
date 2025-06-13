import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier: "title" | "presenting" | "supporting";
  website?: string;
}

// Mock sponsors data
const sponsorsData: Record<number, Sponsor[]> = {
  1: [
    {
      id: 1,
      name: "Innovation Corp",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "title",
      website: "https://innovationcorp.com",
    },
    {
      id: 2,
      name: "Future Tech",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "presenting",
      website: "https://futuretech.com",
    },
    {
      id: 3,
      name: "Creative Labs",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "presenting",
      website: "https://creativelabs.com",
    },
    {
      id: 4,
      name: "Local Coffee Co",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "supporting",
    },
    {
      id: 5,
      name: "Design Studio",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "supporting",
    },
  ],
  2: [
    {
      id: 6,
      name: "Tech Pioneers",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "title",
    },
    {
      id: 7,
      name: "Digital Solutions",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "presenting",
    },
    {
      id: 8,
      name: "Community Bank",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "supporting",
    },
  ],
  3: [
    {
      id: 9,
      name: "Local Foundation",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "title",
    },
    {
      id: 10,
      name: "Community Center",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "supporting",
    },
  ],
};

interface EventSponsorsProps {
  eventId: number;
}

export function EventSponsors({ eventId }: EventSponsorsProps) {
  const sponsors = sponsorsData[eventId] || [];

  if (sponsors.length === 0) {
    return null;
  }

  const sponsorsByTier = {
    title: sponsors.filter((s) => s.tier === "title"),
    presenting: sponsors.filter((s) => s.tier === "presenting"),
    supporting: sponsors.filter((s) => s.tier === "supporting"),
  };

  const getTierTitle = (tier: string) => {
    switch (tier) {
      case "title":
        return "Title Sponsor";
      case "presenting":
        return "Presenting Sponsors";
      case "supporting":
        return "Supporting Sponsors";
      default:
        return "Sponsors";
    }
  };

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Event <span className="text-[#e62b1e]">Sponsors</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Thank you to our amazing sponsors who made this event possible.
        </p>
      </div>

      <div className="space-y-12">
        {/* Title Sponsor */}
        {sponsorsByTier.title.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
              {getTierTitle("title")}
            </h3>
            <div className="flex justify-center">
              {sponsorsByTier.title.map((sponsor) => (
                <Card key={sponsor.id} className="max-w-md">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{sponsor.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center p-8">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      width={200}
                      height={100}
                      className="max-w-full h-auto"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Presenting Sponsors */}
        {sponsorsByTier.presenting.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-center mb-8 text-gray-800">
              {getTierTitle("presenting")}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsorsByTier.presenting.map((sponsor) => (
                <Card
                  key={sponsor.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="flex items-center justify-center p-6">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      width={160}
                      height={80}
                      className="max-w-full h-auto"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Supporting Sponsors */}
        {sponsorsByTier.supporting.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-center mb-8 text-gray-800">
              {getTierTitle("supporting")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {sponsorsByTier.supporting.map((sponsor) => (
                <Card
                  key={sponsor.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="flex items-center justify-center p-4">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      width={120}
                      height={60}
                      className="max-w-full h-auto"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
