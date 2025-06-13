"use client"
import { AdminNavbar } from "@/components/admin/admin-navbar"
import { EventsManager } from "@/components/admin/events-manager"
import { PartnersManager } from "@/components/admin/partners-manager"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            <span className="text-[#e62b1e]">TEDx</span>Pasha Street Admin
          </h1>
          <p className="text-gray-600">Manage your events and partners</p>
        </div>

        <Tabs defaultValue="events" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="mt-6">
            <EventsManager />
          </TabsContent>

          <TabsContent value="partners" className="mt-6">
            <PartnersManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
