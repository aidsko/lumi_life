import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
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
                We are currently accepting new clients and provide therapy
                services online
              </h1>
            </div>
          </div>
        </section>
        <div className="flex flex-col mx-auto w-full">
          <section className="w-full py-16 md:py-24 bg-gray-50">
            <div className="max-w-screen-lg mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="font-cormorant text-5xl mb-4">
                  Insurance and Rates
                </h2>
                <div className="w-24 h-1 bg-black mx-auto"></div>
              </div>
              <div className="bg-gray-200 shadow-lg rounded-lg p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="flex flex-col justify-center">
                    <h3 className="font-cormorant text-4xl mb-6">
                      Individual Telehealth Therapy
                    </h3>
                    <div className="text-gray-600 text-lg">
                      50-minute sessions available weekly or bi-weekly
                    </div>
                  </div>
                  <div className="flex flex-col space-y-6 text-xl">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <span className="font-semibold">$150</span> per session
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="font-semibold mb-2">Insurance Accepted:</p>
                      <p>HMAA • HMSA • Tricare • UHA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16">
            <div className="max-w-screen-lg mx-auto px-4">
              <div className="text-center mb-16">
                <h3 className="font-cormorant text-5xl mb-4">Our Story</h3>
                <div className="w-24 h-1 bg-black mx-auto"></div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                  <div className="relative">
                    <Image
                      src="/diane-chansley.jpeg"
                      alt="Diane and Chansley"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover shadow-xl"
                    />
                    <div className="absolute inset-0 rounded-lg shadow-inner"></div>
                  </div>
                </div>
                <div className="text-xl md:w-1/2">
                  <p className="leading-relaxed">
                    We met as colleagues and quickly bonded over our passion for
                    mental health. Due to our own life journeys, we wanted to
                    create a safe space for women, where our clients feel
                    supported and heard. We also wanted to focus on anxiety as
                    we personally know the effects it can have on the quality of
                    your life and the quality of your relationships. So, we
                    decided to pursue our passions and opened Lumi Life Therapy.
                  </p>
                  <p className="mt-6 leading-relaxed max-w-3xl mx-auto">
                    We choose the name &quot;Lumi Life&quot; as an abbreviation
                    for &quot;illuminate your life.&quot; We believe therapy can
                    illuminate times that feel dark, improve your life&apos;s
                    circumstances and give guidance to the life you want to
                    live.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full pb-12">
            <div className="max-w-screen-lg mx-auto px-4">
              <p className="italic text-gray-600 text-center text-lg">
                Chansley and Diane are licensed clinical social workers in the
                state of Hawaii, a requirement that involves a master&apos;s
                degree, 3,000 supervised clinical hours in an agency setting,
                and a clinical exam.
              </p>
            </div>
          </section>
        </div>
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
