"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Plus, Edit, Trash2 } from "lucide-react"
import Image from "next/image"

interface Partner {
  id: number
  name: string
  logo: string
  tier: "platinum" | "gold" | "silver"
  website?: string
}

export function PartnersManager() {
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 1,
      name: "Tech Innovators",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "platinum",
      website: "https://techinnovators.com",
    },
    {
      id: 2,
      name: "Creative Studios",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "gold",
      website: "https://creativestudios.com",
    },
    {
      id: 3,
      name: "Future Labs",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "gold",
      website: "https://futurelabs.com",
    },
    {
      id: 4,
      name: "Digital Solutions",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "silver",
      website: "https://digitalsolutions.com",
    },
  ])

  const [editingPartner, setEditingPartner] = useState<Partner | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmit = (formData: FormData) => {
    const partnerData = {
      name: formData.get("name") as string,
      logo: (formData.get("logo") as string) || "/placeholder.svg?height=80&width=160",
      tier: formData.get("tier") as "platinum" | "gold" | "silver",
      website: formData.get("website") as string,
    }

    if (editingPartner) {
      setPartners(
        partners.map((partner) =>
          partner.id === editingPartner.id ? { ...partnerData, id: editingPartner.id } : partner,
        ),
      )
    } else {
      const newPartner = {
        ...partnerData,
        id: Math.max(...partners.map((p) => p.id), 0) + 1,
      }
      setPartners([...partners, newPartner])
    }

    setEditingPartner(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (partner: Partner) => {
    setEditingPartner(partner)
    setIsDialogOpen(true)
  }

  const handleDelete = (id: number) => {
    setPartners(partners.filter((partner) => partner.id !== id))
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "platinum":
        return "bg-gray-800 text-white"
      case "gold":
        return "bg-yellow-500 text-white"
      case "silver":
        return "bg-gray-400 text-white"
      default:
        return "bg-gray-200 text-gray-700"
    }
  }

  const partnersByTier = {
    platinum: partners.filter((p) => p.tier === "platinum"),
    gold: partners.filter((p) => p.tier === "gold"),
    silver: partners.filter((p) => p.tier === "silver"),
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Partners Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#e62b1e] hover:bg-[#c41e1a]" onClick={() => setEditingPartner(null)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Partner
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingPartner ? "Edit Partner" : "Add New Partner"}</DialogTitle>
              <DialogDescription>
                {editingPartner ? "Update the partner details below." : "Fill in the details for the new partner."}
              </DialogDescription>
            </DialogHeader>
            <form action={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Partner Name</Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={editingPartner?.name || ""}
                  placeholder="Company Name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="logo">Logo URL</Label>
                <Input
                  id="logo"
                  name="logo"
                  defaultValue={editingPartner?.logo || ""}
                  placeholder="https://example.com/logo.png"
                />
              </div>
              <div>
                <Label htmlFor="tier">Partnership Tier</Label>
                <Select name="tier" defaultValue={editingPartner?.tier || "silver"}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="platinum">Platinum</SelectItem>
                    <SelectItem value="gold">Gold</SelectItem>
                    <SelectItem value="silver">Silver</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  name="website"
                  defaultValue={editingPartner?.website || ""}
                  placeholder="https://company.com"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#e62b1e] hover:bg-[#c41e1a]">
                  {editingPartner ? "Update" : "Create"} Partner
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Platinum Partners */}
      {partnersByTier.platinum.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Platinum Partners</h3>
          <div className="grid gap-4">
            {partnersByTier.platinum.map((partner) => (
              <Card key={partner.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={80}
                        height={40}
                        className="object-contain"
                      />
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {partner.name}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(partner.tier)}`}>
                            {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                          </span>
                        </CardTitle>
                        {partner.website && (
                          <CardDescription>
                            <a
                              href={partner.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {partner.website}
                            </a>
                          </CardDescription>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(partner)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(partner.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Gold Partners */}
      {partnersByTier.gold.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Gold Partners</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {partnersByTier.gold.map((partner) => (
              <Card key={partner.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={60}
                        height={30}
                        className="object-contain"
                      />
                      <div>
                        <CardTitle className="text-sm flex items-center gap-2">
                          {partner.name}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTierColor(partner.tier)}`}>
                            {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                          </span>
                        </CardTitle>
                        {partner.website && (
                          <CardDescription className="text-xs">
                            <a
                              href={partner.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {partner.website}
                            </a>
                          </CardDescription>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(partner)}>
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(partner.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Silver Partners */}
      {partnersByTier.silver.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Silver Partners</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {partnersByTier.silver.map((partner) => (
              <Card key={partner.id}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={40}
                        height={20}
                        className="object-contain"
                      />
                      <div>
                        <CardTitle className="text-sm flex items-center gap-1">
                          {partner.name}
                          <span className={`px-1 py-0.5 rounded text-xs font-medium ${getTierColor(partner.tier)}`}>
                            {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                          </span>
                        </CardTitle>
                        {partner.website && (
                          <CardDescription className="text-xs">
                            <a
                              href={partner.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              Website
                            </a>
                          </CardDescription>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(partner)}>
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(partner.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}

      {partners.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No partners added yet. Click "Add Partner" to get started.</p>
        </div>
      )}
    </div>
  )
}
