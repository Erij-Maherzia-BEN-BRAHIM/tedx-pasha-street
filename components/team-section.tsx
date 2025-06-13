import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Event Organizer",
      bio: "Passionate about bringing innovative ideas to life and building communities.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@tedxpashastreet.com",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Creative Director",
      bio: "Visual storyteller with a passion for design and meaningful experiences.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@tedxpashastreet.com",
      },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Speaker Curator",
      bio: "Dedicated to finding and nurturing the most inspiring voices in our community.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@tedxpashastreet.com",
      },
    },
    {
      id: 4,
      name: "David Kim",
      role: "Technology Lead",
      bio: "Tech enthusiast ensuring our events run smoothly with cutting-edge solutions.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@tedxpashastreet.com",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Meet Our <span className="text-[#e62b1e]">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate individuals behind TEDxPasha Street who work tirelessly to bring you inspiring events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                <p className="text-[#e62b1e] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-[#e62b1e] transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-[#e62b1e] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-[#e62b1e] transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
