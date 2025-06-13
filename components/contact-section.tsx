import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";

export function ContactSection() {
  return (
    <section className="py-16 md:py-24" id="contact">
      <div className="container">
        <div className="bg-[#e62b1e] text-white rounded-lg p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4">
              Have questions about TED<sup>x</sup> Pasha Street? Want to become
              a speaker or sponsor? We'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-white text-[#e62b1e] hover:bg-gray-100"
                  >
                    Contact Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Contact TEDx Pasha Street</DialogTitle>
                    <DialogDescription>
                      Get in touch with us for any questions about the event,
                      speaking opportunities, or partnerships.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reg-name">Name</Label>
                      <Input id="reg-name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-email">Email</Label>
                      <Input
                        id="reg-email"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-subject">Subject</Label>
                      <Input
                        id="reg-subject"
                        placeholder="What is this regarding?"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-message">Message</Label>
                      <Textarea
                        id="reg-message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#e62b1e] hover:bg-[#c4251a] text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <p className="mt-6 text-sm">
              We'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
