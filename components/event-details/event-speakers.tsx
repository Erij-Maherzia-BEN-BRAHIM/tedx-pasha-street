import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Globe } from "lucide-react";

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
  talkTitle: string;
  talkDescription: string;
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

// Mock speakers data - would come from database in real app
const speakersData: Record<number, Speaker[]> = {
  1: [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "AI Research Director",
      company: "Future Tech Labs",
      bio: "Leading researcher in artificial intelligence and machine learning with over 15 years of experience.",
      image: "/placeholder.svg?height=300&width=300",
      talkTitle: "The Future of Human-AI Collaboration",
      talkDescription:
        "Exploring how AI will transform the way we work and live in the next decade.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Social Entrepreneur",
      company: "Change Makers Inc.",
      bio: "Passionate about creating sustainable solutions for social challenges in urban communities.",
      image: "/placeholder.svg?height=300&width=300",
      talkTitle: "Building Communities That Last",
      talkDescription:
        "How grassroots movements can create lasting change in our neighborhoods.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "Dr. Amira Hassan",
      title: "Climate Scientist",
      company: "Green Earth Institute",
      bio: "Award-winning climate researcher focused on innovative solutions for environmental challenges.",
      image: "/placeholder.svg?height=300&width=300",
      talkTitle: "Climate Action in the Digital Age",
      talkDescription:
        "Leveraging technology to combat climate change and build a sustainable future.",
      social: {
        linkedin: "#",
        website: "#",
      },
    },
    {
      id: 4,
      name: "James Rodriguez",
      title: "Creative Director",
      company: "Pixel Dreams Studio",
      bio: "Award-winning designer and creative director with a passion for storytelling through visual media.",
      image: "/placeholder.svg?height=300&width=300",
      talkTitle: "The Art of Digital Storytelling",
      talkDescription:
        "How visual narratives shape our understanding of the world around us.",
      social: {
        twitter: "#",
        website: "#",
      },
    },
  ],
  2: [
    {
      id: 5,
      name: "Prof. Elena Kowalski",
      title: "Innovation Strategist",
      company: "Tech University",
      bio: "Professor and consultant helping organizations navigate digital transformation.",
      image: "/placeholder.svg?height=300&width=300",
      talkTitle: "Breaking Digital Barriers",
      talkDescription:
        "Overcoming obstacles in the digital transformation journey.",
      social: {
        linkedin: "#",
        website: "#",
      },
    },
    {
      id: 6,
      name: "David Park",
      title: "Startup Founder",
      company: "InnovateLab",
      bio: "Serial entrepreneur with three successful exits in the tech industry.",
      image: "/placeholder.svg?height=300&width=300",
      talkTitle: "From Idea to Impact",
      talkDescription:
        "The journey of turning innovative ideas into world-changing companies.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ],
  3: [
    {
      id: 7,
      name: "Maria Santos",
      title: "Community Organizer",
      company: "Local Change Network",
      bio: "Grassroots organizer focused on empowering local communities through education and advocacy.",
      image: "/placeholder.svg?height=300&width=300",
      talkTitle: "Seeds of Transformation",
      talkDescription:
        "How small actions can create ripple effects of positive change.",
      social: {
        linkedin: "#",
      },
    },
  ],
};

interface EventSpeakersProps {
  eventId: number;
}

export function EventSpeakers({ eventId }: EventSpeakersProps) {
  const speakers = speakersData[eventId] || [];

  if (speakers.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Featured <span className="text-[#e62b1e]">Speakers</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the inspiring individuals who shared their ideas worth spreading.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {speakers.map((speaker) => (
          <Card
            key={speaker.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="aspect-square relative">
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-black mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-[#e62b1e] font-medium">
                      {speaker.title}
                    </p>
                    <p className="text-gray-600 text-sm">{speaker.company}</p>
                  </div>

                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      Talk
                    </Badge>
                    <h4 className="font-semibold text-black mb-2">
                      {speaker.talkTitle}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {speaker.talkDescription}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{speaker.bio}</p>

                  <div className="flex space-x-3">
                    {speaker.social.linkedin && (
                      <a
                        href={speaker.social.linkedin}
                        className="text-gray-400 hover:text-[#e62b1e] transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {speaker.social.twitter && (
                      <a
                        href={speaker.social.twitter}
                        className="text-gray-400 hover:text-[#e62b1e] transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                    {speaker.social.website && (
                      <a
                        href={speaker.social.website}
                        className="text-gray-400 hover:text-[#e62b1e] transition-colors"
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
