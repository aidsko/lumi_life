import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function MakeAnAppointment() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-1">
        <section className="w-full bg-muted relative min-h-[615px]">
          <video
            autoPlay
            className="object-cover absolute inset-0 w-full h-full object-top"
            muted
            loop
            playsInline
            src="/hero-bg-1.mp4"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            aria-hidden="true"
          />
          <Navbar />

          <div className="relative min-h-[550px] md:h-[550px]">
            <div className="relative flex flex-col z-10 px-4 sm:px-6 lg:px-8 container mx-auto max-w-screen-lg py-12 md:py-0 md:h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:h-full">
                <div className="flex flex-col space-y-6">
                  <h1 className="text-4xl md:text-6xl text-white animate-fadeIn md:pt-16">
                    Make an Initial Appointment
                  </h1>
                  <div className="space-y-4">
                    <p className="text-lg text-white/90">
                      Please include 2-3 sentences on why you are reaching out.
                    </p>
                    <div className="text-lg text-white/90">
                      <p className="mb-2">
                        If using insurance, please also include:
                      </p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li>Your full name</li>
                        <li>Date of birth</li>
                        <li>Benefits number</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-center md:pt-16">
                  <form action="" className="text-white w-full max-w-md">
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-row gap-4 w-full">
                        <div className="w-1/2">
                          <Label>First Name</Label>
                          <Input className="rounded-none" type="text" />
                        </div>
                        <div className="w-1/2">
                          <Label>Last Name</Label>
                          <Input className="rounded-none" type="text" />
                        </div>
                      </div>
                      <div>
                        <Label>Email</Label>
                        <Input className="rounded-none" type="email" />
                      </div>
                      <div>
                        <Label>Phone Number</Label>
                        <Input className="rounded-none" type="tel" />
                      </div>
                      <div>
                        <Label>Message</Label>
                        <Textarea className="rounded-none" />
                      </div>
                      <Button className="bg-black text-white rounded-none p-6 text-xl hover:bg-gray-800 hover:text-white">
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
