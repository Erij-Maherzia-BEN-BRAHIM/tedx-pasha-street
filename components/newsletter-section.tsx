import { TedxPashaStreet } from "./common/tedx-pasha-street";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Stay <span className="text-[#e62b1e]">Updated</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Subscribe to our newsletter to receive updates about{" "}
            <TedxPashaStreet />, including speaker announcements and ticket
            information.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-2">
            <Input type="email" placeholder="Enter your email" />
            <Button className="bg-[#e62b1e] hover:bg-[#c4251a] text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
