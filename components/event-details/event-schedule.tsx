import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Coffee, Mic, Users } from "lucide-react";

interface ScheduleItem {
  id: number;
  time: string;
  title: string;
  description?: string;
  type: "talk" | "break" | "networking" | "opening" | "closing";
  speaker?: string;
  duration: number;
}

// Mock schedule data
const scheduleData: Record<number, ScheduleItem[]> = {
  1: [
    {
      id: 1,
      time: "8:00 AM",
      title: "Registration & Welcome Coffee",
      description: "Check-in and networking with fellow attendees",
      type: "networking",
      duration: 60,
    },
    {
      id: 2,
      time: "9:00 AM",
      title: "Opening Ceremony",
      description: "Welcome to TEDxPasha Street 2024",
      type: "opening",
      duration: 30,
    },
    {
      id: 3,
      time: "9:30 AM",
      title: "The Future of Human-AI Collaboration",
      speaker: "Dr. Sarah Chen",
      type: "talk",
      duration: 18,
    },
    {
      id: 4,
      time: "9:50 AM",
      title: "Building Communities That Last",
      speaker: "Marcus Johnson",
      type: "talk",
      duration: 18,
    },
    {
      id: 5,
      time: "10:10 AM",
      title: "Coffee Break",
      description: "Networking and refreshments",
      type: "break",
      duration: 20,
    },
    {
      id: 6,
      time: "10:30 AM",
      title: "Climate Action in the Digital Age",
      speaker: "Dr. Amira Hassan",
      type: "talk",
      duration: 18,
    },
    {
      id: 7,
      time: "10:50 AM",
      title: "The Art of Digital Storytelling",
      speaker: "James Rodriguez",
      type: "talk",
      duration: 18,
    },
    {
      id: 8,
      time: "11:10 AM",
      title: "Panel Discussion",
      description: "Q&A with all speakers",
      type: "networking",
      duration: 30,
    },
    {
      id: 9,
      time: "11:40 AM",
      title: "Closing Remarks",
      description: "Thank you and next steps",
      type: "closing",
      duration: 20,
    },
  ],
  2: [
    {
      id: 10,
      time: "8:30 AM",
      title: "Registration & Breakfast",
      type: "networking",
      duration: 60,
    },
    {
      id: 11,
      time: "9:30 AM",
      title: "Welcome & Opening",
      type: "opening",
      duration: 30,
    },
    {
      id: 12,
      time: "10:00 AM",
      title: "Breaking Digital Barriers",
      speaker: "Prof. Elena Kowalski",
      type: "talk",
      duration: 18,
    },
    {
      id: 13,
      time: "10:20 AM",
      title: "From Idea to Impact",
      speaker: "David Park",
      type: "talk",
      duration: 18,
    },
    {
      id: 14,
      time: "10:40 AM",
      title: "Networking Break",
      type: "break",
      duration: 30,
    },
    {
      id: 15,
      time: "11:10 AM",
      title: "Closing & Next Steps",
      type: "closing",
      duration: 20,
    },
  ],
  3: [
    {
      id: 16,
      time: "9:00 AM",
      title: "Welcome Coffee",
      type: "networking",
      duration: 30,
    },
    {
      id: 17,
      time: "9:30 AM",
      title: "Opening Remarks",
      type: "opening",
      duration: 15,
    },
    {
      id: 18,
      time: "9:45 AM",
      title: "Seeds of Transformation",
      speaker: "Maria Santos",
      type: "talk",
      duration: 18,
    },
    {
      id: 19,
      time: "10:05 AM",
      title: "Community Discussion",
      type: "networking",
      duration: 25,
    },
    {
      id: 20,
      time: "10:30 AM",
      title: "Closing Circle",
      type: "closing",
      duration: 15,
    },
  ],
};

interface EventScheduleProps {
  eventId: number;
}

export function EventSchedule({ eventId }: EventScheduleProps) {
  const schedule = scheduleData[eventId] || [];

  if (schedule.length === 0) {
    return null;
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "talk":
        return <Mic className="h-4 w-4" />;
      case "break":
        return <Coffee className="h-4 w-4" />;
      case "networking":
        return <Users className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "talk":
        return "default";
      case "break":
        return "secondary";
      case "networking":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Event <span className="text-[#e62b1e]">Schedule</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A carefully curated program designed to inspire and engage.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {schedule.map((item, index) => (
            // <div className="bg-white p-6 rounded-lg border" key={item.id}>
            //   <div className="flex flex-col md:flex-row md:items-center justify-between">
            //     <div>
            //       <span className="text-[#e62b1e] font-medium">
            //         11:30 AM - 12:30 PM
            //       </span>
            //       <h3 className="text-xl font-bold mt-1">{item.title}</h3>
            //       <p className="text-muted-foreground mt-1">
            //         {item.description}
            //       </p>
            //     </div>
            //   </div>
            // </div>
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#e62b1e] rounded-full flex items-center justify-center text-white font-bold">
                      {item.time.split(" ")[0]}
                    </div>
                    <div className="text-center text-xs text-gray-500 mt-1">
                      {item.time.split(" ")[1]}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge
                        variant={getBadgeVariant(item.type)}
                        className="flex items-center space-x-1"
                      >
                        {getIcon(item.type)}
                        <span className="capitalize">{item.type}</span>
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {item.duration} min
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-black mb-1">
                      {item.title}
                    </h3>

                    {item.speaker && (
                      <p className="text-[#e62b1e] font-medium mb-1">
                        by {item.speaker}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {index < schedule.length - 1 && (
                    <div className="absolute left-8 mt-16 w-0.5 h-8 bg-gray-200" />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
