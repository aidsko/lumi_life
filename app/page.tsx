import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-1">
        <section className="w-full bg-muted relative h-[80vh] min-h-[615px]">
          <Navbar />
          <video
            autoPlay
            className="object-cover absolute inset-0 w-full h-full object-top"
            muted
            loop
            playsInline
            src="/hero-bg-1.mp4"
          />

          <div className="absolute inset-0 flex items-center">
            <div
              className="absolute inset-0 bg-black bg-opacity-60"
              aria-hidden="true"
            />
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-white animate-fadeIn mb-6">
                  Change begins
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-white animate-fadeIn mb-6">
                  one step
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-white animate-fadeIn mb-6">
                  at a time
                </h1>
                <p className="text-2xl md:text-3xl text-white/90 mb-8 pt-6 animate-fadeIn">
                  Start your journey today
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto max-w-screen-lg px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <p className="text-xl text-center">
                On the outside, it may seem like you have it all together -
                someone that has navigated through life without any big issues.
              </p>

              <div className="space-y-4">
                <p>
                  But on the inside, you are constantly anxious and worried.
                  You're worried about the relationships in your life,
                  particularly the ones that are important to you.
                </p>
                <p className="text-gray-700">
                  Friendships, co-workers, family, romantic partners - if there
                  is a rupture, it causes you great stress and anxiety.
                </p>
              </div>

              <p className="text-center">
                An Empath. Hyper-sensitive. A Feeler.
                <span className="block text-gray-600 mt-2">
                  You may have been called these things or even identified
                  yourself this way.
                </span>
              </p>

              <div className="space-y-4">
                <p>
                  You have a hard time saying no because you are afraid that
                  people will judge you or be upset with you. You've felt like
                  you were too much for key people in your life - too needy, too
                  much, too emotional.
                </p>

                <p>
                  You may be easily triggered and become upset when you feel
                  abandoned or disconnected from your loved ones, when all you
                  desire is to connect with them. In the midst of all this,
                  you've felt very alone, guilty and ashamed.
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl mb-2">
                  You deserve peace and a sense of security in your
                  relationships that comes from within.
                </p>
                <p className="text-gray-700">
                  You have felt this way for too long, and you're not alone. We
                  can help.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 bg-gray-50">
          <div className="px-4 md:px-6 max-w-screen-lg mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">
                Therapists dedicated to your well-being
              </p>
            </div>
            <div className="grid gap-12 sm:grid-cols-2">
              <div className="flex flex-col items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer w-full hover:scale-105">
                      <div className="space-y-6">
                        <div className="relative overflow-hidden rounded-lg items-center justify-center flex">
                          <Image
                            alt="Chansley Mattos"
                            height="400"
                            src="/chansley-mattos.jpeg"
                            style={{
                              aspectRatio: "400/400",
                              objectFit: "cover",
                            }}
                            width="400"
                            className="transition-transform duration-300 rounded-2xl"
                          />
                        </div>
                        <div className="space-y-2 text-center">
                          <h3 className="text-2xl">Chansley Mattos, LCSW</h3>
                          <p className="text-gray-600">
                            Licensed Clinical Social Worker
                          </p>
                          <p className="text-black font-medium mt-4 group-hover:text-gray-600 transition-colors">
                            Learn More →
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl bg-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl mb-2 text-center">
                        Chansley Mattos, LCSW
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-6 md:grid-cols-[300px,1fr]">
                      <Image
                        src="/chansley-mattos.jpeg"
                        alt="Chansley Mattos"
                        width={300}
                        height={300}
                        className="rounded-2xl object-cover"
                      />
                      <div className="text-lg leading-relaxed">
                        <p>
                          I enjoy working with clients and providing support in
                          the hardest of times in an attempt to improve your
                          life circumstances. I have a warm, empathetic style
                          and believe therapy is a collaborative approach where
                          ultimately you are the expert on your own life.
                        </p>
                        <p className="mt-4">
                          Sometimes the path does not always feel clear and
                          therapy helps illuminate and bring clarity so that you
                          can manage your thoughts and feelings. I have worked
                          in the field supporting those in community health,
                          hospitalization, inpatient and outpatient care, and
                          most recently therapy. I work with principles from
                          Acceptance and Commitment Therapy and Cognitive
                          Behavioral Therapy.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex flex-col items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer w-full hover:scale-105">
                      <div className="space-y-6">
                        <div className="relative overflow-hidden rounded-lg items-center justify-center flex">
                          <Image
                            alt="Diane Kim"
                            height="400"
                            src="/diane-kim.jpeg"
                            style={{
                              aspectRatio: "400/400",
                              objectFit: "cover",
                            }}
                            width="400"
                            className="transition-transform duration-300 rounded-2xl"
                          />
                        </div>
                        <div className="space-y-2 text-center">
                          <h3 className="text-2xl">Diane Kim, LCSW</h3>
                          <p className="text-gray-600">
                            Licensed Clinical Social Worker
                          </p>
                          <p className="text-black font-medium mt-4 group-hover:text-gray-600 transition-colors">
                            Learn More →
                          </p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl bg-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl mb-2 text-center">
                        Diane Kim, LCSW
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-6 md:grid-cols-[300px,1fr]">
                      <Image
                        src="/diane-kim.jpeg"
                        alt="Diane Kim"
                        width={300}
                        height={300}
                        className="rounded-2xl object-cover"
                      />
                      <div className="text-lg leading-relaxed">
                        <p>
                          One of the main reasons I got into mental health was
                          growing up in a community where it was stigmatized and
                          not acknowledged. I realized I could not fully live a
                          meaningful life due to struggling with my emotions
                          that felt so big and scary.
                        </p>
                        <p className="mt-4">
                          This experience motivated me to understand the human
                          mind and experience. I think life can feel so
                          difficult at times and it can be hard to navigate all
                          these emotions that show up. My goal is to help my
                          clients heal from emotional wounds and live a more
                          fulfilling life. My approach is centered on genuine
                          connection and creating a safe space where my clients
                          feel understood and supported.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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
                  Want to make an appointment? We'd love to hear from you and
                  help you start your journey.
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
