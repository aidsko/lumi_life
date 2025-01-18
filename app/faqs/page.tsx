import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Faqs() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-1">
        <section className="w-full bg-muted relative h-[615px]">
          <Navbar />
          <video
            autoPlay
            className="object-cover absolute inset-0 w-full h-full object-top"
            muted
            loop
            playsInline
            src="/hero-bg-1.mp4"
          />

          <div className="inset-0 h-[550px]">
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              aria-hidden="true"
            />
            <div className="relative flex flex-col z-10 text-left px-4 sm:px-6 lg:px-8 container mx-auto max-w-screen-lg h-full justify-center">
              <h1 className="text-6xl text-center  text-white animate-fadeIn">
                Frequently Asked Questions
              </h1>
              <h1 className="text-4xl text-center  text-white animate-fadeIn pt-5">
                We&apos;re here to help.
              </h1>
            </div>
          </div>
        </section>
        <section className="w-full py-6 md:py-12 container mx-auto">
          <div className="px-4 md:px-6 max-w-screen-lg mx-auto">
            <div className="flex flex-col space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    What will I have to pay out of pocket?
                  </h3>
                  <p className="text-gray-600">
                    What you have to pay out of pocket will depend on your
                    insurance plan. Your plan could have a deductible and/or
                    co-pay amount for our services. We highly encourage you to
                    reach out to your insurance to understand your benefits if
                    you have not already.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    What if I don&apos;t have insurance?
                  </h3>
                  <p className="text-gray-600">
                    The therapy fee is $150/session. We do have sliding scale
                    options if you cannot afford the fee, so please ask!
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    Are you taking new clients?
                  </h3>
                  <p className="text-gray-600">
                    We are currently accepting new clients. Please go to
                    &quot;Schedule An Appointment&quot; to contact us!
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    What can I expect after a contact request is sent?
                  </h3>
                  <p className="text-gray-600">
                    We will contact you to see if we would be a good fit working
                    together. This will usually consist of a 15 minute phone
                    consultation.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    My work hours conflict with your therapy times - how can I
                    make it to my appointments?
                  </h3>
                  <p className="text-gray-600">
                    We can provide a letter for you to submit to your employer
                    for accommodations.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    Do you offer any in-person appointments?
                  </h3>
                  <p className="text-gray-600">
                    We currently only offer telehealth appointments.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h2 className="text-3xl font-semibold mb-6">Resources</h2>

                <div className="space-y-4">
                  <p className="font-semibold">
                    For emergencies, call 911 or present to nearest ER
                  </p>

                  <div>
                    <p className="font-semibold">
                      24/7 Suicide and Crisis Hotline - Call 988
                    </p>
                    <p>You can call, text or chat online at:</p>
                    <a
                      href="https://988lifeline.org/"
                      className="text-blue-600 hover:underline"
                    >
                      https://988lifeline.org/
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-slate-700 text-white py-12">
          <div className="px-4 md:px-6 max-w-screen-lg mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl">Take Action Today</h2>
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                  Want to make an appointment? We&apos;d love to hear from you
                  and help you start your journey.
                </p>
              </div>
              <Link href="/make-an-appointment">
                <Button
                  className="bg-black text-white rounded-none border-black p-6 text-xl hover:bg-gray-900 hover:text-white"
                  variant="outline"
                >
                  Make an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
