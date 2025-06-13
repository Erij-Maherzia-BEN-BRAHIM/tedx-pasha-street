"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Plus, Edit, Trash2, Calendar, MapPin, Users } from "lucide-react"

interface Event {
  id: number
  title: string
  date: string
  location: string
  attendees: number
  status: "upcoming" | "past"
  description: string
}

export function EventsManager() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "TEDxPasha Street 2024",
      date: "2024-03-15",
      location: "Pasha Street Cultural Center",
      attendees: 200,
      status: "upcoming",
      description: "Join us for our biggest event yet, featuring 8 inspiring speakers from diverse backgrounds.",
    },
    {
      id: 2,
      title: "TEDxPasha Street 2023",
      date: "2023-10-20",
      location: "Pasha Street Theater",
      attendees: 150,
      status: "past",
      description:
        "Our inaugural event brought together innovators and thought leaders for an unforgettable experience.",
    },
  ])

  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmit = (formData: FormData) => {
    const eventData = {
      title: formData.get("title") as string,
      date: formData.get("date") as string,
      location: formData.get("location") as string,
      attendees: Number.parseInt(formData.get("attendees") as string),
      status: formData.get("status") as "upcoming" | "past",
      description: formData.get("description") as string,
    }

    if (editingEvent) {
      setEvents(events.map((event) => (event.id === editingEvent.id ? { ...eventData, id: editingEvent.id } : event)))
    } else {
      const newEvent = {
        ...eventData,
        id: Math.max(...events.map((e) => e.id), 0) + 1,
      }
      setEvents([...events, newEvent])
    }

    setEditingEvent(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (event: Event) => {
    setEditingEvent(event)
    setIsDialogOpen(true)
  }

  const handleDelete = (id: number) => {
    setEvents(events.filter((event) => event.id !== id))
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Events Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#e62b1e] hover:bg-[#c41e1a]" onClick={() => setEditingEvent(null)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingEvent ? "Edit Event" : "Add New Event"}</DialogTitle>
              <DialogDescription>
                {editingEvent ? "Update the event details below." : "Fill in the details for the new event."}
              </DialogDescription>
            </DialogHeader>
            <form action={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Event Title</Label>
                <Input
                  id="title"
                  name="title"
                  defaultValue={editingEvent?.title || ""}
                  placeholder="TEDxPasha Street 2024"
                  required
                />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" name="date" type="date" defaultValue={editingEvent?.date || ""} required />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  defaultValue={editingEvent?.location || ""}
                  placeholder="Pasha Street Cultural Center"
                  required
                />
              </div>
              <div>
                <Label htmlFor="attendees">Expected Attendees</Label>
                <Input
                  id="attendees"
                  name="attendees"
                  type="number"
                  defaultValue={editingEvent?.attendees || ""}
                  placeholder="200"
                  required
                />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select name="status" defaultValue={editingEvent?.status || "upcoming"}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="past">Past Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={editingEvent?.description || ""}
                  placeholder="Event description..."
                  rows={3}
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#e62b1e] hover:bg-[#c41e1a]">
                  {editingEvent ? "Update" : "Create"} Event
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {event.title}
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.status === "upcoming" ? "bg-[#e62b1e] text-white" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {event.status === "upcoming" ? "Upcoming" : "Past Event"}
                    </span>
                  </CardTitle>
                  <CardDescription className="mt-2">{event.description}</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(event)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(event.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(event.date)}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  {event.attendees} attendees
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
