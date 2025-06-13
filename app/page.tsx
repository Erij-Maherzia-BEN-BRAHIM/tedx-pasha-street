import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EventsSection } from "@/components/events-section";
import { PartnersSection } from "@/components/partners-section";
import { TeamSection } from "@/components/team-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { NewsletterSection } from "@/components/newsletter-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ContactSection />
        <PartnersSection />
        <TeamSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
