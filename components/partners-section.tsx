import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function PartnersSection() {
  const partners = [
    {
      id: 1,
      name: "Tech Innovators",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "platinum",
    },
    {
      id: 2,
      name: "Creative Studios",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "gold",
    },
    {
      id: 3,
      name: "Future Labs",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "gold",
    },
    {
      id: 4,
      name: "Digital Solutions",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "silver",
    },
    {
      id: 5,
      name: "Innovation Hub",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "silver",
    },
    {
      id: 6,
      name: "StartUp Accelerator",
      logo: "/placeholder.svg?height=80&width=160",
      tier: "silver",
    },
  ];

  const partnersByTier = {
    platinum: partners.filter((p) => p.tier === "platinum"),
    gold: partners.filter((p) => p.tier === "gold"),
    silver: partners.filter((p) => p.tier === "silver"),
  };

  return (
    // <section id="partners" className="py-20 bg-white">
    //   <div className="max-w-6xl mx-auto px-4">
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
    //         Our <span className="text-[#e62b1e]">Partners</span>
    //       </h2>
    //       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    //         We're proud to work with amazing organizations that share our vision of spreading ideas worth sharing.
    //       </p>
    //     </div>

    //     {/* Platinum Partners */}
    //     {partnersByTier.platinum.length > 0 && (
    //       <div className="mb-12">
    //         <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Platinum Partners</h3>
    //         <div className="flex justify-center">
    //           <div className="grid grid-cols-1 gap-8">
    //             {partnersByTier.platinum.map((partner) => (
    //               <div key={partner.id} className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
    //                 <Image
    //                   src={partner.logo || "/placeholder.svg"}
    //                   alt={partner.name}
    //                   width={200}
    //                   height={100}
    //                   className="max-w-full h-auto"
    //                 />
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     )}

    //     {/* Gold Partners */}
    //     {partnersByTier.gold.length > 0 && (
    //       <div className="mb-12">
    //         <h3 className="text-xl font-bold text-center mb-8 text-gray-800">Gold Partners</h3>
    //         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    //           {partnersByTier.gold.map((partner) => (
    //             <div key={partner.id} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
    //               <Image
    //                 src={partner.logo || "/placeholder.svg"}
    //                 alt={partner.name}
    //                 width={160}
    //                 height={80}
    //                 className="max-w-full h-auto"
    //               />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}

    //     {/* Silver Partners */}
    //     {partnersByTier.silver.length > 0 && (
    //       <div>
    //         <h3 className="text-lg font-bold text-center mb-8 text-gray-800">Silver Partners</h3>
    //         <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
    //           {partnersByTier.silver.map((partner) => (
    //             <div key={partner.id} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
    //               <Image
    //                 src={partner.logo || "/placeholder.svg"}
    //                 alt={partner.name}
    //                 width={120}
    //                 height={60}
    //                 className="max-w-full h-auto"
    //               />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </section>
    <section id="partners" className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Our <span className="text-[#e62b1e]">Partners</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            TEDx Pasha Street is made possible thanks to the generous support of
            our partners.
          </p>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="text-center text-lg font-medium mb-6">
              Platinum Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((partner) => (
                <Card
                  key={`platinum-${partner}`}
                  className="p-6 rounded-lg flex items-center justify-center h-32"
                >
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Partner+Logo`}
                    alt={`Platinum Partner ${partner}`}
                    width={200}
                    height={100}
                    className="max-h-full w-auto"
                  />
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-medium mb-6">
              Gold Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((partner) => (
                <Card
                  key={`gold-${partner}`}
                  className="bg-white p-4 rounded-lg flex items-center justify-center h-24"
                >
                  <Image
                    src={`/placeholder.svg?height=80&width=160&text=Partner+Logo`}
                    alt={`Gold Partner ${partner}`}
                    width={160}
                    height={80}
                    className="max-h-full w-auto"
                  />
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-medium mb-6">
              Silver Partners
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((partner) => (
                <Card
                  key={`silver-${partner}`}
                  className="bg-white p-3 rounded-lg flex items-center justify-center h-20"
                >
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Partner+Logo`}
                    alt={`Silver Partner ${partner}`}
                    width={120}
                    height={60}
                    className="max-h-full w-auto"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in becoming a partner?
          </p>
          <Button
            variant="outline"
            className="border-[#e62b1e] text-[#e62b1e] hover:bg-[#e62b1e] hover:text-white"
          >
            Partnership Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
